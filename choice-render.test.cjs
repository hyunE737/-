const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const script=new vm.Script(fs.readFileSync(path.join(__dirname,'game.js'),'utf8'),{filename:'game.js'});
function mount(saved){
 const data=new Map(),els=new Map();
 const element=(id='')=>{
  const classes=new Set(),style={display:id==='gameMain'?'none':''};
  return {style,dataset:{},innerHTML:'',textContent:'',classList:{
   add(...items){items.forEach(item=>classes.add(item))},
   remove(...items){items.forEach(item=>classes.delete(item))},
   toggle(item,on){if(on??!classes.has(item))classes.add(item);else classes.delete(item)},
   contains(item){return classes.has(item)}
  },setAttribute(){},scrollTo(){},scrollIntoView(){},remove(){}};
 };
 const get=id=>{if(!els.has(id))els.set(id,element(id));return els.get(id)};
 const dom={getElementById:get,querySelector:()=>null,querySelectorAll:()=>[],body:element(),documentElement:element()};
 if(saved)data.set('save',JSON.stringify(saved));
 const context=vm.createContext({document:dom,localStorage:{getItem:key=>data.get(key)||null,setItem:(key,v)=>data.set(key,v),removeItem:key=>data.delete(key)},console,Math:Object.create(Math),setTimeout:()=>1,clearTimeout:()=>{},confirm:()=>true,nuriCurrentSaveKey:()=>'save',nuriCurrentLegacyKey:()=>'legacy'});
 context.window=context;context.Math.random=()=>.6;
 const run=code=>vm.runInContext(code,context);
 script.runInContext(context);
 return {run,get};
}
const core={version:3,age:20,family:'ordinary',adultPath:'취업',lifeRoute:'work',money:100,stats:{health:85,happiness:50,social:5,charm:5,intelligence:5,creativity:5},settings:{gameSpeed:'turbo',realisticLife:false,randomEvents:false,absurdEvents:false}};
const readChoices=game=>Array.from(game.get('choices').innerHTML.matchAll(/onclick="(choose|chooseStoryOption|chooseTurningPoint)\((\d+)\)"/g),(m)=>[m[1],Number(m[2])]);
for(const [route,age] of [['work',20],['university',20],['prep',20],['military',21],['work',65]]){
 const resumed=mount({...core,lifeRoute:route,age,storySeen:[age],workStatus:route==='work'?'employed':'none'});
 assert.ok(readChoices(resumed).length>=3,route+' route choices missing after reload');
}
const legacy=mount({...core,age:16,schoolPath:'',adultPath:'',lifeRoute:'',storySeen:[16],pendingStory:{age:16,options:[]}});
assert.ok(readChoices(legacy).length>0,'Missing options after bad story save');
const awaiting=mount({...core,age:20,storySeen:[20],pendingTurningPoint:{age:20,title:'전환점',story:'테스트',options:[{label:'이야기로',effect:['social',3]}]},pendingStory:{age:20,title:'다음 이야기',text:'테스트',options:[{label:'다음으로',effect:['charm',3]}]}});
assert.equal(readChoices(awaiting)[0][0],'chooseTurningPoint');
awaiting.run('chooseTurningPoint(0)');
assert.equal(readChoices(awaiting)[0][0],'chooseStoryOption');
awaiting.run('chooseStoryOption(0)');
assert.equal(readChoices(awaiting)[0][0],'choose');
const queued=mount({...core,storySeen:[20],arcQueue:[null,{age:20,title:'비어 있음',options:[]},{age:20,title:'정상 저장 스토리',text:'테스트',options:[{label:'계속',effect:['social',3]}]}]});
assert.equal(readChoices(queued)[0][0],'chooseStoryOption');
assert.match(queued.get('story').textContent,/정상 저장 스토리/);
for(const [family,startIndex] of [['ordinary',0],['supportive',1],['frugal',2],['wealthy',3]]){
 let game=mount();
 game.run('selectFamily("'+family+'");startGame();state.settings.gameSpeed="turbo";state.settings.realisticLife=false');
 let reloaded=-1;
 for(let step=0;step<370&&game.run('state.alive');step++){
  const age=game.run('state.age');
  const choices=readChoices(game);
  assert.ok(choices.length,JSON.stringify({family,age,step,story:game.get('story').textContent}));
  if([19,20,21,35,65].includes(age)&&age!==reloaded){
   reloaded=age;
   game=mount(JSON.parse(game.run('JSON.stringify(state)')));
   assert.ok(readChoices(game).length, family+' reload at '+age);
  }
  const current=readChoices(game);
  const pick=current[game.run('state.age===19&&!state.adultPath')&&current[0][0]==='choose'?startIndex%current.length:0];
  game.run(pick[0]+'('+pick[1]+')');
 }
 assert.equal(game.run('state.age'),100,family+' did not reach an ending');
}
console.log('PASS full script: adult route reloads, invalid saved choices, turning points, queued stories and all four families through age 100');
