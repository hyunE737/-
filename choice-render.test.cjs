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

const snapshot=game=>JSON.parse(game.run('JSON.stringify(state)'));
for(const [family,speed] of [['ordinary','normal'],['wealthy','normal'],['supportive','fast'],['frugal','turbo']]){
 let game=mount();
 game.run(`selectFamily(${JSON.stringify(family)});startGame();state.settings.gameSpeed=${JSON.stringify(speed)};state.settings.realisticLife=false`);
 const seen=new Set();
 let birthdays=0;
 for(let step=0;game.run('state.age<3')&&step<60;step++){
  const prompt=game.get('story').textContent;
  assert.ok(!seen.has(prompt),family+' repeated '+prompt);
  seen.add(prompt);
  const age=game.run('state.age');
  if(prompt.includes('누리의 첫 생일')){
   assert.equal(age,1);
   birthdays++;
   game=mount(snapshot(game));
   assert.equal(game.get('story').textContent,prompt,'Pending birthday was lost on reload');
  }
  const [action,index]=readChoices(game)[0];
  game.run(`${action}(${index})`);
 }
 assert.equal(game.run('state.age'),3);
 assert.equal(birthdays,1,family+' birthday did not happen once');
 assert.equal(game.run('state.storyJournal.filter(entry=>entry.age===1).length'),1);
}

const oldBaby=mount({...core,age:1,yearDay:2,sceneTurn:12,storySeen:[0]});
assert.equal(oldBaby.run('state.pendingStory'),null,'Midyear legacy save replayed a birthday');
assert.doesNotMatch(oldBaby.get('story').textContent,/첫 생일/);
const oldChild=mount({...core,age:3,sceneTurn:8,storySeen:[0,3],log:['3살 · DAY 1 · 성장 2/5: ✂️ 종이 동물 접기']});
assert.ok(oldChild.run('dailySceneCursor("child")')>0,'Legacy scene history was lost');
assert.doesNotMatch(oldChild.get('story').textContent,/색종이로 무엇이든/);
const resting=mount({...core,stats:{...core.stats,health:80},age:2,yearDay:0,storySeen:[0,1,2]});
const beforeRest=resting.get('story').textContent;
resting.run('restNow()');
assert.notEqual(resting.get('story').textContent,beforeRest,'A new day repeated a scene after rest');

let lifetime=mount();
lifetime.run('startGame();state.settings.gameSpeed="normal";state.settings.realisticLife=false;state.settings.randomEvents=false');
const lifetimeScenes=new Set();
const recurring=new Map([[25,'졸업 발표를 준비할 때는'],[35,'하린은 처음 만났을 때'],[70,'앨범에서 한 살 때']]);
let generated=0;
let absurd=0;
for(let step=0;lifetime.run('state.alive')&&step<1900;step++){
 const [[action,index]]=readChoices(lifetime);
 const age=lifetime.run('state.age');
 const prompt=lifetime.get('story').textContent;
 if(action==='choose'&&!lifetime.run('(state.age===16&&!state.schoolPath)||(state.age===19&&!state.adultPath)')){
  assert.ok(!lifetimeScenes.has(prompt),`${age} years old repeated ${prompt}`);
  lifetimeScenes.add(prompt);
  if(prompt.includes('에 있을 때야.'))generated++;
  if(prompt.startsWith('오늘의 황당 사건'))absurd++;
 }
 if(action==='chooseStoryOption'&&recurring.has(age)&&prompt.includes(recurring.get(age)))recurring.delete(age);
 if(age===56&&lifetime.run('state.yearDay===0&&state.progress===0')){
  lifetime=mount(snapshot(lifetime));
  assert.equal(lifetime.get('story').textContent,prompt,'Reload changed the current scene');
 }
 lifetime.run(`${action}(${index})`);
}
assert.equal(lifetime.run('state.age'),100);
assert.ok(generated>500,'Generated scenes were not exercised');
assert.ok(absurd>10,'Special scenes were not exercised');
assert.equal(recurring.size,0,'Recurring stories did not recall earlier decisions');
console.log(`PASS ${lifetimeScenes.size} distinct life choices through age 100, one birthday, legacy saves, rest, and three recurring themes`);

const progressPerDay=new Map();
const relationshipPerChoice=new Map();
const growthKeys=['intelligence','creativity','social','charm'];
const skillTotal=game=>growthKeys.reduce((total,key)=>total+game.run(`state.stats.${key}`),0);
let storyGrowth;
for(const [mode,steps,multiplier] of [['normal',5,1],['fast',2,2.5],['turbo',1,5]]){
 const game=mount({...core,age:10,storySeen:[10]});
 game.run(`setGameSpeed('${mode}')`);
 assert.equal(game.run('growthRequired(state.age)'),steps);
 const initial=skillTotal(game);
 const effect=game.run('actualEffect(currentChoices[0].effect,true)');
 for(let i=0;i<effect.length;i+=2){
  if(!growthKeys.includes(effect[i]))continue;
  const base=game.run(`actualEffect(currentChoices[0].effect)[${i+1}]`);
  assert.equal(effect[i+1],Math.round(base*multiplier*10)/10);
  const name=game.run(`labels['${effect[i]}']`);
  assert.ok(game.get('choices').innerHTML.includes(`${name} +${effect[i+1]}`));
 }
 for(let step=0;step<steps;step++)game.run('choose(0)');
 assert.equal(game.run('state.yearDay'),1);
 assert.equal(game.run('state.stats.health'),85-steps);
 progressPerDay.set(mode,skillTotal(game)-initial);
 assert.equal(mount(snapshot(game)).run('state.settings.gameSpeed'),mode);

 const story=mount();
 story.run(`startGame();setGameSpeed('${mode}')`);
 const before=skillTotal(story);
 story.run('chooseStoryOption(0)');
 const gain=skillTotal(story)-before;
 if(storyGrowth===undefined)storyGrowth=gain;
 assert.equal(gain,storyGrowth,'A fixed-age chapter was multiplied');

 const relationship=mount({...core,storySeen:[20],settings:{...core.settings,gameSpeed:mode}});
 const beforeRelationship=skillTotal(relationship);
 relationship.run('romanceAction("alone")');
 relationshipPerChoice.set(mode,skillTotal(relationship)-beforeRelationship);

 const otherEffects=game.run('JSON.stringify(actualEffect(["money",20,"happiness",2,"health",-1],true))');
 assert.equal(otherEffects,game.run('JSON.stringify(actualEffect(["money",20,"happiness",2,"health",-1]))'));
}
for(const speed of ['fast','turbo']){
 assert.ok(Math.abs(progressPerDay.get(speed)-progressPerDay.get('normal'))<=.21,'Daily stats not balanced');
 const multiplier=speed==='fast'?2.5:5;
 assert.ok(Math.abs(relationshipPerChoice.get(speed)-relationshipPerChoice.get('normal')*multiplier)<=.11);
}
console.log('PASS growth balance per game day, displayed totals, romance actions, fixed-age chapters and saved speed');
