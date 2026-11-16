const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const game=fs.readFileSync(__dirname+'/game.js','utf8'),pro=fs.readFileSync(__dirname+'/nuri-prologue.js','utf8'),html=fs.readFileSync(__dirname+'/index.html','utf8');
new vm.Script(game);new vm.Script(pro);
function setup(){
 const nodes=new Map();
 const node=()=>({hidden:false,style:{display:'none'},children:[],classList:{add(){},remove(){},toggle(){}},append(...x){this.children.push(...x)},replaceChildren(){this.children=[]},addEventListener(e,fn){this[e]=fn},focus(){},querySelector(s){return s==='#nuriPrologueChoices'?get('nuriPrologueChoices'):get('nuriPrologueChoices').children[0]}});
 function get(id){if(!nodes.has(id))nodes.set(id,node());return nodes.get(id)}
 const storage=new Map();
 const c=vm.createContext({console,Math:Object.create(Math),document:{readyState:'complete',body:node(),documentElement:node(),getElementById:get,createElement:node,querySelectorAll(){return []}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},setTimeout(){},clearTimeout(){},MutationObserver:class{observe(){}},alert(){throw Error('unexpected alert')},confirm:()=>true});
 c.window=c;c.nuriCurrentSaveKey=()=>'test';
 c.nuriCloudSchedule=()=>{};
 vm.runInContext(game,c);
 vm.runInContext('render=()=>{};save=()=>{localStorage.setItem("test",JSON.stringify(state))};toast=()=>{};closeAppModal=()=>{};',c);
 get('nuriAccountGate').hidden=true;get('familyScreen').style.display='block';get('nuriPrologue').hidden=false;
 vm.runInContext(pro,c);
 return {c,get,run:s=>vm.runInContext(s,c)};
}
const expected=[['wealthy',500],['supportive',100],['ordinary',100],['frugal',30]];
const titles=new Set();
for(const [index,[family,money]] of expected.entries()){
 const {c,get,run}=setup();
 const buttons=get('nuriPrologueChoices').children;
 assert.equal(buttons.length,4);
 assert.equal(buttons[index].children[1].textContent,'시작 자금 '+(money*1000).toLocaleString('ko-KR')+'원');
 buttons[index].click();
 assert.equal(run('state.family'),family);assert.equal(run('state.money'),money);
 assert.equal(run('state.prologueChoice'),index);
 assert.equal(get('gameMain').style.display,'block');assert.equal(get('nuriPrologue').hidden,true);
 assert.ok(run('state.pendingStory.text').includes((money*1000).toLocaleString('ko-KR')+'원'));
 assert.ok(run('state.storyJournal[0].outcome').includes((money*1000).toLocaleString('ko-KR')+'원'));
 titles.add(run('state.pendingStory.title'));
 assert.equal(run('state.pendingStory.options.length'),3);
 assert.equal(run('JSON.stringify(state.pendingStory.options.map(o=>o.effect))'),run('JSON.stringify(STORY_CHAPTERS[0].options.map(o=>o.effect))'));
 run('chooseStoryOption(0)');assert.equal(run('state.pendingStory'),null);assert.equal(run('state.storyJournal.length'),2);
 for(const age of [5,12,17,28,40]){
  run('state.age='+age+';maybeStartStory('+age+')');
  assert.equal(run('state.pendingStory.title'),run('FAMILY_CHAPTERS[state.family]['+age+'].title'));
  run('maybeStartStory('+age+')');assert.equal(run('state.storySeen.filter(a=>a==='+age+').length'),1);
  run('chooseStoryOption(0)');assert.equal(run('state.pendingStory'),null);
 }
 run('state.age=7;maybeStartStory(7)');assert.equal(run('state.pendingStory.title'),run('FAMILY_STORY_VARIANTS[state.family][7].title'));
 run('state.age=12;Math.random=()=>0;state.settings.randomEvents=false');assert.equal(run('familyBackgroundEvent()'),false);
 run('state.settings.randomEvents=true');assert.equal(run('familyBackgroundEvent()'),true);assert.ok(run('state.latestEvent.length')>0);
 if(family==='supportive'){
  run('applyFamilyStoryAction("abandon");familyBackgroundEvent()');assert.equal(run('state.familyDreamSupport'),false);assert.match(run('state.latestEvent'),/지원은 멈췄어/);
  run('applyFamilyStoryAction("dream")');assert.equal(run('state.familyDreamSupport'),true);
 }
 const before=run('state.money');run('save()');assert.equal(JSON.parse(c.localStorage.getItem('test')).money,before);
 run('resetGame(true)');assert.equal(run('state.family'),null);assert.equal(get('familyScreen').style.display,'block');
 get('nuriPrologue').hidden=false;buttons[index].click();assert.equal(run('state.money'),money);
 console.log('PASS '+family+': funds, prologue, opening, five family chapters, common story, events, save and reset');
}
assert.equal(titles.size,4);
for(const [,money] of expected)assert.ok(html.includes('시작 자금 '+(money*1000).toLocaleString('ko-KR')+'원'));
assert.ok(!html.includes('시작 자금 300,000원'));
console.log('PASS syntax, four distinct openings and fallback family cards');

