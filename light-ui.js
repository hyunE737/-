/* UI decoration only. Game mechanics and existing onclick callbacks remain untouched. */
(function(){
 'use strict';
 function currentAge(){
  try{ if(typeof state !== 'undefined' && state && Number.isFinite(+state.age)) return Math.max(0,Math.floor(+state.age)); }catch(e){}
  const pill=document.getElementById('stagePill');
  return Math.max(0,parseInt(pill&&pill.textContent||'0',10)||0);
 }
 const steps=[{name:'출생',at:0},{name:'학생',at:13},{name:'사회',at:20},{name:'중년',at:45},{name:'노년',at:65}];
 function setJourney(id,age){
  const el=document.getElementById(id);if(!el)return;
  let current=0;
  steps.forEach((s,i)=>{if(age>=s.at)current=i;});
  el.querySelectorAll('.timeline-stage').forEach((node,i)=>{
   node.classList.toggle('current',i===current);
   node.classList.toggle('done',i<current);
   if(i===current)node.setAttribute('aria-current','step');else node.removeAttribute('aria-current');
  });
  const label=document.getElementById('journeyAge');if(label)label.textContent=age+'살 · '+steps[current].name+' 단계';
 }
 function renderTopSkills(){
  const el=document.getElementById('nuriSkillRows');if(!el)return;
  let s;
  try{s=(typeof state!=='undefined' && state && state.stats)||null;}catch(e){s=null;}
  if(!s)return;
  const keys=[['intelligence','지능'],['creativity','창의력'],['social','인간관계'],['charm','매력']];
  keys.sort((a,b)=>(Number(s[b[0]])||0)-(Number(s[a[0]])||0));
  const items=keys.slice(0,3).map(([k,v],i)=>({name:v,val:(Number(s[k])||0).toFixed(1),order:i+1}));
  el.innerHTML=items.map(x=>'<div class="nuri-skill-item"><span class="nuri-skill-number">'+x.order+'</span><span class="nuri-skill-name">'+x.name+'</span><span class="nuri-skill-value">'+x.val+'</span></div>').join('');
 }
 function sync(){const age=currentAge();setJourney('nuriStartTimeline',0);setJourney('nuriGameTimeline',age);renderTopSkills();}
 function init(){
  const pulse=document.getElementById('ageLabel');const stats=document.getElementById('stats');
  if(pulse)new MutationObserver(sync).observe(pulse,{childList:true,characterData:true,subtree:true});
  if(stats)new MutationObserver(renderTopSkills).observe(stats,{childList:true,characterData:true,subtree:true});
  sync();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
