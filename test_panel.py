"""Integration checks against an isolated disposable Hirkan database."""
import base64,importlib,os,tempfile,time
import pytest
from fastapi.testclient import TestClient

@pytest.fixture()
def panel(monkeypatch,tmp_path):
 monkeypatch.setenv('HIRKAN_DATA',str(tmp_path))
 import main
 main=importlib.reload(main)
 client=TestClient(main.app)
 assert client.post('/api/setup',json={'username':'root','password':'test-password-12345'}).status_code==200
 result=client.post('/api/auth/token',json={'username':'root','password':'test-password-12345'})
 client.headers['Authorization']='Bearer '+result.json()['access_token']
 yield client,main
 client.close()

def user(c,name='alice',**fields):
 r=c.post('/api/users',json={'username':name,**fields});assert r.status_code==200,r.text;return r.json()

def test_setup_and_auth(panel):
 c,m=panel
 assert c.post('/api/setup',json={'username':'other','password':'another-test-password'}).status_code==409
 assert c.get('/api/admin/current').json()['username']=='root'
 assert c.post('/api/auth/token',json={'username':'root','password':'incorrect'}).status_code==401
 assert c.post('/api/auth/logout').status_code==200
 assert c.get('/api/users').status_code==401

def test_user_validation_and_unique_names(panel):
 c,m=panel;a=user(c);b=user(c,'bob')
 assert c.post('/api/users',json={'username':'alice'}).status_code==409
 assert c.put('/api/users/'+b['id'],json={'username':'alice'}).status_code==409
 assert c.post('/api/users',json={'username':'bad name'}).status_code==422
 assert c.put('/api/users/'+a['id'],json={'group_ids':'bad'}).status_code==422
 assert c.post('/api/hosts',json={'name':'a','address':'example.com','port':'bad'}).status_code==422

def test_viewer_and_custom_role_privileges(panel):
 c,m=panel
 assert c.put('/api/admins/view',json={'username':'view','password':'viewer-password-123','role':'viewer'}).status_code==200
 token=c.post('/api/auth/token',json={'username':'view','password':'viewer-password-123'}).json()['access_token']
 headers={'Authorization':'Bearer '+token}
 assert c.get('/api/users',headers=headers).status_code==200
 assert c.post('/api/users',json={'username':'bob'},headers=headers).status_code==403
 assert c.get('/api/settings',headers=headers).status_code==403
 assert c.post('/api/roles',json={'name':'editor','permissions':['read','write']}).status_code==200
 role=c.get('/api/roles').json()['items'][0]['id']
 c.put('/api/admins/editor',json={'username':'editor','password':'editor-password-123','role':role})
 token=c.post('/api/auth/token',json={'username':'editor','password':'editor-password-123'}).json()['access_token'];headers={'Authorization':'Bearer '+token}
 assert c.post('/api/users',json={'username':'bob'},headers=headers).status_code==200
 assert c.put('/api/roles/'+role,json={'permissions':['administrator']},headers=headers).status_code==403
 assert c.post('/api/settings',json={'id':'public_url','value':'https://example.com'},headers=headers).status_code==403

def test_subscriptions_and_expiry(panel):
 c,m=panel;u=user(c)
 for proto in ['vless','vmess','trojan','shadowsocks']:
  assert c.post('/api/hosts',json={'name':proto,'protocol':proto,'address':'example.com','port':443}).status_code==200
 url='/sub/'+u['subscription_token'];plain=c.get(url+'?format=plain')
 assert plain.status_code==200
 assert len(plain.text.splitlines())==4
 assert base64.b64decode(c.get(url).text).decode()==plain.text
 assert len(c.get(url+'?format=json').json()['links'])==4
 assert 'proxy-groups' in c.get(url+'?format=clash').text
 c.put('/api/users/'+u['id'],json={'expire':int(time.time())-5})
 assert c.get(url).status_code==403
 assert c.get('/sub/invalid').status_code==404