// Every shared milestone has a distinct house narrative, while effects,
// career points, friendship bonds and flags retain their existing definitions.
const milestoneAges=[3,7,10,13,16,18,20,25,35,50,70,90];
for(const age of milestoneAges){
 const houseTitles=new Set(),houseChoices=new Set();
 for(const [familyIndex,[family]] of expected.entries()){
  for(let optionIndex=0;optionIndex<3;optionIndex++){
   const {get,run}=setup();
   get('nuriPrologueChoices').children[familyIndex].click();
   run('chooseStoryOption(0);state.age='+age+';maybeStartStory('+age+')');
   const chapter=JSON.parse(run('JSON.stringify(state.pendingStory)'));
   houseTitles.add(chapter.title);houseChoices.add(chapter.options.map(o=>o.label).join('|'));
   assert.equal(chapter.family,family);
   assert.equal(chapter.options.length,3);
   assert.equal(run('JSON.stringify(state.pendingStory.options.map(o=>({effect:o.effect,careerId:o.careerId,bond:o.bond,flag:o.flag})))'),
                run('JSON.stringify(STORY_CHAPTERS['+age+'].options.map(o=>({effect:o.effect,careerId:o.careerId,bond:o.bond,flag:o.flag})))'));
   const before=run('JSON.stringify(STORY_CHAPTERS['+age+'])');
   run('chooseStoryOption('+optionIndex+')');
   assert.equal(run('state.familyStoryMemory.choice'),chapter.options[optionIndex].label);
   assert.equal(run('state.familyStoryMemory.outcome'),chapter.options[optionIndex].outcome);
   assert.equal(run('state.storyJournal.at(-1).choice'),chapter.options[optionIndex].label);
   assert.equal(run('state.storyJournal.at(-1).outcome'),chapter.options[optionIndex].outcome);
   assert.equal(run('JSON.stringify(STORY_CHAPTERS['+age+'])'),before);
   const nextAge=age+1;
   run('state.age='+nextAge);
   const next=run('familyStoryChapter('+nextAge+')');
   if(next)assert.ok(next.text.includes(chapter.options[optionIndex].outcome));
  }
 }
 assert.equal(houseTitles.size,4);assert.equal(houseChoices.size,4);
}
console.log('PASS 48 house-specific milestones / all 144 choices, shared effects, flags, journals and prior-choice callbacks');

// Narrative follows the existing support actions, including independent paths.
{
 const {get,run,c}=setup();get('nuriPrologueChoices').children[1].click();run('chooseStoryOption(0)');
 run('state.age=17;maybeStartStory(17);chooseStoryOption(2);state.age=18;maybeStartStory(18)');
 assert.equal(run('state.familyDreamSupport'),false);
 assert.match(run('state.pendingStory.text'),/프로젝트 비용 지원 없이/);
 assert.ok(run('state.pendingStory.text').includes(run('state.familyStoryMemory.outcome')));
 run('chooseStoryOption(0);state.age=28;maybeStartStory(28);chooseStoryOption(0);state.age=35;maybeStartStory(35)');
 assert.equal(run('state.familyDreamSupport'),true);assert.match(run('state.pendingStory.text'),/프로젝트 지원을 받기로/);
 run('state.pendingStory=null;state.storySeen=state.storySeen.filter(a=>a!==28);state.age=28;maybeStartStory(28);chooseStoryOption(2)');
 assert.equal(run('state.familyDreamSupport'),false);
 run('state.age=40;maybeStartStory(40)');assert.match(run('state.pendingStory.text'),/프로젝트 비용 지원 없이/);
 // Exercise the real saved-game migration, rather than a new-game initializer.
 run('save()');const stored=JSON.parse(c.localStorage.getItem('test'));
 run('state.familyStoryMemory=null;state.money=0;nuriLoadSavedGame()');
 assert.equal(run('state.familyStoryMemory.choice'),stored.familyStoryMemory.choice);
 assert.equal(run('state.money'),stored.money);
 assert.equal(run('state.familyDreamSupport'),false);
 run('state.pendingStory=null;state.age=50;maybeStartStory(50)');assert.match(run('state.pendingStory.text'),/프로젝트 비용 지원 없이/);
}
{
 const {get,run}=setup();get('nuriPrologueChoices').children[3].click();run('chooseStoryOption(0)');
 run('state.age=12;maybeStartStory(12)');const before=run('state.money');run('chooseStoryOption(0)');
 assert.equal(run('state.money'),before+12);assert.equal(run('state.familyScholarships'),1);
 run('state.age=13;maybeStartStory(13)');assert.match(run('state.pendingStory.text'),/활동비 지원/);
}
{
 const {get,run}=setup();get('nuriPrologueChoices').children[0].click();run('chooseStoryOption(0)');
 run('state.age=5;maybeStartStory(5);chooseStoryOption(0);state.age=12;maybeStartStory(12)');
 assert.equal(run('state.familyTrust'),1);assert.match(run('state.pendingStory.text'),/가족과의 신뢰/);
 // A legacy save without the new memory field still gets the correct branch.
 run('delete state.familyStoryMemory;state.pendingStory=null;state.age=16;maybeStartStory(16)');
 assert.equal(run('state.pendingStory.title'),'가업 설명회와 나의 진로표');
 assert.ok(!run('state.pendingStory.text').includes('undefined'));
 run('resetGame(true)');assert.equal(run('state.familyStoryMemory'),undefined);
}
console.log('PASS support withdrawal/resumption/independence, scholarship amounts, family trust, real save reload and legacy compatibility');
