/* Fictional relationships and in-game social feed. All activity stays in the game save. */
const NURI_PEOPLE=[
 {id:'harin',name:'하린',gender:'female',icon:'🎨',handle:'harin.colors',age:7,role:'어릴 때부터 함께한 친구 · 여성',hello:'분필 한 통을 다시 샀어. 그때 그 미로를 또 그리고 싶어.',chapters:[
  [7,35,'비가 지운 그림','하린이 어릴 적 놀이터에서 그렸던 분필 그림 사진을 꺼내. 비에 지워졌지만 다시 그리고 싶대.',['함께 새 그림 그리기','하린 혼자 그린 그림부터 보기'],['두 사람이 다시 그린 그림에 새로운 길이 생겼어.','누리가 기다리자 하린은 자기 그림에 담은 이야기를 들려줬어.']],
  [13,46,'축제 사진 한 장','친구가 올린 축제 사진에서 하린이 빠졌어. 하린은 다시 찍자고 할지 그냥 둘지 망설여.',['다시 찍고 싶은지 조용히 묻기','하린이 좋아했던 장면부터 이야기하기'],['하린은 꼭 사진에 남아야 하는 건 아니라고 말했어. 마음을 물어봐 줘서 고마웠대.','사진에 없는 순간도 기억한다는 말에 하린이 웃었어.']],
  [20,57,'다락방 열쇠','다락방이 곧 비워진대. 하린은 마지막으로 다녀오자며 오래된 열쇠를 내밀어.',['벽에 남은 그림을 함께 기록하기','서로의 요즘 이야기를 한 장씩 적기'],['낡은 다락방의 그림이 두 사람의 작은 전시가 됐어.','옛날 이야기 옆에 각자 고른 새로운 길이 적혔어.']]],
  dm:['요즘도 가끔 그림을 그려. 네 소식 들으니 반가워!','천천히 말해도 돼. 네 이야기 먼저 듣고 싶어.']},
 {id:'eunwoo',name:'은우',icon:'🔬',handle:'eunwoo.lab',age:7,role:'실험을 좋아하는 친구',hello:'실험 한 번 더. 이번엔 종이 날개를 조금 접어 봤어.',chapters:[
  [7,25,'종이비행기 기록','은우의 비행기만 자꾸 바닥으로 떨어져. 은우는 내기보다 무엇이 다른지 궁금해.',['날개 모양을 바꿔 같이 날리기','은우의 설명을 듣고 관찰 기록하기'],['둘은 멀리 날리는 법보다 함께 실패했던 순간이 더 재밌었어.','누리의 작은 기록을 보고 은우가 날개의 균형을 새로 생각했어.']],
  [12,36,'실험 발표 전날','같은 실험인데 결과가 어제와 달라졌어. 발표를 맡은 은우는 틀린 부분을 어떻게 설명할지 고민해.',['틀린 결과도 그대로 정리하기','은우와 발표를 한 번 더 연습하기'],['예상과 다른 이유를 솔직히 말하니 발표에서 좋은 질문이 나왔어.','연습을 같이 하자 은우는 틀릴까 봐 걱정하는 대신 차분히 설명할 수 있었어.']],
  [19,47,'실험실 밖의 문제','은우가 동네 사람들을 도와주는 작은 연구를 시작하려 해. 누리에게 어디부터 시작할지 물어.',['직접 문제를 겪는 사람들 만나기','작게 시험해 볼 계획 짜기'],['첫 번째 답은 실험실이 아니라 동네 사람의 말에서 나왔어.','둘은 작은 시험을 먼저 하기로 했고, 은우는 길을 잃지 않았어.']]],
  dm:['내가 만든 걸 보여 주고 싶었는데 마침 연락이 왔네!','막히는 부분이 있으면 같이 하나씩 살펴보자.']},
 {id:'junho',name:'준호',icon:'🧰',handle:'junho.makes',age:7,role:'함께 만들며 성장하는 친구',hello:'고장 난 라디오를 고쳤어. 켜진 첫 소리가 아직도 기억나.',chapters:[
  [10,18,'비어 있는 작업대','준호가 동네 행사에서 쓸 상자를 만들려고 해. 혼자 다 하려다 준비 시간이 빠듯해졌어.',['할 일을 나눠 맡자고 하기','함께 필요한 재료부터 점검하기'],['일을 나누자 준호가 쉬는 시간도 생겼어.','모자란 재료를 미리 찾아내 그날 작업을 마칠 수 있었어.']],
  [16,30,'이름이 빠진 안내판','팀 프로젝트 안내판에서 준호 이름이 빠졌어. 준호는 조용히 넘어가려 하지만 섭섭해 보여.',['준호가 맡은 일을 팀에 알리기','준호가 원하는 해결법부터 묻기'],['팀원이 안내판을 고쳤고, 서로 맡은 일을 다시 알게 됐어.','준호는 큰 소동 없이 팀에 직접 말해 보기로 했어.']],
  [23,41,'서로 다른 출근길','둘이 다른 곳에서 일하기 시작하자 약속을 잡기 어려워졌어. 준호가 오래 못 본 게 마음에 걸린대.',['부담 없이 만날 날 정하기','각자 가능한 방식으로 안부 나누기'],['짧게 차 한 잔 할 시간이 새로운 약속이 됐어.','긴 약속 대신 가끔 보내는 안부가 둘 사이를 잇기 시작했어.']]],
  dm:['연락 고마워. 지금 하던 작업 끝나면 내 이야기도 들려줄게.','혼자 처리하려 하지 마. 필요한 건 같이 생각해 보자.']},
 {id:'minjun',name:'민준',icon:'🏁',handle:'minjun.next',age:13,role:'누리의 라이벌',hello:'지난 기록과 비교할 것. 남의 숫자는 그다음.',chapters:[
  [13,24,'같은 종목, 다른 기록','민준은 누리와 기록을 비교하다가 먼저 연습한 방법을 알려 줘. 이기고 싶지만 서로 좋은 결과가 나왔으면 한대.',['서로 좋은 점 하나씩 말하기','나의 목표 기록을 먼저 정하기'],['둘은 상대의 장점도 배울 수 있다는 걸 알았어.','민준이 자기 목표도 공개했어. 둘의 경쟁이 조금 달라졌어.']],
  [16,37,'결승 뒤의 공터','이번에는 누리와 민준 중 한 명만 다음 단계에 갈 수 있어. 경기가 끝나고 민준이 손을 내밀어.',['결과와 상관없이 먼저 축하하기','서로 어떤 점을 배웠는지 돌아보기'],['승패가 갈린 뒤에도 다시 인사할 수 있었어.','둘은 다음 도전에서 바꿀 점을 나눴어.']],
  [21,48,'같은 편이 되는 날','새로운 팀 대회에서 민준과 같은 편이 됐어. 서로 앞서려 하기보다 같이 잘해야 할 때야.',['서로 강한 부분을 맡기기','먼저 팀의 공통 목표 정하기'],['라이벌의 강점을 누구보다 잘 알던 누리가 팀을 하나로 모았어.','둘은 이기고 지는 일 너머의 약속을 세웠어.']]],
  dm:['연락이 왔네. 다음엔 서로 기록 하나씩 가져오기다!','경쟁은 잠깐 쉬어도 돼. 오래 갈 수 있는 속도가 더 중요하잖아.']},
 {id:'seoyun',name:'서윤',icon:'📷',handle:'seoyun.frames',age:10,role:'동네 사진 동아리 친구',hello:'카메라를 들고 골목 한 바퀴. 오늘의 색은 초록이야.',chapters:[
  [10,18,'보통의 골목 사진','서윤이 매일 지나가는 골목을 찍어 작은 전시를 열고 싶대. 어떤 풍경부터 남길까?',['평소 지나치던 풍경을 찍기','동네 사람에게 가장 좋아하는 곳 묻기'],['익숙한 골목에서 처음 보는 빛을 발견했어.','듣고 보니 각자 다른 동네를 마음에 담고 있었어.']],
  [15,30,'공유할까, 간직할까','서윤이 친구들과 찍은 사진을 올릴지 고민해. 한 친구는 얼굴이 나오지 않았으면 좋겠다고 했대.',['친구의 뜻을 묻고 풍경만 올리자고 하기','함께 본 추억은 사진첩에만 간직하기'],['누구나 편하게 볼 수 있는 풍경으로 바꿨어.','서윤은 꼭 공개해야 기억에 남는 건 아니라는 걸 느꼈어.']],
  [20,41,'작은 전시의 첫 손님','서윤의 골목 사진전이 열렸어. 많은 손님을 부르기보다 오래 함께한 사람에게 먼저 보여 주고 싶대.',['동네 이웃을 첫 손님으로 초대하기','사진마다 함께한 순간을 적기'],['첫 손님들은 사진 속 골목이 자신의 이야기 같다고 말했어.','사진 뒤의 이야기까지 남겨 작은 전시가 한 권의 기록이 됐어.']]],
  dm:['다음 산책에서 볼 만한 장소가 생각났어. 같이 가 보고 싶어.','사진에 담기 전에 그냥 바라보는 시간도 좋더라.']},
 {id:'jia',name:'지아',icon:'📚',handle:'jia.notes',age:16,role:'진로를 함께 고민하는 선배',hello:'오늘 배운 것: 멋진 답보다 좋은 질문 하나.',chapters:[
  [16,18,'진로 노트의 빈칸','누리가 멈칫하자 선배 지아가 진로 노트를 펼쳐 줘. 잘하는 것 말고 최근 궁금했던 일도 써 보래.',['요즘 알고 싶은 일을 솔직히 적기','지아가 길을 바꿨던 경험 듣기'],['정답처럼 보이던 진로표 옆에 누리의 질문이 생겼어.','지아도 처음부터 자기 길을 알았던 건 아니라는 걸 들었어.']],
  [19,30,'첫 면접 뒤에 받은 편지','지아에게서 합격 여부와 상관없이 경험을 이야기해 달라는 편지가 왔어. 누리는 어떤 부분을 나눌까?',['잘 안 된 질문을 다시 생각해 보기','면접에서 느낀 내 강점을 적어 보내기'],['어려웠던 질문을 다시 살피니 다음에 해 볼 일이 보였어.','누리는 결과지에 적히지 않은 성장을 말로 남겼어.']],
  [25,41,'이제는 나도 안내할 수 있어','지아가 후배들의 진로 모임을 준비하며 누리에게 자기 경험을 들려 달래. 어떤 이야기가 도움이 될까?',['길을 바꿔 본 이유를 솔직히 들려주기','후배가 직접 다음 한 걸음을 정하게 돕기'],['성공담보다 망설였던 이유가 후배의 마음을 편하게 했어.','누리와 지아는 답을 대신 주지 않고 질문을 함께 골랐어.']]],
  dm:['생각을 한 문장으로 적어 보면 다음 질문이 보이더라.','네가 고른 길의 이유를 들려줘. 같이 정리해 볼 수 있어.']}
];

