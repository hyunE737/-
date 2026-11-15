const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const game=fs.readFileSync(__dirname+'/game.js','utf8'),pro=fs.readFileSync(__dirname+'/nuri-prologue.js','utf8'),html=fs.readFileSync(__dirname+'/index.html','utf8');
new vm.Script(game);new vm.Script(pro);
function setup(){
 const nodes=new Map();
 const node=()=>({hidden:false,style:{display:'none'},children:[],classList:{add(){},remove(){},toggle(){}},append(...x){this.children.push(...x)},replaceChildren(){this.children=[]},addEventListener(e,fn){this[e]=fn},focus(){},querySelector(s){return s==='#nuriPrologueChoices'?get('nuriPrologueChoices'):get('nuriPrologueChoices').children[0]}});
 function get(id){if(!nodes.has(id))nodes.set(id,node());return nodes.get(id)}
 const storage=new Map();
 const c=vm.createContext({console,Math:Object.create(Math),document:{readyState:'complete',body:node(),getElementById:get,createElement:node,querySelectorAll(){return []}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},setTimeout(){},clearTimeout(){},MutationObserver:class{observe(){}},alert(){throw Error('unexpected alert')},confirm:()=>true});
 c.window=c;c.nuriCurrentSaveKey=()=>'test';
 // Skip only the page bootstrap; exercise actual gameplay functions below.
 const begin=game.indexOf('try{let old=JSON.parse(localStorage.getItem(window.nuriCurrentSaveKey()))');
 const end=game.indexOf('/* ===== NURI LIFE:',begin);
 vm.runInContext(game.slice(0,begin)+game.slice(end),c);
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
 run('state.age=7;maybeStartStory(7)');assert.equal(run('state.pendingStory.title'),run('STORY_CHAPTERS[7].title'));
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
