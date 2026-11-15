/* NURI LIFE Account layer - no third-party JS dependency.
 * Guest: local save; Member: Supabase Auth + RLS-protected save.
 * Never save passwords in localStorage.
 */
(function(){
'use strict';
const ACTIVE_KEY='nuriAuthActiveV1';
const SESSION_KEY='nuriAuthTokensV1';
const CLOUD_DIRTY_PREFIX='nuriCloudDirty:';
const KOREAN={
  'Invalid login credentials':'이메일이나 비밀번호를 확인해 줘.',
  'Email not confirmed':'이메일 인증을 마친 후 로그인해 줘.',
  'User already registered':'이미 가입된 이메일이야. 로그인해 줘.',
  'Password should be at least 6 characters':'비밀번호를 더 길게 만들어 줘.'
};
let tab='login';
let busy=false;
let authVerified=false;
let uploadTimer=null;
let uploadRunning=false;
let revision=0;
let uploadPromise=null;
let lastStatus='게스트는 이 기기에 저장돼.';
const $=id=>document.getElementById(id);
const cfg=window.NURI_AUTH_CONFIG||{};
const baseUrl=String(cfg.supabaseUrl||'').trim().replace(/\/+$/,'');
const apiKey=String(cfg.supabaseAnonKey||'').trim();
const enabled=/^https:\/\/[\w.-]+\.supabase\.co$/i.test(baseUrl) && apiKey.length>20;
function safeGet(key){try{return localStorage.getItem(key)}catch(e){return null}}
function safeSet(key,value){try{localStorage.setItem(key,value)}catch(e){}}
function safeRemove(key){try{localStorage.removeItem(key)}catch(e){}}
function readJson(key){try{return JSON.parse(safeGet(key)||'null')}catch(e){return null}}
function active(){const x=readJson(ACTIVE_KEY);return x&&['guest','member'].includes(x.mode)?x:null}
function token(){return readJson(SESSION_KEY)}
function saveKey(user){return user&&user.mode==='member'&&typeof user.id==='string'?'nuriSave_user_'+user.id:user&&user.mode==='guest'?'nuriSave':'nuriSave_pending'}
function legacyKey(user){return user&&user.mode==='member'&&typeof user.id==='string'?'nuriLegacyBook_user_'+user.id:user&&user.mode==='guest'?'nuriLegacyBook':'nuriLegacyBook_pending'}
window.nuriCurrentSaveKey=()=>saveKey(active());
window.nuriCurrentLegacyKey=()=>legacyKey(active());
window.nuriCloudStatus=()=>lastStatus;
function message(text,good=false){const el=$('nuriAuthMessage');if(el){el.textContent=text;el.style.color=good?'#7cf4d3':'#ffd3a3'}}
function gate(on){const el=$('nuriAccountGate');if(el)el.hidden=!on}
function setBusy(on){busy=on;const el=$('nuriAuthSubmit');if(el){el.disabled=on;el.textContent=on?'처리 중…':(tab==='signup'?'회원가입':'로그인')}const guest=$('nuriGuestLogin');if(guest)guest.disabled=on}
function setTab(next){tab=next;const signup=next==='signup';$('nuriTabLogin').classList.toggle('selected',!signup);$('nuriTabSignup').classList.toggle('selected',signup);$('nuriTabLogin').setAttribute('aria-selected',String(!signup));$('nuriTabSignup').setAttribute('aria-selected',String(signup));$('nuriAuthRepeatWrap').hidden=!signup;$('nuriAuthPassword').autocomplete=signup?'new-password':'current-password';if($('nuriForgotPassword'))$('nuriForgotPassword').hidden=signup;$('nuriAuthSubmit').textContent=signup?'회원가입':'로그인';message(enabled?'': '회원 계정은 관리자가 인증 서버를 연결해야 사용할 수 있어. 지금은 게스트 플레이가 가능해.',!enabled&&false)}
function humanError(err){const txt=String(err&&err.message||err||'연결 오류');return KOREAN[txt]||(/Failed to fetch|NetworkError|fetch failed/i.test(txt)?'인터넷 연결 또는 인증 서버 설정을 확인해 줘.':txt)}
async function request(endpoint,{method='GET',body=null,accessToken=null,prefer=null}={}){
  if(!enabled)throw new Error('인증 서버가 아직 설정되지 않았어. 게스트로 시작할 수 있어.');
  const headers={'apikey':apiKey};
  if(body!==null)headers['Content-Type']='application/json';
  if(accessToken)headers['Authorization']='Bearer '+accessToken;
  if(prefer)headers['Prefer']=prefer;
  const resp=await fetch(baseUrl+endpoint,{method,headers,body:body!==null?JSON.stringify(body):undefined,cache:'no-store'});
  const raw=await resp.text();let data=null;
  if(raw){try{data=JSON.parse(raw)}catch(e){data=raw}}
  if(!resp.ok){throw new Error((data&&((data.msg)||(data.message)||(data.error_description)||(data.error)))||'서버 오류 '+resp.status)}
  return data;
}
async function validToken(){
  let t=token();if(!t||!t.access_token||!t.refresh_token)throw new Error('로그인이 필요해.');
  if(Date.now()/1000 >= Number(t.expires_at||0)-90){
    const updated=await request('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:t.refresh_token}});
    t={access_token:updated.access_token,refresh_token:updated.refresh_token,expires_at:Math.floor(Date.now()/1000)+(updated.expires_in||3600),user:updated.user};
    safeSet(SESSION_KEY,JSON.stringify(t));
  }
  return t;
}
async function authenticatedUser(){
  const t=await validToken();
  try{return await request('/auth/v1/user',{accessToken:t.access_token})}
  catch(e){
    // Try a refresh once if cached token was revoked or expired early.
    const refreshed=await request('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:t.refresh_token}});
    const next={access_token:refreshed.access_token,refresh_token:refreshed.refresh_token,expires_at:Math.floor(Date.now()/1000)+(refreshed.expires_in||3600),user:refreshed.user};
    safeSet(SESSION_KEY,JSON.stringify(next));
    return request('/auth/v1/user',{accessToken:next.access_token});
  }
}
function dirtyKey(id){return CLOUD_DIRTY_PREFIX+id}
function localObject(key){return readJson(key)}
async function cloudDownload(id){
 const t=await validToken();
 const rows=await request('/rest/v1/nuri_saves?user_id=eq.'+encodeURIComponent(id)+'&select=save_data',{accessToken:t.access_token});
 return Array.isArray(rows)&&rows[0]?rows[0].save_data:null;
}
async function cloudUpload(){
 const user=active();if(!authVerified||!user||user.mode!=='member'||!enabled||uploadRunning)return;
 if(!safeGet(dirtyKey(user.id)))return;
 const game=localObject(saveKey(user));if(!game||!game.stats)return;
 const previousRevision=revision;
 uploadRunning=true;
 try{
   const t=await validToken();
   const legacy=localObject(legacyKey(user));
   await request('/rest/v1/nuri_saves?on_conflict=user_id',{method:'POST',accessToken:t.access_token,
     prefer:'resolution=merge-duplicates,return=minimal',body:[{user_id:user.id,save_data:{game,legacy,version:1},updated_at:new Date().toISOString()}]});
   if(revision===previousRevision)safeRemove(dirtyKey(user.id));
   lastStatus='클라우드 저장 완료';
 }catch(e){lastStatus='클라우드 저장 실패 · 이 기기에는 저장됨';console.warn('[NURI] cloud save:',humanError(e));}
 finally{uploadRunning=false;}
}
window.nuriCloudSchedule=function(){
 const user=active();if(!user||user.mode!=='member'||!authVerified)return;
 revision++;safeSet(dirtyKey(user.id),'1');lastStatus='클라우드 저장 대기 중';
 if(uploadTimer)clearTimeout(uploadTimer);
 uploadTimer=setTimeout(()=>{uploadTimer=null;uploadPromise=cloudUpload()},1800);
};
async function flush(){
 if(uploadTimer){clearTimeout(uploadTimer);uploadTimer=null}
 if(uploadPromise)await uploadPromise;
 if(uploadRunning)return;
 uploadPromise=cloudUpload();await uploadPromise;
}
async function enterMember(accessData){
 if(!accessData?.access_token||!accessData?.refresh_token||!accessData?.user?.id)throw new Error('로그인 토큰을 받지 못했어.');
 const t={access_token:accessData.access_token,refresh_token:accessData.refresh_token,expires_at:Math.floor(Date.now()/1000)+(accessData.expires_in||3600),user:accessData.user};
 safeSet(SESSION_KEY,JSON.stringify(t));
 const user={mode:'member',id:accessData.user.id,email:accessData.user.email||''};
 safeSet(ACTIVE_KEY,JSON.stringify(user));
 await syncBeforeEnter(user);
 location.reload();
}
async function syncBeforeEnter(user){
 try{
  const remote=await cloudDownload(user.id);
  const accountKey=saveKey(user);
  if(remote){
   if(safeGet(dirtyKey(user.id)) && localObject(accountKey)){
      // Keep unsynced local changes; retry uploading after authentication.
      lastStatus='기기에 저장된 변경사항 동기화 대기 중';
   }else{
      const game=remote.game&&remote.game.stats?remote.game:remote.stats?remote:null;
      if(game){safeSet(accountKey,JSON.stringify(game));if(remote.legacy)safeSet(legacyKey(user),JSON.stringify(remote.legacy));}
   }
  }
 }catch(e){lastStatus='클라우드 연결 불가 · 이 기기 데이터 사용';console.warn('[NURI] cloud download:',humanError(e));}
}
async function boot(){
 const x=active();
 if(x?.mode==='guest'){authVerified=true;gate(false);lastStatus='게스트 · 이 기기에 저장됨';return;}
 if(x?.mode==='member'&&enabled){
    message('이전 인생을 확인하는 중…',true);
    try{
      const verified=await authenticatedUser();
      if(verified?.id!==x.id)throw new Error('계정 정보가 일치하지 않아. 다시 로그인해 줘.');
      await syncBeforeEnter(x);
      authVerified=true;gate(false);
      if(safeGet(dirtyKey(x.id)))window.nuriCloudSchedule();
      // Fresh cloud payload may have arrived after the game script read local save.
      const loaded=localObject(saveKey(x));
      if(loaded?.stats && typeof state!=='undefined' && state && JSON.stringify(state.stats)!==JSON.stringify(loaded.stats))location.reload();
      lastStatus=lastStatus==='게스트 · 이 기기에 저장됨'?'클라우드 연결됨':lastStatus;
      return;
    }catch(e){message('로그인이 만료되었거나 연결되지 않았어. 다시 로그인해 줘. ('+humanError(e)+')');safeRemove(ACTIVE_KEY);safeRemove(SESSION_KEY)}
 }
 gate(true);
 if(!enabled)message('회원 계정은 관리자 인증 서버 설정 후 이용할 수 있어. 게스트로 바로 시작할 수 있어.');
 else if(!x)message('로그인하거나 게스트로 시작해 줘.',true);
}
function setGuest(){safeSet(ACTIVE_KEY,JSON.stringify({mode:'guest'}));authVerified=true;location.reload()}
async function submit(evt){evt.preventDefault();if(busy)return;const email=$('nuriAuthEmail').value.trim();const pass=$('nuriAuthPassword').value;
 if(!enabled){message('회원 계정은 인증 서버 설정이 필요해. 관리자에게 Supabase 연동을 요청하거나 게스트로 플레이해 줘.');return;}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){message('올바른 이메일을 입력해 줘.');return;}
 if(pass.length<8){message('비밀번호는 8자 이상으로 설정해 줘.');return;}
 if(tab==='signup'&&pass!==$('nuriAuthRepeat').value){message('비밀번호 확인이 일치하지 않아.');return;}
 setBusy(true);message('서버와 연결 중…',true);
 try{
   if(tab==='signup'){
     const data=await request('/auth/v1/signup',{method:'POST',body:{email,password:pass}});
     if(data?.access_token)await enterMember(data);
     else {setTab('login');message('가입 요청이 접수됐어. 이메일 인증 안내를 확인한 후 로그인해 줘.',true);}
   }else{
     const data=await request('/auth/v1/token?grant_type=password',{method:'POST',body:{email,password:pass}});
     await enterMember(data);
   }
 }catch(e){message(humanError(e));}
 finally{setBusy(false);$('nuriAuthPassword').value='';$('nuriAuthRepeat').value='';}
}
async function forgotPassword(){const email=$('nuriAuthEmail').value.trim();if(!enabled){message('인증 서버 연동이 필요해.');return;}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){message('비밀번호 재설정 메일을 받을 이메일을 먼저 입력해 줘.');return;}
 try{await request('/auth/v1/recover',{method:'POST',body:{email}});message('재설정 안내 메일을 요청했어. 메일함을 확인해 줘.',true);}catch(e){message(humanError(e))}
}
async function signOut(){
 const x=active();
 if(x?.mode==='member'){
   await flush();
   if(safeGet(dirtyKey(x.id))&&!confirm('클라우드 저장이 아직 완료되지 않았어. 이 기기의 저장은 유지되지만 다른 기기에서는 최신 기록이 안 보일 수 있어. 로그아웃할까?'))return;
   const t=token();if(t?.access_token){try{await request('/auth/v1/logout',{method:'POST',accessToken:t.access_token})}catch(e){}}
 }
 safeRemove(SESSION_KEY);safeRemove(ACTIVE_KEY);authVerified=false;location.reload();
}
window.nuriRenderAccountPanel=function(){
 const x=active();if(typeof modalHeader==='function')modalHeader('내 계정','NURI LIFE · ACCOUNT');
 const body=$('appModalBody');if(!body)return;
 const email=x?.mode==='member'?(x.email||'회원 계정'):'게스트';
 const desc=x?.mode==='member'?'회원별 게임 기록을 기기에 저장하고, 인증 서버에 동기화해.':'게임 기록은 지금 사용하는 브라우저에만 저장돼.';
 const accountButtons=x?.mode==='member'?`<button class="nuri-auth-action" onclick="nuriAccountSyncNow()">클라우드에 지금 저장하기</button><button class="nuri-auth-action" onclick="nuriImportGuestSave()">게스트 저장을 이 계정으로 복사</button>`:'';
 body.innerHTML=`<section class="nuri-account-panel"><b>${x?.mode==='member'?'회원 로그인':'게스트 플레이'}</b><small>${String(email).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]))}</small><p>${desc}</p><small id="nuriAccountCloudStatus">${lastStatus}</small>${accountButtons}<button class="nuri-auth-action danger" onclick="nuriAccountSignOut()">${x?.mode==='guest'?'게스트 플레이 종료':'로그아웃'}</button><button class="nuri-auth-action" onclick="openAppModal('menu')">메뉴로 돌아가기</button></section>`;
};
window.nuriAccountSignOut=()=>{signOut()};
window.nuriAccountSyncNow=async()=>{const x=active();if(x?.mode!=='member')return;window.nuriCloudSchedule();await flush();window.nuriRenderAccountPanel();};
window.nuriImportGuestSave=async()=>{
 const x=active();if(!x||x.mode!=='member')return;
 const guest=readJson('nuriSave');if(!guest?.stats){alert('가져올 게스트 저장 데이터가 없어.');return;}
 if(!confirm('이 계정의 현재 게임 진행을 게스트 저장으로 덮어쓸까? 현재 계정의 진행 내용은 복구되지 않을 수 있어.'))return;
 safeSet(saveKey(x),JSON.stringify(guest));const legacy=readJson('nuriLegacyBook');if(legacy)safeSet(legacyKey(x),JSON.stringify(legacy));
 safeSet(dirtyKey(x.id),'1');revision++;await cloudUpload();location.reload();
};
function init(){
 $('nuriTabLogin')?.addEventListener('click',()=>setTab('login'));
 $('nuriTabSignup')?.addEventListener('click',()=>setTab('signup'));
 $('nuriAuthForm')?.addEventListener('submit',submit);
 $('nuriGuestLogin')?.addEventListener('click',()=>{if(!busy)setGuest()});
 $('nuriForgotPassword')?.addEventListener('click',forgotPassword);
 setTab('login');
 boot();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
window.addEventListener('pagehide',()=>{if(authVerified&&active()?.mode==='member'&&safeGet(dirtyKey(active().id)))cloudUpload()});
})();