function nuriSocialState(){
 let social=state.socialLife;
 if(!social||typeof social!=='object'||Array.isArray(social))social=state.socialLife={};
 for(const key of ['stories','inbox','liked','comments'])if(!social[key]||typeof social[key]!=='object'||Array.isArray(social[key]))social[key]={};
 for(const key of ['following','posts'])if(!Array.isArray(social[key]))social[key]=[];
 if(!Number.isSafeInteger(social.lastPostDay))social.lastPostDay=-1;
 return social;
}
function nuriPerson(id){return NURI_PEOPLE.find(p=>p.id===id);}
function nuriRelation(person){
 const world=ensureWorld();
 return person.id==='minjun'?{record:world.rival,key:'respect',label:'상대의 인정'}:{record:world.friends[person.id],key:'bond',label:'친밀도'};
}
function nuriChangeRelation(person,amount){
 const {record,key}=nuriRelation(person);
 record[key]=Math.max(0,Math.min(100,(Number(record[key])||0)+amount));
}
function nuriContacts(){return NURI_PEOPLE.filter(p=>state.age>=p.age);}
function nuriStoryRecords(id){
 const stories=nuriSocialState().stories;
 if(!Array.isArray(stories[id]))stories[id]=[];
 return stories[id];
}
function nuriStoryInfo(person){
 const records=nuriStoryRecords(person.id);
 const chapter=person.chapters[records.length];
 const {record,key}=nuriRelation(person);
 const score=Math.round(Number(record[key])||0);
 return {records,chapter,score,ready:!!chapter&&state.age>=chapter[0]&&Number(record[key])>=chapter[1]};
}
function nuriPeopleSummary(){
 return '<p class="modal-hint">만남과 대화로 관계를 쌓으면 각 인물의 이야기가 열려. 선택에 따라 관계와 다음 장면의 대사가 달라져.</p>';
}
function nuriHarinRomanceScene(){
 const social=nuriSocialState(),r=ensureRomance();
 if(state.age<18||!state.family)return null;
 if(!social.harinRomance&&nuriStoryRecords('harin').length>=2&&nuriStoryInfo(nuriPerson('harin')).score>=55&&romanceCan('meet')){
  return {id:'letter',title:'분필 그림 옆의 편지',text:'하린은 오래된 놀이터 사진을 건네며 말했어. “우리 사이가 소중해서 조심스러운데, 요즘은 친구 이상의 마음이 들어. 넌 어때?”',choices:['나도 같은 마음이야. 연인으로 만나고 싶어','너를 아끼지만 친구로 지내고 싶어']};
 }
 if(social.harinRomance==='dating'&&r.partner==='하린'&&r.status==='dating'&&state.age>r.datingAge){
  return {id:'weekend',title:'오래된 친구, 새로 맞추는 주말',text:'연인이 된 뒤 둘 다 바빠지자 만나기로 한 주말이 자꾸 미뤄졌어. 하린은 예전처럼 마음을 숨기지 말고 이야기해 보자고 해.',choices:['서운했던 마음부터 천천히 들어 주기','부담 없이 함께할 작은 약속 정하기']};
 }
 return null;
}
function nuriChooseHarinRomance(id,index){
 const scene=nuriHarinRomanceScene();
 if(!state.alive||!scene||scene.id!==id||![0,1].includes(index))return false;
 const social=nuriSocialState(),r=ensureRomance();
 let outcome;
 if(id==='letter'){
  if(index===0){
   r.partner='하린';r.partnerGender='female';r.status='meeting';r.affection=45;r.trust=55;
   romanceLog('하린과 서로의 마음을 전한 날','어릴 적 분필 그림을 보며 서로 같은 마음이었다고 이야기했어.');
   applyRomanceEvent('startDating',true);
   social.harinRomance='dating';
   outcome='하린과 서로의 마음을 확인하고 연인이 되었어.';
  }else{
   social.harinRomance='friends';
   nuriChangeRelation(nuriPerson('harin'),3);
   outcome='하린은 누리의 마음을 존중했어. 둘은 친구로 계속 서로를 응원하기로 했어.';
  }
 }else{
  r.affection=Math.min(100,r.affection+(index===0?5:10));
  r.trust=Math.min(100,r.trust+(index===0?12:6));
  social.harinRomance='together';
  outcome=index===0?'서로 기다리던 시간을 솔직히 말하자 미루던 대화가 다시 이어졌어.':'매주 짧은 산책을 약속했어. 바쁜 일상에도 둘만의 시간이 생겼어.';
 }
 romanceLog(scene.title,outcome);
 render();save();nuriRenderPerson('harin');toast(outcome);
 return true;
}
function nuriHarinRomanceMarkup(){
 const scene=nuriHarinRomanceScene();
 const branch=nuriSocialState().harinRomance;
 if(!scene){
  if(branch==='friends')return '<p class="social-panel">하린과 소중한 친구로 지내기로 했어.</p>';
  if(branch==='dating'&&ensureRomance().partner==='하린'&&ensureRomance().status==='dating')return '<p class="social-panel">하린과 교제 중이야. 다음 해에 둘의 이야기가 더 이어져.</p>';
  return !branch&&state.age>=13?'<p class="modal-hint">18살 이후 · 하린 이야기 2장 · 친밀도 55 이상 · 교제 중인 상대가 없을 때 새로운 이야기가 열려.</p>':'';
 }
 return `<article class="social-panel"><h3>♡ ${scene.title}</h3><p>${scene.text}</p><div class="social-actions">${scene.choices.map((choice,index)=>`<button type="button" class="modal-action" onclick="nuriChooseHarinRomance('${scene.id}',${index})" ${!state.alive?'disabled':''}>${choice}</button>`).join('')}</div></article>`;
}
function nuriOpenPerson(id){activeModal='personStory';nuriRenderPerson(id);}
function nuriRenderPerson(id){
 const person=nuriPerson(id);if(!person)return;
 const {records,chapter,score,ready}=nuriStoryInfo(person);
 const relation=nuriRelation(person);
 const last=records.at(-1);
 const callback=last?'지난 이야기 · '+worldSafe(last.outcome):'';
 modalHeader(person.name+'의 이야기','누리 키우기 · 주변 인물');
 document.getElementById('appModalBody').innerHTML=`
  <div class="social-panel"><h3>${person.icon} ${person.name} · ${person.role}</h3><p>${relation.label} ${score}/100 · 이야기 ${records.length}/${person.chapters.length}장</p></div>
  ${chapter?`<article class="social-panel"><h3>${ready?chapter[2]:'다음 이야기는 아직 잠겨 있어'}</h3>${ready?`<p>${callback?'<span class="social-callback">'+callback+'</span>':''}${chapter[3]}</p><div class="social-actions">${chapter[4].map((label,index)=>`<button type="button" class="modal-action" onclick="nuriChoosePersonStory('${id}',${index},${records.length})" ${!state.alive?'disabled':''}>${label}</button>`).join('')}</div>`:`<p>${chapter[0]}살 이상 · ${relation.label} ${chapter[1]} 이상</p>`}</article>`:'<p class="social-panel">이 인물의 이야기를 모두 만났어. 이후에도 만나거나 메시지를 주고받을 수 있어.</p>'}
  ${id==='harin'?nuriHarinRomanceMarkup():''}
  ${records.slice().reverse().map(entry=>`<article class="social-panel social-record"><small>${worldSafe(entry.age)}살 · 선택 기록</small><h3>${worldSafe(entry.title)}</h3><p><b>${worldSafe(entry.choice)}</b> · ${worldSafe(entry.outcome)}</p></article>`).join('')}
  <div class="social-actions"><button type="button" class="modal-action" onclick="openAppModal('friends')">주변 인물로</button><button type="button" class="modal-action" onclick="openAppModal('social')">누리스타 보기</button></div>`;
 document.querySelector('.app-modal-card')?.scrollTo?.(0,0);
}
function nuriChoosePersonStory(id,choice,chapterIndex){
 const person=nuriPerson(id);if(!person||!state.family||!state.alive||![0,1].includes(choice))return;
 const {records,chapter,ready}=nuriStoryInfo(person);
 if(!ready||chapterIndex!==records.length)return;
 const entry={age:state.age,title:chapter[2],choice:chapter[4][choice],outcome:chapter[5][choice],approach:choice};
 records.push(entry);
 nuriChangeRelation(person,choice===0?8:5);
 const stat=choice===0?'social':'happiness';
 state.stats[stat]=limitStat(stat,state.stats[stat]+(choice===0?1:3));
 worldNote(person.name+' · '+entry.title+' — '+entry.outcome,'friend');
 worldCheckAchievements();render();save();nuriRenderPerson(id);toast(entry.outcome);
}

