"""Hirkan node agent. Xray is a separate executable supplied by the operator."""
import hashlib,json,logging,os,subprocess,time
from pathlib import Path
import httpx,psutil
from urllib.parse import urlparse
PANEL=os.environ['HIRKAN_PANEL_URL'].rstrip('/');NODE=os.environ['HIRKAN_NODE_ID'];TOKEN=os.environ['HIRKAN_NODE_TOKEN']
BINARY=os.getenv('HIRKAN_XRAY_BIN','/usr/local/bin/xray');DIRECTORY=Path(os.getenv('HIRKAN_NODE_DATA','node-data'));DIRECTORY.mkdir(parents=True,exist_ok=True)
CONFIG=DIRECTORY/'config.json';LOG=DIRECTORY/'xray.log';PROCESS=None;LAST_HASH=None
parsed=urlparse(PANEL)
if parsed.scheme!='https' and not (parsed.scheme=='http' and parsed.hostname in ['127.0.0.1','localhost','::1']):
 raise SystemExit('Use an HTTPS panel URL for remote nodes.')
def restart():
 global PROCESS
 if PROCESS and PROCESS.poll() is None:
  PROCESS.terminate()
  try:PROCESS.wait(timeout=5)
  except subprocess.TimeoutExpired:PROCESS.kill();PROCESS.wait()
 if LOG.exists() and LOG.stat().st_size>10_000_000:LOG.write_bytes(LOG.read_bytes()[-1_000_000:])
 with LOG.open('ab') as log:PROCESS=subprocess.Popen([BINARY,'run','-config',str(CONFIG)],stdout=log,stderr=log)
def collect():
 stats={}
 try:
  result=subprocess.run([BINARY,'api','statsquery','--server=127.0.0.1:10085'],capture_output=True,text=True,timeout=5,check=True)
  for item in json.loads(result.stdout).get('stat',[]):
   parts=item.get('name','').split('>>>')
   if len(parts)==4 and parts[0]=='user' and parts[2]=='traffic':
    stats.setdefault(parts[1],{'up':0,'down':0})['up' if parts[3]=='uplink' else 'down']=int(item.get('value',0))
 except Exception:logging.exception('Traffic collection failed')
 return stats
if __name__=='__main__':
 logging.basicConfig(level=logging.INFO,format='%(asctime)s %(levelname)s %(message)s')
 try:
  with httpx.Client(headers={'Authorization':'Bearer '+TOKEN},timeout=20,verify=True) as client:
   while True:
    try:
     response=client.get(f'{PANEL}/agent/{NODE}/state');response.raise_for_status();state=response.json()
     body=json.dumps(state['config'],sort_keys=True);digest=hashlib.sha256(body.encode()).hexdigest()
     if digest!=LAST_HASH:
      temporary=DIRECTORY/'next.json';temporary.write_text(body)
      subprocess.run([BINARY,'run','-test','-config',str(temporary)],capture_output=True,timeout=10,check=True)
      temporary.replace(CONFIG);restart();LAST_HASH=digest
     elif PROCESS is None or PROCESS.poll() is not None:restart()
     results={}
     for command in state['commands']:
      if command['command']=='restart':restart();results[command['id']]='restarted'
      elif command['command']=='logs':results[command['id']]=LOG.read_bytes()[-30000:].decode(errors='replace') if LOG.exists() else ''
     report={'metrics':{'cpu':psutil.cpu_percent(),'memory':psutil.virtual_memory().percent},'traffic':collect(),'results':results}
     response=client.post(f'{PANEL}/agent/{NODE}/report',json=report);response.raise_for_status()
    except Exception:logging.exception('Node synchronization failed')
    time.sleep(15)
 finally:
  if PROCESS and PROCESS.poll() is None:PROCESS.terminate();PROCESS.wait(timeout=10)
