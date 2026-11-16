/* Responsive presentation only: move existing nodes without recreating game controls. */
(function(){
 'use strict';
 function init(){
  const story=document.getElementById('storySection');
  const stats=document.getElementById('statsSection');
  const choices=document.getElementById('choices');
  if(!story||!stats||!choices)return;
  const media=window.matchMedia('(max-width:780px)');
  const home=document.createComment('story desktop position');
  story.parentNode.insertBefore(home,story);
  const details=document.createElement('details');
  details.className='mobile-story-details';
  const summary=document.createElement('summary');
  summary.textContent='이야기 기록 · 관계 · 태빈이의 한마디';
  details.appendChild(summary);
  const panels=[document.getElementById('storyPathPanel'),document.getElementById('romanceGlance'),story.querySelector('.nuri-comedy')].filter(Boolean).map(node=>{
   const marker=document.createComment('story panel position');
   node.parentNode.insertBefore(marker,node);
   return {node,marker};
  });
  function syncLayout(){
   if(media.matches){
    stats.parentNode.insertBefore(story,stats);
    choices.after(details);
    panels.forEach(({node})=>details.appendChild(node));
   }else{
    home.parentNode.insertBefore(story,home.nextSibling);
    panels.forEach(({node,marker})=>marker.parentNode.insertBefore(node,marker.nextSibling));
    details.remove();
   }
  }
  function syncHealth(){
   const health=document.getElementById('healthValue');
   const source=document.getElementById('restButton');
   const value=document.getElementById('mobileHealthValue');
   const button=document.getElementById('mobileRestButton');
   if(value&&health)value.textContent=health.textContent;
   if(button&&source){button.disabled=source.disabled;button.title=source.title;}
  }
  syncLayout();syncHealth();
  if(media.addEventListener)media.addEventListener('change',syncLayout);else media.addListener(syncLayout);
  const health=document.getElementById('healthValue');
  const rest=document.getElementById('restButton');
  if(health)new MutationObserver(syncHealth).observe(health,{childList:true,characterData:true,subtree:true});
  if(rest)new MutationObserver(syncHealth).observe(rest,{attributes:true,attributeFilter:['disabled','title']});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
