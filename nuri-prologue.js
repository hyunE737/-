/* 누리 키우기 · 로그인 다음 프롤로그, 그다음 가족 선택 */
(function(){
'use strict';
const OPTIONS=[
 {icon:'↩',title:'한 걸음 뒤로 물러선다',description:'순간적으로 주변을 살피며 안전하게 멈춰 선다.',outcome:'누리는 침착하게 뒤로 물러나 위험을 피했어.',effect:{intelligence:3,health:2},caption:'침착한 판단'},
 {icon:'📣',title:'주변 사람들에게 알려준다',description:'큰 소리로 위험을 알리고 함께 안전한 곳으로 이동한다.',outcome:'누리의 외침 덕분에 주변 사람들도 상황을 알아차렸어.',effect:{social:4,charm:2},caption:'함께하는 선택'},
 {icon:'🚦',title:'신호와 차의 움직임을 살핀다',description:'차의 움직임을 확인하며 안전한 곳에서 기다린다.',outcome:'누리는 신호와 차의 움직임을 확인하고 안전을 택했어.',effect:{intelligence:4,happiness:2},caption:'신중한 선택'},
 {icon:'🌿',title:'가까운 안전한 곳으로 이동한다',description:'주변 공간을 확인하고 인도 쪽 안전한 위치로 옮긴다.',outcome:'누리는 재빨리 안전한 위치로 이동해 위기를 넘겼어.',effect:{health:3,creativity:3},caption:'빠른 대처'}
];
let selected=null,completed=false,opened=false,previewMode=false;
function isReady(){
 const account=document.getElementById('nuriAccountGate');
 const family=document.getElementById('familyScreen');
 const game=document.getElementById('gameMain');
 if(!account||!family||!game||!account.hidden)return false;
 if(family.style.display==='none'||game.style.display==='block')return false;
 return true;
}
function show(forcePreview=false){
 if(!forcePreview&&(completed||opened||!isReady()))return;
 const root=document.getElementById('nuriPrologue');
 if(!root)return;
 previewMode=!!forcePreview;
 opened=true;root.hidden=false;
 document.body.classList.add('nuri-prologue-active');
 const first=root.querySelector('.nuri-prologue-choice');
 if(first)first.focus();
}
function choose(index){
 const option=OPTIONS[index],root=document.getElementById('nuriPrologue');
 if(!option||!root||root.hidden||completed)return;
 if(!previewMode){selected=index;completed=true;}
 opened=false;
 root.hidden=true;document.body.classList.remove('nuri-prologue-active');
 if(previewMode){previewMode=false;return;}
 const family=document.getElementById('familyScreen');
 if(family){family.style.display='';family.scrollIntoView({block:'start',behavior:'instant'});}
}
function applyChoice(){
 if(selected===null)return;
 const option=OPTIONS[selected];selected=null;
 if(!option||typeof state==='undefined'||!state)return;
 state.prologueChoice=OPTIONS.indexOf(option);
 for(const [key,bonus] of Object.entries(option.effect)){
  if(state.stats && Number.isFinite(Number(state.stats[key]))){
   const next=Number(state.stats[key])+bonus;
   state.stats[key]=(key==='health'||key==='happiness')?Math.min(100,next):next;
  }
 }
 if(!Array.isArray(state.storyJournal))state.storyJournal=[];
 state.storyJournal.push({
  age:'프롤로그',title:'멈춰 선 시간',
  intro:'누리가 횡단보도를 건너다 다가오는 트럭을 발견한 순간, 시간이 잠시 멈췄어.',
  choice:option.title,
  outcome:option.outcome+' 새로운 인생의 첫 페이지가 열렸어.'
 });
 if(!Array.isArray(state.log))state.log=[];
 state.log.push('📖 프롤로그 · '+option.caption+': '+option.outcome);
}
function resetFlow(){
 selected=null;completed=false;opened=false;previewMode=false;
 const root=document.getElementById('nuriPrologue');
 if(root)root.hidden=true;
 document.body.classList.remove('nuri-prologue-active');
 setTimeout(show,0);
}
window.nuriApplyPrologueChoice=applyChoice;
window.nuriResetPrologueFlow=resetFlow;
window.nuriPreviewPrologue=()=>show(true);
function mount(){
 const root=document.getElementById('nuriPrologue');
 const grid=root&&root.querySelector('#nuriPrologueChoices');
 if(!grid)return;
 const statNames={intelligence:'지능',health:'체력',social:'인간관계',charm:'매력',happiness:'행복',creativity:'창의력'};
 grid.replaceChildren();
 OPTIONS.forEach((option,index)=>{
  const button=document.createElement('button');
  button.type='button';button.className='nuri-prologue-choice';
  const title=document.createElement('strong');title.textContent=String(index+1).padStart(2,'0')+'  '+option.icon+'  '+option.title;
  const description=document.createElement('span');description.textContent=option.description;
  const effects=document.createElement('small');effects.textContent=Object.entries(option.effect).map(([k,v])=>statNames[k]+' +'+v).join(' · ');
  button.append(title,description,effects);
  button.addEventListener('click',()=>choose(index));
  grid.append(button);
 });
 // 로그인 완료 시 계정 화면이 숨겨지는 것을 감지해 프롤로그 자동 시작.
 const account=document.getElementById('nuriAccountGate');
 const family=document.getElementById('familyScreen');
 if(account)new MutationObserver(()=>show()).observe(account,{attributes:true,attributeFilter:['hidden']});
 if(family)new MutationObserver(()=>show()).observe(family,{attributes:true,attributeFilter:['style']});
 setTimeout(show,0);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
