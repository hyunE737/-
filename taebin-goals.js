/* 한태빈의 인생 100가지 목표. 누리 키우기와 분리된 전용 시스템. */
(function(){
'use strict';
const CATEGORIES=[{"id":"c0","name":"가족","icon":"🏠","stat":"social","goals":[{"id":"t0_0","name":"첫 가족사진 남기기","age":1,"cost":0},{"id":"t0_1","name":"가족에게 그림 선물하기","age":5,"cost":2},{"id":"t0_2","name":"부모님과 함께 요리하기","age":8,"cost":4},{"id":"t0_3","name":"집안일 한 가지 맡기","age":10,"cost":0},{"id":"t0_4","name":"가족과 박물관 가기","age":12,"cost":8},{"id":"t0_5","name":"부모님께 감사 편지 쓰기","age":14,"cost":0},{"id":"t0_6","name":"어른들의 어린 시절 이야기 듣기","age":16,"cost":0},{"id":"t0_7","name":"가족 기념일 직접 준비하기","age":18,"cost":15},{"id":"t0_8","name":"가족 여행 앨범 만들기","age":22,"cost":20},{"id":"t0_9","name":"가족 인생 인터뷰 촬영하기","age":28,"cost":15}]},{"id":"c1","name":"우정","icon":"🤝","stat":"social","goals":[{"id":"t1_0","name":"새 친구에게 먼저 인사하기","age":5,"cost":0},{"id":"t1_1","name":"친구와 비밀 아지트 만들기","age":7,"cost":3},{"id":"t1_2","name":"친구의 고민 끝까지 듣기","age":10,"cost":0},{"id":"t1_3","name":"친구에게 진심 어린 사과하기","age":12,"cost":0},{"id":"t1_4","name":"친구들과 팀 프로젝트 하기","age":14,"cost":4},{"id":"t1_5","name":"오래된 친구에게 연락하기","age":16,"cost":0},{"id":"t1_6","name":"친구 생일 서프라이즈 준비하기","age":18,"cost":8},{"id":"t1_7","name":"함께하는 여행 계획하기","age":20,"cost":10},{"id":"t1_8","name":"서로의 꿈 응원해 주기","age":24,"cost":0},{"id":"t1_9","name":"친구들과 추억 다큐 만들기","age":30,"cost":18}]},{"id":"c2","name":"배움","icon":"📚","stat":"intelligence","goals":[{"id":"t2_0","name":"첫 그림책 완독하기","age":4,"cost":0},{"id":"t2_1","name":"도서관 회원증 만들기","age":7,"cost":0},{"id":"t2_2","name":"과학 원리 하나 탐구하기","age":9,"cost":2},{"id":"t2_3","name":"처음 배우는 외국어 인사 익히기","age":11,"cost":0},{"id":"t2_4","name":"관심 분야 발표 준비하기","age":13,"cost":0},{"id":"t2_5","name":"새로운 프로그램 익히기","age":15,"cost":6},{"id":"t2_6","name":"자격증 공부 계획 세우기","age":17,"cost":5},{"id":"t2_7","name":"직업인 인터뷰하기","age":19,"cost":2},{"id":"t2_8","name":"심화 기술 프로젝트 완수하기","age":25,"cost":15},{"id":"t2_9","name":"새로운 분야를 처음부터 배워보기","age":35,"cost":12}]},{"id":"c3","name":"창작","icon":"🎨","stat":"creativity","goals":[{"id":"t3_0","name":"나만의 낙서책 만들기","age":5,"cost":1},{"id":"t3_1","name":"짧은 동화 쓰기","age":8,"cost":0},{"id":"t3_2","name":"직접 만든 노래 녹음하기","age":11,"cost":4},{"id":"t3_3","name":"네 컷 만화 완성하기","age":13,"cost":2},{"id":"t3_4","name":"첫 사진 전시 열기","age":15,"cost":10},{"id":"t3_5","name":"짧은 영상 제작하기","age":17,"cost":12},{"id":"t3_6","name":"작은 게임 기획서 만들기","age":19,"cost":0},{"id":"t3_7","name":"포트폴리오 사이트 완성하기","age":22,"cost":16},{"id":"t3_8","name":"주제 있는 단편영화 만들기","age":28,"cost":30},{"id":"t3_9","name":"나만의 작품집 발간하기","age":35,"cost":25}]},{"id":"c4","name":"탐험","icon":"🧭","stat":"happiness","goals":[{"id":"t4_0","name":"동네 산책길 새로 발견하기","age":5,"cost":0},{"id":"t4_1","name":"근처 공원 지도 만들기","age":8,"cost":0},{"id":"t4_2","name":"지역 문화공간 방문하기","age":11,"cost":4},{"id":"t4_3","name":"낯선 동네의 맛집 찾아보기","age":13,"cost":8},{"id":"t4_4","name":"친구들과 당일치기 나들이","age":16,"cost":12},{"id":"t4_5","name":"혼자서 하루 여행 계획하기","age":18,"cost":10},{"id":"t4_6","name":"다른 지역 문화축제 즐기기","age":20,"cost":20},{"id":"t4_7","name":"국내 기차 여행 떠나기","age":23,"cost":32},{"id":"t4_8","name":"새로운 도시에서 일주일 살아보기","age":30,"cost":45},{"id":"t4_9","name":"평생 기억할 풍경 사진 찍기","age":38,"cost":16}]},{"id":"c5","name":"건강","icon":"🌿","stat":"health","goals":[{"id":"t5_0","name":"매일 손 씻는 습관 만들기","age":4,"cost":0},{"id":"t5_1","name":"잠들기 전 스트레칭 배우기","age":7,"cost":0},{"id":"t5_2","name":"내게 맞는 운동 찾아보기","age":10,"cost":3},{"id":"t5_3","name":"일주일 산책 챌린지","age":12,"cost":0},{"id":"t5_4","name":"충분히 쉬는 휴일 계획하기","age":14,"cost":0},{"id":"t5_5","name":"건강한 한 끼 직접 만들기","age":16,"cost":5},{"id":"t5_6","name":"가벼운 운동 루틴 만들기","age":19,"cost":0},{"id":"t5_7","name":"정기 건강검진 받기","age":24,"cost":10},{"id":"t5_8","name":"마음 돌보기 일기 작성하기","age":29,"cost":0},{"id":"t5_9","name":"오래 지킬 건강 습관 완성하기","age":36,"cost":0}]},{"id":"c6","name":"도전","icon":"🚀","stat":"charm","goals":[{"id":"t6_0","name":"처음으로 손들고 발표하기","age":7,"cost":0},{"id":"t6_1","name":"어려운 퍼즐 끝까지 풀기","age":10,"cost":0},{"id":"t6_2","name":"새로운 동아리 가입하기","age":12,"cost":0},{"id":"t6_3","name":"사람들 앞에서 공연하기","age":15,"cost":5},{"id":"t6_4","name":"작은 대회에 작품 출품하기","age":17,"cost":8},{"id":"t6_5","name":"첫 면접 연습하기","age":19,"cost":0},{"id":"t6_6","name":"낯선 분야 프로젝트 도전하기","age":22,"cost":8},{"id":"t6_7","name":"자신만의 팀 프로젝트 이끌기","age":26,"cost":10},{"id":"t6_8","name":"실패한 일을 다시 시도하기","age":31,"cost":0},{"id":"t6_9","name":"새로운 10년의 꿈 선언하기","age":40,"cost":0}]},{"id":"c7","name":"나눔","icon":"💛","stat":"social","goals":[{"id":"t7_0","name":"도움이 필요한 친구 배려하기","age":7,"cost":0},{"id":"t7_1","name":"동네 쓰레기 줍기","age":10,"cost":0},{"id":"t7_2","name":"도서관 자원봉사 참여하기","age":13,"cost":0},{"id":"t7_3","name":"후배의 숙제 공부 도와주기","age":16,"cost":0},{"id":"t7_4","name":"작은 기부 약속 실천하기","age":18,"cost":5},{"id":"t7_5","name":"지역 행사 자원봉사하기","age":20,"cost":0},{"id":"t7_6","name":"배운 기술을 무료로 가르치기","age":24,"cost":0},{"id":"t7_7","name":"신입 구성원 멘토가 되기","age":28,"cost":0},{"id":"t7_8","name":"공익 캠페인 콘텐츠 만들기","age":34,"cost":10},{"id":"t7_9","name":"다음 세대 꿈 응원 프로젝트","age":40,"cost":20}]},{"id":"c8","name":"자립","icon":"💼","stat":"intelligence","goals":[{"id":"t8_0","name":"첫 용돈 저축하기","age":8,"cost":0},{"id":"t8_1","name":"한 달 예산표 만들기","age":12,"cost":0},{"id":"t8_2","name":"필요한 물건 가격 비교하기","age":14,"cost":0},{"id":"t8_3","name":"내 통장 관리법 배우기","age":16,"cost":0},{"id":"t8_4","name":"진로 계획표 작성하기","age":17,"cost":0},{"id":"t8_5","name":"첫 아르바이트 계획하기","age":18,"cost":0},{"id":"t8_6","name":"생활비 지출 기록하기","age":21,"cost":0},{"id":"t8_7","name":"첫 독립 생활 계획 세우기","age":24,"cost":8},{"id":"t8_8","name":"무리하지 않는 저축 목표 세우기","age":28,"cost":0},{"id":"t8_9","name":"일과 삶의 균형 계획 완성하기","age":35,"cost":0}]},{"id":"c9","name":"기록","icon":"📔","stat":"creativity","goals":[{"id":"t9_0","name":"오늘의 기분 일기 쓰기","age":6,"cost":0},{"id":"t9_1","name":"첫 엽서 보내기","age":9,"cost":2},{"id":"t9_2","name":"1년 뒤의 나에게 편지 쓰기","age":12,"cost":0},{"id":"t9_3","name":"어릴 적 추억 상자 만들기","age":14,"cost":3},{"id":"t9_4","name":"학교 졸업 기록 남기기","age":18,"cost":5},{"id":"t9_5","name":"나만의 버킷리스트 쓰기","age":20,"cost":0},{"id":"t9_6","name":"친구들과 사진 앨범 만들기","age":23,"cost":8},{"id":"t9_7","name":"내 인생 사진 에세이 쓰기","age":29,"cost":10},{"id":"t9_8","name":"지난 10년을 영상으로 정리하기","age":35,"cost":14},{"id":"t9_9","name":"100가지 목표 달성 기록 전시하기","age":40,"cost":20}]}];
const GOALS=CATEGORIES.flatMap(c=>c.goals.map(g=>({...g,category:c.name,icon:c.icon,stat:c.stat})));
if(GOALS.length!==100||new Set(GOALS.map(g=>g.id)).size!==100)throw Error('한태빈 목표 목록은 정확히 100개여야 합니다.');
let activeFilter='all';
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function ensure(){
 if(!Array.isArray(state.taebinGoalsDone))state.taebinGoalsDone=[];
 state.taebinGoalsDone=[...new Set(state.taebinGoalsDone.filter(id=>GOALS.some(g=>g.id===id)))];
 if(!Array.isArray(state.taebinGoalHistory))state.taebinGoalHistory=[];
 if(state.taebinGoalsDone.length===100&&!state.taebinAllGoalsAchieved){
   state.taebinAllGoalsAchieved=true;
   state.taebinGoalsFinishedAge=state.age;
   state.log.push('🏆 한태빈이 인생 목표 100개를 모두 달성했어!');
 }
 return state.taebinGoalsDone;
}
function count(){return ensure().length;}
function completed(id){return ensure().includes(id);}
function canDo(g){return !!state.family&&state.alive&&state.age>=g.age&&state.money>=g.cost;}
function updateProgress(){
 if(typeof state==='undefined'||!state?.family)return;
 const done=count(),pct=done;
 for(const [id,txt] of [['taebinGoalCount',done+' / 100'],['taebinGoalStatus',done===100?'🏆 100가지 꿈 완주!':`한태빈이 달성한 꿈 ${done}개 · 남은 목표 ${100-done}개`]]){
  const node=document.getElementById(id);if(node)node.textContent=txt;
 }
 const bar=document.getElementById('taebinGoalBar');if(bar)bar.style.width=pct+'%';
 const hud=document.getElementById('cashHud');if(hud)hud.textContent='인생 목표 '+done+'/100';
 const wealthTotal=document.getElementById('wealthTotal');if(wealthTotal)wealthTotal.textContent=done+'/100';
 const wealthFill=document.getElementById('wealthFill');if(wealthFill)wealthFill.style.width=pct+'%';
 const wealthPercent=document.getElementById('wealthPercent');if(wealthPercent)wealthPercent.textContent=done+'%';
 const wealthTrack=document.getElementById('wealthTrack');if(wealthTrack)wealthTrack.setAttribute('aria-valuenow',String(done));
 const wealthDetail=document.getElementById('wealthDetail');if(wealthDetail)wealthDetail.textContent='인생 경험을 쌓으며 100가지 목표를 하나씩 달성해 봐.';
}
function renderModal(){
 ensure();
 const done=count();
 modalHeader('한태빈의 100가지 인생 목표','TAEBIN LIFE · THE BUCKET LIST');
 const body=document.getElementById('appModalBody');
 const title=done===100?'<div class="taebin-goal-victory"><h3>🏆 100가지 꿈 모두 달성!</h3><p>한태빈은 돈이 아니라 추억, 배움, 도전, 사람들과의 연결로 자신의 인생을 완성했어. 게임은 계속할 수도 있어.</p></div>':'<p class="taebin-goal-hint">목표를 하나씩 직접 실행해 봐. 나이·자금 조건을 충족하면 도전할 수 있고, 완료 기록은 자동 저장돼.</p>';
 const menu='<div class="taebin-goal-filter"><button type="button" data-filter="all" onclick="taebinGoalFilter(\'all\')">전체</button>'+CATEGORIES.map(c=>'<button type="button" data-filter="'+c.id+'" onclick="taebinGoalFilter(\''+c.id+'\')">'+c.icon+' '+c.name+'</button>').join('')+'</div>';
 const selected=CATEGORIES.filter(c=>activeFilter==='all'||activeFilter===c.id);
 const groups=selected.map(c=>'<section class="taebin-goal-category"><h4>'+c.icon+' '+c.name+' <small>'+c.goals.filter(g=>completed(g.id)).length+'/10</small></h4><div class="taebin-goal-list">'+c.goals.map(g=>{
  const marked=completed(g.id),ready=canDo(g);
  const desc=marked?'✅ 달성 완료':!state.alive?'이번 인생은 종료됐어':state.age<g.age?g.age+'살부터 도전할 수 있어':state.money<g.cost?'필요한 자금이 부족해':'지금 도전할 수 있어';
  return '<article class="taebin-goal-item '+(marked?'finished':'')+'"><span class="taebin-goal-dot">'+(marked?'✓':'○')+'</span><div><b>'+escapeHtml(g.name)+'</b><small>'+escapeHtml(desc)+' · 필요한 나이 '+g.age+'살 · 비용 '+formatWon(g.cost)+'</small></div><button type="button" onclick="taebinGoalDo(\''+g.id+'\')" '+(marked||!ready?'disabled':'')+'>'+(marked?'완료':'도전')+'</button></article>';
 }).join('')+'</div></section>').join('');
 body.innerHTML='<div class="taebin-goal-head"><b>달성 '+done+' / 100</b><span>남은 꿈 '+(100-done)+'개</span></div><div class="taebin-goal-progress"><i style="width:'+done+'%"></i></div>'+title+menu+groups+'<div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal(\'menu\')">← 메뉴로</button><button type="button" class="modal-action" onclick="closeAppModal()">게임 계속하기</button></div>';
 body.querySelectorAll('[data-filter]').forEach(el=>el.classList.toggle('selected',el.dataset.filter===activeFilter));
}
function doGoal(id){
 const g=GOALS.find(x=>x.id===id);
 if(!g||completed(id))return;
 if(!canDo(g)){if(typeof toast==='function')toast('나이와 자금 조건을 확인해 줘.');return;}
 state.money=Math.max(0,Math.round((state.money-g.cost)*100)/100);
 state.taebinGoalsDone.push(id);
 state.stats[g.stat]=Math.min(100,Math.max(0,Number(state.stats[g.stat])||0)+3);
 state.stats.happiness=Math.min(100,Math.max(0,Number(state.stats.happiness)||0)+1);
 const message='🌟 '+state.age+'살 · 인생 목표 '+count()+'/100: '+g.name;
 if(!Array.isArray(state.log))state.log=[];
 state.log.push(message);
 if(!Array.isArray(state.storyJournal))state.storyJournal=[];
 state.storyJournal.push({age:state.age,title:'100가지 꿈 · '+g.name,intro:'한태빈의 인생 목표 노트에서 '+g.category+' 분야에 새로운 별 하나가 채워졌어.',choice:g.name,outcome:'직접 계획하고 실행하며 경험을 얻었어. '+g.category+'에서 한 걸음 성장했어.'});
 if(!Array.isArray(state.taebinGoalHistory))state.taebinGoalHistory=[];
 state.taebinGoalHistory.push({id,age:state.age});
 state.lastOutcome='✨ '+g.name+' 목표를 달성했어!';
 ensure();
 updateProgress();
 if(typeof render==='function')render();
 if(typeof save==='function')save();
 renderModal();
 if(typeof toast==='function')toast(count()===100?'🎉 100가지 인생 목표를 모두 달성했어!':'새로운 인생 목표 달성! '+count()+'/100');
}
window.taebinGoalDo=doGoal;
window.taebinGoalFilter=function(filter){activeFilter=filter;renderModal();};
window.taebinGoalTick=updateProgress;
window.renderTaebinGoalModal=renderModal;
window.taebinGoalCount=count;
window.taebinGoals=GOALS;
})();