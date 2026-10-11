"""Hirkan panel: independent SQLite control plane."""
import argparse, base64, contextlib, hashlib, hmac, io, json, os, secrets, sqlite3, time, uuid
from pathlib import Path
from urllib.parse import quote, urlencode
from contextlib import asynccontextmanager
import httpx
from fastapi import FastAPI, Depends, HTTPException, Request, Response
from fastapi.responses import HTMLResponse, FileResponse, PlainTextResponse
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, Field

ROOT=Path(__file__).resolve().parent
DATA=Path(os.getenv('HIRKAN_DATA','data'));DATA.mkdir(parents=True,exist_ok=True)
DB=DATA/'hirkan.sqlite3'; VERSION='1.0.0'; SUPPORT='https://t.me/dev_vexel'
SECRET_FILE=DATA/'secret'
if not SECRET_FILE.exists():
 fd=os.open(SECRET_FILE,os.O_WRONLY|os.O_CREAT|os.O_EXCL,0o600)
 with os.fdopen(fd,'w') as f:f.write(secrets.token_hex(32))
SECRET=SECRET_FILE.read_text().strip().encode();bearer=HTTPBearer(auto_error=False)
RESOURCES={'users','groups','hosts','nodes','cores','templates','roles','settings'}

def connect():
 c=sqlite3.connect(DB,timeout=30);c.row_factory=sqlite3.Row;c.execute('PRAGMA foreign_keys=ON');return c

def init():
 with connect() as c:
  c.execute('PRAGMA journal_mode=WAL')
  c.executescript('''CREATE TABLE IF NOT EXISTS objects(kind TEXT,id TEXT,data TEXT,created REAL,updated REAL,PRIMARY KEY(kind,id));
CREATE TABLE IF NOT EXISTS admins(username TEXT PRIMARY KEY,password TEXT,role TEXT,disabled INTEGER DEFAULT 0,revision INTEGER DEFAULT 0);
CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY,username TEXT,expires REAL);
CREATE TABLE IF NOT EXISTS api_keys(id TEXT PRIMARY KEY,name TEXT,digest TEXT,username TEXT,created REAL);
CREATE TABLE IF NOT EXISTS audit(id INTEGER PRIMARY KEY AUTOINCREMENT,at REAL,actor TEXT,action TEXT,target TEXT);
CREATE TABLE IF NOT EXISTS traffic(node TEXT,user TEXT,up INTEGER,down INTEGER,at REAL,PRIMARY KEY(node,user));
CREATE TABLE IF NOT EXISTS series(id INTEGER PRIMARY KEY AUTOINCREMENT,user TEXT,node TEXT,up INTEGER,down INTEGER,at REAL);
CREATE TABLE IF NOT EXISTS node_commands(id TEXT PRIMARY KEY,node TEXT,command TEXT,created REAL,result TEXT);
CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY AUTOINCREMENT,type TEXT,user TEXT,at REAL);''')
init()

def password_hash(value):
 salt=secrets.token_hex(16);digest=hashlib.scrypt(value.encode(),salt=salt.encode(),n=16384,r=8,p=1).hex();return salt+':'+digest

def verify(value,stored):
 try:
  salt,digest=stored.split(':');return hmac.compare_digest(hashlib.scrypt(value.encode(),salt=salt.encode(),n=16384,r=8,p=1).hex(),digest)
 except (ValueError,AttributeError):return False

def audit(actor,action,target):
 with connect() as c:c.execute('INSERT INTO audit(at,actor,action,target) VALUES(?,?,?,?)',(time.time(),actor,action,target))

def objects(kind):
 with connect() as c:return [json.loads(x['data']) for x in c.execute('SELECT data FROM objects WHERE kind=? ORDER BY created DESC',(kind,))]

def get(kind,identity):
 with connect() as c:row=c.execute('SELECT data FROM objects WHERE kind=? AND id=?',(kind,identity)).fetchone()
 if not row:raise HTTPException(404,'Not found')
 return json.loads(row[0])