function nuriWritePost(event){
 event.preventDefault();
 if(!state.family||!worldCanAct(13))return false;
 const data=new FormData(event.currentTarget);
 nuriSavePost(String(data.get('caption')||''),String(data.get('postType')||''),data.get('portrait')==='on');
 return false;
}
function nuriSavePost(text,kind,portrait=false){
 if(!state.family||!worldCanAct(13)||!['post','story'].includes(kind))return false;
 const social=nuriSocialState();
 text=text.trim().slice(0,180);
 if(!text)return toast('내용을 적어 줘.');
 if(social.lastPostDay===state.day)return toast('하루에 한 번 올릴 수 있어. 다음 날 다시 올려 봐.');
 const replies=nuriContacts().filter(p=>{
  const {record,key}=nuriRelation(p);
  return social.private?Number(record[key])>=45:Number(record[key])>=25||social.following.includes(p.id);
 }).slice(0,3).map(p=>p.id);
 social.posts.unshift({day:state.day,age:state.age,kind,text,replies,portrait:!!portrait});
 social.posts=social.posts.filter(p=>p.kind!=='story'||p.day===state.day).slice(0,24);
 social.lastPostDay=state.day;
 save();nuriRenderSocial('feed');toast(kind==='story'?'오늘의 스토리를 올렸어.':'새 게시물을 올렸어.');
 return true;
}
function nuriTogglePrivate(){
 if(!state.family||!worldCanAct(13))return;
 const social=nuriSocialState();social.private=!social.private;
 save();nuriRenderSocial('feed');
}
function nuriToggleFollow(id){
 const p=nuriPerson(id);if(!p||!state.family||!worldCanAct(13)||state.age<p.age)return;
 const follows=nuriSocialState().following;
 const index=follows.indexOf(id);
 if(index<0)follows.push(id);else follows.splice(index,1);
 save();nuriRenderSocial('people');
}
function nuriNpcPost(person){
 const chapter=nuriStoryRecords(person.id).at(-1);
 if(!chapter)return {key:person.id+':intro',text:person.hello};
 return {key:person.id+':'+nuriStoryRecords(person.id).length,text:'오늘 남긴 기억 · '+chapter.title+'\n'+chapter.outcome};
}
function nuriToggleLike(id){
 const p=nuriPerson(id);if(!p||!state.family||!worldCanAct(13)||state.age<p.age)return;
 const social=nuriSocialState();if(!social.following.includes(id))return;
 const key=nuriNpcPost(p).key;social.liked[key]=!social.liked[key];
 save();nuriRenderSocial('feed');
}
function nuriWriteComment(event){
 event.preventDefault();
 const data=new FormData(event.currentTarget);
 nuriSaveComment(String(data.get('person')||''),String(data.get('comment')||''));
 return false;
}
function nuriSaveComment(id,text){
 const person=nuriPerson(id);
 if(!person||!state.family||!worldCanAct(13)||state.age<person.age)return false;
 const social=nuriSocialState(),key=nuriNpcPost(person).key;
 text=text.trim().slice(0,100);
 if(!text||!social.following.includes(id)||social.comments[key])return false;
 social.comments[key]={text,reply:person.dm[0]};
 nuriChangeRelation(person,1);
 render();save();nuriRenderSocial('feed');
 return true;
}
function nuriNpcCard(person,social,disabled){
 const post=nuriNpcPost(person),liked=!!social.liked[post.key],comment=social.comments[post.key];
 return `<article class="social-panel social-post"><small>${person.icon} ${person.name} · @${person.handle}</small><p>${worldSafe(post.text)}</p>
 <button type="button" class="modal-action" aria-pressed="${liked}" onclick="nuriToggleLike('${person.id}')" ${disabled}>${liked?'♥ 좋아요 취소':'♡ 좋아요'}</button>
 ${comment?`<p class="social-comment"><b>누리</b> · ${worldSafe(comment.text)}</p><p class="social-comment"><b>${person.name}</b> · ${worldSafe(comment.reply)}</p>`:state.alive?`<details class="social-comment"><summary>댓글 달기</summary><form class="social-compose" onsubmit="return nuriWriteComment(event)"><input type="hidden" name="person" value="${person.id}"><label>댓글<input name="comment" maxlength="100" required></label><button type="submit" class="modal-action">댓글 올리기</button></form></details>`:''}</article>`;
}
function nuriSendDM(id,choice){
 const person=nuriPerson(id);
 if(!person||!state.family||!worldCanAct(13)||state.age<person.age||![0,1].includes(choice))return;
 const social=nuriSocialState();
 const thread=Array.isArray(social.inbox[id])?social.inbox[id]:[];
 if(thread[0]?.day===state.day)return toast('오늘은 이미 메시지를 보냈어.');
 const sent=['요즘 어떻게 지내?','괜찮으면 이야기 좀 들어 줄래?'][choice];
 social.inbox[id]=[{day:state.day,age:state.age,sent,reply:person.dm[choice]},...thread].slice(0,8);
 nuriChangeRelation(person,choice===0?2:1);
 render();save();nuriRenderSocial('inbox',id);
}
function nuriRenderSocial(tab='feed',selected=''){
 activeModal='social';
 modalHeader('누리스타','누리 키우기 · 모의 SNS');
 const body=document.getElementById('appModalBody');
 if(state.age<13){body.innerHTML='<p class="social-panel">13살부터 누리스타를 이용할 수 있어. 지금은 주변 인물과 만나면서 추억을 만들어 봐.</p><button type="button" class="modal-action" onclick="openAppModal(\'friends\')">주변 인물 보기</button>';return;}
 const social=nuriSocialState(),contacts=nuriContacts(),disabled=!state.alive?'disabled':'';
 const tabs=[['feed','피드'],['people','팔로우'],['inbox','메시지']];
 const tabsHtml=tabs.map(([key,label])=>`<button type="button" aria-pressed="${key===tab}" onclick="nuriRenderSocial('${key}')">${label}</button>`).join('');
 const posts=social.posts.filter(p=>p.kind!=='story'||p.day===state.day);
 let html='';
 if(tab==='people'){
  html=contacts.map(p=>`<article class="social-panel"><h3>${p.icon} ${p.name}</h3><p>@${p.handle} · ${p.role}</p><div class="social-actions"><button type="button" class="modal-action" onclick="nuriToggleFollow('${p.id}')" ${disabled}>${social.following.includes(p.id)?'팔로우 취소':'팔로우'}</button><button type="button" class="modal-action" onclick="nuriOpenPerson('${p.id}')">인물 이야기</button></div></article>`).join('');
 }else if(tab==='inbox'){
  const person=contacts.find(p=>p.id===selected)||contacts[0];
  const thread=Array.isArray(social.inbox[person.id])?social.inbox[person.id]:[];
  html=`<div class="social-tabs" aria-label="메시지 상대">${contacts.map(p=>`<button type="button" aria-pressed="${p.id===person.id}" onclick="nuriRenderSocial('inbox','${p.id}')">${p.name}</button>`).join('')}</div>
   <div class="social-panel"><h3>${person.icon} ${person.name}에게 메시지</h3><p>한 사람에게 게임 속 하루에 한 번 메시지를 보낼 수 있어.</p><div class="social-actions">${['요즘 어떻게 지내?','이야기 좀 들어 줄래?'].map((label,index)=>`<button type="button" class="modal-action" onclick="nuriSendDM('${person.id}',${index})" ${!state.alive||thread[0]?.day===state.day?'disabled':''}>${label}</button>`).join('')}</div></div>
   ${thread.map(entry=>`<article class="social-panel social-record"><small>${worldSafe(entry.age)}살</small><p><b>누리</b> · ${worldSafe(entry.sent)}</p><p><b>${person.name}</b> · ${worldSafe(entry.reply)}</p></article>`).join('')}`;
 }else{
  const followed=contacts.filter(p=>social.following.includes(p.id));
  const followers=contacts.filter(p=>{const {record,key}=nuriRelation(p);return Number(record[key])>=40;}).length;
  html=`<div class="social-panel social-profile"><h3>누리 <small>@nuri.life</small></h3><p>팔로워 ${followers} · 팔로잉 ${followed.length} · 게시물 ${posts.filter(p=>p.kind==='post').length}</p><button type="button" class="modal-action" aria-pressed="${!!social.private}" onclick="nuriTogglePrivate()" ${disabled}>${social.private?'공개 범위: 가까운 친구만':'공개 범위: 게임 속 모두'}</button></div>
   ${state.alive?`<form class="social-panel social-compose" onsubmit="return nuriWritePost(event)"><label>누리의 오늘<textarea name="caption" maxlength="180" rows="3" placeholder="오늘의 일상이나 기억에 남은 순간을 적어 봐." required></textarea></label><label class="social-check"><input type="checkbox" name="portrait">누리 캐릭터 사진 첨부</label><div class="social-actions"><select name="postType" aria-label="게시 방식"><option value="post">게시물</option><option value="story">스토리 · 오늘만</option></select><button type="submit" class="modal-action" ${social.lastPostDay===state.day?'disabled':''}>올리기</button></div><small>${social.lastPostDay===state.day?'오늘은 이미 올렸어.':'게임 속 하루에 한 번 올릴 수 있어.'} 스토리는 다음 날 사라져.</small></form>`:''}
   ${posts.map(post=>`<article class="social-panel social-post"><small>누리 · ${worldSafe(post.age)}살 · ${post.kind==='story'?'오늘의 스토리':'게시물'}</small>${post.portrait&&agePortraits[post.age]?`<img class="social-portrait" src="${agePortraits[post.age]}" loading="lazy" alt="${worldSafe(post.age)}살 누리 캐릭터">`:''}<p>${worldSafe(post.text)}</p><small>♥ ${Array.isArray(post.replies)?post.replies.length:0} · 게임 속 반응</small>${(Array.isArray(post.replies)?post.replies:[]).map(nuriPerson).filter(Boolean).map(p=>`<p class="social-comment"><b>${p.name}</b> · ${p.dm[0]}</p>`).join('')}</article>`).join('')}
   ${followed.length?followed.map(p=>nuriNpcCard(p,social,disabled)).join(''):`<p class="social-panel">아직 팔로우한 사람이 없어. <button type="button" class="modal-action" onclick="nuriRenderSocial('people')">주변 인물 팔로우하기</button></p>`}`;
 }
 body.innerHTML=`<p class="modal-hint">게임 속 인물과 소통하는 가상 SNS야.</p><div class="social-tabs" aria-label="누리스타 메뉴">${tabsHtml}</div><div class="social-feed">${html}</div><div class="social-actions"><button class="modal-action" type="button" onclick="openAppModal('friends')">주변 인물</button><button class="modal-action" type="button" onclick="openAppModal('menu')">메뉴로 돌아가기</button></div>`;
}
