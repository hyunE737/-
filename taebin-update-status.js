/* 태빈이 키우기: 배포 업데이트 알림 - 게시된 manifest를 주기적으로 확인 */
(function(){
'use strict';
const CHECK_MS=45000;
const ENDPOINT='./taebin-update.json';
let latest=null, checkedAt=null, loading=false, error=false;
let current=(document.querySelector('meta[name="nuri-live-deploy"]')||{}).content||'local';
const style=document.createElement('style');
style.textContent=`
#nuriUpdateOverlay[hidden]{display:none!important}
#nuriUpdateOverlay{position:fixed;inset:0;z-index:13000;display:grid;place-items:center;background:#172c27a8;padding:18px;font:14px/1.6 system-ui,-apple-system,sans-serif;color:#263d38}
#nuriUpdateCard{width:min(100%,470px);max-height:min(85vh,680px);overflow:auto;background:#fffdf7;border:1px solid #c9d8cb;border-radius:22px;padding:22px;box-shadow:0 20px 60px #081d1750}
#nuriUpdateCard h2{margin:0 0 6px;font-size:23px;color:#17483c}
#nuriUpdateCard p{margin:4px 0 14px;color:#52655b}
#nuriUpdateCard .nuri-update-row{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #e1e7dd}
#nuriUpdateCard .nuri-update-row b{color:#244d42;text-align:right;overflow-wrap:anywhere}
#nuriUpdateCard .nuri-update-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:19px}
#nuriUpdateCard button{border:1px solid #bacfc1;border-radius:12px;background:#f2f6f0;color:#17493f;padding:10px 14px;font:750 13px system-ui;cursor:pointer}
#nuriUpdateCard button.primary{border-color:#205b4e;background:#205b4e;color:white}
#nuriUpdateCard button:disabled{opacity:.55;cursor:wait}
#nuriUpdateCard ul{margin:8px 0 0;padding-left:21px;color:#3b554c}
#nuriUpdateCard .nuri-update-status{font-weight:800;color:#205b4e}
@media(max-width:850px){#nuriUpdateCard{padding:19px}}
`;
document.head.appendChild(style);
const overlay=document.createElement('div');overlay.id='nuriUpdateOverlay';overlay.hidden=true;
overlay.innerHTML='<section id="nuriUpdateCard" role="dialog" aria-modal="true" aria-labelledby="nuriUpdateTitle"><h2 id="nuriUpdateTitle">📢 태빈이 키우기 업데이트</h2><p>배포된 최신 게임 버전을 45초마다 확인해.</p><div class="nuri-update-row"><span>현재 화면</span><b id="nuriUpdateCurrent"></b></div><div class="nuri-update-row"><span>서버 최신 버전</span><b id="nuriUpdateLatest"></b></div><div class="nuri-update-row"><span>최근 배포</span><b id="nuriUpdateDate"></b></div><p id="nuriUpdateState" class="nuri-update-status" role="status"></p><b>최근 업데이트 내용</b><ul id="nuriUpdateNotes"></ul><div class="nuri-update-actions"><button type="button" id="nuriUpdateCheck">지금 확인</button><button type="button" id="nuriUpdateApply" class="primary" hidden>새 버전 적용</button><button type="button" id="nuriUpdateClose">닫기</button></div></section>';
function init(){
document.body.appendChild(overlay);
window.nuriOpenUpdateStatus=showUpdatePanel;
overlay.querySelector('#nuriUpdateClose').addEventListener('click',()=>{overlay.hidden=true;});
overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.hidden=true;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!overlay.hidden){overlay.hidden=true;}});
overlay.querySelector('#nuriUpdateCheck').addEventListener('click',check);
overlay.querySelector('#nuriUpdateApply').addEventListener('click',()=>window.location.reload());
check();window.setInterval(()=>{if(document.visibilityState!=='hidden')check();},CHECK_MS);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&(!checkedAt||Date.now()-checkedAt>CHECK_MS))check();});
}

function showUpdatePanel(){
 if(typeof window.closeAppModal==='function')window.closeAppModal();
 overlay.hidden=false;render();check();
 const focus=overlay.querySelector('#nuriUpdateClose');if(focus)focus.focus();
}
function updateMenuLabel(){
 const tile=document.getElementById('nuriUpdateMenuTile');
 if(!tile)return;
 const title=tile.querySelector('b');
 const summary=tile.querySelector('small');
 if(title)title.textContent=changed()?'📣 새 업데이트 있음':'업데이트 현황';
 if(summary)summary.textContent=changed()?'새 버전이 배포됐어 · 적용하기':error?'최신 배포 확인 실패 · 다시 확인하기':loading?'최신 배포 확인 중…':latest?'최신 배포 확인 완료 · 변경 내용 보기':'버전 · 업데이트 내역 확인';
}
function changed(){return !!(latest&&latest.buildId&&current!=='local'&&latest.buildId!==current);}
function fmt(dt){if(!dt)return '확인 전';const d=new Date(dt);return Number.isFinite(d.getTime())?new Intl.DateTimeFormat('ko-KR',{dateStyle:'medium',timeStyle:'short'}).format(d):'확인 전';}
function text(id,value){const e=overlay.querySelector('#'+id);if(e)e.textContent=value;}
function render(){
updateMenuLabel();
text('nuriUpdateCurrent',current==='local'?'초기 버전 / 확인 중':current.slice(0,9));
text('nuriUpdateLatest',latest?(latest.buildId||'알 수 없음').slice(0,9):'확인 전');
text('nuriUpdateDate',latest?fmt(latest.deployedAt):'확인 전');
text('nuriUpdateState',changed()?'🎉 새 게임 업데이트가 배포됐어. 저장 후 새로고침해!':error?'⚠️ 업데이트 정보를 확인하지 못했어. 잠시 뒤 다시 시도해.':loading?'최신 배포 정보 확인 중…':latest?'✅ 현재 확인된 최신 배포 정보야.':'서버 확인 전');
const ul=overlay.querySelector('#nuriUpdateNotes');ul.replaceChildren();
const entries=(latest&&Array.isArray(latest.notes))?latest.notes.slice(0,6):['업데이트 내역 확인 중'];
entries.forEach(item=>{const li=document.createElement('li');li.textContent=String(item).slice(0,220);ul.appendChild(li);});
overlay.querySelector('#nuriUpdateApply').hidden=!changed();
overlay.querySelector('#nuriUpdateCheck').disabled=loading;
}
async function check(){
if(loading)return;
loading=true;render();
try{
const response=await fetch(ENDPOINT+'?check='+Date.now(),{cache:'no-store',credentials:'same-origin'});
if(!response.ok)throw new Error('HTTP '+response.status);
const info=await response.json();
if(!info||typeof info.buildId!=='string'||!info.buildId)throw new Error('버전 정보 없음');
latest=info;error=false;checkedAt=Date.now();
}catch(e){error=true;checkedAt=Date.now();console.warn('[태빈이 키우기] 업데이트 확인 실패:',e.message);}
finally{loading=false;render();}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