def save(kind,data,identity=None):
 identity=identity or data.get('id') or uuid.uuid4().hex;data={**data,'id':identity}
 with connect() as c:c.execute('INSERT INTO objects VALUES(?,?,?,?,?) ON CONFLICT(kind,id) DO UPDATE SET data=excluded.data,updated=excluded.updated',(kind,identity,json.dumps(data),time.time(),time.time()))
 return data

def load_setting(name,default=None):
 try:return get('settings',name).get('value',default)
 except HTTPException:return default

class Login(BaseModel):
 username:str=Field(min_length=1,max_length=100)
 password:str=Field(min_length=1,max_length=512)
class AdminInput(Login):
 role:str='administrator'
 disabled:bool=False
class KeyInput(BaseModel):name:str=Field(min_length=1,max_length=100)

FAILURES={}

def current(credentials:HTTPAuthorizationCredentials|None=Depends(bearer)):
 if credentials is None:raise HTTPException(401,'Sign in required')
 raw=credentials.credentials;digest=hashlib.sha256(raw.encode()).hexdigest()
 with connect() as c:
  row=c.execute('SELECT username FROM sessions WHERE token=? AND expires>?',(digest,time.time())).fetchone()
  if row is None:row=c.execute('SELECT username FROM api_keys WHERE digest=?',(digest,)).fetchone()
  admin=c.execute('SELECT * FROM admins WHERE username=?',(row['username'],)).fetchone() if row else None
 if not admin or admin['disabled']:raise HTTPException(401,'Session expired')
 return {'username':admin['username'],'role':admin['role']}

def allow(admin,write=False):
 if admin['role']=='administrator':return
 if admin['role']=='viewer' and not write:return
 try:permissions=get('roles',admin['role']).get('permissions',[])
 except HTTPException:permissions=[]
 if ('write' if write else 'read') not in permissions:raise HTTPException(403,'Permission denied')

def active(user):
 return user.get('status','active')=='active' and (not user.get('expire') or user['expire']>time.time()) and (not user.get('data_limit') or user.get('used_traffic',0)<user['data_limit'])

def safe_user(user):
 user=dict(user)
 if user.get('status')=='active' and not active(user):user['status']='expired' if user.get('expire') and user['expire']<=time.time() else 'limited'
 return user

