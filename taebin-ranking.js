/* TAEBIN LIFE · 100-goal public ranking, Supabase RLS + opt-in nickname */
(function(){
'use strict';
const cfg=window.NURI_AUTH_CONFIG||{};
const BASE=String(cfg.supabaseUrl||'').trim().replace(/\/+$/,'');
const KEY=String(cfg.supabaseAnonKey||'').trim();
const ONLINE=/^https:\/\/[\w.-]+\.supabase\.co$/i.test(BASE)&&KEY.length>20;
const root=()=>document.getElementById('appModalBody');
const escapeText=s=>String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','"':'&quot;',"'":'&#39;'}[ch]));
const profile=()=>typeof window.taebinAccountInfo==='function'?window.taebinAccountInfo():{mode:'guest'};
let opening=0;
let priorNickname='';
function errorText(e){const msg=String(e?.message||e||'서버 연결 오류');return /fetch|network|failed to fetch/i.test(msg)?'인터넷 연결 상태를 확인해 줘.':msg;}
async function request(path,options={}){
 if(!ONLINE)throw Error('랭킹 서버 설정이 없어.');
 const token=options.loggedIn?await window.taebinAccountToken?.():null;
 if(options.loggedIn&&!token)throw Error('회원 로그인 후 이용할 수 있어.');
 const headers={apikey:KEY};
 if(token)headers.Authorization='Bearer '+token;
 if(options.body!==undefined)headers['Content-Type']='application/json';
 if(options.prefer)headers.Prefer=options.prefer;
 const resp=await fetch(BASE+path,{method:options.method||'GET',headers,body:options.body===undefined?undefined:JSON.stringify(options.body),cache:'no-store'});
 const data=await resp.text();
 let json=null;
 try{json=data?JSON.parse(data):null;}catch(e){json=null;}
 if(!resp.ok)throw Error(json?.message||json?.error||'서버 오류 '+resp.status);
 return json;
}
function showStatus(message){const el=document.getElementById('taebinRankStatus');if(el)el.textContent=message;}
function card(rows){
 if(!Array.isArray(rows)||!rows.length)return '<p class="rank-status">아직 등록한 플레이어가 없어. 회원으로 로그인하면 첫 번째 랭커가 될 수 있어!</p>';
 return '<ol class="rank-list">'+rows.map((item,i)=>'<li class="rank-row"><span class="rank-place">'+(i+1)+'위</span><div><b>'+escapeText(item.nickname)+'</b><small>공개 버킷리스트 기록</small></div><strong>'+Math.min(100,Math.max(0,Number(item.goal_count)||0))+' / 100</strong></li>').join('')+'</ol>';
}
async function load(current){
 try{
   const rows=await request('/rest/v1/taebin_rankings?select=nickname,goal_count,updated_at&order=goal_count.desc,updated_at.asc&limit=50');
   if(current!==opening)return;
   const el=document.getElementById('taebinRankEntries');if(el)el.innerHTML=card(rows);
   const p=profile();
   if(p.mode==='member'){
     const owned=await request('/rest/v1/taebin_rankings?user_id=eq.'+encodeURIComponent(p.id)+'&select=nickname,goal_count',{loggedIn:true});
     if(current!==opening)return;
     priorNickname=Array.isArray(owned)&&owned[0]?.nickname||'';
     const input=document.getElementById('taebinRankNickname');
     if(input&&document.activeElement!==input)input.value=priorNickname;
     const remove=document.getElementById('taebinRankRemove');
     if(remove)remove.hidden=!priorNickname;
     const mine=document.getElementById('taebinRankMyScore');
     if(mine)mine.textContent=priorNickname?'내 공개 점수 '+Math.min(100,Number(owned[0].goal_count)||0)+' / 100':'공개 랭킹에 아직 등록하지 않았어.';
   }
 }catch(e){
   if(current===opening){
     const el=document.getElementById('taebinRankEntries');
     if(el)el.innerHTML='<p class="rank-status">온라인 랭킹을 불러오지 못했어.</p>';
     showStatus(errorText(e));
   }
 }
}
function render(message=''){
 const p=profile(),member=p.mode==='member';
 const count=typeof window.taebinGoalCount==='function'?window.taebinGoalCount():0;
 const current=++opening;
 if(typeof modalHeader==='function')modalHeader('100가지 꿈 랭킹','TAEBIN LIFE · ONLINE RANKING');
 const form=member?'<div class="world-feature social-compose"><h3>내 목표 달성 기록 등록</h3><p class="modal-hint" id="taebinRankMyScore">내 점수 확인 중…</p><label>공개 닉네임 (실명 대신 별명 추천)<input id="taebinRankNickname" type="text" minlength="2" maxlength="16" placeholder="2~16자 게임 닉네임" autocomplete="off"></label><div class="social-actions"><button class="modal-action" type="button" onclick="taebinRankPublish()">랭킹에 기록 올리기 / 갱신</button><button class="modal-action" id="taebinRankRemove" type="button" onclick="taebinRankDelete()" hidden>내 공개 기록 삭제</button></div></div>':'<div class="world-feature"><p>게스트도 다른 플레이어의 랭킹을 볼 수 있어. 내 기록을 올리려면 회원 로그인이 필요해.</p><p class="modal-hint">현재 게스트 기록은 다른 플레이어에게 공개되지 않아.</p><button type="button" class="modal-action" onclick="openAppModal(\'account\')">계정 메뉴</button></div>';
 if(!root())return;
 root().innerHTML='<p class="modal-hint">전체 플레이어의 <b>달성한 인생 목표 개수</b> 순위야. 최대 50명까지 보여 줘. 공개되는 건 게임 닉네임과 달성 수뿐이야.</p><div class="world-feature"><h3>🏆 온라인 TOP 50</h3><div id="taebinRankEntries"><p class="rank-status">불러오는 중…</p></div></div><p class="rank-status">내 현재 버킷리스트: <b>'+count+' / 100</b></p>'+form+'<p id="taebinRankStatus" class="modal-hint" role="status">'+escapeText(message)+'</p><div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal(\'menu\')">← 메뉴</button></div>';
 load(current);
}
async function publish(){
 if(profile().mode!=='member'){showStatus('로그인 후 이용해 줘.');return;}
 const input=document.getElementById('taebinRankNickname');
 const nickname=String(input?.value||'').normalize('NFC').trim();
 if(!/^[\p{L}\p{N} _-]{2,16}$/u.test(nickname)||/^\d{6,}$/.test(nickname)){
   showStatus('닉네임은 한글·영문·숫자 2~16자로 입력해 줘.');return;
 }
 showStatus('게임 저장을 동기화하고 랭킹을 등록하고 있어…');
 try{
   await window.taebinAccountSync();
   const p=profile(),path='/rest/v1/taebin_rankings';
   const existing=await request(path+'?user_id=eq.'+encodeURIComponent(p.id)+'&select=user_id',{loggedIn:true});
   if(Array.isArray(existing)&&existing.length){
     await request(path+'?user_id=eq.'+encodeURIComponent(p.id),{loggedIn:true,method:'PATCH',body:{nickname},prefer:'return=minimal'});
   }else{
     await request(path,{loggedIn:true,method:'POST',body:{user_id:p.id,nickname},prefer:'return=minimal'});
   }
   render('랭킹 기록을 등록했어. 목표를 더 달성하면 클라우드 저장 시 점수가 자동 갱신돼.');
 }catch(e){showStatus('등록 실패: '+errorText(e));}
}
async function remove(){
 if(profile().mode!=='member'||!priorNickname)return;
 if(!confirm('내 온라인 랭킹 기록을 삭제할까? 게임 저장은 그대로 남아.'))return;
 showStatus('내 기록을 삭제하는 중…');
 try{
  const p=profile();
  await request('/rest/v1/taebin_rankings?user_id=eq.'+encodeURIComponent(p.id),{method:'DELETE',loggedIn:true,prefer:'return=minimal'});
  priorNickname='';
  render('공개 랭킹 기록을 삭제했어. 게임 저장은 유지돼.');
 }catch(e){showStatus('삭제 실패: '+errorText(e));}
}
window.taebinRenderRanking=render;
window.taebinRankPublish=publish;
window.taebinRankDelete=remove;
})();
