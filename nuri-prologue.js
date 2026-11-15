/* 누리 키우기 · 프롤로그에서 집안을 선택해 바로 새 인생 시작 */
(function(){
'use strict';
const OPTIONS=[
 {family:'wealthy',icon:'💎',title:'재벌집 막내아들',description:'넉넉한 기회와 엄격한 규칙 속에서, 집안의 기대와 나의 꿈을 조율해.',caption:'부유한 집안'},
 {family:'supportive',icon:'🌟',title:'꿈을 응원해주는 집 외동아들',description:'꿈을 전폭 지원하는 가족과 성장해. 꿈을 포기하면 프로젝트 지원도 멈춰.',caption:'응원하는 집안'},
 {family:'ordinary',icon:'🏠',title:'평범한 가정집 아들',description:'평범한 환경에서 나만의 길을 만들어 가.',caption:'평범한 집안'},
 {family:'frugal',icon:'🌱',title:'찢어지게 가난한 집 첫째 아들',description:'빠듯한 형편 속 다정한 가족과 뛰어난 재능으로, 무료 배움과 장학 기회를 찾아가.',caption:'가난한 집안'}
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
 if(forcePreview&&typeof window.closeAppModal==='function')window.closeAppModal();
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
 if(previewMode){
  root.hidden=true;document.body.classList.remove('nuri-prologue-active');
  previewMode=false;opened=false;return;
 }
 if(typeof window.selectFamily!=='function'||typeof window.startGame!=='function'){
  alert('게임 파일을 불러오지 못했어. 새로고침하고 다시 시도해 줘.');
  return;
 }
 selected=index;completed=true;opened=false;
 root.hidden=true;document.body.classList.remove('nuri-prologue-active');
 window.selectFamily(option.family);
 window.startGame();
}
function applyChoice(){
 if(selected===null)return;
 const option=OPTIONS[selected];selected=null;
 if(!option||typeof state==='undefined'||!state)return;
 state.prologueChoice=OPTIONS.indexOf(option);
 if(!Array.isArray(state.storyJournal))state.storyJournal=[];
 state.storyJournal.unshift({
  age:'프롤로그',title:'다시 시작하는 인생',
  intro:'누리가 횡단보도를 건너던 순간 트럭이 다가왔고, 시간이 멈춘 듯 새로운 시작의 기회가 열렸어.',
  choice:option.title,
  outcome:'누리는 '+option.title+'로 시작 자금 '+formatWon(families[option.family].money)+'을 갖고 새로운 인생을 시작했어.'
 });
 if(!Array.isArray(state.log))state.log=[];
 state.log.push('📖 프롤로그 · '+option.caption+' 선택. 누리가 다시 태어났어.');
}
function resetFlow(){
 if(document.getElementById('gameMain')?.style.display==='block')return;
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
 grid.replaceChildren();
 OPTIONS.forEach((option,index)=>{
  const button=document.createElement('button');
  button.type='button';button.className='nuri-prologue-choice';
  const title=document.createElement('strong');title.textContent=String(index+1).padStart(2,'0')+'  '+option.icon+'  '+option.title;
  const description=document.createElement('span');description.textContent=option.description;
  const money=document.createElement('span');
  money.className='nuri-prologue-cash';
  money.textContent='시작 자금 '+formatWon(families[option.family].money);
  button.append(title,money,description);
  button.addEventListener('click',()=>choose(index));
  grid.append(button);
 });
 const account=document.getElementById('nuriAccountGate');
 const family=document.getElementById('familyScreen');
 if(account)new MutationObserver(()=>show()).observe(account,{attributes:true,attributeFilter:['hidden']});
 if(family)new MutationObserver(()=>show()).observe(family,{attributes:true,attributeFilter:['style']});
 setTimeout(show,0);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();