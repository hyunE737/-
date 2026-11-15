/* 누리 키우기 프롤로그 · 선택에 따라 출발 능력치와 이야기 기록 반영 */
(function(){
'use strict';
const OPTIONS=[
 {icon:'↩',title:'한 걸음 뒤로 물러선다',description:'순간적으로 주변을 살피며 안전하게 멈춰 선다.',outcome:'누리는 침착하게 뒤로 물러나 위험을 피했어.',effect:{intelligence:3,health:2},caption:'침착한 판단'},
 {icon:'📣',title:'주변 사람들에게 알려준다',description:'큰 소리로 위험을 알리고 함께 안전한 곳으로 이동한다.',outcome:'누리의 외침 덕분에 주변 사람들도 상황을 알아차렸어.',effect:{social:4,charm:2},caption:'함께하는 선택'},
 {icon:'🚦',title:'신호와 차의 움직임을 살핀다',description:'차의 움직임을 확인하며 안전한 곳에서 기다린다.',outcome:'누리는 신호와 차의 움직임을 확인하고 안전을 택했어.',effect:{intelligence:4,happiness:2},caption:'신중한 선택'},
 {icon:'🌿',title:'가까운 안전한 곳으로 이동한다',description:'주변 공간을 확인하고 인도 쪽 안전한 위치로 옮긴다.',outcome:'누리는 재빨리 안전한 위치로 이동해 위기를 넘겼어.',effect:{health:3,creativity:3},caption:'빠른 대처'}
];
let busy=false;
function open(){
 const family=document.getElementById('familyScreen');
 if(!family||family.style.display==='none')return;
 const root=document.getElementById('nuriPrologue');if(!root)return;
 root.hidden=false;
 document.body.classList.add('nuri-prologue-active');
 root.querySelector('.nuri-prologue-choice')?.focus();
}
function choose(index){
 if(busy)return;
 const opt=OPTIONS[index],root=document.getElementById('nuriPrologue');
 if(!opt||!root||root.hidden)return;
 busy=true;
 root.hidden=true;
 document.body.classList.remove('nuri-prologue-active');
 try{
  if(typeof startGame!=='function')throw new Error('게임 시작 함수를 찾을 수 없어.');
  startGame();
  if(typeof state!=='undefined'&&state){
   state.prologueChoice=index;
   Object.entries(opt.effect).forEach(([key,bonus])=>{
    if(state.stats && Number.isFinite(Number(state.stats[key])))state.stats[key]=((key==='health'||key==='happiness')?Math.min(100,Number(state.stats[key])+bonus):Number(state.stats[key])+bonus);
   });
   if(!Array.isArray(state.storyJournal))state.storyJournal=[];
   state.storyJournal.push({
    age:'프롤로그',title:'멈춰 선 시간',intro:'누리가 횡단보도를 건너다 다가오는 트럭을 발견한 순간, 시간이 잠시 멈췄어.',
    choice:opt.title,outcome:opt.outcome+' 그리고 시간은 다시 흘러, 누리의 새로운 인생이 시작됐어.'
   });
   if(!Array.isArray(state.log))state.log=[];
   state.log.push('📖 프롤로그 · '+opt.caption+': '+opt.outcome);
   if(typeof render==='function')render();
   if(typeof save==='function')save();
  }
 }catch(error){
  console.error('[누리 키우기] 프롤로그 시작 실패',error);
  root.hidden=false;document.body.classList.add('nuri-prologue-active');
  alert('게임 시작에 문제가 있어. 새로고침 후 다시 시도해 줘.');
 }finally{busy=false;}
}
window.nuriShowPrologue=open;
window.nuriChoosePrologue=choose;
function mount(){
 const root=document.getElementById('nuriPrologue');
 if(!root)return;
 const options=root.querySelector('#nuriPrologueChoices');
 if(!options)return;
 const statNames={intelligence:'지능',health:'체력',social:'인간관계',charm:'매력',happiness:'행복',creativity:'창의력'};
 options.innerHTML='';
 OPTIONS.forEach((opt,i)=>{
  const b=document.createElement('button');b.type='button';b.className='nuri-prologue-choice';
  const title=document.createElement('strong');title.textContent=(i+1).toString().padStart(2,'0')+'  '+opt.icon+'  '+opt.title;
  const description=document.createElement('span');description.textContent=opt.description;
  const bonus=document.createElement('small');bonus.textContent=Object.entries(opt.effect).map(([key,n])=>statNames[key]+' +'+n).join(' · ');
  b.append(title,description,bonus);
  b.addEventListener('click',()=>choose(i));
  options.append(b);
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