def test_node_configuration_and_traffic(panel):
 c,m=panel;u=user(c)
 n=c.post('/api/nodes',json={'name':'testnode'}).json()
 config={'inbounds':[{'tag':'public','port':443,'protocol':'vless','settings':{}}]}
 c.post('/api/cores',json={'name':'core','node_id':n['id'],'config':config})
 path='/agent/'+n['id'];headers={'Authorization':'Bearer '+n['token']}
 assert c.get(path+'/state').status_code==401
 state=c.get(path+'/state',headers=headers).json()
 assert state['config']['inbounds'][1]['settings']['clients'][0]['id']==u['uuid']
 for up,down in [(10,20),(10,20),(15,25),(2,3)]:
  assert c.post(path+'/report',json={'traffic':{'alice':{'up':up,'down':down}}},headers=headers).status_code==200
 assert c.get('/api/users/'+u['id']).json()['used_traffic']==45
 c.put('/api/users/'+u['id'],json={'status':'disabled'})
 assert not c.get(path+'/state',headers=headers).json()['config']['inbounds'][1]['settings']['clients']
 cmd=c.post('/api/nodes/'+n['id']+'/commands',json={'command':'restart'}).json()
 assert c.get(path+'/state',headers=headers).json()['commands'][0]['id']==cmd['id']
 c.post(path+'/report',json={'results':{cmd['id']:'restarted'}},headers=headers)
 assert not c.get(path+'/state',headers=headers).json()['commands']

def test_bulk_atomic_and_revocation(panel):
 c,m=panel;u=user(c)
 assert c.post('/api/bulk',json={'ids':[u['id'],'missing'],'action':'delete'}).status_code==404
 assert c.get('/api/users/'+u['id']).status_code==200
 c.post('/api/bulk',json={'ids':[u['id']],'action':'revoke'})
 assert c.get('/sub/'+u['subscription_token']).status_code==404
 c.put('/api/users/'+u['id'],json={'status':'limited','used_traffic':5})
 c.post('/api/users/'+u['id']+'/reset')
 value=c.get('/api/users/'+u['id']).json();assert value['used_traffic']==0 and value['status']=='active'

def test_export_import_and_backup(panel):
 c,m=panel;u=user(c);archive=c.get('/api/export').json()
 c.delete('/api/users/'+u['id']);assert c.post('/api/import',json=archive).status_code==200
 assert c.get('/api/users/'+u['id']).json()['uuid']==u['uuid']
 assert c.post('/api/import',json={'users':[{'username':'invalid name'}]}).status_code==422
 assert c.get('/api/backup').content.startswith(b'SQLite format 3')

def test_api_key_revocation(panel):
 c,m=panel;key=c.post('/api/api-keys',json={'name':'test'}).json()
 headers={'Authorization':'Bearer '+key['key']}
 assert c.get('/api/users',headers=headers).status_code==200
 c.delete('/api/api-keys/'+key['id'])
 assert c.get('/api/users',headers=headers).status_code==401

def test_assets_and_health(panel):
 c,m=panel
 assert c.get('/health').json()['version']=='1.0.0'
 assert 'Hirkan' in c.get('/').text
 assert c.get('/assets/logo-light.png').content.startswith(b'\x89PNG')
 assert c.get('/assets/logo-dark.png').content.startswith(b'\x89PNG')
 assert c.get('/assets/main.py').status_code==404


def test_template_provisions_user_with_fresh_credentials(panel):
 c,m=panel
 preset=c.post('/api/templates',json={'name':'weekly','config':{'data_limit':1024,'duration_days':7,'reset_period':'weekly'}})
 assert preset.status_code==200
 u=user(c,template_id=preset.json()['id'])
 assert u['data_limit']==1024 and u['reset_period']=='weekly'
 assert 6*86400<u['expire']-time.time()<=7*86400
 v=user(c,'bob',template_id=preset.json()['id'],data_limit=2048)
 assert v['data_limit']==2048 and v['uuid']!=u['uuid'] and v['subscription_token']!=u['subscription_token']
 assert c.post('/api/templates',json={'name':'bad','config':{'uuid':'shared'}}).status_code==422
 assert c.post('/api/templates',json={'name':'bad','config':{'duration_days':-1}}).status_code==422
