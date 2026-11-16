const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

const account=new vm.Script(fs.readFileSync(path.join(__dirname,'account.js'),'utf8'));
const game=new vm.Script(fs.readFileSync(path.join(__dirname,'game.js'),'utf8'));
const member={id:'test-member',email:'player@example.test'};
const session={access_token:'test-access',refresh_token:'test-refresh',expires_in:3600,user:member};
const saved={version:3,age:20,family:'ordinary',money:123,stats:{health:80,happiness:50}};
const memberKey='nuriSave_user_'+member.id;
const memberSession={nuriAuthActiveV1:{mode:'member',...member},nuriAuthTokensV1:{...session,expires_at:Date.now()/1000+3600}};

function mount(initial={},respond=()=>{},width=390){
 const storage=new Map(Object.entries(initial).map(([key,value])=>[key,JSON.stringify(value)]));
 const elements=new Map();
 const listeners=new Map();
 const timers=new Map();
 const calls=[];
 let timerId=0;
 let reloads=0;
 const node=(id='')=>({
  style:{display:id==='gameMain'?'none':''},dataset:{},hidden:false,
  innerHTML:'',textContent:'',value:'',classList:{add(){},remove(){},toggle(){}},
  setAttribute(){},remove(){},addEventListener(type,fn){this[type]=fn}
 });
 const get=id=>{
  if(!elements.has(id))elements.set(id,node(id));
  return elements.get(id);
 };
 const context=vm.createContext({
  document:{readyState:'loading',body:node(),documentElement:node(),getElementById:get,
   querySelector:()=>null,querySelectorAll:()=>[],addEventListener:(type,fn)=>listeners.set(type,fn)},
  localStorage:{getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value),removeItem:key=>storage.delete(key)},
  location:{reload(){reloads++}},AbortController,innerWidth:width,
  console:{warn(){}},addEventListener(){},
  setTimeout:(callback,delay)=>{timers.set(++timerId,{callback,delay});return timerId;},clearTimeout:id=>timers.delete(id),
  NURI_AUTH_CONFIG:{supabaseUrl:'https://test.supabase.co',supabaseAnonKey:'test-not-a-real-publishable-key'},
  async fetch(url,options){
   const path=url.slice('https://test.supabase.co'.length);
   calls.push({path,method:options.method});
   const {status=200,body}=await respond(path,options)??{};
   return {ok:status<400,status,text:async()=>body===undefined?'':JSON.stringify(body)};
  }
 });
 context.window=context;
 account.runInContext(context);
 game.runInContext(context);
 listeners.get('DOMContentLoaded')();
 return {get,calls,storage,timers,read:source=>vm.runInContext(source,context),reloads:()=>reloads};
}

const ready=()=>new Promise(resolve=>setImmediate(resolve));

(async()=>{
 for(const width of [390,1280]){
  let giveCloudSave;
  const cloudSave=new Promise(resolve=>{giveCloudSave=resolve;});
  const app=mount({...memberSession,[memberKey]:saved},async path=>{
   if(path==='/auth/v1/user')return {body:member};
   return cloudSave;
  },width);
  await ready();
  assert.equal(app.get('nuriAccountGate').hidden,false);
  assert.equal(app.get('nuriGuestLogin').disabled,true);
  assert.equal(app.get('gameMain').style.display,'none');
  assert.equal(app.read('state.family'),null);
  giveCloudSave({body:[{save_data:{game:{...saved,money:456,stats:{health:'120',happiness:50}}}}]});
  await ready();
  assert.equal(app.get('nuriAccountGate').hidden,true,app.get('nuriAuthMessage').textContent);
  assert.equal(app.get('gameMain').style.display,'block');
  assert.equal(app.read('state.money'),456);
  assert.equal(app.read('state.stats.health'),100);
  assert.equal(app.calls.length,2);
  assert.equal(app.reloads(),0);
 }

 const first=mount({nuriSave:{...saved,money:999}},path=>{
  if(path==='/auth/v1/token?grant_type=password')return {body:session};
  assert.match(path,/^\/rest\/v1\/nuri_saves/);
  return {body:[]};
 });
 first.get('nuriAuthEmail').value=member.email;
 first.get('nuriAuthPassword').value='test-password';
 await first.get('nuriAuthForm').submit({preventDefault(){}});
 assert.equal(first.get('nuriAccountGate').hidden,true);
 assert.equal(first.get('familyScreen').style.display,'block');
 assert.equal(first.read('state.family'),null);
 assert.equal(JSON.parse(first.storage.get('nuriSave')).money,999);
 assert.equal(first.get('nuriAuthPassword').value,'');
 assert.equal(first.calls.length,2);
 assert.equal(first.reloads(),0);

 const offline=mount({...memberSession,[memberKey]:saved},path=>{
  if(path==='/auth/v1/user')return {body:member};
  return {status:503};
 });
 await ready();
 assert.equal(offline.get('nuriAccountGate').hidden,true);
 assert.equal(offline.read('state.money'),saved.money);
 assert.equal(offline.reloads(),0);

 const stalled=mount(memberSession,(_,options)=>new Promise((resolve,reject)=>{
  options.signal.addEventListener('abort',()=>reject(new Error('aborted')));
 }));
 await ready();
 const timeout=[...stalled.timers.values()].find(entry=>entry.delay===10000);
 assert.ok(timeout);
 timeout.callback();
 await ready();
 assert.equal(stalled.get('nuriAccountGate').hidden,false);
 assert.equal(stalled.get('nuriAuthSubmit').disabled,false);
 assert.match(stalled.get('nuriAuthMessage').textContent,/다시 시도/);
 assert.equal(stalled.reloads(),0);

 const guest=mount({nuriSave:saved});
 guest.get('nuriGuestLogin').click();
 assert.equal(guest.get('nuriAccountGate').hidden,true);
 assert.equal(guest.read('state.money'),saved.money);
 assert.equal(guest.calls.length,0);
 assert.equal(guest.reloads(),0);
 console.log('PASS account flow: saved member, first login, delayed and unavailable cloud, request timeout, guest and no reloads');
})().catch(error=>{console.error(error);process.exitCode=1;});