def validate(kind,data,creating=False):
 data=dict(data)
 if kind=='users':
  name=str(data.get('username','')).strip()
  if not name or len(name)>100 or any(c not in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-' for c in name):raise HTTPException(422,'Username must contain letters, digits, - or _')
  if data.get('status','active') not in ['active','disabled','on_hold','expired','limited']:raise HTTPException(422,'Invalid status')
  for field in ['data_limit','expire','used_traffic']:
   if data.get(field) is not None:
    try:data[field]=int(data[field])
    except (ValueError,TypeError):raise HTTPException(422,'Invalid '+field)
    if data[field]<0:raise HTTPException(422,'Invalid '+field)
  if creating:
   data.setdefault('status','active');data['uuid']=str(uuid.uuid4());data['password']=secrets.token_urlsafe(24);data['subscription_token']=secrets.token_urlsafe(32);data['used_traffic']=0;data['created_at']=time.time()
   for u in objects('users'):
    if u['username']==name:raise HTTPException(409,'Username already exists')
  for existing in objects('users'):
   if existing['username']==name and existing['id']!=data.get('id'):raise HTTPException(409,'Username already exists')
  for field in ['group_ids','inbound_tags']:
   if field in data and (not isinstance(data[field],list) or any(not isinstance(v,str) for v in data[field])):raise HTTPException(422,'Invalid '+field)
  data['username']=name
 if kind in ['groups','hosts','nodes','cores','templates','roles'] and not data.get('name'):raise HTTPException(422,'Name is required')
 if kind=='nodes':
  if creating:data['token']=secrets.token_urlsafe(32);data['last_seen']=None
  data.setdefault('enabled',True)
 if kind=='hosts':
  if not data.get('address'):raise HTTPException(422,'Host address is required')
  try:port=int(data.get('port',443))
  except (ValueError,TypeError):raise HTTPException(422,'Invalid port')
  if not 1<=port<=65535:raise HTTPException(422,'Invalid port')
  data['port']=port
  if data.get('protocol','vless') not in ['vless','vmess','trojan','shadowsocks']:raise HTTPException(422,'Unsupported protocol')
 if kind=='templates':
  config=data.get('config',{})
  permitted={'data_limit','status','reset_period','group_ids','inbound_tags','note','flow','duration_days'}
  if not isinstance(config,dict) or set(config)-permitted:raise HTTPException(422,'Invalid template configuration')
  if 'duration_days' in config:
   days=config['duration_days']
   if not isinstance(days,int) or isinstance(days,bool) or not 1<=days<=36500:raise HTTPException(422,'Invalid duration_days')
 if kind=='cores':
  if data.get('type','xray')!='xray':raise HTTPException(422,'This release supports Xray cores')
  if not isinstance(data.get('config',{}),dict):raise HTTPException(422,'Core config must be JSON object')
 return data

@asynccontextmanager
async def lifespan(app):
 import asyncio
 async def schedule():
  while True:
   try:
    for u in objects('users'):
     if u.get('status')=='active' and not active(u):
      u=safe_user(u);save('users',u,u['id'])
      with connect() as c:c.execute('INSERT INTO events(type,user,at) VALUES(?,?,?)',(u['status'],u['username'],time.time()))
     interval={'daily':86400,'weekly':604800,'monthly':2592000}.get(u.get('reset_period'))
     if interval and time.time()-u.get('last_reset',u.get('created_at',time.time()))>=interval:
      u['used_traffic']=0;u['last_reset']=time.time()
      if u.get('status')=='limited':u['status']='active'
      save('users',u,u['id'])
    config=load_setting('notifications',{}) or {}
    if config.get('webhook_url') or (config.get('telegram_token') and config.get('telegram_chat_id')):
     with connect() as c:events=[dict(e) for e in c.execute('SELECT * FROM events ORDER BY id LIMIT 20')]
     for event in events:
      async with httpx.AsyncClient(timeout=10) as client:
       if config.get('webhook_url'):
        resp=await client.post(config['webhook_url'],json=event);resp.raise_for_status()
       if config.get('telegram_token') and config.get('telegram_chat_id'):
        resp=await client.post('https://api.telegram.org/bot'+config['telegram_token']+'/sendMessage',json={'chat_id':config['telegram_chat_id'],'text':f"Hirkan: {event['user']} — {event['type']}"});resp.raise_for_status()
      with connect() as c:c.execute('DELETE FROM events WHERE id=?',(event['id'],))
   except Exception:
    import logging;logging.exception('Scheduled task failed')
   await asyncio.sleep(15)
 task=asyncio.create_task(schedule())
 yield
 task.cancel()
 with contextlib.suppress(asyncio.CancelledError):await task

app=FastAPI(title='Hirkan API',version=VERSION,lifespan=lifespan)

@app.middleware('http')
async def security_headers(request,call_next):
 response=await call_next(request)
 response.headers['X-Content-Type-Options']='nosniff';response.headers['X-Frame-Options']='DENY';response.headers['Referrer-Policy']='no-referrer'
 if request.url.path.startswith('/api'):response.headers['Cache-Control']='no-store'
 return response

@app.get('/health')
def health():return {'status':'ok','version':VERSION}
@app.get('/api/setup')
def setup_state():
 with connect() as c:ready=c.execute('SELECT COUNT(*) FROM admins').fetchone()[0]>0
 return {'ready':ready}
@app.post('/api/setup')
def setup(data:Login):
 if len(data.password)<12:raise HTTPException(422,'Use a password of at least 12 characters')
 with connect() as c:
  c.execute('BEGIN IMMEDIATE')
  if c.execute('SELECT COUNT(*) FROM admins').fetchone()[0]:raise HTTPException(409,'Setup already complete')
  c.execute('INSERT INTO admins(username,password,role) VALUES(?,?,?)',(data.username,password_hash(data.password),'administrator'))
 return {'ready':True}
@app.post('/api/auth/token')
def login(data:Login,request:Request):
 ip=request.client.host if request.client else 'local';attempts=FAILURES.get(ip,[]);attempts=[x for x in attempts if x>time.time()-300]
 if len(attempts)>=10:raise HTTPException(429,'Try again in five minutes')
 with connect() as c:admin=c.execute('SELECT * FROM admins WHERE username=?',(data.username,)).fetchone()
 if not admin or admin['disabled'] or not verify(data.password,admin['password']):
  FAILURES[ip]=attempts+[time.time()];raise HTTPException(401,'Incorrect username or password')
 FAILURES.pop(ip,None);token=secrets.token_urlsafe(48)
 with connect() as c:c.execute('INSERT INTO sessions VALUES(?,?,?)',(hashlib.sha256(token.encode()).hexdigest(),data.username,time.time()+28800))
 audit(data.username,'login','session');return {'access_token':token,'token_type':'bearer','expires_in':28800}
@app.post('/api/auth/logout')
def logout(admin=Depends(current),credentials=Depends(bearer)):
 with connect() as c:c.execute('DELETE FROM sessions WHERE token=?',(hashlib.sha256(credentials.credentials.encode()).hexdigest(),))
 return {'ok':True}
@app.get('/api/admin/current')
def me(admin=Depends(current)):return admin
@app.get('/api/admins')
def admins(admin=Depends(current)):
 allow(admin)
 with connect() as c:return [dict(x) for x in c.execute('SELECT username,role,disabled FROM admins')]
@app.put('/api/admins/{username}')
def set_admin(username:str,data:AdminInput,admin=Depends(current)):
 if admin['role']!='administrator':raise HTTPException(403,'Administrator required')
 if username==admin['username'] and (data.disabled or data.role!='administrator'):raise HTTPException(422,'Cannot disable or demote your own account')
 if len(data.password)<12:raise HTTPException(422,'Password too short')
 with connect() as c:
  c.execute('INSERT INTO admins(username,password,role,disabled) VALUES(?,?,?,?) ON CONFLICT(username) DO UPDATE SET password=excluded.password,role=excluded.role,disabled=excluded.disabled',(username,password_hash(data.password),data.role,data.disabled))
  c.execute('DELETE FROM sessions WHERE username=?',(username,));c.execute('DELETE FROM api_keys WHERE username=?',(username,))
 audit(admin['username'],'admin.update',username);return {'ok':True}
@app.delete('/api/admins/{username}')
def delete_admin(username:str,admin=Depends(current)):
 if admin['role']!='administrator' or username==admin['username']:raise HTTPException(403,'Cannot delete this account')
 with connect() as c:c.execute('DELETE FROM admins WHERE username=?',(username,));c.execute('DELETE FROM sessions WHERE username=?',(username,));c.execute('DELETE FROM api_keys WHERE username=?',(username,))
 return {'ok':True}
@app.get('/api/api-keys')
def keys(admin=Depends(current)):
 with connect() as c:return [dict(x) for x in c.execute('SELECT id,name,created FROM api_keys WHERE username=?',(admin['username'],))]
@app.post('/api/api-keys')
def create_key(data:KeyInput,admin=Depends(current)):
 allow(admin,True);raw='hk_'+secrets.token_urlsafe(40);identity=uuid.uuid4().hex
 with connect() as c:c.execute('INSERT INTO api_keys VALUES(?,?,?,?,?)',(identity,data.name,hashlib.sha256(raw.encode()).hexdigest(),admin['username'],time.time()))
 return {'id':identity,'key':raw}
@app.delete('/api/api-keys/{identity}')
def revoke_key(identity:str,admin=Depends(current)):
 with connect() as c:c.execute('DELETE FROM api_keys WHERE id=? AND username=?',(identity,admin['username']))
 return {'ok':True}

@app.get('/api/system')
def system(admin=Depends(current)):
 allow(admin);import psutil
 users=[safe_user(u) for u in objects('users')]
 return {'version':VERSION,'users':len(users),'active':sum(active(u) for u in users),'used_traffic':sum(u.get('used_traffic',0) for u in users),'nodes':len(objects('nodes')),'online_nodes':sum(time.time()-(n.get('last_seen') or 0)<90 for n in objects('nodes')),'cpu':psutil.cpu_percent(),'memory':psutil.virtual_memory().percent,'disk':psutil.disk_usage(str(DATA)).percent,'uptime':time.time()-psutil.boot_time()}
@app.get('/api/statistics')
def statistics(days:int=7,admin=Depends(current)):
 allow(admin);days=max(1,min(days,365))
 with connect() as c:rows=[dict(x) for x in c.execute('SELECT CAST(at/86400 AS INTEGER)*86400 AS day,SUM(up) AS up,SUM(down) AS down FROM series WHERE at>? GROUP BY day ORDER BY day',(time.time()-days*86400,))]
 return {'series':rows,'users':sorted([{'username':u['username'],'used_traffic':u.get('used_traffic',0)} for u in objects('users')],key=lambda u:u['used_traffic'],reverse=True)[:20]}
@app.get('/api/audit')
def history(admin=Depends(current)):
 allow(admin)
 with connect() as c:return [dict(x) for x in c.execute('SELECT * FROM audit ORDER BY id DESC LIMIT 200')]
@app.get('/api/export')
def export(admin=Depends(current)):
 if admin['role']!='administrator':raise HTTPException(403)
 return {k:objects(k) for k in RESOURCES}
@app.post('/api/import')
def import_data(data:dict,admin=Depends(current)):
 if admin['role']!='administrator':raise HTTPException(403)
 batch=[]
 for kind,items in data.items():
  if kind not in RESOURCES or not isinstance(items,list):raise HTTPException(422,'Invalid archive')
  for item in items:batch.append((kind,validate(kind,item)))
 with connect() as c:
  for kind,item in batch:
   identity=item.get('id') or uuid.uuid4().hex;item['id']=identity
   c.execute('INSERT INTO objects VALUES(?,?,?,?,?) ON CONFLICT(kind,id) DO UPDATE SET data=excluded.data,updated=excluded.updated',(kind,identity,json.dumps(item),time.time(),time.time()))
 audit(admin['username'],'import',str(len(batch)));return {'imported':len(batch)}
@app.get('/api/backup')
def backup(admin=Depends(current)):
 if admin['role']!='administrator':raise HTTPException(403)
 import tempfile
 with tempfile.NamedTemporaryFile(suffix='.sqlite3',delete=False,dir=DATA) as f:path=f.name
 with connect() as source,sqlite3.connect(path) as dest:source.backup(dest)
 from starlette.background import BackgroundTask
 return FileResponse(path,filename='hirkan-backup.sqlite3',background=BackgroundTask(os.unlink,path))
@app.post('/api/bulk')
def bulk(data:dict,admin=Depends(current)):
 allow(admin,True);ids=data.get('ids',[]);action=data.get('action')
 if not isinstance(ids,list) or len(ids)>10000:raise HTTPException(422,'Invalid selection')
 if action not in ['enable','disable','reset','delete','revoke']:raise HTTPException(422,'Invalid action')
 users=[get('users',i) for i in ids]
 with connect() as c:
  for user in users:
   if action=='delete':c.execute("DELETE FROM objects WHERE kind='users' AND id=?",(user['id'],));continue
   if action in ['enable','disable']:user['status']='active' if action=='enable' else 'disabled'
   if action=='reset':
    user['used_traffic']=0;user['last_reset']=time.time()
    if user.get('status')=='limited':user['status']='active'
   if action=='revoke':user['subscription_token']=secrets.token_urlsafe(32)
   c.execute("UPDATE objects SET data=?,updated=? WHERE kind='users' AND id=?",(json.dumps(user),time.time(),user['id']))
 audit(admin['username'],'bulk.'+action,str(len(ids)));return {'updated':len(ids)}
@app.get('/api/users/{identity}/subscription')
def subscription_link(identity:str,request:Request,admin=Depends(current)):
 allow(admin);user=get('users',identity);base=load_setting('public_url',str(request.base_url).rstrip('/'))
 return {'url':base+'/sub/'+user['subscription_token']}
@app.post('/api/users/{identity}/reset')
def reset(identity:str,admin=Depends(current)):
 allow(admin,True);u=get('users',identity);u['used_traffic']=0;u['last_reset']=time.time()
 if u.get('status')=='limited':u['status']='active'
 return save('users',u,identity)
@app.post('/api/nodes/{identity}/commands')
def command(identity:str,data:dict,admin=Depends(current)):
 allow(admin,True);get('nodes',identity)
 if data.get('command') not in ['restart','logs']:raise HTTPException(422,'Unsupported command')
 identity_cmd=uuid.uuid4().hex
 with connect() as c:c.execute('INSERT INTO node_commands VALUES(?,?,?,?,NULL)',(identity_cmd,identity,data['command'],time.time()))
 return {'id':identity_cmd,'status':'queued'}
@app.get('/api/nodes/{identity}/commands')
def command_results(identity:str,admin=Depends(current)):
 allow(admin)
 with connect() as c:return [dict(x) for x in c.execute('SELECT * FROM node_commands WHERE node=? ORDER BY created DESC LIMIT 20',(identity,))]

def node_auth(identity,credentials):
 node=get('nodes',identity)
 if not credentials or not hmac.compare_digest(node.get('token',''),credentials.credentials):raise HTTPException(401,'Invalid node token')
 if not node.get('enabled',True):raise HTTPException(403,'Node disabled')
 return node

def node_config(node):
 config={'log':{'loglevel':'warning'},'stats':{},'policy':{'levels':{'0':{'statsUserUplink':True,'statsUserDownlink':True}},'system':{'statsInboundUplink':True,'statsInboundDownlink':True}},'api':{'tag':'hirkan-api','services':['StatsService']},'inbounds':[{'tag':'hirkan-api','listen':'127.0.0.1','port':10085,'protocol':'dokodemo-door','settings':{'address':'127.0.0.1'}}],'outbounds':[{'protocol':'freedom','tag':'direct'},{'protocol':'blackhole','tag':'blocked'}],'routing':{'rules':[{'type':'field','inboundTag':['hirkan-api'],'outboundTag':'hirkan-api'}]}}
 users=[u for u in objects('users') if active(u)]
 for core in objects('cores'):
  if core.get('node_id')!=node['id'] or not core.get('enabled',True):continue
  raw=core.get('config',{})
  if isinstance(raw,dict):
   for inbound in raw.get('inbounds',[]):
    inbound=json.loads(json.dumps(inbound));protocol=inbound.get('protocol');tag=inbound.get('tag','')
    relevant=[u for u in users if not u.get('inbound_tags') or tag in u['inbound_tags']]
    settings=inbound.setdefault('settings',{})
    if protocol in ['vless','vmess']:settings['clients']=[{'id':u['uuid'],'email':u['username'],'level':0,**({'flow':u.get('flow','')} if protocol=='vless' else {})} for u in relevant]
    elif protocol in ['trojan','shadowsocks']:settings['clients']=[{'password':u['password'],'email':u['username'],'level':0} for u in relevant]
    config['inbounds'].append(inbound)
   for outbound in raw.get('outbounds',[]):
    if outbound.get('tag') not in ['direct','blocked']:config['outbounds'].append(outbound)
   config['routing']['rules']+=raw.get('routing',{}).get('rules',[])
 return config
@app.get('/agent/{identity}/state')
def agent_state(identity:str,credentials=Depends(bearer)):
 node=node_auth(identity,credentials)
 with connect() as c:commands=[dict(x) for x in c.execute('SELECT id,command FROM node_commands WHERE node=? AND result IS NULL ORDER BY created',(identity,))]
 return {'config':node_config(node),'commands':commands,'interval':15}
@app.post('/agent/{identity}/report')
def agent_report(identity:str,data:dict,credentials=Depends(bearer)):
 node=node_auth(identity,credentials);node['last_seen']=time.time();node['metrics']=data.get('metrics',{});node['version']=VERSION;save('nodes',node,identity)
 users={u['username']:u for u in objects('users')}
 with connect() as c:
  for name,counts in data.get('traffic',{}).items():
   if name not in users:continue
   up=max(0,int(counts.get('up',0)));down=max(0,int(counts.get('down',0)))
   previous=c.execute('SELECT up,down FROM traffic WHERE node=? AND user=?',(identity,name)).fetchone()
   du=max(0,up-(previous['up'] if previous else 0));dd=max(0,down-(previous['down'] if previous else 0))
   if previous and (up<previous['up'] or down<previous['down']):du=up;dd=down
   c.execute('INSERT INTO traffic VALUES(?,?,?,?,?) ON CONFLICT(node,user) DO UPDATE SET up=excluded.up,down=excluded.down,at=excluded.at',(identity,name,up,down,time.time()))
   u=users[name];u['used_traffic']=u.get('used_traffic',0)+du+dd
   c.execute("UPDATE objects SET data=?,updated=? WHERE kind='users' AND id=?",(json.dumps(u),time.time(),u['id']))
   if du+dd:c.execute('INSERT INTO series(user,node,up,down,at) VALUES(?,?,?,?,?)',(name,identity,du,dd,time.time()))
  for cmd_id,result in data.get('results',{}).items():c.execute('UPDATE node_commands SET result=? WHERE id=? AND node=?',(str(result)[:32000],cmd_id,identity))
 return {'ok':True}

@app.get('/api/{kind}')
def list_objects(kind:str,q:str='',offset:int=0,limit:int=1000,admin=Depends(current)):
 allow(admin)
 if kind not in RESOURCES:raise HTTPException(404)
 if kind in ['settings','roles'] and admin['role']!='administrator':raise HTTPException(403,'Administrator required')
 items=objects(kind)
 if kind=='users':items=[safe_user(u) for u in items]
 if kind=='nodes' and admin['role']!='administrator':items=[{k:v for k,v in x.items() if k!='token'} for x in items]
 if q:items=[x for x in items if q.casefold() in json.dumps(x,ensure_ascii=False).casefold()]
 return {'items':items[max(0,offset):max(0,offset)+min(1000,max(1,limit))],'total':len(items)}
@app.post('/api/{kind}')
def create_object(kind:str,data:dict,admin=Depends(current)):
 allow(admin,True)
 if kind not in RESOURCES:raise HTTPException(404)
 if kind in ['settings','roles'] and admin['role']!='administrator':raise HTTPException(403,'Administrator required')
 if kind=='users' and data.get('template_id'):
  template=get('templates',data['template_id']);preset=dict(template.get('config',{}));days=preset.pop('duration_days',None)
  if days:preset['expire']=int(time.time())+days*86400
  data={**preset,**{k:v for k,v in data.items() if k!='template_id'}}
 data=validate(kind,data,True)
 if kind=='settings' and admin['role']!='administrator':raise HTTPException(403)
 result=save(kind,data);audit(admin['username'],kind+'.create',result['id']);return result
@app.get('/api/{kind}/{identity}')
def read_object(kind:str,identity:str,admin=Depends(current)):
 allow(admin)
 if kind not in RESOURCES:raise HTTPException(404)
 if kind in ['settings','roles'] and admin['role']!='administrator':raise HTTPException(403,'Administrator required')
 result=get(kind,identity)
 if kind=='nodes' and admin['role']!='administrator':result.pop('token',None)
 return result
@app.put('/api/{kind}/{identity}')
def update_object(kind:str,identity:str,data:dict,admin=Depends(current)):
 allow(admin,True)
 if kind not in RESOURCES:raise HTTPException(404)
 if kind in ['settings','roles'] and admin['role']!='administrator':raise HTTPException(403,'Administrator required')
 old=get(kind,identity);new=validate(kind,{**old,**data,'id':identity});result=save(kind,new,identity);audit(admin['username'],kind+'.update',identity);return result
@app.delete('/api/{kind}/{identity}')
def delete_object(kind:str,identity:str,admin=Depends(current)):
 allow(admin,True)
 if kind not in RESOURCES:raise HTTPException(404)
 if kind in ['settings','roles'] and admin['role']!='administrator':raise HTTPException(403,'Administrator required')
 get(kind,identity)
 with connect() as c:c.execute('DELETE FROM objects WHERE kind=? AND id=?',(kind,identity))
 audit(admin['username'],kind+'.delete',identity);return {'ok':True}

def links(user):
 result=[]
 for host in objects('hosts'):
  if not host.get('enabled',True):continue
  if host.get('group_ids') and not set(host['group_ids']).intersection(user.get('group_ids',[])):continue
  protocol=host.get('protocol','vless');address=host['address'];port=host.get('port',443);name=quote(host.get('name','Hirkan'));secret=user['uuid'] if protocol in ['vless','vmess'] else user['password']
  query={'type':host.get('network','tcp'),'security':host.get('security','tls')}
  for key in ['sni','path','host','flow','fp','pbk','sid','spx','alpn']:
   if host.get(key):query[key]=host[key]
  if protocol=='vmess':
   conf={'v':'2','ps':host.get('name','Hirkan'),'add':address,'port':str(port),'id':secret,'aid':'0','net':query['type'],'type':'none','host':query.get('host',''),'path':query.get('path',''),'tls':query['security'],'sni':query.get('sni','')};uri='vmess://'+base64.b64encode(json.dumps(conf).encode()).decode()
  elif protocol=='shadowsocks':uri='ss://'+base64.urlsafe_b64encode((host.get('method','chacha20-ietf-poly1305')+':'+secret).encode()).decode().rstrip('=')+'@'+address+':'+str(port)+'#'+name
  else:uri=protocol+'://'+quote(secret,safe='')+'@'+address+':'+str(port)+'?'+urlencode(query)+'#'+name
  result.append((host,uri))
 return result
@app.get('/sub/{token}')
def subscription(token:str,format:str='base64'):
 user=next((u for u in objects('users') if hmac.compare_digest(u.get('subscription_token',''),token)),None)
 if not user:raise HTTPException(404)
 if not active(user):raise HTTPException(403,'Subscription inactive')
 headers={'subscription-userinfo':f"upload=0; download={user.get('used_traffic',0)}; total={user.get('data_limit',0)}; expire={user.get('expire') or 0}",'profile-title':'base64:'+base64.b64encode(b'Hirkan').decode(),'profile-update-interval':'12'}
 items=links(user)
 if format=='json':return {'username':user['username'],'links':[x[1] for x in items],'status':safe_user(user)}
 if format=='clash':
  proxies=[]
  for h,uri in items:
   proto=h.get('protocol','vless');p={'name':h['name'],'type':'ss' if proto=='shadowsocks' else proto,'server':h['address'],'port':h.get('port',443),'udp':True}
   if proto in ['vless','vmess']:p.update(uuid=user['uuid'],tls=h.get('security','tls')!='none',servername=h.get('sni',h['address']),network=h.get('network','tcp'))
   else:p['password']=user['password']
   if proto=='shadowsocks':p['cipher']=h.get('method','chacha20-ietf-poly1305')
   if proto=='vmess':p.update(alterId=0,cipher='auto')
   if h.get('security')=='reality':p['reality-opts']={'public-key':h.get('pbk',''),'short-id':h.get('sid','')};p['client-fingerprint']=h.get('fp','chrome')
   if h.get('network')=='ws':p['ws-opts']={'path':h.get('path','/'),'headers':{'Host':h.get('host',h['address'])}}
   proxies.append(p)
  import yaml;body=yaml.safe_dump({'proxies':proxies,'proxy-groups':[{'name':'Hirkan','type':'select','proxies':[p['name'] for p in proxies]}],'rules':['MATCH,Hirkan']},allow_unicode=True)
  return PlainTextResponse(body,headers=headers)
 text='\n'.join(x[1] for x in items)
 return PlainTextResponse(text if format=='plain' else base64.b64encode(text.encode()).decode(),headers=headers)

@app.get('/assets/{name}')
def asset(name:str):
 if name not in ['logo-light.png','logo-dark.png','app.js','style.css']:raise HTTPException(404)
 return FileResponse(ROOT/name)
@app.get('/')
@app.get('/dashboard/')
@app.get('/dashboard/{route:path}')
def index(route:str=''):return FileResponse(ROOT/'index.html')

if __name__=='__main__':
 import uvicorn
 parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=int(os.getenv('HIRKAN_PORT','8000')));args=parser.parse_args()
 uvicorn.run(app,host=os.getenv('HIRKAN_HOST','127.0.0.1'),port=args.port,ssl_keyfile=os.getenv('HIRKAN_SSL_KEYFILE'),ssl_certfile=os.getenv('HIRKAN_SSL_CERTFILE'))
