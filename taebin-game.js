
const stages=[
 {name:"아기",age:"0~2살",desc:"가족의 보살핌 속에서 태빈이는 조금씩 세상에 익숙해져.",events:[
  ["태빈이가 처음 주변 소리에 반응했어.","🧸 딸랑이를 흔들어 주기","🎵 부드러운 노래 들려주기",["happiness",5,"social",2],["creativity",3,"happiness",3]],
  ["태빈이가 주변을 두리번거려.","😊 눈을 맞추며 놀아주기","📖 그림이 많은 책 보여주기",["social",5,"charm",2],["intelligence",3,"creativity",3]],
  ["태빈이가 기어 다니기 시작했어!","🧩 안전한 장난감으로 탐색하기","🌿 함께 주변 구경하기",["intelligence",4,"creativity",3],["health",4,"happiness",3]]
 ]},
 {name:"유아기",age:"3살",desc:"말과 행동이 늘어나고 세상에 대한 호기심이 커지는 시기야.",events:[
  ["태빈이가 장난감을 골랐어. 무엇을 해볼까?","🧸 역할 놀이하기","🧩 퍼즐 맞추기",["creativity",5,"happiness",3],["intelligence",5,"money",-5]],
  ["주말에 태빈이와 무엇을 할까?","🌳 공원 산책","📚 그림책 읽기",["health",5,"happiness",4],["intelligence",5,"money",-5]],
  ["놀이터에서 또래 친구를 만났어!","😊 먼저 인사하기","🙈 천천히 친해지기",["social",7,"charm",2],["intelligence",2,"health",1]]
 ]},
 {name:"초등학생",age:"10살",desc:"학교생활이 시작되고 좋아하는 것이 생긴다.",events:[
  ["방과 후 시간을 어떻게 보낼까?","⚽ 운동장에서 놀기","✏️ 만들기·그림 그리기",["health",7,"money",5],["creativity",7,"money",-3]],
  ["시험을 앞두고 있어.","📖 조금씩 공부하기","🎮 친구들과 놀기",["intelligence",7,"health",-1],["social",5,"happiness",4]],
  ["친구가 고민을 털어놨어.","💬 이야기를 들어주기","💡 해결 방법을 같이 찾기",["social",7,"charm",3],["intelligence",3,"social",3]]
 ]},
 {name:"중학생",age:"14살",desc:"관심사와 개성이 뚜렷해지는 시기야.",events:[
  ["동아리를 선택해야 해.","🎨 미술·창작 동아리","🏀 스포츠 동아리",["creativity",8,"social",3],["health",8,"social",3]],
  ["성적이 조금 떨어졌어.","📝 공부 계획 세우기","🧑‍🤝‍🧑 친구에게 도움받기",["intelligence",7,"happiness",-2],["social",6,"intelligence",3]],
  ["용돈이 생겼어. 어떻게 쓸까?","💰 저축하기","🎧 취미에 투자하기",["money",25,"intelligence",2],["happiness",8,"money",-15]]
 ]},
 {name:"고등학생",age:"17살",desc:"진로와 미래를 진지하게 고민하기 시작한다.",events:[
  ["진로를 정해야 할 것 같아.","💻 관심 분야를 깊게 배우기","🧭 여러 분야를 경험하기",["intelligence",8,"creativity",5],["social",5,"happiness",4]],
  ["학교 축제 준비를 맡았어.","🎬 기획과 제작 맡기","🎤 사람들과 진행 맡기",["creativity",8,"intelligence",3],["social",8,"charm",4]],
  ["주말에 시간이 생겼어.","📚 자격증 공부하기","🛌 충분히 쉬기",["intelligence",8,"health",-2],["health",7,"happiness",6]]
 ]},
 {name:"성인",age:"20살",desc:"새로운 환경에서 스스로 길을 만들어 간다.",events:[
  ["앞으로의 방향을 정해보자.","🎓 대학에서 공부하기","💼 바로 실무 경험 쌓기",["intelligence",8,"money",-10],["money",25,"social",4]],
  ["첫 월급을 받았어!","🏦 저축하기","🛍️ 나에게 선물하기",["money",35,"intelligence",2],["happiness",10,"money",-20]],
  ["새로운 사람들과 만났어.","🤝 모임에 참여하기","🎯 나만의 목표에 집중하기",["social",8,"charm",4],["intelligence",5,"creativity",5]]
 ]},
 {name:"사회생활",age:"25살",desc:"지금까지 쌓아온 경험이 태빈이의 삶을 만들어 간다.",events:[
  ["커리어에 변화가 필요해.","🚀 새로운 도전하기","🧱 현재 자리에서 전문성 쌓기",["creativity",8,"happiness",4],["intelligence",8,"money",15]],
  ["여유 자금이 생겼어.","📈 장기 계획 세우기","✈️ 경험에 투자하기",["money",20,"intelligence",4],["happiness",9,"money",-15]],
  ["오랜 친구가 연락했어.","☕ 만나서 이야기하기","📞 짧게 안부 전하기",["social",8,"happiness",5],["social",3,"health",2]]
 ]}
];
const growthPortraits=['assets/nuri-bfdb89207b6f56ab.png','assets/nuri-5fa6293e7337f73b.png','assets/nuri-450ccd27ca68f98e.png','assets/nuri-651f710f0aab8b38.png','assets/nuri-57d6277d4f2cb119.png','assets/nuri-886a229715536e77.png'];
function taebinAvatar(age){
 const n=Math.max(0,Number(age)||0);
 return n<=2?'assets/taebin-baby.svg':n<=12?'assets/taebin-child.svg':n<=19?'assets/taebin-teen.svg':n<=59?'assets/taebin-adult.svg':'assets/taebin-senior.svg';
}
const agePortraits=['assets/nuri-c346d54008291831.webp','assets/nuri-c346d54008291831.webp','assets/nuri-c346d54008291831.webp','assets/nuri-5aabc8aa8b32d2fe.webp','assets/nuri-f72807ee25c5d811.webp','assets/nuri-eb0616e291bd915c.webp','assets/nuri-6dbbf70577c7ca5d.webp','assets/nuri-b9023b7c01e1444d.webp','assets/nuri-0968dde0b4880260.webp','assets/nuri-3ed01913729c7df4.webp','assets/nuri-93765d5a458889c6.webp','assets/nuri-32fe7602f74c11f3.webp','assets/nuri-5effb3cc5504d921.webp','assets/nuri-d8bb5e18ecea3c0f.webp','assets/nuri-efb7dc86403723a8.webp','assets/nuri-2dafd2fff4e6cce1.webp','assets/nuri-f9059d33539f4408.webp','assets/nuri-55290e516f60b8f1.webp','assets/nuri-dc91974e8bb45dc4.webp','assets/nuri-7d3562db87b93256.webp','assets/nuri-5b1034624cefbf89.webp','assets/nuri-58880a05c31d8d3a.webp','assets/nuri-dee5f03f26aee168.webp','assets/nuri-b2814f52d9130f0d.webp','assets/nuri-afc0923f78c83c7b.webp','assets/nuri-0e83e4b3b01b6c4b.webp','assets/nuri-ca40fc9a6e85ed2e.webp','assets/nuri-3aeb4fdaf5277d9f.webp','assets/nuri-be6e77e7ae52000f.webp','assets/nuri-31c331e9b8e20eaa.webp','assets/nuri-faffdab8977ff9b4.webp','assets/nuri-9157c2839b145daa.webp','assets/nuri-4856c8f70e89545a.webp','assets/nuri-6efaba6ac5efa52e.webp','assets/nuri-3ce3c1fde17d6151.webp','assets/nuri-57a191206ddb6661.webp','assets/nuri-0cf68c3e1ce25b3e.webp','assets/nuri-9be5ac9dda13bd1c.webp','assets/nuri-30d11001fa2c81a8.webp','assets/nuri-56ee0f47a26e9cb8.webp','assets/nuri-032008d6178faacf.webp','assets/nuri-d04fb3598e21de5f.webp','assets/nuri-58373c309ad40aed.webp','assets/nuri-9a3c574c367e4177.webp','assets/nuri-da0675781f929eac.webp','assets/nuri-5e44553e4c1e99f7.webp','assets/nuri-c49da7bd23f7e8ee.webp','assets/nuri-99335dd83eb78898.webp','assets/nuri-6b87947258acb21b.webp','assets/nuri-fd21ae393819a1f5.webp','assets/nuri-23b73728ca636205.webp','assets/nuri-f8ad6289941701bf.webp','assets/nuri-c6744ca75333e056.webp','assets/nuri-87cf91a72ead552a.webp','assets/nuri-65fde25ae0b80881.webp','assets/nuri-07c84c6459e080e2.webp','assets/nuri-0f9020c87b0beb75.webp','assets/nuri-775c78bfc069ead1.webp','assets/nuri-4113605c08fda593.webp','assets/nuri-b6586536a88e2f49.webp','assets/nuri-cb684f8a505aa1af.webp','assets/nuri-9d080a066cdb2629.webp','assets/nuri-10e28f5e1ec6098a.webp','assets/nuri-a6ad9f951dfde643.webp','assets/nuri-f71c572088165bb0.webp','assets/nuri-833f0a3208af1bbf.webp','assets/nuri-6b7607cba9d73ddd.webp','assets/nuri-0636315d15815b4d.webp','assets/nuri-2f174ab91e623d91.webp','assets/nuri-0f52f06e673a0cf7.webp','assets/nuri-cd7808ef22864bf8.webp','assets/nuri-21f0569093439a5e.webp','assets/nuri-987f474ef437eb7b.webp','assets/nuri-8c5104f462a70c87.webp','assets/nuri-5de71df0e0e4ad59.webp','assets/nuri-740f47b8d91c8af5.webp','assets/nuri-e6a3d460a5dacbde.webp','assets/nuri-265df1b4d492e510.webp','assets/nuri-4f42c30fda71022e.webp','assets/nuri-02a0b2b4ab425117.webp','assets/nuri-183e42378ed49022.webp','assets/nuri-2583a4edb7bf042e.webp','assets/nuri-35983cb32e394e48.webp','assets/nuri-6d794534480f4746.webp','assets/nuri-a7fcac35a377f148.webp','assets/nuri-9d5ab64e5bbbbc41.webp','assets/nuri-bf77f89967c322be.webp','assets/nuri-337a6d48bfa1e413.webp','assets/nuri-919e7dd0ff122a4a.webp','assets/nuri-d9b148fa47d88dd1.webp','assets/nuri-7375f407ed6ec427.webp','assets/nuri-7ba898473f68e0b9.webp','assets/nuri-6dc01bf769fffb2e.webp','assets/nuri-dc747795db456761.webp','assets/nuri-e7634cd41884044b.webp','assets/nuri-abb6cff6522be266.webp','assets/nuri-9bbf3e67b0ff1d9c.webp','assets/nuri-74a5d6987e6f664f.webp','assets/nuri-6348af6c44c2baf9.webp','assets/nuri-d48f392b4c7406c8.webp','assets/nuri-1f81b601c032bc15.webp'];
const labels={intelligence:"지능",health:"체력",social:"인간관계",creativity:"창의력",charm:"매력",happiness:"행복",money:"재산"};
const families={
 ordinary:{name:"평범한 가정집 아들",money:100,stats:{intelligence:5,health:10,social:5,creativity:5,charm:5,happiness:50},preview:"시작 100,000원 · 평범한 환경 · 특출난 혜택이나 제약 없이 스스로 성장"},
 wealthy:{name:"재벌집 막내아들",money:500,stats:{intelligence:7,health:10,social:6,creativity:7,charm:7,happiness:45},preview:"시작 500,000원 · 엄격한 부모님 · 주위의 관심과 위험에 주의"},
 frugal:{name:"찢어지게 가난한 집 첫째 아들",money:30,stats:{intelligence:20,health:10,social:5,creativity:20,charm:5,happiness:56},preview:"시작 30,000원 · 기초생활수급 가정 · 다정한 부모님 · 압도적인 재능"},
 supportive:{name:"꿈을 응원해주는 집 외동아들",money:100,stats:{intelligence:5,health:10,social:12,creativity:9,charm:7,happiness:66},preview:"시작 100,000원 · 꿈을 전폭 지원 · 꿈을 포기하면 지원도 중단"}
};
let selectedFamily="ordinary";
const freshNuriState=()=>({version:3,stage:0,age:0,progress:0,yearDay:0,turningPoints:[],pendingTurningPoint:null,comedyLine:"인생은 선택의 연속이라는데, 태빈이는 간식 선택부터 어렵다.",items:{},settings:{largeText:false,reduceMotion:false,confirmReset:true},schoolPath:"",adultPath:"",day:1,event:0,family:null,alive:true,deathCause:"",healthRisk:5,illnessSeverity:0,totalChoices:0,stats:{intelligence:5,health:50,social:5,creativity:5,charm:5,happiness:50},money:100,log:[],seen:0});
let state=freshNuriState();
let shopMode="ability";
const upgrades={
 ability:[["책상 업그레이드","공부 효율이 좋아져 지능 +5",70,"intelligence",5],["운동용품 구매","건강한 생활로 체력 +5",65,"health",5],["취미 키트","새로운 아이디어로 창의력 +5",60,"creativity",5],["대화 연습","사람들과 더 편하게, 인간관계 +5",70,"social",5],["스타일 관리","자신감이 생겨 매력 +5",80,"charm",5]],
 life:[["아늑한 방 꾸미기","행복 +10",90,"happiness",10],["용돈 모으기","돈 +30,000원",100,"money",30],["휴식 아이템","체력 +8, 행복 +5",75,"combo",13]]
};
function selectFamily(key){selectedFamily=key;document.querySelectorAll(".family-option").forEach(b=>b.classList.toggle("selected",b.dataset.family===key));document.getElementById("familyPreview").textContent=families[key].preview}
function startGame(){let f=families[selectedFamily];state={version:3,stage:0,age:0,progress:0,yearDay:0,turningPoints:[],pendingTurningPoint:null,comedyLine:"인생은 선택의 연속이라는데, 태빈이는 간식 선택부터 어렵다.",items:{},settings:{...DEFAULT_SETTINGS},schoolPath:"",adultPath:"",day:1,event:0,family:selectedFamily,taebinGoalsDone:[],taebinGoalHistory:[],taebinAllGoalsAchieved:false,alive:true,deathCause:"",healthRisk:5,illnessSeverity:0,totalChoices:0,stats:{...f.stats,health:Math.max(85,f.stats.health)},money:f.money,log:["한태빈은 "+f.name+"에서 태어났어."],seen:0,storySeen:[],storyJournal:[],storyFlags:{bond:0,flags:[]},pendingStory:null,latestStory:"",detourPoints:0,lastDetour:"",sceneTurn:0,lastOutcome:"",familyDreamAbandoned:false,familyDreamSupport:selectedFamily==="supportive",familyScholarships:0,familyTalentProgress:0,familyTrust:0,photoAlbum:{unlocked:[],seen:[],featured:null,history:[]}};ensureWorld();ensurePhotoAlbum();maybeStartStory(0);if(window.nuriApplyPrologueChoice)window.nuriApplyPrologueChoice();document.getElementById("familyScreen").style.display="none";document.getElementById("gameMain").style.display="block";render();save()}
function clamp(v){return Math.max(0,Math.round((Number(v)||0)*10)/10)}
function limitStat(key,value){
 const result=clamp(value);
 return key==="health"||key==="happiness"?Math.min(100,result):result;
}
// Internal money units are 1,000 KRW. Keeping existing units preserves older saved games.
function formatWon(units){return Math.round((Number(units)||0)*1000).toLocaleString("ko-KR")+"원";}

/* ===== NURI fictional share market: internal currency unit = ₩1,000 ===== */
const NURI_STOCK_FEE=.0015; // 거래당 0.15% 가상 수수료
const NURI_STOCKS=[
 {id:'hanbit',name:'한빛전자',sector:'기술',profile:'성장형',start:22,drift:.125,vol:.070,about:'기술 개발에 따라 기회와 변동성이 있어.'},
 {id:'pureun',name:'푸른생활',sector:'생활',profile:'안정형',start:14,drift:.045,vol:.027,about:'오르내림이 비교적 작지만 수익도 완만해.'},
 {id:'mirae',name:'미래로봇',sector:'신기술',profile:'고변동형',start:34,drift:.19,vol:.125,about:'큰 폭으로 오르거나 급락할 수 있는 가상의 기업이야.'},
 {id:'haneul',name:'하늘에너지',sector:'에너지',profile:'변동형',start:19,drift:.09,vol:.080,about:'업계 뉴스에 따라 주가가 자주 움직여.'},
 {id:'doran',name:'도란게임즈',sector:'게임',profile:'고변동형',start:16,drift:.14,vol:.108,about:'신작 공개와 이용자 반응에 따라 등락이 커.'},
 {id:'solbit',name:'솔빛바이오',sector:'바이오',profile:'고변동형',start:28,drift:.16,vol:.136,about:'연구 성과와 개발 일정에 민감해.'},
 {id:'maru',name:'마루물류',sector:'물류',profile:'안정형',start:11,drift:.052,vol:.034,about:'배송 물량과 운송 비용에 영향을 받아.'},
 {id:'yundam',name:'윤담식품',sector:'생활',profile:'안정형',start:9,drift:.04,vol:.022,about:'식품 소비와 원재료 가격에 반응해.'},
 {id:'saegil',name:'새길모빌리티',sector:'에너지',profile:'변동형',start:24,drift:.091,vol:.085,about:'전동차 수요와 충전 비용에 따라 주가가 움직여.'},
 {id:'byeol',name:'별마루미디어',sector:'콘텐츠',profile:'성장형',start:13,drift:.098,vol:.064,about:'새로운 콘텐츠의 흥행과 광고 수요에 반응해.'},
];
const SPECIAL_EVENT_PHOTOS=[{"id": "photo1", "title": "첫 등교 기념", "desc": "친구를 만나는 등굣길을 기념했어.", "hint": "7살 이후 가끔 찾아오는 기념 촬영 이벤트에서 획득.", "src": "assets/nuri-b9023b7c01e1444d.webp"}, {"id": "photo2", "title": "슈퍼히어로 기분", "desc": "평범한 날에도 영웅 같은 기분이 들었어.", "hint": "13살 이후 병맛 이벤트에서 획득.", "src": "assets/nuri-d8bb5e18ecea3c0f.webp"}, {"id": "photo3", "title": "햇살 받는 오후", "desc": "밝은 햇살 아래 기분 좋은 하루를 보냈어.", "hint": "10살 이후 산책/셀카 이벤트에서 획득.", "src": "assets/nuri-93765d5a458889c6.webp"}, {"id": "photo4", "title": "카메라 장난 대작전", "desc": "익숙한 사진도 장난스러운 이야기로 남아.", "hint": "13살 이후 장난기 높은 이벤트에서 획득.", "src": "assets/nuri-f9059d33539f4408.webp"}, {"id": "photo5", "title": "느긋한 밤", "desc": "오랫동안 기억할 편안한 시간이었어.", "hint": "16살 이후 휴식/행복 이벤트에서 획득.", "src": "assets/nuri-0e83e4b3b01b6c4b.webp"}, {"id": "photo6", "title": "도시 탐험", "desc": "낯선 거리를 돌아다니며 새로운 풍경을 만났어.", "hint": "15살 이후 외출 이벤트에서 획득.", "src": "assets/nuri-5b1034624cefbf89.webp"}, {"id": "photo7", "title": "자신감 장착", "desc": "오늘 태빈이는 스스로를 응원했어.", "hint": "14살 이후 자신감 이벤트에서 획득.", "src": "assets/nuri-be6e77e7ae52000f.webp"}, {"id": "photo8", "title": "새로운 스타일", "desc": "새로운 모습으로 또 다른 도전을 시작했어.", "hint": "17살 이후 코미디 이벤트에서 획득.", "src": "assets/nuri-57a191206ddb6661.webp"}, {"id": "photo9", "title": "기분 좋은 날", "desc": "가장 많이 웃었던 순간을 간직했어.", "hint": "15살 이후 친구 이벤트에서 획득.", "src": "assets/nuri-5e44553e4c1e99f7.webp"},
 {"id":"photo10","title":"스튜디오 기념사진","desc":"카메라 앞에서 차분히 포즈를 취한 날.","hint":"18살 이후 특별 촬영 이벤트에서 가끔 획득.","src":"assets/special-album/studio-portrait.jpg","hideLockedPreview":true},
 {"id":"photo11","title":"장난기 가득한 순간","desc":"식사하다가 카메라를 발견한 순간이 사진으로 남았어.","hint":"18살 이후 특별 촬영 이벤트에서 가끔 획득.","src":"assets/special-album/candid-moment.jpg","hideLockedPreview":true},
 {"id":"photo12","title":"정원에서 찍은 셀카","desc":"꽃이 핀 정원을 걷다가 잠깐 멈춰 한 장 남겼어.","hint":"18살 이후 특별 촬영 이벤트에서 가끔 획득.","src":"assets/special-album/garden-selfie.jpg","hideLockedPreview":true},
 {"id":"photo13","title":"버스 타고 가는 길","desc":"버스 창가에서 찍은 일상 한 장.","hint":"18살 이후 특별 촬영 이벤트에서 가끔 획득.","src":"assets/special-album/bus-ride.jpg","hideLockedPreview":true},
 {"id":"photo14","title":"히어로로 변신한 날","desc":"히어로 의상을 입고 카메라 앞에서 재미있는 표정을 지어 봤어.","hint":"18살 이후 특별 촬영 이벤트에서 가끔 획득.","src":"assets/special-album/costume-day.jpg","hideLockedPreview":true},
 {"id":"photo15","title":"단정한 교복 사진","desc":"교복을 입고 단정하게 찍은 기념사진.","hint":"18살 이후 특별 촬영 이벤트에서 가끔 획득.","src":"assets/special-album/school-portrait.jpg","hideLockedPreview":true},
 {"id":"photo16","title":"조용히 쉬어 가는 순간","desc":"눈을 감고 잠깐 쉬어 가던 평범한 순간도 사진첩에 남았어.","hint":"18살 이후 특별 촬영 이벤트에서 가끔 획득.","src":"assets/special-album/quiet-break.jpg","hideLockedPreview":true}
];
const LOCKED_PHOTO_SRC=SPECIAL_EVENT_PHOTOS[0].src;
function ensurePhotoAlbum(){
 if(!state.photoAlbum||typeof state.photoAlbum!=='object')state.photoAlbum={unlocked:[],seen:[],featured:null,history:[]};
 if(!Array.isArray(state.photoAlbum.unlocked))state.photoAlbum.unlocked=[];
 if(!Array.isArray(state.photoAlbum.seen))state.photoAlbum.seen=[];
 if(!Array.isArray(state.photoAlbum.history))state.photoAlbum.history=[];
 if(state.photoAlbum.featured&&!SPECIAL_EVENT_PHOTOS.some(p=>p.id===state.photoAlbum.featured))state.photoAlbum.featured=null;
 return state.photoAlbum;
}
function unlockedPhotoCount(){ensurePhotoAlbum();return state.photoAlbum.unlocked.length;}
function isPhotoUnlocked(id){ensurePhotoAlbum();return state.photoAlbum.unlocked.includes(id);}
function maybeUnlockSpecialPhoto(reason='일상 속 특별한 순간'){
 ensurePhotoAlbum();
 const unlocked=new Set(state.photoAlbum.unlocked);
 const pool=SPECIAL_EVENT_PHOTOS.filter((p,idx)=>!unlocked.has(p.id) && state.age>=Math.min(18,Math.floor(idx*2)+7));
 if(!pool.length)return null;
 const rng=Math.random();
 const absurdBoost=state.settings?.absurdEvents===false?0:0.06;
 const chance=0.13 + (Number(state.stats?.happiness)||0)/700 + absurdBoost;
 if(rng>chance && reason!=='forced')return null;
 const pick=pool[Math.floor(Math.random()*pool.length)];
 state.photoAlbum.unlocked.push(pick.id);
 state.photoAlbum.featured=pick.id;
 const line='📸 특별 이벤트 사진 획득 · '+pick.title+' — '+reason;
 state.photoAlbum.history.unshift({age:state.age,day:state.day,title:pick.title,reason,desc:pick.desc});
 state.photoAlbum.history=state.photoAlbum.history.slice(0,30);
 state.log.push(line);
 if((state.stats?.happiness||0)<95)state.stats.happiness=limitStat('happiness',(state.stats.happiness||0)+2);
 toast('특별 사진 해금! '+pick.title);
 return pick;
}
function maybeTriggerSpecialPhotoEvent(){
 ensurePhotoAlbum();
 if(unlockedPhotoCount()>=SPECIAL_EVENT_PHOTOS.length)return null;
 const reasons=[];
 if(state.age>=7&&state.day%2===0)reasons.push('기념 촬영');
 if(state.age>=13&&state.settings?.absurdEvents!==false&&Math.random()<0.45)reasons.push('병맛 이벤트');
 if(state.age>=15&&(state.stats?.social||0)>=14)reasons.push('친구들과 놀기');
 if(state.age>=15&&(state.stats?.charm||0)>=14)reasons.push('셀카 챌린지');
 if(state.age>=16&&(state.stats?.happiness||0)>=55)reasons.push('행복한 하루');
 if(state.age>=17&&(state.money||0)>=100)reasons.push('외출 기념');
 if(!reasons.length)return null;
 return maybeUnlockSpecialPhoto(reasons[Math.floor(Math.random()*reasons.length)]);
}
function photoById(id){return SPECIAL_EVENT_PHOTOS.find(p=>p.id===id)||null;}
function renderSpecialPhotoAlbum(selectedId=''){
 activeModal='photoAlbum';
 ensurePhotoAlbum();
 modalHeader('특별 이벤트 사진첩','태빈이 키우기 · SPECIAL ALBUM');
 const unlockedSet=new Set(state.photoAlbum.unlocked);
 const featured=photoById(selectedId)||photoById(state.photoAlbum.featured)||SPECIAL_EVENT_PHOTOS.find(p=>unlockedSet.has(p.id))||SPECIAL_EVENT_PHOTOS[0];
 const unlocked=unlockedPhotoCount();
 const progress=Math.round(unlocked/SPECIAL_EVENT_PHOTOS.length*100);
 const big=unlockedSet.has(featured.id)
   ? `<div class="photo-big-preview"><img src="${featured.src}" alt="${featured.title}"><div><small>획득 완료</small><h3>${featured.title}</h3><p>${featured.desc}</p><p class="modal-hint">${featured.hint}</p></div></div>`
   : `<div class="photo-big-preview"><img src="${featured.hideLockedPreview?LOCKED_PHOTO_SRC:featured.src}" alt="잠금 사진" style="filter:grayscale(1) blur(10px) brightness(.35)"><div><small>아직 잠김</small><h3>???</h3><p>플레이를 계속하면 언젠가 획득할 수 있어.</p><p class="modal-hint">힌트: ${featured.hint}</p></div></div>`;
 const entries=SPECIAL_EVENT_PHOTOS.map((p,idx)=>{
   const on=unlockedSet.has(p.id);
   return `<button type="button" class="special-photo-card ${on?'':'locked'}" onclick="renderSpecialPhotoAlbum('${p.id}')"><img loading="lazy" src="${!on&&p.hideLockedPreview?LOCKED_PHOTO_SRC:p.src}" alt="${on?p.title:'잠긴 사진'}"><small>${on?'획득 완료':'잠김'}</small><h3>${on?p.title:'특별 이벤트 사진 '+(idx+1)}</h3><p>${on?p.desc:'플레이 중 특정 이벤트를 만나면 해금돼.'}</p></button>`;
 }).join('');
 const history=state.photoAlbum.history.length?state.photoAlbum.history.slice(0,6).map(h=>`<li>${h.age}살 · ${h.title} <small>(${h.reason})</small></li>`).join(''):'<li>아직 해금한 특별 사진이 없어.</li>';
 document.getElementById('appModalBody').innerHTML=`
   <div class="photo-album-top">
    <div class="photo-unlock-banner"><b>사진 수집 진행도 ${unlocked}/${SPECIAL_EVENT_PHOTOS.length}</b><div class="photo-progress-bar" role="progressbar" aria-label="사진 수집" aria-valuemin="0" aria-valuemax="${SPECIAL_EVENT_PHOTOS.length}" aria-valuenow="${unlocked}"><span style="width:${progress}%"></span></div><p class="modal-hint">‘오늘의 선택’을 이어 가며 태빈이를 키워 봐. 성장하다 기념 촬영, 셀카, 친구 이벤트 등을 만나면 사진이 해금될 수 있어. 사진 카드를 눌러 해금 힌트나 큰 사진을 볼 수 있어.</p></div>
    ${big}
   </div>
   <div class="special-photo-grid">${entries}</div>
   <div class="stock-history"><h3>최근 획득 기록</h3><ul>${history}</ul></div>
   <div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal('menu')">메뉴로 돌아가기</button></div>`;
}

function ensureStockState(){
 if(!state.stocks||typeof state.stocks!=='object')state.stocks={};
 if(!state.holdings||typeof state.holdings!=='object')state.holdings={};
 if(!state.stockChart||typeof state.stockChart!=='object')state.stockChart={};
 if(!Array.isArray(state.stockLedger))state.stockLedger=[];
 if(!state.stockAvgCost||typeof state.stockAvgCost!=='object')state.stockAvgCost={};
 if(!Number.isFinite(Number(state.stockRealizedProfit)))state.stockRealizedProfit=0;
 for(const k of NURI_STOCKS){
  const p=Number(state.stocks[k.id]);
  state.stocks[k.id]=Number.isFinite(p)&&p>=1?p:k.start;
  const owned=Math.floor(Number(state.holdings[k.id]));
  state.holdings[k.id]=Number.isFinite(owned)&&owned>=0?Math.min(owned,1000000000000):0;
  const avg=Number(state.stockAvgCost[k.id]);
  state.stockAvgCost[k.id]=Number.isFinite(avg)&&avg>0?avg:state.stocks[k.id];
  if(!Array.isArray(state.stockChart[k.id])||!state.stockChart[k.id].length)state.stockChart[k.id]=[state.stocks[k.id]];
 }
}
function holdingsValue(){
 ensureStockState();
 return NURI_STOCKS.reduce((acc,k)=>acc+state.holdings[k.id]*state.stocks[k.id],0);
}
function nuriNetWorth(){
 const p=worldWorthParts();return Math.round((p.cash+p.bank+p.stocks+p.crypto+p.property+p.business+p.vehicles-p.debt)*1000)/1000;
}
function stockProfitRate(sym){
 const arr=state.stockChart[sym]||[];
 const prev=arr.length>1?Number(arr[arr.length-2]):Number(state.stocks[sym]);
 return prev>0?((state.stocks[sym]-prev)/prev*100):0;
}
function stockTrend(value){
 return value>0?{className:'stock-up',label:'상승',mark:'▲'}:value<0?{className:'stock-down',label:'하락',mark:'▼'}:{className:'stock-flat',label:'보합',mark:'–'};
}
function stockMarketHeadline(){
 return String(state.marketNews||'').split(' · ')[0];
}
function stockSpark(sym,trend){return marketSpark(state.stockChart[sym]||[],trend,'주가');}
function marketSpark(history,trend,label){
 const series=history.filter(value=>Number.isFinite(value)).slice(-12);
 if(series.length<2)return '<div class="stock-note" style="margin:4px 0;padding:8px">가격이 바뀐 뒤 그래프가 나타나.</div>';
 const min=Math.min(...series),max=Math.max(...series),span=Math.max(.1,max-min);
 const path=series.map((v,i)=>[3+(i/(series.length-1))*294,43-((v-min)/span)*36].map(n=>n.toFixed(1)).join(',')).join(' ');
 return `<svg class="stock-spark ${trend.className}" viewBox="0 0 300 48" preserveAspectRatio="none" role="img" aria-label="최근 ${label} 흐름 · 전일 대비 ${trend.label}"><polyline points="${path}" fill="none" stroke="currentColor" stroke-width="2.8" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function updateStockMarket(){
 if(!state.alive||state.age<18)return;
 ensureStockState();
 const events=[
  {name:'📈 기술 투자 기대감',sector:'기술',impact:.020},
  {name:'🛒 소비 회복 뉴스',sector:'생활',impact:.014},
  {name:'⚡ 에너지 가격 변동',sector:'에너지',impact:-.019},
  {name:'🧊 전반적인 시장 관망',sector:'전체',impact:-.010},
  {name:'📊 기업 실적 개선',sector:'전체',impact:.011},
  {name:'🌧️ 경제 불확실성 확대',sector:'전체',impact:-.022},
  {name:'🔬 신기술 연구 성과',sector:'신기술',impact:.026},
  {name:'🎮 신작 게임 기대감',sector:'게임',impact:.023},
  {name:'🧪 바이오 연구 성과 발표',sector:'바이오',impact:.028},
  {name:'📦 운송비 부담 확대',sector:'물류',impact:-.016},
  {name:'🎬 신규 콘텐츠 흥행',sector:'콘텐츠',impact:.019}
 ];
 const event=events[Math.floor(Math.random()*events.length)];
 const market=(Math.random()-.5)*.022;
 for(const k of NURI_STOCKS){
  const own=(Math.random()-.5)*k.vol*.66;
  const sectorImpact=event.sector==='전체'||event.sector===k.sector?event.impact:0;
  const change=Math.max(-.14,Math.min(.14,(k.drift/360)+own+market+sectorImpact));
  const next=Math.round(state.stocks[k.id]*(1+change)*100)/100;
  state.stocks[k.id]=Math.max(1,Math.min(1e9,next));
  state.stockChart[k.id].push(state.stocks[k.id]);
  if(state.stockChart[k.id].length>30)state.stockChart[k.id].shift();
 }
 state.marketNews=event.name;
 checkWealthGoal();
}
// 태빈이 키우기의 주요 목표는 돈이 아닌 인생의 100가지 목표를 달성하는 것입니다.
function checkWealthGoal(){ return false; }
function updateWealthHud(){
 if(!state.family)return;
 ensureStockState();
 const wealth=nuriNetWorth();
 const detail=document.getElementById('stockMainNote');
 if(detail)detail.textContent=state.age<18?'18살부터 가상 주식 거래를 경험할 수 있어.':stockMarketHeadline()||'가상 기업의 가격은 매일 달라져.';
 const portfolio=document.getElementById('stockPortfolioValue');if(portfolio)portfolio.textContent=formatWon(holdingsValue());
 const held=document.getElementById('stockHeldCount');if(held)held.textContent=NURI_STOCKS.filter(k=>state.holdings[k.id]>0).length+'개';
 if(typeof window.taebinGoalTick==='function')window.taebinGoalTick();
}
function buyOrSellStock(id,side,all=false){
 if(!state.alive)return toast('인생이 끝난 뒤에는 거래할 수 없어.');
 if(state.age<18)return toast('주식 거래는 18살부터 할 수 있어.');
 const company=NURI_STOCKS.find(k=>k.id===id);
 if(!company)return;
 ensureStockState();
 const input=document.getElementById('stock-qty-'+id);
 const entered=Number(input?.value);
 const amount=all?(side==='buy'?Math.floor(state.money/(state.stocks[id]*(1+NURI_STOCK_FEE))):state.holdings[id]):entered;
 if(!Number.isSafeInteger(amount)||amount<1||amount>100000000)return toast('거래 수량은 1~1억 주 사이로 입력해 줘.');
 const price=state.stocks[id];
 if(side==='buy'){
  const cost=Math.round(price*amount*(1+NURI_STOCK_FEE)*100)/100;
  if(cost>state.money+1e-8)return toast('현금이 부족해. 수량을 줄여 봐.');
  state.money=Math.max(0,Math.round((state.money-cost)*100)/100);
  const oldShares=state.holdings[id];
  state.stockAvgCost[id]=(oldShares*state.stockAvgCost[id]+cost)/(oldShares+amount);
  state.holdings[id]+=amount;
 } else {
  if(amount>state.holdings[id])return toast('보유한 주식보다 많이 팔 수 없어.');
  const proceeds=Math.round(price*amount*(1-NURI_STOCK_FEE)*100)/100;
  state.money=Math.round((state.money+proceeds)*100)/100;
  state.stockRealizedProfit+=proceeds-state.stockAvgCost[id]*amount;
  state.holdings[id]-=amount;
  if(state.holdings[id]===0)state.stockAvgCost[id]=price;
 }
 const line=`${state.age}살 · ${company.name} ${side==='buy'?'매수':'매도'} ${amount.toLocaleString('ko-KR')}주 · 1주 ${formatWon(price)} · 수수료 0.15% 반영`;
 state.stockLedger.unshift(line);state.stockLedger=state.stockLedger.slice(0,60);
 state.log.push(line);
 checkWealthGoal();
 render();save();
 if(document.getElementById('appModal')?.classList.contains('open')&&activeModal==='stocks')renderStockModal();
 toast(company.name+' '+(side==='buy'?'매수':'매도')+' 완료');
}
function renderStockModal(){
 ensureStockState();
 modalHeader('주식 투자','TAEBIN LIFE · VIRTUAL STOCK MARKET');
 const total=nuriNetWorth();
 const locked=state.age<18;
 const details=NURI_STOCKS.map(k=>{
  const count=state.holdings[k.id];
  const rate=Number(stockProfitRate(k.id).toFixed(2));
  const trend=stockTrend(rate);
  const gain=(state.stocks[k.id]-state.stockAvgCost[k.id])*count;
  const gainTrend=stockTrend(Math.round(gain*1000));
  return `<section class="stock-trade-card">
   <div class="stock-trade-title"><div><b>${k.name}</b><small>${k.sector} · ${k.profile} · ${k.about}</small></div><div><div class="stock-trade-price ${trend.className}">${formatWon(state.stocks[k.id])}</div><span class="stock-delta ${trend.className}" aria-label="전일 대비 ${trend.label} ${Math.abs(rate).toFixed(2)} 퍼센트">${trend.mark} ${rate>0?'+':''}${rate.toFixed(2)}%</span></div></div>
   ${stockSpark(k.id,trend)}
   <div class="stock-trade-meta"><span>보유 ${count.toLocaleString('ko-KR')}주</span><span>평가 ${formatWon(count*state.stocks[k.id])}</span><span class="${gainTrend.className}">평가손익 ${Math.round(gain*1000)>0?'+':''}${formatWon(gain)} · 수익률 ${count&&state.stockAvgCost[k.id]>0?((state.stocks[k.id]/state.stockAvgCost[k.id]-1)*100).toFixed(1):'0.0'}%</span></div>
   <div class="stock-controls"><input id="stock-qty-${k.id}" aria-label="${k.name} 거래 수량" type="number" inputmode="numeric" value="1" min="1" step="1" ${locked||!state.alive?'disabled':''}/>
   <button type="button" class="buy" onclick="buyOrSellStock('${k.id}','buy')" ${locked||!state.alive?'disabled':''}>매수</button>
   <button type="button" class="sell" onclick="buyOrSellStock('${k.id}','sell')" ${locked||!state.alive||count===0?'disabled':''}>매도</button>
   <button type="button" onclick="buyOrSellStock('${k.id}','buy',true)" ${locked||!state.alive?'disabled':''}>최대 매수</button>
   <button type="button" onclick="buyOrSellStock('${k.id}','sell',true)" ${locked||!state.alive||count===0?'disabled':''}>전량 매도</button></div>
   </section>`;
 }).join('');
 document.getElementById('appModalBody').innerHTML=`
  <div class="stock-overview"><div><small>현금</small><b>${formatWon(state.money)}</b></div><div><small>주식 평가액</small><b>${formatWon(holdingsValue())}</b></div><div><small>현재 순자산</small><b>${formatWon(total)}</b></div><div><small>인생의 목표</small><b>${typeof window.taebinGoalCount==="function"?window.taebinGoalCount():0}/100개 달성</b></div><div><small>매도해서 얻은 실현손익</small><b>${state.stockRealizedProfit>=0?'+':''}${formatWon(state.stockRealizedProfit)}</b></div></div>
  <p class="stock-note"><b>🗞️ 오늘의 시장 뉴스</b> ${worldSafe(stockMarketHeadline())||'아직 첫 거래일이야.'}<br/><b>거래 수수료</b> 매수·매도 각각 0.15% · 수수료 포함 평균 매입가 적용<br/>${locked?'18살이 되면 주식 거래를 시작할 수 있어. 성장하면서 원하는 진로를 먼저 찾아 봐.':(!state.alive?'태빈이의 인생이 끝나 주식 거래가 종료됐어.':'주가는 하루마다 뉴스와 무작위 시장 상황에 따라 오르거나 내려. 수익과 손실은 보장되지 않아.')}<br/>가상 종목과 임의의 가격 변동으로 만든 게임 시스템이야. 실제 주식 투자 정보는 아니며 손실도 발생할 수 있어.</p>
  <p class="stock-legend"><b>전체 ${NURI_STOCKS.length}종목</b><span class="stock-up">▲ 상승</span><span class="stock-down">▼ 하락</span><span class="stock-flat">– 보합</span></p>
  <div class="social-actions"><button type="button" class="modal-action" onclick="openAppModal('crypto')">비트코인 시장</button></div>
  <div class="stock-market-grid">${details}</div>
  <div class="stock-history"><h3>거래 기록</h3><ul>${state.stockLedger.length?state.stockLedger.slice(0,10).map(x=>`<li>${String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;')}</li>`).join(''):'<li>아직 거래 기록이 없어.</li>'}</ul></div>
  <div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal('menu')">메뉴로 돌아가기</button><button type="button" class="modal-action" onclick="closeAppModal()">게임 계속하기</button></div>`;
}
function renderWealthGoalModal(){
 if(typeof window.renderTaebinGoalModal==='function')window.renderTaebinGoalModal();
 else renderMenuModal();
}

function stageForAge(age){
 if(age<3)return 0;if(age<7)return 1;if(age<13)return 2;if(age<16)return 3;if(age<20)return 4;return 5;
}
function stageName(age){return ["아기","유아기","초등학생","중학생","고등학생","성인"][stageForAge(age)]}
function extraChoices(age){
 if(age<3)return [["🧸 포근하게 안아주기",["happiness",4,"social",2]],["🎵 노래 들려주기",["creativity",3,"happiness",3]]];
 if(age<7)return [["🧩 퍼즐·블록 놀이",["intelligence",4,"creativity",3]],["🌳 바깥에서 뛰놀기",["health",4,"happiness",3]]];
 if(age<13)return [["📚 독서와 공부하기",["intelligence",4,"creativity",2]],["🎨 취미 활동하기",["creativity",4,"happiness",3]]];
 if(age<20)return [["🏃 운동과 건강 챙기기",["health",4,"happiness",2]],["🤝 친구들과 어울리기",["social",4,"charm",2]]];
 return [["🧘 건강검진·휴식 챙기기",["health",5,"happiness",2]],["🌱 새로운 취미 시작하기",["creativity",3,"happiness",3]]];
}
function schoolChoices(){
 return [
  ["🏫 특성화고 진학","실무·전공 중심의 학교생활",["creativity",5,"happiness",-2]],
  ["📚 일반고 진학","교과 공부와 대학 준비",["intelligence",6,"health",-2]],
  ["🎨 예술·콘텐츠 계열","창작 활동과 포트폴리오",["creativity",6,"money",-8]],
  ["🧭 진로 탐색 더 하기","여러 경험을 하며 방향 찾기",["social",3,"happiness",-2]]
 ];
}
function adultChoices(){
 return [
  ["🎓 대학 지원하기","입학 면접에서 선택에 따라 합격 여부 결정",["intelligence",7,"money",-15]],
  ["🪖 20살 입대 준비","19살에는 입영 준비, 20살 입대 · 22살 전역",["health",4,"happiness",-2]],
  ["💼 회사 지원하기","채용 면접을 보고 합격하면 첫 출근",["social",5,"happiness",-3]],
  ["🧳 진로 준비 더 하기","자격증·포트폴리오·경험 쌓기",["creativity",4,"intelligence",-2]]
 ];
}
function stageForAge(age){
 if(age<3)return 0;if(age<7)return 1;if(age<13)return 2;if(age<16)return 3;if(age<20)return 4;return 5;
}
function stageName(age){return ["아기","유아기","초등학생","중학생","고등학생","성인"][stageForAge(age)]}
function extraChoices(age){
 const pools = [
  [
   ["🧸 포근하게 안아주기",["happiness",4,"social",2]],
   ["🎵 노래 들려주기",["creativity",3,"happiness",3]],
   ["🪇 리듬에 맞춰 놀기",["creativity",4,"social",1]],
   ["🧦 양말 한 짝을 왕관처럼 쓰기",["happiness",3,"charm",1]],
   ["🗣️ 옹알이로 가족 회의 주도하기",["social",2,"happiness",2]],
   ["🍼 이유식 맛보기",["health",3,"happiness",2]],
   ["🧱 촉감 장난감 만지기",["intelligence",2,"creativity",3]],
   ["🌤️ 유모차 타고 산책하기",["health",3,"happiness",3]],
   ["📖 그림책 함께 보기",["intelligence",3,"social",2]],
   ["🫧 비눗방울 구경하기",["happiness",4,"creativity",2]],
   ["🧸 좋아하는 인형과 놀기",["happiness",3,"social",2]],
   ["👏 손뼉 놀이하기",["social",3,"creativity",2]],
   ["🌙 낮잠 시간을 줄이고 놀기",["happiness",1,"health",-3]],
   ["🧸 장난감을 혼자만 갖고 놀기",["happiness",-2,"social",-2]],
   ["😵 낯선 일정에 오래 머물기",["health",-2,"happiness",-2]]
  ],
  [
   ["🧩 퍼즐·블록 놀이",["intelligence",4,"creativity",3]],
   ["🌳 바깥에서 뛰놀기",["health",4,"happiness",3]],
   ["🖍️ 색칠 공부하기",["creativity",5,"happiness",2]],
   ["🚲 세발자전거 타기",["health",5,"charm",1]],
   ["🧑‍🍳 간단한 요리 돕기",["intelligence",3,"social",3]],
   ["🐞 곤충 관찰하기",["intelligence",4,"creativity",2]],
   ["🧸 장난감 정리하기",["intelligence",2,"happiness",2]],
   ["🎶 동요 따라 부르기",["charm",3,"happiness",3]],
   ["🧦 양말을 손인형이라고 우기기",["creativity",3,"happiness",2]],
   ["🪑 의자에게 먼저 인사하기",["charm",2,"happiness",2]],
   ["🛝 놀이터에서 놀기",["health",3,"social",3]],
   ["📚 동화책 읽기",["intelligence",4,"creativity",2]],
   ["📺 화면을 너무 오래 보기",["happiness",2,"health",-3]],
   ["🧩 어려운 것만 고집하기",["intelligence",3,"happiness",-2]],
   ["🧹 장난감 정리를 계속 미루기",["happiness",1,"social",-2]]
  ],
  [
   ["📚 독서와 공부하기",["intelligence",4,"creativity",2]],
   ["🎨 취미 활동하기",["creativity",4,"happiness",3]],
   ["⚽ 운동장에서 축구하기",["health",5,"social",2]],
   ["🎹 악기 배우기",["creativity",5,"charm",2]],
   ["🧪 과학 실험 해보기",["intelligence",5,"creativity",2]],
   ["📝 일기 쓰기",["intelligence",3,"happiness",3]],
   ["🧑‍🤝‍🧑 친구와 보드게임",["social",5,"happiness",2]],
   ["🌱 식물 키우기",["creativity",3,"health",2]],
   ["📷 사진 찍기",["creativity",4,"charm",2]],
   ["📸 급식 사진을 작품처럼 찍기",["creativity",3,"happiness",2]],
   ["🧠 시험 전날 책상 정리만 완벽하게 하기",["happiness",-2,"intelligence",1]],
   ["🏊 수영 배우기",["health",5,"happiness",2]],
   ["📚 쉬지 않고 공부하기",["intelligence",5,"health",-2,"happiness",-3]],
   ["😤 친구와 심하게 경쟁하기",["intelligence",2,"social",-3,"happiness",-3]],
   ["🎮 해야 할 일을 미루고 게임하기",["happiness",3,"intelligence",-2]]
  ],
  [
   ["🏃 운동과 건강 챙기기",["health",4,"happiness",2]],
   ["🤝 친구들과 어울리기",["social",4,"charm",2]],
   ["🎬 영상 편집 연습하기",["creativity",5,"intelligence",3]],
   ["💻 코딩·디지털 기술 배우기",["intelligence",5,"creativity",3]],
   ["🎸 밴드·악기 활동하기",["creativity",5,"social",2]],
   ["📖 관심 분야 책 읽기",["intelligence",5,"happiness",1]],
   ["🏀 스포츠 동아리 참여하기",["health",4,"social",3]],
   ["📸 사진·영상 촬영하기",["creativity",5,"charm",2]],
   ["🗣️ 발표 연습하기",["charm",4,"intelligence",2]],
   ["🎤 발표 첫마디를 '마이크 테스트'로 시작하기",["charm",2,"happiness",3]],
   ["📱 단톡방에 오타 내고 모른 척하기",["happiness",-2,"social",-1]],
   ["🧘 스트레스 관리하기",["health",3,"happiness",4]],
   ["🌙 밤늦게까지 게임하기",["happiness",4,"health",-3,"intelligence",-2]],
   ["😠 친구와 다투고 화해 미루기",["social",-4,"happiness",-3]],
   ["📅 일정을 무리하게 잡기",["creativity",3,"health",-3,"happiness",-2]]
  ],
  [
   ["🏃 운동하기",["health",4,"happiness",2]],
   ["🤝 친구들과 어울리기",["social",4,"charm",2]],
   ["🧑‍💻 포트폴리오 만들기",["creativity",5,"intelligence",3]],
   ["📜 자격증 준비하기",["intelligence",5,"money",-2]],
   ["🎥 개인 프로젝트 진행하기",["creativity",6,"happiness",2]],
   ["🧭 진로 상담받기",["intelligence",3,"happiness",3]],
   ["🎤 동아리·대외활동 하기",["social",5,"charm",3]],
   ["🛌 하루 푹 쉬기",["health",5,"happiness",4]],
   ["💸 용돈 관리하기",["money",12,"intelligence",2]],
   ["📝 공부 계획 다시 세우기",["intelligence",4,"happiness",1]],
   ["📊 계획표 꾸미다 하루 다 쓰기",["creativity",3,"happiness",-2]],
   ["☕ 카페에서 공부하는 척하다 메뉴 연구하기",["happiness",3,"money",-4]],
   ["🌙 시험 준비로 잠 줄이기",["intelligence",5,"health",-3,"happiness",-4]],
   ["🛍️ 기분 전환으로 충동구매하기",["happiness",3,"money",-12]],
   ["🤐 고민을 혼자 참기",["intelligence",1,"happiness",-3,"social",-2]]
  ],
  [
   ["🧘 건강검진·휴식 챙기기",["health",5,"happiness",2]],
   ["🌱 새로운 취미 시작하기",["creativity",3,"happiness",3]],
   ["💼 업무 역량 키우기",["intelligence",5,"money",8]],
   ["👨‍👩‍👧 가족과 시간 보내기",["social",5,"happiness",4]],
   ["🏃 규칙적으로 운동하기",["health",6,"happiness",2]],
   ["📚 새로운 분야 공부하기",["intelligence",4,"creativity",3]],
   ["🤝 봉사활동 참여하기",["social",5,"charm",3]],
   ["✈️ 여행하며 경험 쌓기",["happiness",6,"creativity",3]],
   ["💰 소비 습관 점검하기",["money",15,"intelligence",2]],
   ["🎨 창작 프로젝트 도전하기",["creativity",5,"happiness",3]],
   ["🕺 거실에서 혼자 시상식 열기",["happiness",4,"charm",2]],
   ["🪴 식물에게 오늘의 업무 보고하기",["creativity",2,"happiness",3]],
   ["💼 야근을 계속하기",["money",12,"health",-4,"happiness",-4]],
   ["🛍️ 계획 없이 물건 사기",["happiness",4,"money",-12]],
   ["📵 가족·친구 연락 미루기",["social",-3,"happiness",-2]]
  ]
 ];
 const idx = age<3?0:age<7?1:age<13?2:age<16?3:age<20?4:5;
 const pool = pools[idx].slice();
 for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
 return pool;
}
const GAME_SPEEDS={normal:{name:"보통",steps:5,mark:"▶"},fast:{name:"빠름",steps:2,mark:"⏩"},turbo:{name:"초고속",steps:1,mark:"⚡"}};
function gameSpeed(){return GAME_SPEEDS[state.settings?.gameSpeed]||GAME_SPEEDS.fast;}
function growthRequired(age){return gameSpeed().steps;}
function growthPerChoice(mode=gameSpeed()){return GAME_SPEEDS.normal.steps/mode.steps;}
function setGameSpeed(speed){
 if(!GAME_SPEEDS[speed])return;
 ensurePlayerExtras();
 const oldRequired=growthRequired(state.age);
 const oldProgress=Math.max(0,Number(state.progress)||0);
 state.settings.gameSpeed=speed;
 const nextRequired=growthRequired(state.age);
 state.progress=Math.min(nextRequired-1,Math.floor(oldProgress/oldRequired*nextRequired));
 applySettings();render();save();
 if(document.getElementById("appModal")?.classList.contains("open")&&activeModal==="settings")renderSettingsModal();
 toast("게임 속도: "+gameSpeed().name+" · "+nextRequired+"번 선택하면 하루 경과!");
}
function cycleGameSpeed(){
 const order=["normal","fast","turbo"];
 const current=order.indexOf(state.settings?.gameSpeed);
 setGameSpeed(order[(Math.max(0,current)+1)%order.length]);
}
/* Life simulation outcomes: these are fictional game probabilities, not health advice. */
function ensureLifeHealth(){
 if(!Number.isFinite(Number(state.healthRisk)))state.healthRisk=5;
 state.healthRisk=Math.max(0,Math.min(100,Math.round(Number(state.healthRisk)*10)/10));
 if(!Number.isFinite(Number(state.illnessSeverity)))state.illnessSeverity=0;
 state.illnessSeverity=Math.max(0,Math.min(3,Math.round(Number(state.illnessSeverity))));
 if(!Number.isFinite(Number(state.totalChoices)))state.totalChoices=0;
}
function adjustHealthRisk(amount){
 ensureLifeHealth();
 state.healthRisk=Math.max(0,Math.min(100,Math.round((state.healthRisk+amount)*10)/10));
}
function healthRiskSummary(){
 ensureLifeHealth();
 const score=state.healthRisk;
 const condition=state.illnessSeverity>=2?' · 건강 관리가 필요한 상태':state.illnessSeverity===1?' · 회복 중':' ';
 return '건강 위험도 '+score.toFixed(0)+'/100 · '+(score<25?'안정':score<50?'주의':score<75?'높음':'매우 높음')+condition;
}
function updateHealthRiskDaily(){
 if(!state.alive)return;
 ensureLifeHealth();
 const health=Number(state.stats.health)||0;
 let change=health<30?3:health<60?1.1:health>=85?-1.6:-.4;
 if(state.illnessSeverity)change+=state.illnessSeverity*.6;
 if(state.age>=65)change+=.2;
 adjustHealthRisk(change);
}
function finishLife(reason){
 if(!state.alive)return;
 state.alive=false;
 state.deathCause=reason;
 if(typeof window.taebinGoalOnLifeEnd==='function')window.taebinGoalOnLifeEnd(reason);
 state.pendingStory=null;
 state.pendingTurningPoint=null;
 state.arcQueue=[];
 state.lastOutcome='🌿 태빈이의 인생이 마무리됐어. 그동안의 이야기를 확인해 봐.';
 state.latestEvent=state.lastOutcome;
 state.log.push('🌿 '+state.age+'살 · 인생의 마지막 기록: '+reason);
 worldPersistLegacy(true);
 state.justEnded=true;
}
function checkLifeOutcome(){
 if(!state.alive)return;
 ensureLifeHealth();
 if(state.age>=100){finishLife('긴 세월을 보내고 자연스럽게 생을 마침');return;}
 if(state.settings?.realisticLife===false||state.age<18)return;
 const age=state.age;
 // Age-related uncertainty, fatigue and long-term risk contribute separately.
 const ageChance=age<40?.0006:age<55?.002:age<65?.007:age<75?.022:age<85?.065:age<95?.15:.30;
 const fatigueChance=state.stats.health<30?.055:state.stats.health<60?.011:0;
 const longTermChance=Math.pow(state.healthRisk/100,2)*(.015+age*.0005);
 const illnessChance=state.illnessSeverity>=2?.025:state.illnessSeverity===1?.006:0;
 const otherChance=age<60?.0003:age<80?.001:.002;
 if(Math.random()<otherChance){finishLife('뜻밖의 사고로 삶이 마무리됨');return;}
 const chance=Math.min(.86,ageChance+fatigueChance+longTermChance+illnessChance);
 if(Math.random()<chance){
  const cause=state.illnessSeverity>=2?'질환으로 건강이 악화됨':state.stats.health<30?'오랜 체력 부족과 건강 악화':age>=75?'나이에 따른 건강 변화':'예기치 못한 건강 문제';
  finishLife(cause);
 }
}
function checkYearlyIllness(){
 if(!state.alive||state.age<18)return;
 ensureLifeHealth();
 const age=state.age;
 if(state.illnessSeverity>0){
  // Health conditions can improve or persist; rest and stable stamina help.
  const recoverChance=state.stats.health>=65?.56:.24;
  if(Math.random()<recoverChance){
   state.illnessSeverity=Math.max(0,state.illnessSeverity-1);
   adjustHealthRisk(-4);
   state.latestEvent=state.illnessSeverity?'🩺 건강 상태가 조금 나아졌어.':'🩺 건강을 회복했어.';
  }
  return;
 }
 const chance=(age<40?.017:age<60?.032:age<75?.065:.12)+state.healthRisk*.00045;
 if(Math.random()>=chance)return;
 state.illnessSeverity=state.healthRisk>70&&Math.random()<.45?2:1;
 adjustHealthRisk(8+state.illnessSeverity*3);
 state.stats.health=limitStat('health',state.stats.health-(state.illnessSeverity===2?8:4));
 state.latestEvent='🩺 갑작스러운 건강 문제로 검진과 휴식이 필요해졌어.';
 state.log.push(state.age+'살 · '+state.latestEvent);
}

function advanceOneDay(){
 // 선택한 진행 속도의 성장 게이지가 모두 차면 하루 경과.
 state.day=(Number(state.day)||1)+1;
 state.yearDay=(Number(state.yearDay)||0)+1;
 state.progress=0;
 updateStockMarket();
 nuriUpdateCrypto();
 randomDailyEvent();
 fatigueDailyEvent();
 updateHealthRiskDaily();
 if(state.yearDay>=3){
  state.yearDay=0;
  state.age++;
  state.event++;
  if(state.age%3===0)state.money+=15;
  // 태빈이 키우기에서는 특별 사진첩 이벤트를 진행하지 않음.
  worldAnnualUpdate();
  ensureLifeArc();
  if(state.lifeRoute==="military"&&state.age>=20&&state.age<22){state.money+=60;state.log.push("🪖 "+state.age+"살 · 복무 중 생활 지원금 수령");}
  if(state.lifeRoute==='military'&&state.age===20){state.log.push('🪖 20살 · 입대했어. 22살에 전역할 예정이야.');}
  if(state.lifeRoute==='military'&&state.age===22){state.serviceCompleted=true;state.applicationStatus='22살 전역';state.log.push('🎖️ 22살 · 군 복무를 마치고 전역했어.');}
  checkLifeEvent();
  checkYearlyIllness();
  romanceAnnualUpdate();
  checkLifeOutcome();
  if(state.alive){triggerTurningPoint(state.age);maybeStartStory(state.age);maybeStartLifeArc(state.age);maybeStartRomanceChapter(state.age);}
  return true;
 }
 return false;
}

// A connected coming-of-age narrative. Chapters are saved so choices matter at later ages.
const STORY_CHAPTERS={
 0:{title:"첫 장, 우리 집의 작은 약속",text:()=>`태빈이는 ${families[state.family]?.name||"한 가정"}에서 태어났어. 가족은 앨범 첫 장에 '너만의 길을 찾아가길'이라고 적었어. 앞으로 태빈이는 어떤 하루를 더 좋아할까?`,options:[
  {label:"🎵 소리에 반응하며 세상 배우기",effect:["creativity",3,"happiness",-1],outcome:"첫 앨범에는 리듬에 맞춰 웃던 날이 남았어.",careerId:"art",flag:"curiosity"},
  {label:"🧩 장난감 구조에 호기심 갖기",effect:["intelligence",3,"health",-1],outcome:"첫 앨범에는 조심스럽게 장난감을 살피던 날이 남았어.",careerId:"technology",flag:"curiosity"},
  {label:"🤲 가족의 손을 꼭 잡기",effect:["social",3,"intelligence",-1],outcome:"첫 앨범에는 가족과 따뜻하게 시간을 보낸 날이 남았어.",careerId:"people",flag:"family"}]},
 1:{title:"태빈이의 첫 생일",text:"태빈이가 한 살이 됐어. 가족은 태빈이가 태어났을 때 두르고 있던 포대기를 꺼냈어. 일 년 사이 훌쩍 자란 태빈이를 보며 오늘의 모습을 앨범에 남기기로 했어.",options:[
  {label:"가족과 함께 생일 사진 찍기",effect:["social",3,"charm",2],outcome:"태빈이가 카메라 대신 가족을 보며 활짝 웃은 사진을 남겼어.",careerId:"people"},
  {label:"종이에 작은 손도장 찍기",effect:["creativity",3,"intelligence",2],outcome:"손도장 옆에 태빈이의 손가락으로 찍은 점 다섯 개도 남겼어.",careerId:"art"},
  {label:"가족의 축하 노래 녹음하기",effect:["creativity",3,"charm",2],outcome:"축하 노래 맨 끝에 태빈이가 손뼉 치는 소리도 담겼어.",careerId:"art"}]},
 2:{title:"신발 두 짝과 동네 지도",text:"두 살이 된 태빈이가 산책을 나가고 싶어 신발 두 짝을 현관에 가져다 놓았어. 오늘은 태빈이가 골목의 갈림길에서 어느 쪽으로 갈지 정해 보기로 했어.",options:[
  {label:"빵 냄새를 따라 동네 가게로 가기",effect:["social",3,"charm",2],outcome:"가게 주인이 태빈이의 고개 인사를 받아 줬어. 다음 날 태빈이는 먼저 손을 흔들었어.",careerId:"people"},
  {label:"분필 자국을 따라 놀이터까지 가기",effect:["creativity",3,"social",2],outcome:"놀이터 바닥에서 빗물에 반쯤 지워진 분필 길을 발견했어. 태빈이는 다음에 자기 색으로 그려 보기로 했어.",careerId:"art"},
  {label:"우체통을 지나며 빨간 물건 찾아보기",effect:["intelligence",3,"creativity",2],outcome:"빨간 우체통과 빨간 대문을 찾아냈어. 태빈이는 돌아가는 길에도 두 곳을 기억했어.",careerId:"research"}]},
 3:{title:"놀이터의 새로운 친구",text:()=>"비가 그친 놀이터에서 하린이라는 여자아이가 혼자 색분필로 길을 그리고 있어. 태빈이는 먼저 다가갈지, 조금 거리를 둘지 결정해야 해.",options:[
  {label:"🤝 하린에게 같이 놀자고 말하기",effect:["social",4,"happiness",-2],outcome:"하린은 활짝 웃으며 태빈이에게 분필 한 개를 건넸어.",careerId:"people",bond:2},
  {label:"🎨 길 옆에 멋진 그림 더하기",effect:["creativity",4,"health",-1],outcome:"태빈이의 그림을 본 하린이 먼저 다가와 인사를 했어.",careerId:"art",bond:1},
  {label:"🧩 색분필로 규칙 있는 미로 만들기",effect:["intelligence",4,"happiness",-1],outcome:"하린은 태빈이의 미로를 한참 보더니 함께 풀어보자고 했어.",careerId:"research",bond:1}]},
 7:{title:"첫 교실, 첫 약속",text:()=>`학교 첫날이야. ${storyBond()>=2?"같은 반이 된 하린이 손을 흔들어 줬어.":"낯선 교실에서 하린을 다시 만났어."} 칠판에는 '우리 반이 함께할 프로젝트'가 적혀 있어.`,options:[
  {label:"📚 교실 도서관 정리하기",effect:["intelligence",4,"happiness",-2],outcome:"태빈이는 책을 분류하며 새로운 분야를 발견했어.",careerId:"research",flag:"books"},
  {label:"🎬 학급 소개 영상 만들기",effect:["creativity",4,"health",-2],outcome:"태빈이가 만든 영상 덕분에 반 친구들이 서로를 더 잘 알게 됐어.",careerId:"art",flag:"media"},
  {label:"🤝 친구들의 이야기를 듣고 소개하기",effect:["social",4,"intelligence",-1],outcome:"태빈이는 서로 다른 친구들의 장점을 알아가는 재미를 느꼈어.",careerId:"people",bond:1}]},
 10:{title:"다락방 프로젝트",text:()=>`태빈이는 ${storyBond()>=2?"하린과 함께":"학교에서 새롭게 만난 친구들과"} 낡은 다락방에 모였어. 여기서 처음으로 스스로 기획한 프로젝트를 시작할 수 있겠어.`,options:[
  {label:"💻 작은 게임을 직접 만들기",effect:["intelligence",4,"health",-2],outcome:"간단한 게임이 움직이자, 친구들이 박수를 쳤어.",careerId:"technology",flag:"game"},
  {label:"📷 동네의 하루를 영상으로 기록하기",effect:["creativity",4,"money",-3],outcome:"동네 사람들의 일상 이야기가 한 편의 영상이 됐어.",careerId:"art",flag:"film"},
  {label:"🌱 이웃을 돕는 작은 행사 열기",effect:["social",4,"happiness",-2],outcome:"서툴렀지만 사람들이 고맙다고 말해 줬어.",careerId:"people",bond:1}]},
 13:{title:"축제 전날의 오해",text:()=>`학교 축제를 준비하던 중, 의견이 엇갈려 팀 분위기가 어색해졌어. ${storyBond()>=2?"하린도 고민스러운 표정이야.":"친구들도 각자 생각이 달라."} 태빈이는 상황을 어떻게 풀까?`,options:[
  {label:"🗣️ 친구들을 모아 함께 대화하기",effect:["social",5,"happiness",-2],outcome:"서로의 입장을 듣고 계획을 다시 짰어.",careerId:"people",bond:2},
  {label:"🎨 새로운 포스터로 설득하기",effect:["creativity",5,"health",-2],outcome:"태빈이의 아이디어가 팀을 다시 움직이게 했어.",careerId:"art",bond:1},
  {label:"📋 문제를 정리해 해결책 찾기",effect:["intelligence",5,"happiness",-2],outcome:"차분한 해결책 덕분에 팀이 다시 일할 수 있었어.",careerId:"business",bond:1}]},
 16:{title:"미래의 지도",text:()=>"진학을 고민하는 태빈이 앞에 여러 길이 펼쳐졌어. 몇 해 전 친구들과 만들었던 기록도 다시 꺼내 봤어. 꼭 하나의 길만 정답인 건 아니야.",options:[
  {label:"🎨 하고 싶은 일을 작품으로 정리하기",effect:["creativity",4,"money",-3],outcome:"태빈이의 첫 포트폴리오가 만들어졌어.",careerId:"art",flag:"portfolio"},
  {label:"💻 기술과 학문을 깊게 탐색하기",effect:["intelligence",4,"health",-2],outcome:"배우고 싶은 분야가 조금 더 구체적으로 보이기 시작했어.",careerId:"technology",flag:"study"},
  {label:"🤝 여러 사람을 만나 진로 상담하기",effect:["social",4,"happiness",-2],outcome:"진로에 대한 여러 관점을 배울 수 있었어.",careerId:"people",bond:1}]},
 18:{title:"졸업 전 마지막 발표",text:()=>`졸업을 앞두고 태빈이가 속한 팀에 마지막 발표 기회가 왔어. ${state.schoolPath?"선택한 학교에서 쌓은 경험을":"그동안 쌓아 온 경험을"} 어떻게 보여줄지 고민이야.`,options:[
  {label:"🎬 작품을 한 편의 영상으로 발표하기",effect:["creativity",5,"health",-2],outcome:"친구들이 태빈이의 표현 방식에 집중해 줬어.",careerId:"art",flag:"film"},
  {label:"🔬 실험과 자료로 결과 입증하기",effect:["intelligence",5,"happiness",-2],outcome:"태빈이의 설명은 논리적이라는 평가를 받았어.",careerId:"research",flag:"study"},
  {label:"📊 기획부터 운영까지 맡기",effect:["social",5,"money",-3],outcome:"팀은 태빈이의 조율 덕분에 발표를 마칠 수 있었어.",careerId:"business",bond:1}]},
 20:{title:"작은 방, 커다란 세계",text:()=>`태빈이의 새 출발이 시작됐어. ${state.adultPath||"새로운 계획"}을 선택한 태빈이는 오래된 앨범 속 문장을 다시 읽어. '너만의 길을 찾아가길.'`,options:[
  {label:"💻 나만의 첫 프로젝트 출발하기",effect:["intelligence",5,"money",-5],outcome:"완벽하진 않지만 태빈이만의 첫 프로젝트가 세상에 나왔어.",careerId:"technology",flag:"project"},
  {label:"🎨 작은 전시와 영상 작업 시작하기",effect:["creativity",5,"money",-5],outcome:"처음으로 낯선 사람이 태빈이의 작품을 보고 응원했어.",careerId:"art",flag:"project"},
  {label:"🤝 함께할 사람을 찾고 팀 만들기",effect:["social",5,"happiness",-2],outcome:"다른 사람들과 힘을 합쳐 새로운 시작을 할 수 있었어.",careerId:"people",bond:1}]},
 25:{title:"첫 성과, 그리고 선택",text:()=>`몇 년간의 경험이 쌓였어. 태빈이에게 가장 익숙해진 분야는 '${bestCareer().name}'야. 작은 성과도 있었지만 아직 배울 일이 많아.`,options:[
  {label:"📚 실력을 더 깊게 키우기",effect:["intelligence",5,"happiness",-2],outcome:"태빈이는 차근차근 전문성을 쌓기 시작했어.",careerId:"research",flag:"expert"},
  {label:"💼 새로운 일을 직접 기획하기",effect:["money",8,"health",-2],outcome:"태빈이의 기획이 작은 수입으로 이어졌어.",careerId:"business",flag:"startup"},
  {label:"🎨 내 이름을 건 작품 만들기",effect:["creativity",5,"money",-3],outcome:"새로운 작품이 태빈이의 다음 방향을 열어 줬어.",careerId:"art",flag:"signature"}]},
 35:{title:"다시 만난 다락방 친구들",text:()=>`오랜만에 다시 모인 친구들이 예전 기록을 펼쳤어. ${storyBond()>=3?"하린은 태빈이의 가장 큰 변화를 알고 있었어.":"하린도 오랜 시간이 지났지만 태빈이의 도전을 기억했어."} 모두의 삶은 서로 다른 모습이 됐지.`,options:[
  {label:"🤝 오래된 친구들과 공동 프로젝트하기",effect:["social",5,"money",-3],outcome:"예전의 인연이 새로운 협력으로 이어졌어.",careerId:"people",bond:2},
  {label:"🔬 경험을 정리해 후배에게 알려주기",effect:["intelligence",5,"health",-2],outcome:"태빈이의 경험은 누군가에게 배움의 기회가 됐어.",careerId:"research",flag:"mentor"},
  {label:"🎬 그 시절을 짧은 다큐로 만들기",effect:["creativity",5,"money",-3],outcome:"낡은 다락방의 사진들이 하나의 이야기로 이어졌어.",careerId:"art",flag:"memoir"}]},
 50:{title:"새로운 세대의 질문",text:()=>`태빈이의 분야를 배우려는 학생이 찾아왔어. 태빈이도 오래전엔 누군가의 응원에 힘을 얻었지. ${bestCareer().name}의 경험을 어떻게 전할까?`,options:[
  {label:"🤝 젊은 사람들에게 멘토링하기",effect:["social",5,"health",-2],outcome:"태빈이의 작은 조언이 다음 세대의 시작이 됐어.",careerId:"people",flag:"mentor"},
  {label:"📚 나만의 배움 기록집 만들기",effect:["intelligence",5,"happiness",-2],outcome:"오래 쌓인 노하우가 한 권의 기록으로 정리됐어.",careerId:"research",flag:"memoir"},
  {label:"🎨 함께 새로운 작품 도전하기",effect:["creativity",5,"money",-3],outcome:"세대를 넘어 함께 만든 작품이 좋은 기억으로 남았어.",careerId:"art",flag:"collaboration"}]},
 70:{title:"오래된 앨범의 마지막 빈칸",text:()=>`서랍에서 태빈이의 아기 시절 앨범이 나왔어. 첫 장에 쓰인 말이 아직도 남아 있어. ${storyBond()>=3?"하린과의 사진도 여러 장이야.":"친구들과 함께한 장면들도 가득해."} 태빈이는 빈칸에 무엇을 남길까?`,options:[
  {label:"📖 인생에서 배운 것을 글로 남기기",effect:["intelligence",4,"health",-1],outcome:"태빈이는 삶에서 배운 작은 지혜들을 차곡차곡 적었어.",careerId:"research",flag:"memoir"},
  {label:"📸 추억을 영상과 사진으로 남기기",effect:["creativity",4,"health",-1],outcome:"태빈이의 시간이 사진과 영상으로 다시 살아났어.",careerId:"art",flag:"memoir"},
  {label:"🤝 소중한 사람들에게 감사 전하기",effect:["social",4,"happiness",-1],outcome:"태빈이의 진심 어린 말이 주변 사람들에게 전해졌어.",careerId:"people",bond:2}]},
 90:{title:"다음 태빈이를 위한 편지",text:()=>`오랜 시간이 흐른 뒤 태빈이는 작은 편지를 쓰기로 했어. 어떤 삶이든 한 번의 선택으로 완성되지 않는다는 사실을 이제 알 것 같아. 태빈이의 관심 분야는 끝까지 ${bestCareer().name}였어.`,options:[
  {label:"📖 배움을 포기하지 말라는 편지 쓰기",effect:["intelligence",3,"happiness",-1],outcome:"편지에는 언제든 새로 배울 수 있다는 문장이 남았어.",careerId:"research"},
  {label:"🎨 좋아하는 것을 만들어 보라는 편지 쓰기",effect:["creativity",3,"health",-1],outcome:"편지에는 작은 아이디어도 소중히 하라는 문장이 남았어.",careerId:"art"},
  {label:"🤝 사람을 아끼라는 편지 쓰기",effect:["social",3,"happiness",-1],outcome:"편지에는 함께한 시간이 큰 선물이었다는 문장이 남았어.",careerId:"people",bond:1}]}
};
function storyBond(){return Number(state.storyFlags?.bond)||0;}
function ensureStory(){
 if(!Array.isArray(state.storySeen))state.storySeen=[];
 if(!Array.isArray(state.storyJournal))state.storyJournal=[];
 if(!state.storyFlags||typeof state.storyFlags!=="object")state.storyFlags={bond:0,flags:[]};
 if(!Array.isArray(state.storyFlags.flags))state.storyFlags.flags=[];
}

// FAMILY STORIES — unique plotlines triggered at ages without a core STORY_CHAPTERS event.
// Family options use the same two-growth/health-cost balancing as the rest of the game.
const FAMILY_CHAPTERS={
 ordinary:{
 5:{title:"평범한 집의 주말",text:"첫 앨범을 채우던 작은 거실에서 다섯 번째 생일 사진을 찍었어. 특별한 일정이 없는 토요일, 부모님은 오늘 하고 싶은 일을 태빈이에게 골라 보라고 해.",options:[
  {label:"동네 도서관에서 그림책 보기",effect:["intelligence",3,"creativity",2],outcome:"작은 도서관에서 생각보다 큰 세상을 발견했어.",careerId:"research"},
  {label:"가족과 공원에서 시간 보내기",effect:["social",3,"charm",2],outcome:"평범한 하루가 따뜻한 추억으로 남았어.",careerId:"people"},
  {label:"집에서 새로운 장난감 만들어 보기",effect:["creativity",3,"intelligence",2],outcome:"스스로 무언가를 만드는 즐거움을 알았어.",careerId:"art"}]},
 12:{title:"작은 선택의 무게",text:"친구들은 학원을 더 다니기도 하고 새로운 취미를 찾기도 해. 태빈이는 자신의 시간을 결정할 수 있어.",options:[
  {label:"좋아하는 과목을 집중해서 공부하기",effect:["intelligence",3,"social",2],outcome:"꾸준히 공부하는 자기만의 방식을 찾았어.",careerId:"research"},
  {label:"관심 있는 동아리 찾아보기",effect:["social",3,"creativity",2],outcome:"새로운 사람들과 관심사를 나눴어.",careerId:"people"},
  {label:"작은 작품을 만들어 발표하기",effect:["creativity",3,"charm",2],outcome:"처음으로 내가 만든 것을 사람들에게 보여줬어.",careerId:"art"}]},
 17:{title:"태빈이만의 진로를 고르는 해",text:"친구들은 저마다 진로를 정하고 있어. 부모님은 태빈이의 생각을 먼저 물어봐.",options:[
  {label:"적성을 찾아 여러 분야를 체험하기",effect:["intelligence",3,"creativity",2],outcome:"익숙하지 않은 길에도 배울 게 있다는 걸 알았어."},
  {label:"관심 분야 포트폴리오 준비하기",effect:["creativity",3,"charm",2],outcome:"조금씩 나만의 실력을 보여줄 자료가 쌓였어.",careerId:"art"},
  {label:"친구들과 함께 진로 정보 조사하기",effect:["social",3,"intelligence",2],outcome:"혼자서 찾지 못한 기회를 발견했어.",careerId:"people"}]},
 28:{title:"평범하지만 소중한 선택",text:"이제 어른이 된 태빈이는 일과 취미, 주변 사람 사이에서 균형을 고민해.",options:[
  {label:"일과 생활의 균형 다시 세우기",effect:["intelligence",3,"social",2],outcome:"자신에게 중요한 시간을 따로 남기기로 했어."},
  {label:"새 기술을 배워 일의 폭 넓히기",effect:["intelligence",3,"creativity",2],outcome:"새로운 가능성이 열렸어.",careerId:"technology"},
  {label:"오래된 친구들과 관계 돌보기",effect:["social",3,"charm",2],outcome:"평범한 일상이 더 든든해졌어."}]},
 40:{title:"보통의 날들이 쌓여",text:"태빈이는 지나온 시간을 돌아보며 앞으로 어떤 삶에 더 힘을 쏟을지 고민해.",options:[
  {label:"새로운 취미에 도전하기",effect:["creativity",3,"intelligence",2],outcome:"나이가 들어도 새로운 즐거움을 발견했어."},
  {label:"가까운 사람들과 추억 만들기",effect:["social",3,"charm",2],outcome:"사람들 사이에서 삶의 의미를 느꼈어."},
  {label:"다음 목표를 계획하기",effect:["intelligence",3,"creativity",2],outcome:"오래 쌓인 경험을 바탕으로 목표를 새로 세웠어."}]}
 },
 wealthy:{
 5:{title:"엄격한 집안의 규칙",text:"아기 방에 붙어 있던 시간표는 이제 공부·예절·외출까지 빼곡해졌어. 막내 태빈이에게도 집안의 규칙은 예외가 아니래. 넉넉한 환경 속에서 자기 시간을 어떻게 지킬까?",options:[
  {label:"왜 그런 규칙인지 부모님께 물어보기",effect:["social",3,"intelligence",2],outcome:"규칙을 이해하고 스스로 의견을 말하는 법을 배웠어.",familyAction:"dialogue"},
  {label:"일정을 지키면서 나만의 시간 만들기",effect:["intelligence",3,"creativity",2],outcome:"엄격한 환경에서도 자기 시간을 지키는 법을 찾았어."},
  {label:"원하는 취미를 차분히 설득해 보기",effect:["charm",3,"social",2],outcome:"부모님이 관심사를 조금 더 이해하게 됐어.",familyAction:"dialogue"}]},
 12:{title:"부유한 집안에 쏠린 시선",text:"친구인 척 다가온 누군가가 집안 이야기를 캐묻고 돈을 빌려 달라고 해. 부모님은 낯선 제안을 경계하래.",options:[
  {label:"개인 정보를 말하지 않고 선을 긋기",effect:["intelligence",3,"social",2],outcome:"사생활을 지키면서도 예의 바르게 대응했어.",familyAction:"safe"},
  {label:"믿을 수 있는 어른과 상의하기",effect:["social",3,"intelligence",2],outcome:"혼자 판단하지 않고 도움을 구해 상황을 정리했어.",familyAction:"safe"},
  {label:"새로운 친구와 천천히 신뢰 쌓기",effect:["social",3,"charm",2],outcome:"돈이 아닌 진심으로 관계를 맺는 사람을 구별하기 시작했어."}]},
 17:{title:"집안이 정해 준 진로",text:"부모님은 가업에 도움이 되는 진로를 권하고, 태빈이는 자신의 꿈과 가족의 기대 사이에서 고민해.",options:[
  {label:"부모님을 설득할 진로 계획 작성하기",effect:["intelligence",3,"charm",2],outcome:"무조건 반대하기보다 목표와 근거를 보여줬어.",familyAction:"dialogue"},
  {label:"가업과 자신의 관심사를 연결하기",effect:["creativity",3,"intelligence",2],outcome:"가족의 기대와 자신의 방향이 만날 가능성을 찾았어.",careerId:"business"},
  {label:"부모님과 일정한 기간을 정해 도전하기",effect:["social",3,"creativity",2],outcome:"서로 양보한 시간 동안 실력을 증명하기로 했어.",familyAction:"dialogue"}]},
 28:{title:"재산보다 중요한 것",text:"유명한 집안이라는 이유로 접근하는 사람들이 생겼어. 회사나 사업 제안도 쏟아져.",options:[
  {label:"계약 내용을 꼼꼼히 검토하기",effect:["intelligence",3,"social",2],outcome:"조건을 비교하고 위험한 제안을 피했어.",familyAction:"safe",careerId:"business"},
  {label:"자신의 이름으로 작은 프로젝트 해보기",effect:["creativity",3,"charm",2],outcome:"집안의 이름보다 자신의 실력으로 평가받는 경험을 했어."},
  {label:"신뢰할 수 있는 동료들과 팀 꾸리기",effect:["social",3,"intelligence",2],outcome:"관계의 깊이를 돈이 아니라 신뢰로 판단했어."}]},
 40:{title:"집안의 후계자라는 기대",text:"가족은 태빈이에게 더 큰 책임을 맡기려 해. 이제는 자신이 원하는 삶의 방식도 중요해.",options:[
  {label:"책임을 나누고 전문가 의견 듣기",effect:["social",3,"intelligence",2],outcome:"혼자 부담을 떠안지 않고 협력하는 길을 찾았어."},
  {label:"가업의 방식을 새롭게 바꾸기",effect:["creativity",3,"intelligence",2],outcome:"새로운 방식을 도입하며 가족의 시선도 바뀌기 시작했어.",careerId:"business"},
  {label:"나만의 일을 유지하겠다고 말하기",effect:["charm",3,"social",2],outcome:"서로 다른 기대를 인정하고 자신만의 기준을 지켰어.",familyAction:"dialogue"}]}
 },
 frugal:{
 5:{title:"따뜻한 집, 부족한 형편",text:"아기 때 덮던 담요를 동생에게 물려준 태빈이는 이제 집안의 첫째야. 기초생활수급 지원을 받는 형편이라 새 장난감은 어렵지만, 부모님은 태빈이의 빠른 배움과 풍부한 상상력을 알아보고 매일 이야기를 들어 줘.",options:[
  {label:"헌 종이로 그림과 이야기 만들기",effect:["creativity",4,"intelligence",3],outcome:"작은 재료로 놀라운 그림을 만들어 재능의 싹을 보여줬어.",careerId:"art",familyAction:"talent"},
  {label:"오래된 책으로 혼자 새로운 것 배우기",effect:["intelligence",4,"creativity",3],outcome:"태빈이의 빠른 이해력에 가족이 놀랐어.",careerId:"research",familyAction:"talent"},
  {label:"부모님과 동네 무료 문화 프로그램 가기",effect:["social",3,"creativity",3],outcome:"돈을 많이 쓰지 않아도 즐거운 배움이 있다는 걸 알았어.",familyAction:"talent"}]},
 12:{title:"숨은 천재를 알아본 선생님",text:"선생님이 태빈이의 작품과 문제 해결 능력을 보고 재능 지원 프로그램을 추천했어. 참가비 부담을 줄일 방법도 있어.",options:[
  {label:"장학 프로그램에 지원하기",effect:["intelligence",5,"creativity",3],outcome:"태빈이의 뛰어난 재능을 보여주고 지원 기회를 얻었어.",familyAction:"scholarship"},
  {label:"무료 창작 대회에 작품 제출하기",effect:["creativity",5,"charm",3],outcome:"부모님이 만든 작은 상장을 벽에 걸어 주셨어.",familyAction:"talent",careerId:"art"},
  {label:"부모님과 진로를 함께 의논하기",effect:["social",4,"intelligence",3],outcome:"다정한 부모님은 태빈이의 길을 믿고 응원했어.",familyAction:"talent"}]},
 17:{title:"재능과 현실 사이에서",text:"생활비가 빠듯하지만 태빈이는 특별한 실력을 갖췄어. 부모님은 꿈을 지키면서도 안정적인 계획을 세워 보자고 해.",options:[
  {label:"장학금과 지원 제도를 자세히 찾아보기",effect:["intelligence",5,"social",3],outcome:"실력과 지원 제도를 연결해 학업의 길을 넓혔어.",familyAction:"scholarship"},
  {label:"포트폴리오로 실력 증명하기",effect:["creativity",5,"charm",3],outcome:"돈 대신 작품이 태빈이의 가능성을 증명했어.",familyAction:"talent",careerId:"art"},
  {label:"무료 교육 과정과 멘토 찾기",effect:["social",4,"intelligence",4],outcome:"도와주려는 사람과 새로운 기회가 생겼어.",familyAction:"scholarship"}]},
 28:{title:"재능으로 만들어 낸 기회",text:"태빈이는 부족한 환경에서 익힌 문제 해결력과 재능을 실제 일에서 활용하고 있어.",options:[
  {label:"재능을 살려 새로운 일 제안하기",effect:["creativity",5,"intelligence",3],outcome:"스스로 만든 기회가 다음 경력으로 이어졌어.",familyAction:"talent"},
  {label:"경제적 계획을 세워 가족을 돕기",effect:["intelligence",4,"social",3],outcome:"부모님과 미래를 위한 계획을 차근차근 세웠어."},
  {label:"비슷한 환경의 후배를 멘토링하기",effect:["social",4,"charm",3],outcome:"받았던 도움을 다른 사람과 나눴어.",careerId:"people"}]},
 40:{title:"재능이 쌓아 올린 인생",text:"어린 시절 태빈이를 믿어 준 부모님과 함께, 태빈이는 어떤 삶을 만들었는지 돌아봐.",options:[
  {label:"재능을 다음 세대에 나누기",effect:["social",4,"intelligence",3],outcome:"후배들이 도전할 수 있도록 기회를 나눴어."},
  {label:"새로운 연구나 작품에 도전하기",effect:["intelligence",5,"creativity",4],outcome:"재능은 여전히 새로운 길을 열어 줬어.",familyAction:"talent"},
  {label:"부모님과 조용한 휴일 보내기",effect:["social",4,"charm",3],outcome:"경제적 형편과 별개로 깊은 애정을 나누는 가족이었어."}]}
 },
 supportive:{
 5:{title:"꿈을 밀어 주는 부모님",text:"아기 때 좋아하던 악기와 블록 사진을 부모님이 꺼내 보여 줬어. 이제 태빈이가 직접 고른 활동에 시간과 도구를 보태 주겠대. 어떤 꿈의 씨앗을 키워 볼까?",options:[
  {label:"그림과 영상 만들기 시작하기",effect:["creativity",4,"charm",3],outcome:"부모님이 작업 도구를 마련해 주며 계속 해 보라고 응원했어.",familyAction:"dream",careerId:"art"},
  {label:"실험과 코딩 놀이 시작하기",effect:["intelligence",4,"creativity",3],outcome:"배우고 싶다는 말에 부모님이 공부 환경을 마련해 줬어.",familyAction:"dream",careerId:"technology"},
  {label:"사람들 앞에서 발표 연습하기",effect:["social",4,"charm",3],outcome:"부모님은 발표를 보고 박수를 보내 줬어.",familyAction:"dream",careerId:"people"}]},
 12:{title:"태빈이의 꿈에 투자하는 가족",text:"부모님은 태빈이의 열정을 보고 필요한 수업이나 활동을 전폭 지원해. 대신 무엇을 정말 좋아하는지 알고 싶어 해.",options:[
  {label:"관심 분야 경연과 활동에 도전하기",effect:["creativity",4,"charm",3],outcome:"부모님의 지원으로 실전 경험을 쌓았어.",familyAction:"dream"},
  {label:"실력을 더 키울 계획 만들기",effect:["intelligence",4,"creativity",3],outcome:"연습 시간을 정하고 꾸준히 성장하기로 했어.",familyAction:"dream"},
  {label:"지금 꿈이 맞는지 다른 분야도 체험하기",effect:["intelligence",3,"social",3],outcome:"부모님은 꿈을 찾는 과정도 중요하다고 말했어."}]},
 17:{title:"꿈을 계속할까, 내려놓을까",text:"부모님은 꿈을 이루는 데 필요한 비용과 시간을 지원하고 있어. 다만 태빈이가 꿈을 스스로 포기하면 함께 지원도 멈추겠다고 말했어.",options:[
  {label:"끝까지 도전하겠다고 약속하기",effect:["creativity",4,"intelligence",3],outcome:"부모님은 계획과 연습을 계속 지원하기로 했어.",familyAction:"dream"},
  {label:"새로운 목표로 꿈을 바꿔서 설득하기",effect:["intelligence",4,"social",3],outcome:"부모님은 바뀐 목표와 구체적인 계획을 듣고 다시 응원해 줬어.",familyAction:"dream"},
  {label:"꿈을 포기하고 지원 없이 다른 길 가기",effect:["intelligence",3,"charm",3],outcome:"부모님도 프로젝트에 대한 지원을 중단했어. 태빈이는 자기 힘으로 다른 길을 찾아야 해.",familyAction:"abandon"}]},
 28:{title:"나의 길과 가족의 지원",text:()=>state.familyDreamSupport===false?"태빈이는 예전에 꿈을 포기했어. 부모님의 예전 프로젝트 지원은 멈췄지만 새로운 삶의 방향을 고민할 수 있어.":"부모님은 지금도 태빈이의 목표를 응원해. 큰 도전을 앞두고 계획을 다시 점검할 기회가 생겼어.",options:[
  {label:"현재 목표를 구체화해서 도전하기",effect:["intelligence",4,"creativity",3],outcome:"스스로 계획을 세워 다음 기회를 만들었어.",familyAction:"dream"},
  {label:"경험을 살려 새로운 진로에 도전하기",effect:["creativity",4,"social",3],outcome:"예전 꿈을 돌아보고 새 방향에서 가능성을 찾았어.",familyAction:"dream"},
  {label:"지원과 상관없이 독립적인 삶 만들기",effect:["intelligence",4,"charm",3],outcome:"가족의 기대와 별개로 자신의 생활을 책임지기로 했어.",familyAction:"independent"}]},
 40:{title:"꿈의 의미가 바뀌는 순간",text:()=>state.familyDreamSupport===false?"가족의 프로젝트 지원 없이도 태빈이는 자신만의 길을 걸어왔어. 이제 앞으로의 꿈을 다시 그려 볼까?":"어릴 때부터 계속 지원받은 꿈은 다른 형태로 발전했어. 태빈이는 무엇을 남기고 싶을까?",options:[
  {label:"새로운 목표에 다시 도전하기",effect:["creativity",4,"intelligence",3],outcome:"나이가 들어도 새로운 꿈을 시작할 수 있다는 걸 알았어.",familyAction:"dream"},
  {label:"경험을 다른 사람에게 가르치기",effect:["social",4,"charm",3],outcome:"꿈을 좇으며 배운 경험을 다른 사람에게 전했어."},
  {label:"가족과 앞으로의 삶을 대화하기",effect:["social",4,"intelligence",3],outcome:"서로의 기대와 선택을 존중하며 이야기를 나눴어."}]}
 }
};
function applyFamilyStoryAction(action){
 if(!action)return;
 if(action==="abandon"){
  state.familyDreamAbandoned=true;
  state.familyDreamSupport=false;
  state.stats.happiness=limitStat("happiness",state.stats.happiness-5);
  state.log.push("가족 이야기: 태빈이가 꿈을 포기하면서 부모님의 꿈 지원도 중단됐어.");
 }else if(action==="dream"){
  state.familyDreamAbandoned=false;
  state.familyDreamSupport=true;
  state.log.push("가족 이야기: 새로운 목표를 이어 가며 부모님의 지원을 받기로 했어.");
 }else if(action==="independent"){
  state.familyDreamSupport=false;
  state.log.push("가족 이야기: 태빈이는 가족의 지원 없이 자신의 힘으로 도전해 보기로 했어.");
 }else if(action==="scholarship"){
  state.familyScholarships=(state.familyScholarships||0)+1;
  state.money+=12;
  state.log.push("가족 이야기: 태빈이의 재능을 인정받아 활동비 12,000원을 지원받았어.");
 }else if(action==="talent"){
  state.familyTalentProgress=(state.familyTalentProgress||0)+1;
 }else if(action==="safe"){
  state.familyTrust=(state.familyTrust||0)+1;
 }else if(action==="dialogue"){
  state.familyTrust=(state.familyTrust||0)+1;
 }
}
function familyBackgroundEvent(){
 if(state.settings?.randomEvents===false||state.age<3||Math.random()>.22)return false;
 const family=state.family, age=state.age;
 let entries=[];
 if(family==="ordinary")entries=[
  ["부모님과 평범한 저녁을 보내며 이야기를 나눴어.",0,1,0],
  ["동네에서 작은 행사에 참여하며 새로운 경험을 했어.",0,1,0]];
 if(family==="wealthy")entries=[
  ["엄격한 부모님의 일정 때문에 자유 시간이 줄었어.",0,-2,0],
  ["유명한 집안이라는 이유로 사적인 정보를 묻는 사람이 있었어. 조심해서 대응했어.",0,-1,0],
  ["부모님과 대화하며 자신에게도 중요한 선택이 있다고 말했어.",0,1,0]];
 if(family==="frugal")entries=[
  ["부모님은 돈 대신 따뜻한 대화로 힘을 줬어.",0,2,0],
  ["지역의 무료 교육 프로그램을 찾아 재능을 연습했어.",0,1,1],
  ["생활비가 빠듯한 달이지만 가족이 서로 도우며 지냈어.",0,-1,0]];
 if(family==="supportive")entries=state.familyDreamSupport===false?[
  ["꿈을 포기한 뒤 부모님의 프로젝트 지원은 멈췄어. 새로운 계획을 직접 세웠어.",0,-1,0],
  ["가족은 더 이상 비용을 지원하지 않지만, 태빈이는 스스로 선택한 방향을 탐색하고 있어.",0,0,0]]:[
  ["부모님은 태빈이의 연습과 프로젝트를 응원했어.",0,2,1],
  ["부모님이 도전 기회를 찾아 주었어. 태빈이는 연습에 힘을 쏟았어.",0,1,1]];
 if(!entries.length)return false;
 const [msg,hp,happy,talent]=entries[Math.floor(Math.random()*entries.length)];
 state.stats.health=limitStat("health",state.stats.health+hp);
 state.stats.happiness=limitStat("happiness",state.stats.happiness+happy);
 if(talent&&family==="frugal")state.stats.creativity=limitStat("creativity",state.stats.creativity+.3);
 if(talent&&family==="supportive"&&state.familyDreamSupport!==false)state.stats.creativity=limitStat("creativity",state.stats.creativity+.2);
 state.log.push(age+"살 · 가족 이야기: "+msg);
 state.latestEvent=msg;
 return true;
}

// Family openings retain the original first-choice effects and story flags.
const FAMILY_OPENINGS={
 "ordinary": {
  "title": "작은 거실에서 시작한 인생",
  "text": "작은 거실에 가족이 모여 태빈이의 첫 앨범을 펼쳤어. 부모님은 시작 자금 100,000원을 차곡차곡 모아 두었어. 특별한 혜택이나 정해진 진로 없이, 일상 속 작은 선택으로 태빈이만의 길을 만들어 갈 거야.",
  "labels": [
   "가족이 흥얼거리는 노래 듣기",
   "거실 장난감의 모양 살펴보기",
   "퇴근한 부모님의 손 꼭 잡기"
  ],
  "outcomes": [
   "평범한 거실이 태빈이의 첫 공연장이 됐어.",
   "익숙한 장난감에서 새로운 궁금증을 발견했어.",
   "바쁜 하루 끝에 함께한 시간이 앨범 첫 장에 남았어."
  ]
 },
 "wealthy": {
  "title": "큰 저택, 첫 번째 시간표",
  "text": "커다란 저택의 아기 방에서 태빈이가 눈을 떴어. 가족은 막내아들을 위해 시작 자금 500,000원을 마련했지만, 벌써 교육과 예절 시간표를 정하고 있어. 넉넉한 기회 속에서도 자신의 목소리를 찾고, 집안 이름 때문에 다가오는 사람을 구별해야 할 거야.",
  "labels": [
   "정해진 음악 시간에 리듬 즐기기",
   "고급 장난감의 구조 살펴보기",
   "시간표 틈에 부모님의 손 잡기"
  ],
  "outcomes": [
   "정해진 수업 속에서도 태빈이만의 리듬이 피어났어.",
   "비싼 장난감의 가격보다 작동 원리가 궁금해졌어.",
   "엄격한 일정 속 짧은 포옹이 가족의 첫 추억이 됐어."
  ]
 },
 "frugal": {
  "title": "물려받은 담요와 빛나는 눈",
  "text": "물려받은 담요를 덮은 태빈이 곁에서 부모님이 조용히 노래해. 생활 형편은 빠듯하고 시작 자금은 30,000원이지만, 가족은 서로를 다정히 돌봐. 태빈이는 소리와 모양을 유난히 빨리 익혀. 무료 배움터와 장학 기회를 찾아 이 재능을 키워 갈 수 있을 거야.",
  "labels": [
   "부모님이 불러 주는 노래 따라 웃기",
   "물려받은 장난감의 규칙 찾아보기",
   "고생한 부모님의 손 꼭 잡기"
  ],
  "outcomes": [
   "한 번 들은 가락에 반응하는 태빈이를 보고 부모님이 놀랐어.",
   "낡은 장난감에서도 규칙을 찾아내며 재능의 싹을 보였어.",
   "넉넉하지 않아도 따뜻한 손길은 늘 태빈이 곁에 있었어."
  ]
 },
 "supportive": {
  "title": "네가 좋아하는 걸 찾아보자",
  "text": "부모님은 태빈이 앞에 그림책과 작은 악기, 블록을 놓고 어떤 것에 눈을 반짝이는지 지켜봐. 시작 자금 100,000원과 함께 꿈을 찾는 시간을 선물했어. 목표가 생기면 수업과 활동을 응원해 주지만, 스스로 꿈을 포기하면 프로젝트 지원도 멈춰. 다른 꿈을 찾는 대화는 언제든 열려 있어.",
  "labels": [
   "작은 악기 소리에 반응하기",
   "응원 속에서 블록 모양 탐색하기",
   "박수치는 부모님의 손 잡기"
  ],
  "outcomes": [
   "부모님은 태빈이가 좋아하는 소리를 기억해 두었어.",
   "궁금한 것을 마음껏 살펴보도록 가족이 기다려 줬어.",
   "작은 시도에도 돌아오는 응원이 첫 앨범에 담겼어."
  ]
 }
};
function familyOpeningChapter(){
 const opening=FAMILY_OPENINGS[state.family];
 if(!opening)return STORY_CHAPTERS[0];
 return {title:opening.title,text:opening.text,options:STORY_CHAPTERS[0].options.map((option,index)=>({...option,label:opening.labels[index],outcome:opening.outcomes[index]}))};
}

// House-specific versions of shared milestones preserve their gameplay metadata.
const FAMILY_STORY_VARIANTS={
 "wealthy": {
  "3": {
   "title": "저택 담장 밖의 첫 친구",
   "text": "정해진 산책 시간에 처음 동네 놀이터에 나왔어. 하린이라는 여자아이가 태빈이의 집안도 모르고 분필 하나를 내밀어. 수행하던 어른은 돌아갈 시간을 확인하지만, 태빈이는 조금 더 함께 놀고 싶어 해.",
   "choices": [
    [
     "하린에게 같이 놀자고 인사하기",
     "하린은 태빈이의 성이 아니라 이름을 불렀어. 집안 이야기 없이 사귄 첫 친구가 생겼어."
    ],
    [
     "하린 옆에 저택 밖 풍경 그리기",
     "담장 안에서 보던 정원과 다른 풍경이 그림에 담겼어. 하린이 다음 산책 때도 만나자고 했어."
    ],
    [
     "분필로 집까지 이어지는 미로 만들기",
     "하린은 복잡한 미로를 함께 풀며 웃었어. 태빈이는 정해진 수업 밖에서도 배울 수 있다는 걸 알았어."
    ]
   ]
  },
  "7": {
   "title": "이름표에 없는 집안 이름",
   "text": "입학 첫날, 누군가 태빈이네 회사 이야기를 꺼내자 교실의 시선이 쏠렸어. 하린은 칠판의 학급 프로젝트를 가리켜. 태빈이는 집안의 도움보다 자신이 맡은 역할로 친구들에게 다가가고 싶어.",
   "choices": [
    [
     "친구들과 교실 책을 직접 정리하기",
     "태빈이가 직접 책을 나르는 동안 집안 이야기는 사라졌어. 친구들은 태빈이의 꼼꼼함을 기억했어."
    ],
    [
     "친구들의 모습을 학급 영상에 담기",
     "비싼 장비 대신 친구들의 표정을 담았어. 영상 속 태빈이도 다른 아이들과 똑같이 웃고 있었어."
    ],
    [
     "집안 이야기 대신 친구들의 관심사 듣기",
     "서로 좋아하는 것을 이야기하자 어색함이 풀렸어. 이름표에는 태빈이라는 이름만으로 충분했어."
    ]
   ]
  },
  "10": {
   "title": "지원 제안이 붙은 다락방",
   "text": "친구들과 다락방 프로젝트를 준비하자 가족은 도와주겠다고 해. 대신 회사 이름을 붙이고 진행 상황도 보고해 달래. 친구들은 고맙지만 자신들의 작품으로 남았으면 좋겠다고 말해.",
   "choices": [
    [
     "직접 배워 작은 게임부터 만들기",
     "가족에게 완성품 대신 서툰 시제품을 보여 줬어. 처음으로 집안의 결과물이 아니라 태빈이의 시행착오가 남았어."
    ],
    [
     "친구들과 동네를 촬영해 작은 영상 만들기",
     "필요한 만큼만 준비해 골목의 이야기를 담았어. 영상 마지막에는 함께 만든 친구들의 이름을 나란히 적었어."
    ],
    [
     "친구들과 역할을 나눠 작은 행사 열기",
     "가족의 이름을 앞세우기 전에 친구들의 의견을 모았어. 작은 행사였지만 모두가 자신의 몫을 해냈어."
    ]
   ]
  },
  "13": {
   "title": "축제 후원 뒤에 생긴 오해",
   "text": "학교 축제에서 태빈이네 집이 후원한다는 소문이 돌았어. 친구 한 명이 '그래서 네 의견만 따라야 해?'라고 묻고, 하린도 회의가 멈춘 걸 걱정해. 태빈이는 돈과 결정권을 같은 것으로 여기지 않는다는 걸 보여 주려 해.",
   "choices": [
    [
     "친구들을 모아 결정 방식을 함께 정하기",
     "각자의 한 표로 결정하자 친구들이 다시 의견을 냈어. 태빈이는 설명보다 함께 정한 약속으로 신뢰를 얻었어."
    ],
    [
     "모두의 아이디어가 담긴 포스터 제안하기",
     "포스터에 친구들의 아이디어를 함께 담았어. 태빈이 혼자의 축제가 아니라는 마음이 전해졌어."
    ],
    [
     "후원과 기획 역할을 나눠 정리하기",
     "물품을 준비하는 일과 내용을 결정하는 일을 구분했어. 멈췄던 회의가 다시 움직였어."
    ]
   ]
  },
  "16": {
   "title": "가업 설명회와 나의 진로표",
   "text": "가족은 태빈이에게 가업을 소개하는 자리를 마련했어. 책상 위에는 집안이 추천하는 진로표와 태빈이가 모은 관심 분야 자료가 함께 놓여 있어. 먼저 자신이 무엇을 좋아하는지 설명할 준비가 필요해.",
   "choices": [
    [
     "나의 관심사를 작품집으로 정리하기",
     "집안이 마련한 소개 자료 옆에 태빈이의 작품집이 놓였어. 하고 싶은 일을 자기 언어로 설명할 근거가 생겼어."
    ],
    [
     "궁금한 기술 분야를 직접 공부하기",
     "가업에 쓰일지보다 왜 배우고 싶은지부터 적었어. 태빈이는 자신의 관심을 구체적인 질문으로 바꿨어."
    ],
    [
     "가족 밖의 여러 어른에게 진로 상담받기",
     "가족의 기대와 다른 조언도 듣고 비교했어. 태빈이는 어느 쪽이든 스스로 납득한 길을 고르기로 했어."
    ]
   ]
  },
  "18": {
   "title": "막내의 이름으로 하는 발표",
   "text": "졸업 발표를 앞두고 가족이 앞자리에 앉았어. 태빈이는 집안의 후계자 후보라는 소개 대신 팀과 함께 해낸 일을 보여 주고 싶어. 하린은 발표 자료 첫 장에 적힌 태빈이의 이름을 가리키며 웃어.",
   "choices": [
    [
     "팀의 시행착오를 영상으로 보여 주기",
     "완벽한 집안 소개 대신 서툴렀던 과정이 화면에 흘렀어. 가족도 태빈이가 무엇에 몰두했는지 보게 됐어."
    ],
    [
     "자료와 실험으로 내 역할 증명하기",
     "질문에 직접 답하며 자신이 배운 것을 설명했어. 태빈이는 배경보다 준비한 내용으로 평가받았어."
    ],
    [
     "팀원의 공로를 나눠 발표 운영하기",
     "발표가 끝나자 태빈이는 함께한 사람들을 먼저 소개했어. 책임은 혼자 빛나는 일이 아니라는 걸 배웠어."
    ]
   ]
  },
  "20": {
   "title": "집안의 이름을 잠시 접어 두고",
   "text": "성인이 된 태빈이에게 가족이 다음 계획을 물었어. 넉넉했던 출발점이 모든 결과를 보장하진 않았지. 태빈이는 지금 선택한 생활 속에서 자신의 실력으로 남길 작은 일을 준비해.",
   "choices": [
    [
     "내 이름으로 작은 기술 프로젝트 시작하기",
     "서툰 결과물에도 태빈이의 이름을 붙였어. 평가를 가족에게 돌리지 않고 직접 받아들일 첫 기회가 생겼어."
    ],
    [
     "내 생각을 담은 작은 작품 공개하기",
     "집안 소개를 덜어 낸 작품을 공개했어. 낯선 사람의 질문은 배경이 아니라 작품을 향했어."
    ],
    [
     "서로의 역할을 정하고 동료 찾기",
     "집안과의 인맥보다 함께할 일의 기준을 먼저 이야기했어. 태빈이의 생각에 공감하는 사람을 만났어."
    ]
   ]
  },
  "25": {
   "title": "명함에 무엇을 적을까",
   "text": "경험이 쌓이자 태빈이에게 집안 덕분이라는 말과 스스로 해냈다는 말이 함께 들려. 태빈이는 어느 말에도 기대기보다 자신의 이름 옆에 설명할 수 있는 일을 쌓고 싶어.",
   "choices": [
    [
     "내 분야의 실력을 더 깊게 공부하기",
     "아는 것과 모르는 것을 구분해 다시 공부했어. 태빈이의 설명에 구체적인 경험이 쌓이기 시작했어."
    ],
    [
     "작은 일을 기획해 직접 수입 만들어 보기",
     "작은 기획이 수입으로 이어졌어. 금액보다 직접 계획하고 책임졌다는 사실이 오래 남았어."
    ],
    [
     "집안 이름 없이 내 작품 내놓기",
     "작품을 평가하는 사람에게 먼저 집안을 설명하지 않았어. 태빈이는 결과를 자기 이름으로 받아들였어."
    ]
   ]
  },
  "35": {
   "title": "담장 밖에서 만난 사람들",
   "text": "다락방 친구들과 옛 사진을 펼쳤어. 모두 태빈이의 배경보다 함께 밤새 고치던 작품을 먼저 이야기해. 오랜 인연 앞에서 태빈이는 무엇을 함께 남길 수 있을지 생각해.",
   "choices": [
    [
     "옛 친구들과 동등한 역할로 협업하기",
     "누가 더 큰 배경을 가졌는지보다 누가 무엇을 맡을지 정했어. 오래된 신뢰가 새로운 작업으로 이어졌어."
    ],
    [
     "실패와 배움을 후배에게 정리해 주기",
     "좋은 출발점 덕분에 얻은 기회와 자신의 실수를 함께 설명했어. 후배들은 솔직한 경험에 귀를 기울였어."
    ],
    [
     "집안 소개 대신 친구들의 기억 기록하기",
     "사진 속 사람들의 목소리가 기록의 중심이 됐어. 태빈이의 인생은 저택 안의 이야기보다 훨씬 넓어져 있었어."
    ]
   ]
  },
  "50": {
   "title": "기회를 여는 사람",
   "text": "한 후배가 태빈이에게 '처음부터 기회가 많으면 어떤 기분이에요?'라고 물었어. 태빈이는 어린 시절의 시간표와 담장 밖 놀이터를 떠올려. 자신에게 열린 문을 다른 사람에게도 설명해 주고 싶어.",
   "choices": [
    [
     "후배가 자기 목표를 정하도록 돕기",
     "태빈이는 정답을 대신 정하지 않고 후배의 이야기를 들었어. 엄격한 기대를 물려주기보다 선택할 시간을 건넸어."
    ],
    [
     "배운 과정과 실패를 기록집으로 남기기",
     "좋은 환경이 해 준 일과 스스로 배워야 했던 일을 구분해 적었어. 다음 사람이 참고할 수 있는 기록이 됐어."
    ],
    [
     "서로 다른 배경의 사람들과 작품 만들기",
     "각자의 경험을 같은 무게로 담았어. 태빈이는 배경의 차이가 함께 만들 이야기의 재료가 되는 걸 보았어."
    ]
   ]
  },
  "70": {
   "title": "저택 사진 옆의 작은 분필",
   "text": "앨범에는 커다란 아기 방 사진과 하린이 건넸던 분필 사진이 나란히 있어. 태빈이는 풍족했던 출발점과 자신의 목소리를 찾던 시간을 함께 돌아봐. 어떤 기억을 마지막 빈칸에 남길까?",
   "choices": [
    [
     "기대와 내 선택 사이에서 배운 것 적기",
     "가족의 기대에 답하는 일과 내 삶을 고르는 일이 함께 적혔어. 태빈이의 글에는 어느 쪽도 쉽게 지우지 않은 흔적이 남았어."
    ],
    [
     "집 밖에서 만든 추억을 영상으로 엮기",
     "담장 밖 풍경과 친구들의 얼굴이 화면을 채웠어. 태빈이는 자신이 넓혀 온 세계를 다시 보았어."
    ],
    [
     "내 이름을 불러 준 사람들에게 감사하기",
     "집안 소개 없이 태빈이를 기억한 사람들에게 마음을 전했어. 앨범 마지막 빈칸이 따뜻한 이름들로 채워졌어."
    ]
   ]
  },
  "90": {
   "title": "다음 생의 막내에게",
   "text": "태빈이는 다음 인생을 상상하며 편지를 펴. 많은 것을 갖고 시작해도 자신의 하루를 고르는 연습은 필요했어. 물려줄 수 있는 것과 스스로 찾아야 하는 것을 어떻게 써 줄까?",
   "choices": [
    [
     "좋은 출발점 뒤에도 배움을 이어 가라고 쓰기",
     "편지에는 기회를 당연하게 여기지 말고 모르는 것을 묻는 사람이 되라는 문장이 남았어."
    ],
    [
     "남의 기대 속에서도 좋아하는 것을 찾으라고 쓰기",
     "편지에는 이름 앞의 배경보다 스스로 몰두하는 시간을 아끼라는 문장이 남았어."
    ],
    [
     "사람을 배경보다 먼저 보라고 쓰기",
     "편지 마지막에는 담장 밖에서 건네받은 분필 한 개의 이야기가 적혔어."
    ]
   ]
  }
 },
 "supportive": {
  "3": {
   "title": "처음 고른 놀이터",
   "text": "부모님은 오늘 태빈이가 가리킨 놀이터로 걸어왔어. 하린이라는 여자아이가 바닥에 분필 그림을 그리고 있어. 무엇을 좋아하는지 서둘러 정하지 않아도 된다는 말에 태빈이는 천천히 다가가.",
   "choices": [
    [
     "하린에게 어떤 놀이를 좋아하는지 묻기",
     "하린의 대답을 듣다가 태빈이도 하고 싶은 놀이를 떠올렸어. 좋아하는 것을 함께 찾을 친구가 생겼어."
    ],
    [
     "하린 옆에 마음 가는 색으로 그리기",
     "부모님은 완성된 그림보다 색을 고르는 태빈이의 표정을 기억했어. 하린은 옆자리를 조금 더 내주었어."
    ],
    [
     "분필 미로를 만들고 하린과 풀기",
     "처음 해 본 미로 놀이에 둘 다 한참 빠졌어. 태빈이의 새로운 관심이 가족의 대화 주제가 됐어."
    ]
   ]
  },
  "7": {
   "title": "응원 쪽지가 든 책가방",
   "text": "입학 첫날 책가방에 '오늘 궁금했던 걸 들려줘'라는 쪽지가 들어 있어. 하린과 같은 교실에서 학급 프로젝트를 고르게 됐어. 태빈이는 잘할 수 있는 일보다 먼저 해 보고 싶은 일을 생각해.",
   "choices": [
    [
     "교실 책을 살펴보고 정리하기",
     "새로 궁금해진 책 제목을 쪽지 뒤에 적었어. 집에서 들려줄 이야기가 하나 더 생겼어."
    ],
    [
     "친구들의 하루를 학급 영상으로 만들기",
     "부모님은 영상 속 서툰 장면에도 웃어 주었어. 태빈이는 다음에는 무엇을 찍고 싶은지 스스로 말했어."
    ],
    [
     "친구들의 관심사를 듣고 소개하기",
     "다른 아이들도 응원받고 싶은 일이 있다는 걸 알았어. 태빈이는 받은 응원을 친구에게 건네 보기 시작했어."
    ]
   ]
  },
  "10": {
   "title": "다락방 계획서를 함께 펼치다",
   "text": "친구들과 다락방에서 해 보고 싶은 일을 적었어. 부모님은 무엇이 필요한지 먼저 설명해 달래. 태빈이는 응원을 받는 것과 계획을 직접 세우는 일을 함께 배워 가.",
   "choices": [
    [
     "작은 게임을 만들 순서부터 적기",
     "부모님은 태빈이가 정한 순서를 함께 점검했어. 직접 고친 첫 오류가 완성 화면보다 더 기억에 남았어."
    ],
    [
     "찍고 싶은 동네 이야기를 영상으로 만들기",
     "촬영할 곳과 필요한 준비를 직접 정했어. 부모님은 완성될 때까지 기다리며 태빈이의 설명을 들어 주었어."
    ],
    [
     "친구들과 작은 행사 계획 나누기",
     "태빈이가 혼자 모든 것을 맡지 않도록 친구들과 역할을 나눴어. 응원은 팀이 계속 시도할 힘이 됐어."
    ]
   ]
  },
  "13": {
   "title": "응원이 부담으로 들린 날",
   "text": "축제 준비가 꼬이자 태빈이는 '이렇게 응원받았는데 잘해야 해'라는 생각에 말을 세게 했어. 하린은 친구들도 각자 걱정이 있다고 말해. 가족의 기대에 답하기 전에 팀의 마음부터 다시 들여다볼 시간이야.",
   "choices": [
    [
     "부담스러웠던 마음을 친구들에게 설명하기",
     "친구들도 자신의 걱정을 꺼냈어. 태빈이는 응원을 성과로 갚아야 한다는 조급함을 조금 내려놓았어."
    ],
    [
     "서로의 아이디어를 포스터에 다시 담기",
     "태빈이의 생각만 남아 있던 초안에 친구들의 아이디어가 들어왔어. 함께 만드는 재미를 되찾았어."
    ],
    [
     "문제와 할 일을 나눠 계획 고치기",
     "해내야 할 일을 작은 단계로 나누자 숨이 트였어. 잘하고 싶다는 마음이 모두를 재촉할 필요는 없었어."
    ]
   ]
  },
  "16": {
   "title": "처음 정한 꿈이 달라졌어",
   "text": "어릴 때 좋아하던 것과 지금 궁금한 분야가 조금 달라졌어. 부모님은 바뀐 이유를 듣고 싶어 해. 태빈이는 무조건 계속하겠다고 말하기보다 자신이 고른 다음 방향을 준비해.",
   "choices": [
    [
     "지금 좋아하는 것을 새 작품집에 담기",
     "예전 작업과 새 작업을 나란히 놓으니 달라진 관심이 보였어. 부모님에게 설명할 말도 조금 더 분명해졌어."
    ],
    [
     "관심이 생긴 기술과 학문 직접 공부하기",
     "막연한 변덕인지 오래 궁금했던 일인지 직접 배워 보며 살폈어. 새 목표를 이야기할 근거가 생겼어."
    ],
    [
     "여러 사람의 진로 경험 듣기",
     "꿈을 바꾸는 일과 포기하는 일은 같지 않다는 걸 알았어. 태빈이는 듣고 배운 것을 가족과 나누기로 했어."
    ]
   ]
  },
  "18": {
   "title": "지금의 선택으로 서는 무대",
   "text": "졸업 발표를 앞두고 태빈이는 가족과 나눴던 진로 이야기를 떠올려. 지금 선택한 방향에서 자신이 배운 것을 보여 줄 차례야. 하린과 팀원들은 태빈이가 맡은 부분을 기다리고 있어.",
   "choices": [
    [
     "내가 고른 주제를 영상으로 발표하기",
     "영상에는 결과뿐 아니라 방향을 고민했던 과정도 담겼어. 태빈이는 지금의 선택을 스스로 설명했어."
    ],
    [
     "직접 조사한 자료와 실험 보여 주기",
     "준비한 내용을 묻는 질문에 하나씩 답했어. 가족의 응원 여부와 별개로 태빈이가 쌓은 배움은 남아 있었어."
    ],
    [
     "팀원과 역할을 조율해 발표 마치기",
     "각자 고른 길이 달라도 함께 발표를 마칠 수 있었어. 태빈이는 곁의 사람을 응원하는 방법도 배웠어."
    ]
   ]
  },
  "20": {
   "title": "누가 정한 꿈인지 묻는 아침",
   "text": "새 생활 속에서 태빈이는 다음 계획을 펼쳐. 어릴 때 받았던 응원은 소중하지만, 오늘 무엇을 할지는 자신이 정해야 해. 작은 일부터 실제로 해 보며 지금 원하는 방향을 확인하려 해.",
   "choices": [
    [
     "스스로 정한 작은 기술 프로젝트 시작하기",
     "해야 할 일을 직접 고르고 첫 결과물을 만들었어. 태빈이는 다른 사람이 정해 준 목표가 아니라 자기 질문에 답하기 시작했어."
    ],
    [
     "지금의 관심을 작은 전시로 표현하기",
     "작품을 설명하면서 왜 이 일을 계속하고 싶은지 생각했어. 태빈이는 자기 마음을 조금 더 구체적으로 알게 됐어."
    ],
    [
     "목표를 이야기하며 함께할 사람 찾기",
     "어릴 때 응원받던 사람이 이제 동료의 목표도 듣게 됐어. 서로의 계획을 존중하는 작은 팀이 만들어졌어."
    ]
   ]
  },
  "25": {
   "title": "칭찬이 없어도 이어 가는 하루",
   "text": "태빈이는 자신의 일을 설명할 경험이 쌓였어. 누군가 매번 지켜봐 주지 않는 날에도 계속할 이유를 찾고 있어. 다음 선택은 다른 사람의 박수보다 자기 기준에 가깝게 고르고 싶어.",
   "choices": [
    [
     "지금 필요한 실력을 차근차근 쌓기",
     "아무도 점검하지 않는 날에도 작은 공부를 마쳤어. 태빈이는 스스로의 성장을 알아보는 법을 배웠어."
    ],
    [
     "내 계획으로 작은 수입 만들어 보기",
     "기획이 작은 수입으로 이어졌어. 태빈이는 도움을 받은 경험과 직접 책임지는 경험을 함께 돌아봤어."
    ],
    [
     "내 이름을 건 작품 완성하기",
     "완성을 미루게 하던 기대를 내려놓고 작품을 공개했어. 다음 시도는 자기 판단으로 정하기로 했어."
    ]
   ]
  },
  "35": {
   "title": "서로의 꿈을 다시 묻다",
   "text": "오래된 다락방 친구들이 모였어. 처음의 꿈을 계속하는 사람도, 전혀 다른 길로 간 사람도 있어. 하린은 태빈이에게 지금도 궁금한 일이 무엇인지 물어봐.",
   "choices": [
    [
     "지금 관심이 맞는 친구와 함께 작업하기",
     "예전 꿈에 얽매이지 않고 지금 할 수 있는 일을 골랐어. 서로의 바뀐 방향을 존중하는 협력이 시작됐어."
    ],
    [
     "목표가 바뀐 경험을 후배에게 전하기",
     "태빈이는 계속한 일과 내려놓은 일을 함께 설명했어. 후배에게 결정을 서두르지 않아도 된다고 말했어."
    ],
    [
     "친구들의 달라진 꿈을 기록하기",
     "완성된 기록에는 성공담만큼 방향을 바꾼 이야기도 담겼어. 서로의 다음 선택을 응원하는 시간이 됐어."
    ]
   ]
  },
  "50": {
   "title": "답을 정해 주지 않는 응원",
   "text": "한 후배가 꿈을 바꿔도 되는지 조심스럽게 물었어. 태빈이는 어린 시절 응원 쪽지와 혼자 계획을 고쳐 쓰던 날을 떠올려. 이번에는 태빈이가 누군가의 이야기를 들어 줄 차례야.",
   "choices": [
    [
     "후배가 좋아하는 일을 먼저 들어 주기",
     "태빈이는 자신의 옛 꿈을 권하는 대신 후배의 질문을 들었어. 응원은 답을 대신 정하는 일이 아니라는 걸 다시 배웠어."
    ],
    [
     "목표를 찾던 과정을 기록으로 남기기",
     "지속한 순간과 멈춘 순간을 모두 적었어. 기록은 한 가지 길만 정답이라고 말하지 않았어."
    ],
    [
     "후배와 새로운 작품에 도전하기",
     "경험이 많은 사람과 처음 해 보는 사람이 함께 아이디어를 냈어. 태빈이도 아직 새롭게 좋아할 것을 찾을 수 있었어."
    ]
   ]
  },
  "70": {
   "title": "책가방 속 쪽지의 답장",
   "text": "앨범 사이에서 '오늘 궁금했던 걸 들려줘'라는 오래된 쪽지가 나왔어. 태빈이는 이어 온 꿈과 바꾼 꿈을 하나씩 떠올려. 그 질문에 이제 어떤 답을 남기고 싶을까?",
   "choices": [
    [
     "내가 고른 길과 바꾼 이유를 글로 남기기",
     "남의 기대보다 내 마음을 확인하려 애썼던 시간이 적혔어. 태빈이의 답장은 하나의 성공담보다 긴 이야기가 됐어."
    ],
    [
     "여러 시절의 작품을 사진과 영상으로 묶기",
     "서로 다른 취향의 작품들이 한 앨범에 모였어. 바뀌어 온 관심도 태빈이의 삶을 이어 주고 있었어."
    ],
    [
     "도전할 때 곁에 있던 사람에게 감사하기",
     "결과가 나오기 전부터 이야기를 들어 준 사람들을 떠올렸어. 태빈이는 그 시간이 얼마나 든든했는지 전했어."
    ]
   ]
  },
  "90": {
   "title": "다음 꿈을 꾸는 태빈이에게",
   "text": "태빈이는 다음 인생을 위한 편지를 써. 응원받은 기억도 자기 힘으로 버텼던 날도 지금의 태빈이를 만들었어. 좋아하는 일을 찾는 사람에게 어떤 말을 남길까?",
   "choices": [
    [
     "배우면서 목표를 다시 고쳐도 된다고 쓰기",
     "편지에는 궁금한 것을 배우다가 길이 달라져도 괜찮다는 문장이 남았어."
    ],
    [
     "박수보다 자기 마음을 오래 살피라고 쓰기",
     "편지에는 좋아하는 것을 증명하려 서두르지 말고 직접 해 보는 시간을 가지라는 말이 남았어."
    ],
    [
     "다른 사람의 꿈도 들어 주라고 쓰기",
     "마지막 문장은 오래된 쪽지와 닮아 있었어. '오늘 궁금했던 걸 들려줘.'"
    ]
   ]
  }
 },
 "ordinary": {
  "3": {
   "title": "우리 동네 놀이터의 분필 한 개",
   "text": "장을 보고 돌아오는 길, 태빈이가 놀이터 앞에서 걸음을 멈췄어. 하린이라는 여자아이가 바닥에 길을 그리고 있어. 특별한 약속이 없는 오후, 태빈이에게 첫 친구를 만날 시간이 생겼어.",
   "choices": [
    [
     "하린에게 같이 놀자고 말하기",
     "하린이 분필을 반으로 나눠 건넸어. 평소 지나치던 놀이터가 내일도 오고 싶은 곳이 됐어."
    ],
    [
     "길 옆에 우리 동네 풍경 그리기",
     "작은 가게와 집이 그림에 더해졌어. 하린은 태빈이와 같은 골목을 안다며 반가워했어."
    ],
    [
     "분필 길을 이어 미로 만들기",
     "둘이 함께 만든 길은 놀이터 바닥을 가득 채웠어. 평범한 오후에 처음 함께 풀 문제가 생겼어."
    ]
   ]
  },
  "7": {
   "title": "한 번쯤 해 보고 싶은 일",
   "text": "학교 첫날, 하린과 같은 교실에서 학급 프로젝트를 고르게 됐어. 부모님은 저녁에 오늘 어땠는지 들려 달래. 태빈이는 잘하는 것이 아직 뚜렷하지 않아도 일단 하나 해 보기로 해.",
   "choices": [
    [
     "교실 도서관부터 정리해 보기",
     "책을 정리하다 읽고 싶은 제목을 찾았어. 아직 꿈은 몰라도 궁금한 것은 하나 생겼어."
    ],
    [
     "친구들을 소개하는 영상 만들기",
     "처음에는 카메라를 들고도 어색했지만 친구들이 웃어 줬어. 태빈이의 첫 시도가 교실에 남았어."
    ],
    [
     "친구들의 이야기를 듣고 소개하기",
     "어제까진 몰랐던 이름들이 조금 익숙해졌어. 낯선 교실이 태빈이의 일상이 되기 시작했어."
    ]
   ]
  },
  "10": {
   "title": "있는 것으로 시작한 다락방",
   "text": "친구들과 다락방을 치우다가 쓸 만한 물건을 모았어. 새로 전부 사기는 부담스러워서, 먼저 가진 것으로 무엇을 할지 의논해. 태빈이는 작은 계획도 끝까지 해 보고 싶어.",
   "choices": [
    [
     "빌린 컴퓨터로 작은 게임 만들기",
     "친구들과 사용할 시간을 나눠 처음부터 배웠어. 작아도 끝까지 움직이는 게임이 생겼어."
    ],
    [
     "동네의 하루를 짧은 영상으로 남기기",
     "익숙한 골목도 화면으로 보니 새로운 이야기가 됐어. 특별한 장소를 찾지 않아도 시작할 수 있었어."
    ],
    [
     "이웃이 참여할 작은 행사 준비하기",
     "친구들과 할 일을 나누고 이웃에게 의견을 물었어. 동네의 보통 사람들이 모여 행사를 완성했어."
    ]
   ]
  },
  "13": {
   "title": "친구 사이에도 다른 계산",
   "text": "학교 축제를 준비하다 시간과 준비물 문제로 의견이 갈렸어. 누구는 학원 때문에 바쁘고 누구는 비용이 부담돼. 하린은 모두 같은 조건은 아니라고 말해. 태빈이는 함께할 방법을 찾아보려 해.",
   "choices": [
    [
     "각자 가능한 시간과 생각 듣기",
     "서로의 사정을 듣고 역할을 다시 정했어. 친구라고 모든 형편을 아는 것은 아니라는 걸 배웠어."
    ],
    [
     "지금 준비할 수 있는 포스터 제안하기",
     "큰 계획 대신 만들 수 있는 것부터 시도했어. 친구들은 현실적인 새 초안에 자기 아이디어를 더했어."
    ],
    [
     "할 일과 필요한 물품을 정리하기",
     "막연했던 부담을 목록으로 나누자 해결할 부분이 보였어. 준비는 작은 약속부터 다시 시작됐어."
    ]
   ]
  },
  "16": {
   "title": "정답 없는 진로 상담",
   "text": "친구들이 진로를 말하기 시작했지만 태빈이는 아직 여러 분야가 궁금해. 부모님도 모든 직업을 아는 건 아니라며 함께 찾아보자고 해. 태빈이는 남의 계획을 그대로 따르기보다 직접 확인해 보려 해.",
   "choices": [
    [
     "관심 있는 것을 작품집으로 정리하기",
     "여러 시도를 나란히 놓자 자주 돌아오던 관심이 보였어. 태빈이는 자기 취향을 설명할 말을 찾았어."
    ],
    [
     "기술과 학문을 직접 배워 보기",
     "자료를 읽고 작은 연습을 하며 상상과 실제의 차이를 살폈어. 다음에 더 알아볼 질문이 생겼어."
    ],
    [
     "여러 분야 사람에게 진로 상담받기",
     "같은 일을 해도 사는 방식은 다르다는 걸 들었어. 태빈이는 자신에게 맞을 조건을 하나씩 적었어."
    ]
   ]
  },
  "18": {
   "title": "우리 반이 함께 만든 마지막 장",
   "text": "졸업 발표 준비가 막바지야. 처음 교실에서 서먹했던 친구들이 이제 서로의 역할을 알아. 태빈이는 눈에 띄는 이력보다 함께 보낸 시간에서 배운 것을 보여 주고 싶어.",
   "choices": [
    [
     "친구들과 만든 과정을 영상으로 엮기",
     "실수하던 장면에서도 웃음이 나왔어. 평범하게 쌓인 하루들이 한 편의 발표가 됐어."
    ],
    [
     "조사와 실험 내용을 차분히 설명하기",
     "대단한 출발은 없었지만 직접 확인한 내용은 분명했어. 태빈이는 준비한 만큼 자기 말로 답했어."
    ],
    [
     "팀원의 순서를 조율해 발표 마치기",
     "서로의 빈자리를 메우며 마지막 발표를 마쳤어. 태빈이는 함께 약속을 지키는 힘을 알았어."
    ]
   ]
  },
  "20": {
   "title": "작은 계획부터 내 힘으로",
   "text": "새 생활을 시작한 태빈이는 할 수 있는 일과 필요한 시간을 적어 봐. 집안이 미리 정해 준 자리도, 갑자기 모든 걸 바꿀 기회도 없어. 지금 있는 조건에서 첫걸음을 고를 수 있어.",
   "choices": [
    [
     "작게 끝낼 수 있는 기술 프로젝트 고르기",
     "완벽한 준비를 기다리지 않고 가능한 범위부터 시작했어. 태빈이의 첫 결과물이 다음 연습의 기준이 됐어."
    ],
    [
     "가까운 사람에게 보여 줄 작품 만들기",
     "작은 작품을 공개하고 구체적인 의견을 받았어. 막연했던 계획이 직접 고칠 수 있는 일이 됐어."
    ],
    [
     "관심이 비슷한 사람과 함께 시작하기",
     "태빈이는 혼자 할 부분과 도움받을 부분을 나눴어. 함께 꾸준히 해 볼 동료가 생겼어."
    ]
   ]
  },
  "25": {
   "title": "조금씩 쌓인 나의 이력",
   "text": "태빈이의 기록에는 거창한 전환점보다 작게 마친 일들이 늘었어. 어떤 날은 더딘 것 같지만 예전보다 아는 것과 할 수 있는 일이 생겼지. 다음에는 어디에 시간을 써 볼까?",
   "choices": [
    [
     "경험을 정리하고 부족한 실력 공부하기",
     "흩어져 있던 경험을 묶으니 다음 공부가 보였어. 태빈이는 자기 속도로 전문성을 쌓기 시작했어."
    ],
    [
     "작은 기획을 직접 맡아 수입 만들기",
     "생활 속에서 찾은 아이디어가 작은 수입으로 이어졌어. 태빈이는 크기보다 계속할 수 있는 방법을 생각했어."
    ],
    [
     "내 이름을 건 작품 하나 완성하기",
     "남과 비교하던 시간을 줄이고 자신의 작업을 끝냈어. 작은 완성이 다음 도전의 자신감이 됐어."
    ]
   ]
  },
  "35": {
   "title": "평범했던 다락방의 그다음",
   "text": "옛 친구들과 다락방 사진을 펼쳤어. 모두 바쁜 생활을 하면서도 그때의 작은 계획을 기억해. 태빈이는 평범한 날들이 쌓여 지금의 서로를 만들었다는 걸 느껴.",
   "choices": [
    [
     "각자의 경험을 모아 다시 협업하기",
     "어릴 때는 몰랐던 서로의 장점을 발견했어. 특별한 계기 없이도 함께 시작할 이유가 생겼어."
    ],
    [
     "시행착오를 정리해 후배에게 전하기",
     "태빈이는 꾸준히 해 본 작은 방법들을 설명했어. 후배는 당장 시작할 수 있는 조언이라며 고마워했어."
    ],
    [
     "동네와 친구들의 변화를 기록하기",
     "사진마다 달라진 가게와 사람들이 있었어. 태빈이의 보통 날들도 충분히 남길 만한 이야기였어."
    ]
   ]
  },
  "50": {
   "title": "특별하지 않아도 건넬 수 있는 것",
   "text": "후배가 태빈이에게 어떻게 시작했는지 물었어. 태빈이는 대단한 비결 대신 작은 계획을 고쳐 가던 날들을 떠올려. 지금의 경험 중 무엇을 나누면 도움이 될까?",
   "choices": [
    [
     "후배와 가능한 첫걸음 함께 찾기",
     "태빈이는 자신의 길을 그대로 권하지 않고 후배의 조건을 들었어. 오늘 할 수 있는 작은 계획을 함께 골랐어."
    ],
    [
     "실제로 써 본 배움 방법을 기록하기",
     "잘된 날과 미뤘던 날의 방법을 함께 적었어. 기록은 완벽하지 않아도 계속할 수 있다는 이야기가 됐어."
    ],
    [
     "다른 세대와 작은 작품 함께 만들기",
     "새로운 시선과 익숙한 경험이 만났어. 태빈이는 평범한 협력에서도 다시 배울 것이 있다는 걸 느꼈어."
    ]
   ]
  },
  "70": {
   "title": "작은 거실에서 시작한 앨범",
   "text": "가족이 첫 사진을 찍던 작은 거실이 앨범에 남아 있어. 뒤로 넘기면 학교와 골목, 서툰 작업 사진들이 이어져. 큰 사건만으로 설명할 수 없는 태빈이의 시간을 어떻게 정리할까?",
   "choices": [
    [
     "보통의 날들에서 배운 것을 글로 적기",
     "남에게는 사소해 보여도 태빈이에게 소중했던 선택들을 적었어. 삶을 바꾼 것은 자주 반복한 작은 행동들이기도 했어."
    ],
    [
     "동네와 사람들의 사진을 영상으로 묶기",
     "매일 걷던 길이 태빈이의 역사가 됐어. 익숙한 풍경 속에 지나온 시간이 보였어."
    ],
    [
     "함께한 사람에게 평소 못 한 감사 전하기",
     "특별한 날을 기다리지 않고 마음을 전했어. 평범한 안부 한마디가 앨범 마지막 장을 채웠어."
    ]
   ]
  },
  "90": {
   "title": "보통의 시작을 할 태빈이에게",
   "text": "다음 태빈이에게 보낼 편지를 펼쳤어. 특별한 혜택이 없던 시작에서도 고를 수 있는 하루는 늘 있었어. 오래 살아 보니 무엇을 먼저 말해 주고 싶을까?",
   "choices": [
    [
     "모르는 것을 하나씩 배워 가라고 쓰기",
     "편지에는 남의 속도보다 어제 몰랐던 것을 오늘 아는 기쁨을 아끼라는 말이 남았어."
    ],
    [
     "작더라도 만들어 끝내 보라고 쓰기",
     "편지에는 평범한 재료와 짧은 시간으로도 자기 이야기를 시작할 수 있다고 적혔어."
    ],
    [
     "곁의 사람과 보통의 날을 나누라고 쓰기",
     "마지막에는 장을 보고 돌아오다 만난 첫 친구의 이야기가 남았어. 보통의 오후도 인생의 시작이 될 수 있었어."
    ]
   ]
  }
 },
 "frugal": {
  "3": {
   "title": "반 토막 분필로 그린 세상",
   "text": "동생 손을 잡은 부모님과 동네 놀이터에 왔어. 새 장난감 구경은 지나쳤지만, 하린이라는 여자아이가 남은 분필을 내밀어. 태빈이는 작은 조각으로도 바닥 가득 무언가를 그릴 수 있을 것 같아.",
   "choices": [
    [
     "하린과 분필을 나눠 같이 놀기",
     "가진 것이 적어도 함께 쓰면 놀이가 길어졌어. 하린은 다음에도 같이 놀자고 말했어."
    ],
    [
     "작은 분필로 커다란 동네 그리기",
     "태빈이가 빠르게 그린 그림에 하린이 눈을 반짝였어. 부모님은 작은 재료로도 끝없이 상상하는 태빈이를 지켜봤어."
    ],
    [
     "분필로 복잡한 미로 만들기",
     "태빈이는 길을 그리자마자 빠져나오는 규칙을 설명했어. 하린은 태빈이의 빠른 생각을 신기해하며 함께 풀었어."
    ]
   ]
  },
  "7": {
   "title": "물려받은 가방과 새 도서관",
   "text": "손질한 가방을 메고 입학한 태빈이는 교실 뒤 작은 도서관부터 살펴봐. 새 참고서를 고르기는 어렵지만 빌려 읽을 책이 많아. 하린이 함께 학급 프로젝트를 해 보자고 손을 흔들어.",
   "choices": [
    [
     "교실 책을 정리하며 읽을 책 고르기",
     "태빈이는 책의 규칙을 금세 찾아 정리했어. 빌릴 수 있는 책 목록이 자신만의 공부 계획이 됐어."
    ],
    [
     "학교에서 쓸 수 있는 장비로 영상 만들기",
     "장비를 쓰는 시간을 나눠 친구들의 모습을 담았어. 부족한 준비물 대신 표현할 아이디어가 빛났어."
    ],
    [
     "친구들의 관심사를 듣고 역할 나누기",
     "태빈이는 자신만 잘하는 것보다 함께할 방법을 찾았어. 도움을 주고받을 친구들이 생겼어."
    ]
   ]
  },
  "10": {
   "title": "고장 난 물건이 모인 다락방",
   "text": "친구들과 정리한 다락방에는 낡은 물건이 많아. 태빈이는 버리기 전에 쓸 수 있는 부분을 찾아내고, 집에서는 동생에게도 보여 주고 싶어 해. 돈을 크게 쓰지 않고 첫 프로젝트를 해 보려 해.",
   "choices": [
    [
     "공유 컴퓨터에서 작은 게임 만들기",
     "사용할 시간을 아껴 오류를 미리 정리했어. 빠른 이해력과 끈기가 첫 게임을 움직이게 했어."
    ],
    [
     "빌린 장비로 동네 이야기를 촬영하기",
     "익숙한 골목을 새로운 시선으로 담았어. 장비보다 태빈이의 관찰력이 작품을 특별하게 만들었어."
    ],
    [
     "있는 물품으로 작은 나눔 행사 열기",
     "쓸 수 있는 것을 모으고 친구들과 역할을 나눴어. 동생도 함께 웃는 모습을 보고 태빈이는 뿌듯해했어."
    ]
   ]
  },
  "13": {
   "title": "재료비 때문에 멈춘 축제 준비",
   "text": "축제 준비물이 늘면서 태빈이는 비용 이야기에 조용해졌어. 하린은 말없이 역할을 바꾸려는 태빈이를 붙잡고 함께 방법을 찾자고 해. 뛰어난 아이디어를 포기하지 않으면서 형편도 설명해야 해.",
   "choices": [
    [
     "부담되는 사정을 말하고 역할 다시 의논하기",
     "친구들은 몰랐다며 각자 가능한 것을 이야기했어. 태빈이는 숨기느라 혼자 버티기보다 함께 조정하는 법을 배웠어."
    ],
    [
     "적은 재료로 만들 수 있는 포스터 제안하기",
     "제한된 재료를 살린 디자인이 오히려 눈에 띄었어. 태빈이는 부족함을 감추기보다 새로운 방식으로 풀었어."
    ],
    [
     "빌릴 물품과 직접 만들 것을 정리하기",
     "학교에 있는 물품부터 확인하자 막혔던 계획이 다시 보였어. 태빈이의 문제 해결력이 팀을 움직였어."
    ]
   ]
  },
  "16": {
   "title": "재능만으로는 채울 수 없는 준비",
   "text": "진로 자료를 펼친 태빈이는 수업료와 준비 기간도 함께 적어 봐. 하고 싶은 일은 분명해졌지만 가족에게 모든 비용을 부탁하기는 어려워. 부모님은 태빈이의 실력을 믿으며 함께 가능한 길을 찾아.",
   "choices": [
    [
     "지금까지의 작업으로 작품집 준비하기",
     "화려한 재료 없이 만든 작품들도 태빈이의 실력을 보여 줬어. 지원할 곳에 설명할 수 있는 자료가 모였어."
    ],
    [
     "도서관 자료로 필요한 분야 공부하기",
     "무료로 볼 수 있는 자료부터 깊게 파고들었어. 빠른 이해력을 꾸준한 배움으로 이어 갈 계획이 생겼어."
    ],
    [
     "선생님과 지원 과정·진로 상담하기",
     "혼자 몰랐던 과정과 준비 시기를 들었어. 형편을 고려하면서도 선택할 수 있는 길이 넓어졌어."
    ]
   ]
  },
  "18": {
   "title": "가격표 대신 작품을 보여 주는 날",
   "text": "졸업 발표를 준비하며 태빈이는 오래 쓴 재료와 기록을 다시 꺼냈어. 태빈이는 갖춘 물건의 가격보다 자신이 해결한 문제를 설명하고 싶어. 하린과 팀원들이 마지막 연습을 함께해.",
   "choices": [
    [
     "직접 만든 작품과 과정을 영상으로 보여 주기",
     "손으로 고치고 다시 만든 장면들이 화면에 담겼어. 태빈이의 실력은 준비물의 가격표와 다른 방식으로 전해졌어."
    ],
    [
     "문제를 해결한 자료와 실험 설명하기",
     "질문의 핵심을 빠르게 짚으며 자신의 방법을 설명했어. 오래 쌓아 온 배움이 발표를 지탱했어."
    ],
    [
     "팀원의 강점을 살려 발표 조율하기",
     "부족한 부분은 서로 돕고 잘하는 일은 나눠 맡았어. 태빈이는 재능과 협력이 함께할 때 더 멀리 갈 수 있음을 알았어."
    ]
   ]
  },
  "20": {
   "title": "내 몫의 생활, 내 몫의 가능성",
   "text": "새 생활을 시작한 태빈이는 생활에 필요한 것과 계속 배우고 싶은 것을 함께 적어. 첫째로서 가족을 생각하는 마음도 있지만, 혼자 모든 짐을 떠안을 수는 없어. 자신의 재능을 실제 경험으로 이어 갈 작은 시도를 고르려 해.",
   "choices": [
    [
     "쓸 수 있는 도구로 기술 프로젝트 시작하기",
     "익숙한 문제 해결력을 작은 결과물로 만들었어. 태빈이는 가능한 범위에서 끝까지 해내는 경험을 쌓았어."
    ],
    [
     "적은 재료로 내 생각을 작품에 담기",
     "표현하고 싶은 내용을 먼저 정하고 재료를 골랐어. 제약 속에서 익힌 방식이 태빈이만의 특징으로 남았어."
    ],
    [
     "서로의 기술을 나눌 동료 찾기",
     "태빈이는 도움받을 부분을 솔직히 이야기하고 자신의 강점도 내놓았어. 혼자 버티는 대신 함께 시작할 길이 생겼어."
    ]
   ]
  },
  "25": {
   "title": "재능을 계속 쓸 수 있는 생활",
   "text": "태빈이는 기회가 왔을 때뿐 아니라 그다음 날도 계속할 방법을 고민해. 가족을 생각하는 마음과 자신의 생활을 지키는 일 사이에서 균형이 필요해. 재능을 오래 이어 갈 다음 발걸음은 무엇일까?",
   "choices": [
    [
     "배운 것을 정리하고 전문성 더 쌓기",
     "빨리 이해하는 것에만 기대지 않고 기초를 다시 살폈어. 태빈이는 재능이 꾸준한 실력이 되도록 시간을 썼어."
    ],
    [
     "내 강점을 작은 기획과 수입으로 잇기",
     "문제를 해결한 아이디어가 작은 수입으로 이어졌어. 태빈이는 무리하게 한 번에 바꾸기보다 이어 갈 방법을 생각했어."
    ],
    [
     "내 경험이 담긴 작품 완성하기",
     "부족한 환경에서 발견한 풍경과 감각을 작품에 담았어. 태빈이만의 시선이 다음 작업의 출발점이 됐어."
    ]
   ]
  },
  "35": {
   "title": "낡은 다락방을 다시 열다",
   "text": "옛 친구들과 다락방 사진을 보니 빌린 도구와 고쳐 쓴 물건들이 보여. 하린은 태빈이가 처음 설명해 준 아이디어를 아직 기억한대. 태빈이는 자신의 노력과 함께 도와준 사람들의 얼굴도 떠올려.",
   "choices": [
    [
     "옛 친구들과 서로의 강점을 나눠 협업하기",
     "이번에도 가진 조건부터 솔직히 이야기했어. 서로 다른 경험이 모여 혼자서는 못 할 작업이 시작됐어."
    ],
    [
     "도움을 찾았던 방법을 후배에게 전하기",
     "실력만 키우라는 말 대신 어디서 배우고 누구에게 물었는지 설명했어. 태빈이의 경험이 누군가의 첫 안내가 됐어."
    ],
    [
     "작은 재료로 시작한 날들을 기록하기",
     "기록에는 고친 물건만큼 함께해 준 손길도 남았어. 태빈이는 혼자만의 성공담으로 시간을 줄이지 않았어."
    ]
   ]
  },
  "50": {
   "title": "재능을 알아보는 다음 사람",
   "text": "배우고 싶지만 준비 비용이 걱정된다는 후배가 찾아왔어. 태빈이는 자신의 작품을 처음 눈여겨봐 준 선생님과 무료 배움터를 떠올려. 누군가의 가능성을 알아보는 사람이 되고 싶어.",
   "choices": [
    [
     "후배의 강점을 듣고 배울 곳 함께 찾기",
     "태빈이는 형편을 단정하지 않고 후배에게 필요한 것을 물었어. 당장 알아볼 수 있는 배움의 경로를 함께 정리했어."
    ],
    [
     "적은 준비로 배웠던 방법을 기록하기",
     "빌리고 고치고 물어보며 배운 구체적인 방법을 적었어. 재능을 계속 쓸 수 있게 했던 조건들도 기록에 남았어."
    ],
    [
     "쓸 수 있는 재료로 후배와 함께 만들기",
     "재료를 먼저 평가하지 않고 표현할 생각부터 나눴어. 태빈이는 후배의 새로운 시선에서 또 배웠어."
    ]
   ]
  },
  "70": {
   "title": "물려받은 담요가 남긴 자리",
   "text": "앨범에는 아기 때 덮었던 담요와 동생에게 건네던 날의 사진이 있어. 넉넉하지 않았던 날에도 태빈이의 말을 들어 주던 가족과 배울 기회를 알려 준 사람들이 떠올라. 그 시간을 무엇으로 남길까?",
   "choices": [
    [
     "재능과 기회를 이어 준 과정을 글로 남기기",
     "노력만으로 설명할 수 없던 도움과 기회까지 함께 적었어. 다음 누군가가 길을 찾을 때 펼칠 기록이 됐어."
    ],
    [
     "작은 재료에서 시작한 작품들을 엮기",
     "낡은 종이에서 시작한 생각들이 서로 이어졌어. 태빈이는 오래 지켜 온 호기심을 다시 보았어."
    ],
    [
     "함께 버틴 가족과 도와준 사람에게 감사하기",
     "고맙다는 말 속에는 생활을 함께 나누고 기다려 준 시간이 담겼어. 담요 사진 옆에 새로운 이름들이 적혔어."
    ]
   ]
  },
  "90": {
   "title": "다음 첫째에게 쓰는 편지",
   "text": "태빈이는 다음 인생의 자신에게 편지를 써. 가진 돈이 적었던 출발이 가능성의 전부를 정하지는 않았어. 그렇다고 혼자 버티는 것만이 답도 아니었지. 무엇을 꼭 전하고 싶을까?",
   "choices": [
    [
     "재능을 믿되 배울 도움도 찾으라고 쓰기",
     "편지에는 모르는 것을 묻고 기회를 찾아보는 일도 실력이라는 문장이 남았어."
    ],
    [
     "작은 재료로도 자기 생각을 남기라고 쓰기",
     "편지에는 반 토막 분필로 세상을 가득 그렸던 날이 적혔어. 시작의 크기가 이야기의 끝을 정하진 않았어."
    ],
    [
     "혼자 모든 짐을 떠안지 말라고 쓰기",
     "마지막에는 도움을 청해도 괜찮고 받은 다정함을 나누며 살아도 된다는 말이 남았어."
    ]
   ]
  }
 }
};


/* 태빈이 전용 서사: 100개의 별 수첩과 친구 가온이를 중심으로 0~99살까지 매년 새로운 이야기 생성. */
const TAEBIN_MAIN_BEATS=[[0,"하얀 표지의 100칸 수첩","한태빈이 태어난 날, 가족은 빈 별 모양 100개가 그려진 수첩을 침대 곁에 두었어. 돈이나 성적이 아닌, 스스로 살아가며 꼭 경험해 보고 싶은 일을 한 칸씩 채우자는 약속이야."],[3,"첫 번째 별이 반짝이는 날","세 살 태빈이는 창가에서 별을 세다 수첩에 손가락으로 동그라미를 그렸어. 가족은 태빈이가 좋아하는 것부터 찾아보자고 했지."],[7,"비밀 수첩의 짝꿍","학교에 입학한 태빈이는 운동장 벤치에 100칸 수첩을 두고 갔어. 같은 반 가온이가 수첩을 찾아주며 '나도 이런 걸 적고 싶다'고 말했어."],[10,"도서관의 봉인된 지도","가온이와 도서관을 찾은 태빈이는 동네의 오래된 장소를 표시한 지도를 발견했어. 평범한 골목에 숨은 새로운 경험을 찾기로 했어."],[13,"한 번뿐인 중학교 축제","축제 준비위원을 모집한다는 공고가 붙었어. 태빈이는 목표 수첩을 채우려면 직접 무대 뒤로 들어가야 한다는 걸 깨달았어."],[16,"수첩을 잃어버린 오후","누군가 태빈이의 목표 수첩을 장난으로 숨겼어. 수첩보다 더 중요한 건 그동안 쌓인 추억과 태빈이의 태도야."],[18,"갈림길에 놓인 백 개의 꿈","졸업을 앞둔 태빈이는 대학, 직업, 여행 중 어느 길부터 시작할지 고민해. 길마다 이룰 수 있는 목표의 모습도 달라질 거야."],[20,"첫 자취방의 벽 한쪽","새로운 생활이 시작되고, 태빈이는 벽 한쪽에 목표 100개의 현황표를 붙였어. 삶을 지탱할 돈과 꿈을 이룰 시간 사이의 균형을 고민해."],[25,"가온이의 뜻밖의 제안","어릴 때 수첩을 돌려준 가온이에게 연락이 왔어. 함께 지역 청소년을 위한 창작 행사를 열면 어떻겠냐는 제안이야."],[30,"인생의 첫 큰 전시","태빈이는 지금껏 배운 것과 만든 것을 작은 전시로 엮으려 해. 이름난 성공보다는 그 과정에서 함께한 사람들의 이야기를 보여주고 싶어."],[40,"별이 아닌 시간을 세는 법","40살이 된 태빈이는 목표 수첩을 펼쳤어. 체크하지 못한 목표도 있고 계획보다 오래 걸린 꿈도 있어. 무엇을 더 소중히 해야 할까?"],[50,"오래된 수첩, 새로운 목소리","정리하던 책장 속에서 첫 번째 수첩을 발견했어. 예전에는 세상에 보여주고 싶었던 일들이 이제 누군가를 도울 경험이 되었어."],[60,"첫 번째 별을 기억하며","태빈이는 수첩의 맨 앞장에 적힌 삐뚤빼뚤한 글씨를 읽었어. 어릴 적 작은 호기심이 지금의 삶을 만들어 왔다는 걸 느꼈어."],[70,"가온이에게 쓰는 긴 편지","아주 오랜 친구 가온이와 오래전 운동장 벤치 이야기를 나눴어. 사람들과 함께했던 시간이 수첩의 별보다 더 크게 남았어."],[80,"다음 세대의 수첩","태빈이의 기록을 본 젊은 사람이 자신만의 꿈 수첩을 만들고 싶다고 말해. 태빈이는 무엇을 알려줄까?"],[90,"마지막 페이지가 아니라","수첩의 낡은 표지를 고치며 태빈이는 아직도 배우고 싶은 것이 떠오른다는 사실을 깨달았어. 나이와 상관없이 새 목표를 만들 수 있지."]];
/* 태빈이 키우기 전용 — 나이별로 서로 다른 사건 100개. 저장 파일을 변경하지 않아도 적용됨. */
const TAEBIN_UNIQUE_PLOTS=[["처음 만난 가족","가족이 아기 태빈이의 첫날을 특별한 사진으로 남기려 해."],["첫돌의 소란","돌잔치 준비가 끝나갈 때 태빈이가 가장 좋아하는 장난감이 보이지 않아."],["낯선 노래","집에 들려온 음악을 듣고 태빈이가 새로운 리듬에 관심을 보였어."],["가온이와 첫 인사","놀이터에서 가온이가 장난감을 나눠 주며 먼저 인사했어."],["색연필 하나의 비밀","친구들의 공동 그림에서 가장 필요한 색연필이 사라졌어."],["유치원 발표회","무대에 서기 전 태빈이와 친구들이 짧은 공연을 연습하고 있어."],["종이비행기 실험","친구가 날린 비행기가 멀리 날아가자 태빈이가 방법을 궁금해했어."],["초등학교 첫 자리","새 교실에서 옆자리 친구와 친해질 수 있는 기회가 찾아왔어."],["학교 도서관의 지도","오래된 지도와 지금의 동네가 달라 가온이와 함께 비교해 보고 싶어."],["처음 맡은 발표","태빈이가 친구들에게 좋아하는 것을 소개하는 수업을 준비하고 있어."],["운동회 준비의 변수","계획이 바뀌어 태빈이가 반 응원단의 진행을 도와야 해."],["과학 시간의 실패","작동하지 않는 실험 장치를 앞에 두고 원인을 찾아야 해."],["학급 벽보 프로젝트","서로 다른 의견을 가진 친구들이 하나의 결과물을 만들어야 해."],["학교 축제 기획","부스 운영을 도울 새 구성원을 모집하고 있어."],["동아리 포스터 피드백","처음 만든 디자인에 다양한 수정 의견이 쏟아졌어."],["영상 촬영 첫날","촬영 당일 중요한 소품이 준비되지 않아 팀이 당황하고 있어."],["사라진 목표 수첩","아껴 쓰던 꿈 수첩이 보이지 않아 마지막 장소부터 떠올려 봐야 해."],["엇갈린 진로 상담","가온이와 태빈이가 서로 다른 진로를 고민하고 있어."],["졸업 전날의 연락","학교를 떠나기 전에 고마웠던 사람에게 하고 싶은 말이 생겼어."],["첫 독립 준비","새로운 생활을 시작하기 전에 돈과 시간을 어떻게 쓸지 정해야 해."],["작은 책상의 첫 계획","혼자 사용할 공간을 꾸미며 새로운 목표표를 만들고 싶어졌어."],["첫 급여의 사용처","열심히 일해 받은 돈을 어디에 써야 할지 고민돼."],["낯선 도시의 초대","새로운 도시에서 열리는 문화 행사에 갈 기회가 생겼어."],["마감 직전 팀 프로젝트","동료 한 명의 일정이 바뀌어 작업을 다시 나눠야 해."],["예산이 부족한 여행","준비한 여행의 경비가 예상보다 커져 계획을 바꿔야 해."],["가온이의 창작 행사 제안","가온이가 지역 청소년을 위한 행사를 함께 열자고 제안했어."],["처음 도와준 후배","낯선 분야를 배우려는 후배가 어디서 시작할지 묻고 있어."],["새 취미 모임의 초대","태빈이에게 새로운 사람들과 만나 취미를 나눌 기회가 생겼어."],["작품 공개와 낯선 평가","태빈이가 만든 작품에 예상하지 못한 평가가 남겨졌어."],["책임자가 된 첫날","큰 프로젝트를 맡게 되어 일정과 역할 분담이 중요해졌어."],["거리의 작은 전시","전시장에서 마주친 작품이 새로운 아이디어를 떠올리게 했어."],["함께 만드는 지역 행사","동네 사람들이 서로 다른 생각을 모아 행사를 준비하고 있어."],["친구의 창업 제안서","좋아 보이는 사업 아이디어에 빠진 정보가 있다는 걸 알았어."],["기차역에서 만난 여행자","다른 나라를 다녀온 사람에게 여행 경험을 들을 수 있게 됐어."],["새로운 분야의 공개 강연","익숙하지 않은 주제에 관심이 생겨 첫 강연을 들으려 해."],["친구들과의 공동 전시","여러 작품을 한 장소에 모으면서 전시 흐름을 다시 설계해야 해."],["예상 밖의 인터뷰","준비했던 질문보다 더 흥미로운 이야기를 듣게 됐어."],["잊고 지낸 취미","오래된 서랍에서 예전에 만들었던 작품이 발견됐어."],["작은 책방의 홍보 요청","동네 책방에서 새로운 행사를 알리는 데 도움을 구했어."],["십 년치 사진 정리","오래된 사진에 예상하지 못한 성장의 순간들이 남아 있어."],["열 번째 목표 페이지","새로운 10년을 맞으며 아직 이루지 못한 꿈을 다시 골라 보고 있어."],["후배의 첫 대회","후배가 발표를 앞두고 긴장해 태빈이에게 조언을 구했어."],["마을 모임의 의견 충돌","주민들이 행사 운영 방향을 두고 서로 다른 말을 하고 있어."],["달라진 제작 기술","새 프로그램이 생겼지만 쓰던 방식이 훨씬 익숙해."],["가온이의 새 진로","가온이가 오랫동안 해 오던 일을 바꾸려고 결심했어."],["가족 기념일의 일정 변화","모두 모이기로 한 날 장소를 바꿔야 하는 상황이 생겼어."],["오래된 건물의 변화","동네 건물이 새 단장을 앞두고 있어 지금 모습을 기록하려 해."],["서로 다른 수준의 공부 모임","기초를 배우는 사람과 경험이 많은 사람이 함께 모였어."],["첫 문장이 나오지 않는 밤","오랫동안 쓰고 싶었던 이야기를 드디어 시작하려 해."],["한 해를 바꾼 선택","작은 결정 하나가 생각보다 큰 영향을 남긴 지난 1년을 돌아봤어."],["새로 온 모임 구성원","익숙한 모임에 처음 들어온 사람이 적응하지 못하고 있어."],["역할을 나눌 시간","혼자 맡던 일을 이제는 동료와 나누려 해."],["오래된 사진 속 골목","예전 사진 속 거리가 지금은 완전히 달라졌다는 소식을 들었어."],["가족이 시작한 낯선 취미","가족이 태빈이가 모르는 취미를 새롭게 배우고 있어."],["미뤘던 버킷리스트","오랫동안 미뤄 둔 목표를 지금의 현실에 맞게 다시 준비하려 해."],["가온이의 멘토링 활동","가온이가 젊은 사람들에게 경험을 전하는 자리를 만든대."],["변화한 지역 축제","늘 가던 축제에 새로운 세대의 아이디어가 더해졌어."],["새로운 제작 도구 수업","익숙하지 않은 기기로 작업해야 하는 날이 다가왔어."],["실패를 들려 달라는 부탁","예전 실패에서 배운 내용을 발표해 달라는 요청을 받았어."],["삶의 속도 조절하기","일과 쉼의 균형을 새롭게 정할 시기가 왔어."],["첫 멘토링 요청","한 청년이 태빈이의 경험을 배우고 싶다며 찾아왔어."],["오랜 친구들의 모임","수십 년 전의 친구들이 다시 모여 기억을 나누고 있어."],["새로운 동네 산책길","동네 공원에 처음 보는 산책길이 만들어졌어."],["흩어진 작업 파일","오랫동안 만든 결과물이 여러 기기에 흩어져 있어."],["예순다섯의 새로운 공부","처음 배우는 분야의 입문 수업이 열렸어."],["다른 세대와 협업","젊은 창작자와 공동 작품을 준비하게 됐어."],["새 이웃을 환영하는 날","지역 모임에서 처음 이사 온 사람을 위한 행사를 준비해."],["오래된 취미의 새로운 방식","젊을 때 즐기던 취미를 새로운 방식으로 해 볼 기회가 생겼어."],["낡은 수첩 표지","수십 년간 사용한 꿈 수첩의 표지가 떨어지기 시작했어."],["젊은 나에게 보내는 편지","이십 대의 자신에게 한 통의 편지를 남길 수 있다면 어떤 말을 쓸까."],["첫 목표를 다시 읽은 날","어릴 때 적었던 목표가 지금도 같은 의미일지 궁금해."],["후배들의 새 동아리","오래전에 함께 일하던 후배들이 새로운 모임을 시작한대."],["변화한 도시 축제","해마다 가던 축제의 분위기가 예전과 완전히 달라졌어."],["한동안 찍지 못한 가족사진","예전 사진첩을 보니 최근 가족사진이 별로 없어."],["오래된 책장을 정리하며","책장 구석에서 아끼던 책과 손글씨 메모를 발견했어."],["가온이와 차 한잔","오래된 친구 가온이와 조용한 오후에 만나기로 했어."],["새 기술을 배우는 일","예전에는 직접 하던 일을 새로운 도구가 돕고 있어."],["동네 박물관의 인터뷰","마을 박물관에서 주민들의 기억을 모으려 해."],["다음 세대의 공동 전시","젊은 창작자가 태빈이의 옛 작품을 새롭게 해석했어."],["다음 사람을 위한 수첩","태빈이가 쌓아 온 기록을 누군가에게 전해 주고 싶어졌어."],["첫 꿈을 묻는 어린 학생","한 학생이 하고 싶은 일이 없다고 말하며 조언을 구했어."],["다시 배운 손글씨","새로운 필기 도구를 발견해 짧은 글을 직접 써 보고 싶어졌어."],["동네 도서관의 독서회","오랫동안 다니던 도서관에 새로운 독서 모임이 생겼어."],["바뀐 전통시장","익숙한 시장 거리가 새로 꾸며져 예전 모습을 떠올리게 해."],["어린 가족의 진로 고민","어린 가족 구성원이 새로운 선택을 앞두고 도움을 구했어."],["추억의 여행지 재방문","예전에 즐겨 찾던 장소를 무리 없는 일정으로 다시 가고 싶어."],["라디오에서 들려온 노래","젊을 때 좋아하던 노래가 우연히 흘러나왔어."],["첫 작품의 새로운 의미","처음 만들었던 작품을 다시 보니 다른 느낌이 들어."],["학생의 전시회 초대","예전에 도와준 학생이 자신의 전시회에 초대했어."],["꿈 수첩에 남은 빈칸","아직 채워지지 않은 목표에 새로운 의미를 적으려 해."],["문구점이 있던 자리","어릴 적 자주 들르던 문구점 자리에서 새로운 가게를 발견했어."],["도서관 초청 이야기","도서관에서 태빈이의 오랜 경험을 들려 달라고 요청했어."],["가족 앨범의 오래된 사진","소중한 사진이 바래기 전에 정리하고 싶어졌어."],["가온이의 손편지","오래된 친구가 함께한 시간을 떠올리는 편지를 보냈어."],["창가의 작은 화분","오랫동안 돌보던 화분에 새잎이 돋았어."],["동네 행사에서 만난 어린이","어린이가 태빈이에게 어릴 때 가장 재미있던 일을 물었어."],["오래된 편지 상자","예전에 받은 손편지들을 정리할 기회가 생겼어."],["같은 장소의 다른 풍경","예전 사진 속 장소를 다시 찾아 새로운 모습을 보게 됐어."],["동네 산책에서 만난 이웃","매일 인사만 나누던 이웃과 긴 이야기를 하게 됐어."],["백 가지 꿈의 마지막 정리","이루었던 꿈과 아쉬웠던 꿈을 한 권에 정리하려 해."]];
const TAEBIN_YEAR_SCENES=[["동네 구석구석 관찰하기","익숙한 풍경을 새롭게 기록해 봤어.","intelligence"],["가온이와 근황 나누기","오래된 친구와 함께 일상 속 기쁨을 찾았어.","social"],["오늘의 순간을 사진으로 찍기","작은 사진 하나가 오래 남을 기억이 됐어.","creativity"],["안전한 새 활동 도전하기","새로운 경험으로 용기를 얻었어.","health"],["다른 사람의 이야기를 듣기","서로 다른 삶에서 배울 것을 발견했어.","social"],["읽고 싶은 책 고르기","책을 통해 전에는 몰랐던 세상을 만났어.","intelligence"],["가족을 위한 소박한 선물 준비하기","마음을 담은 행동이 가족에게 큰 기쁨이 됐어.","happiness"],["직접 작은 작품 완성하기","아이디어를 끝까지 실현하는 성취감을 느꼈어.","creativity"],["공원에서 자연 기록하기","바쁜 하루에 쉼표를 찍고 주변을 돌아봤어.","health"],["내일의 작은 약속 정하기","거창한 계획보다 지킬 수 있는 첫걸음이 중요했어.","intelligence"]];
const TAEBIN_THEME_CHOICES=[[["새로운 길을 지도에 그리기","동네 지도를 완성하면서 작은 발견을 기록했어."],["가온이를 불러 함께 걷기","둘이 걷는 길에 새로운 이야기가 생겼어."],["나만의 탐험 규칙 정하기","안전하고 즐거운 탐험 방법을 찾았어."]],[["가온이의 이야기를 먼저 듣기","친구와 서로의 고민을 나눴어."],["함께 꿈 수첩 만들기","둘의 수첩에 각자 다른 꿈이 더해졌어."],["우정의 기념 사진 남기기","친구와의 평범한 하루가 오래 남을 추억이 됐어."]],[["카메라 구도를 새로 시도하기","늘 보던 장면을 전혀 다른 모습으로 남겼어."],["사진 속 사람들의 이야기 듣기","사진 뒤에 숨은 사연을 기록했어."],["사진으로 하루 일기 쓰기","시간이 지나도 오늘을 기억할 수 있게 됐어."]],[["친구와 함께 안전한 활동 배우기","새로운 활동을 서로 격려하며 배웠어."],["관심 있는 기술을 체험하기","처음 해보는 일에서 재미를 발견했어."],["서툴렀던 부분 다시 연습하기","작은 실패도 성장의 일부가 되었어."]],[["상대의 고민을 메모하며 듣기","누군가에게 필요한 건 정답보다 관심이었어."],["서로의 경험을 이야기로 만들기","서로 다른 경험에서 배울 것을 찾았어."],["도울 수 있는 행동 찾아보기","작은 실천으로 관계가 더 가까워졌어."]],[["처음 보는 책 골라 도전하기","새 분야를 알게 되면서 호기심이 커졌어."],["책 내용을 그림으로 정리하기","읽은 이야기가 태빈이만의 작품이 됐어."],["새로 배운 사실 친구에게 설명하기","배움을 나누면서 이해도 깊어졌어."]],[["가족이 좋아하는 음식 만들기","정성을 담은 한 끼가 즐거운 시간이 됐어."],["감사 쪽지 써서 전하기","짧은 글에 마음을 담았어."],["가족과 함께 조용히 쉬기","무언가를 이루지 않아도 소중한 시간이었어."]],[["직접 만든 결과물 발표하기","작품을 보여주면서 자신감이 생겼어."],["작품을 고쳐 완성도 높이기","끝까지 손보는 과정에서 실력이 늘었어."],["친구와 공동 작품 만들기","다른 생각을 합치자 예상 못한 결과가 나왔어."]],[["공원에서 새로운 식물 관찰하기","계절의 변화를 작은 기록으로 남겼어."],["산책하며 마음 정리하기","복잡한 생각이 조금씩 정돈됐어."],["가온이와 풍경 스케치하기","같은 풍경을 다르게 보는 재미를 알았어."]],[["실천할 수 있는 목표 한 개 정하기","큰 꿈의 첫걸음을 구체적으로 적었어."],["지난 목표를 다시 살펴보기","이미 이룬 경험을 소중하게 느꼈어."],["친구에게 계획 조언 구하기","새로운 관점에서 계획을 보완했어."]]];
const TAEBIN_BEAT_CHOICES={"0":["꿈 수첩에 첫 별을 그리기","가족의 목소리를 오래 기억하기","첫 장을 특별한 사진으로 남기기"],"3":["좋아하는 놀이를 그려 보기","처음 보는 그림책 읽어 보기","가족과 새로운 공원 구경하기"],"7":["가온이에게 고맙다고 인사하기","함께 새로운 목표 적기","수첩 잃어버리지 않게 표지 만들기"],"10":["오래된 지도 따라 동네 탐험하기","가온이와 지도에 사진 붙이기","지도의 유래를 도서관에서 조사하기"],"13":["무대 뒤 영상 제작 맡기","공연 진행을 도와보기","축제에서 친구들 작품 전시하기"],"16":["가온이와 차분히 찾기","주변 사람들에게 도움 요청하기","기억나는 목표를 새 수첩에 적기"],"18":["관심 진로를 직접 체험하기","가온이와 여행 계획 세우기","수첩 속 목표의 우선순위 정하기"],"20":["생활비 계획표 만들기","작은 방을 좋아하는 작품으로 꾸미기","가온이에게 새 생활 이야기 전하기"],"25":["청소년 행사 영상 기획하기","자원봉사 팀 꾸리기","가온이의 제안에 새 아이디어 더하기"],"30":["친구들의 작품도 함께 전시하기","나만의 성장 과정을 영상으로 만들기","관람객과 직접 대화하기"],"40":["남은 꿈을 다시 정리하기","가족과 앞으로의 계획 나누기","지난 꿈 중 가장 소중한 순간 기록하기"],"50":["새로운 사람에게 경험 가르치기","오래된 앨범을 디지털로 보관하기","해보지 않은 취미에 다시 도전하기"],"60":["첫 목표의 순간을 글로 남기기","가온이와 기억에 남는 장면 이야기하기","다음 세대를 위한 수첩 만들기"],"70":["가온이에게 편지 쓰기","옛 친구들과 사진 정리하기","오래된 약속을 되짚어 보기"],"80":["젊은 사람의 목표를 함께 정리하기","서로의 꿈 이야기를 나누기","일생의 배움을 짧은 영상으로 남기기"],"90":["수첩 표지 손질하고 이어 쓰기","새로운 목표를 하나 더 생각하기","오래 함께한 사람들에게 고마움 전하기"]};
const TAEBIN_MAIN_CHOICES=[["가온이와 함께 해결 방법 찾기","혼자라면 놓쳤을 생각을 함께 발견했어.","social","people"],["직접 기록하고 작품으로 남기기","작은 경험도 오래 남을 이야기로 바뀌었어.","creativity","art"],["차근차근 계획을 세워 실천하기","한 번에 모든 걸 이루기보다 한 걸음 나아갔어.","intelligence","research"]];
const TAEBIN_STORY_STAGE_NAMES=["첫 발견","호기심의 계절","작은 모험","우정의 기록","새로운 질문","자기만의 길","도전의 흔적","함께한 사람","다음 꿈","다시 시작"];
const TAEBIN_FAMILY_WORLDS={
 wealthy:'대저택에서 가족의 명예와 일정표 사이에 놓인 태빈이는 자유롭게 경험을 쌓을 방법을 찾아야 해. 넉넉한 자산보다 중요한 건 스스로 이룬 일이라는 약속이야.',
 supportive:'부모님은 태빈이가 이루고 싶은 경험을 적은 수첩을 함께 읽으며 응원해 줬어. 단, 스스로 꿈을 포기하면 특별한 지원도 멈추기로 했어.',
 ordinary:'평범한 동네의 작은 식탁에서 가족은 특별한 돈보다 서로의 약속을 먼저 챙겼어. 소박한 일상이 목표를 이루는 첫 무대가 됐어.',
 frugal:'생활비가 빠듯한 집에서 태빈이는 비싼 준비물 없이 시작할 수 있는 목표부터 찾았어. 가족은 서로의 재능과 시간을 나누기로 했어.'
};
function taebinStoryChapter(age){
 const year=Math.max(0,Math.min(99,Math.floor(Number(age)||0)));
 const event=TAEBIN_UNIQUE_PLOTS[year];
 const main=TAEBIN_MAIN_BEATS.find(chapter=>chapter[0]===year);
 const familyNote=year===0||year%9===0?(TAEBIN_FAMILY_WORLDS[state.family]||''):'';
 const milestones=year%10===0&&typeof window.taebinGoalCount==='function'?' 수첩에 기록된 인생 목표는 지금 '+window.taebinGoalCount()+'/100개야.':'';
 const text=(main?main[2]:event[1])+(familyNote?' '+familyNote:'')+milestones;
 const title=main?main[1]:event[0];
 const beat=TAEBIN_BEAT_CHOICES[year];
 const format=[
  ['먼저 해결할 문제를 찾아보기','생각을 정리하며 다음 도전을 준비했어.','intelligence','research'],
  ['가온이나 가족의 의견을 듣기','사람들의 서로 다른 생각을 알게 됐어.','social','people'],
  ['그날의 일을 글이나 사진으로 기록하기','오래 남을 이야기를 한 장 더 만들었어.','creativity','art']
 ];
 const detailWords=['계획을 세워','차분히 관찰하고','필요한 자료를 찾아','새 방법을 생각하며','가장 중요한 일부터','여러 가능성을 비교하며','지난 경험을 활용해','함께 나눌 방법을 찾아','조금씩 연습하며','나에게 맞는 속도로'];
 const options=format.map(([label,outcome,stat,careerId],index)=>{
  const action=beat?.[index]||event[0]+' — '+(index===0?detailWords[year%10]+' 직접 시도하기':index===1?'가온이 또는 함께할 사람과 의견 나누기':'나만의 방식으로 결과 남기기');
  return {label:action,effect:[stat,4,'happiness',1],outcome:event[0]+' 사건에서 '+(index===0?'스스로 해결할 실마리를 찾았어.':index===1?'서로의 이야기를 나누며 한 걸음 나아갔어.':'새로운 아이디어를 실제 기록으로 남겼어.'),careerId,flag:index===0?'plans':index===1?'friends':'art',bond:index===1?1:0};
 });
 return {title,text,options};
}

function familyStoryChapter(age){
 const source=taebinStoryChapter(age);
 if(!source)return null;
 const variant=null; // 태빈이 고유 에피소드를 누리 버전 공통 서사가 덮어쓰지 않도록 함
 const chapter={...source,family:state.family,options:source.options.map((option,index)=>({
  ...option,...(variant?{label:variant.choices[index][0],outcome:variant.choices[index][1]}:{})
 }))};
 if(variant){chapter.title=variant.title;chapter.text=variant.text;}
 chapter.text=typeof chapter.text==="function"?chapter.text():chapter.text;
 if(age>=18&&age<=50&&state.family==="supportive"){
  chapter.text+=state.familyDreamSupport===false
   ?" 지금은 가족의 프로젝트 비용 지원 없이 직접 계획을 세우고 있어."
   :" 현재 목표를 이어 가며 가족의 프로젝트 지원을 받기로 한 상태야.";
 }
 if(age>=13&&age<=50&&state.family==="frugal"&&state.familyScholarships>0){
  chapter.text+=" 앞서 재능을 인정받아 받은 활동비 지원은 배울 기회를 찾는 데 힘이 되었어.";
 }
 if(age>=12&&age<=40&&state.family==="wealthy"&&state.familyTrust>0){
  chapter.text+=" 앞서 신중하게 대처하며 쌓은 가족과의 신뢰를 떠올려.";
 }
 // 직전 사건의 선택·결과를 매년 그대로 복사하지 않고 스토리 앨범에 보관.
 const recurring=null; // 과거 누리 사건(하린 등)의 내용이 태빈이 서사로 섞이지 않도록 함.
 if(recurring){
  const {age:pastAge,continueStory}=recurring;
  const pastTitle=FAMILY_STORY_VARIANTS[state.family]?.[pastAge]?.title||STORY_CHAPTERS[pastAge].title;
  const remembered=state.storyJournal.find(entry=>entry?.age===pastAge&&entry.title===pastTitle);
  if(typeof remembered?.choice==='string')chapter.text+=' '+continueStory(remembered.choice);
 }
 return chapter;
}

const RECURRING_STORY_THREADS={
 25:{age:18,continueStory:choice=>`졸업 발표를 준비할 때는 ‘${choice}’를 골랐어. 그때 익힌 방식 중 무엇을 지금도 써먹을 수 있을까?`},
 35:{age:3,continueStory:choice=>`하린은 처음 만났을 때 태빈이가 ‘${choice}’를 골랐던 이야기를 꺼냈어. 이번에는 둘이 어떤 추억을 남길까?`},
 70:{age:1,continueStory:choice=>`앨범에서 한 살 때 ‘${choice}’를 골랐던 기록을 찾았어. 그때 가족이 앨범을 채워 줬듯, 이번엔 태빈이가 한 장을 채울 차례야.`}
};

function maybeStartStory(age){
 ensureStory();
 const chapter=familyStoryChapter(age);
 if(!chapter||state.storySeen.includes(age))return;
 state.storySeen.push(age);
 state.pendingStory={age,family:chapter.family,title:chapter.title,text:((age>=13&&Number(state.detourPoints)>0)?"지난 선택 중에는 후회되는 일도 있었어. "+(state.detourPoints>=3?"태빈이는 잃어버린 신뢰를 회복할 방법을 고민하고 있어. ":"태빈이는 다른 선택을 해볼 수 있을지 생각해. "):"")+(typeof chapter.text==="function"?chapter.text():chapter.text),options:chapter.options};
 state.latestStory=`${age}살 · ${chapter.title} — 어떤 장면을 남길까?`;
 state.log.push(`📖 스토리 ${age}살: ${chapter.title}`);
}

// ===== Icon-free choice card presentation (game logic and values unchanged) =====
function nuriChoiceClean(value){
 return String(value??"")
  .replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0E\uFE0F\u200D\u20E3]/gu,"")
  .replace(/^[\s·•—–\\/|→➜:]+/u,"")
  .replace(/\s{2,}/g," ").trim();
}
function nuriChoiceEscape(value){
 return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function nuriOptionCard(option,index,handler,extraClass=""){
 const label=nuriChoiceClean(option.label||"선택하기");
 const fillsGrowth=handler==="choose";
 const fx=Array.isArray(option.effect)?actualEffect(option.effect,fillsGrowth):[];
 const costAndGrowth=[];
 for(let i=0;i<fx.length;i+=2){
  const key=fx[i],val=Number(fx[i+1]);
  if(!key||!Number.isFinite(val)||val===0)continue;
  const title=key==="money"?"돈":(labels[key]||key);
  const amount=key==="money"?formatWon(Math.abs(val)):String(Math.round(Math.abs(val)*10)/10);
  const sign=val>0?"+":"−";
  costAndGrowth.push(`<span class="nuri-option-stat ${val>0?"is-gain":"is-cost"}">${nuriChoiceEscape(title)} ${sign}${nuriChoiceEscape(amount)}</span>`);
 }
 const summary=nuriChoiceClean(effectSummary(option.effect||[],fillsGrowth));
 let description=nuriChoiceClean(option.desc||"");
 if(summary&&description.endsWith(summary))description=description.slice(0,-summary.length).replace(/[\s·•,;:]+$/u,"").trim();
 if(/^이 경험으로 두 가지 능력이 성장해[.!]?$/u.test(description))description="";
 if(/^선택에 따라 능력치가 달라져[.!]?$/u.test(description))description="";
 const descHtml=description?`<span class="nuri-option-description">${nuriChoiceEscape(description)}</span>`:"";
 return `<button type="button" class="choice nuri-option-card ${extraClass}" onclick="${handler}(${index})" aria-label="${nuriChoiceEscape(label)}">
  <span class="nuri-option-top"><span class="nuri-option-number">${String(index+1).padStart(2,"0")}</span><span class="nuri-option-kind">CHOICE</span></span>
  <strong class="nuri-option-title">${nuriChoiceEscape(label)}</strong>
  ${descHtml}
  <span class="nuri-option-effects">${costAndGrowth.join("")}</span>
 </button>`;
}

function renderStoryOverlay(){
 // All story decisions render directly in the visible choice panel, rather than
 // a fullscreen modal that blocks touches on mobile browsers.
 const old=document.getElementById("storyOverlay");
 if(old)old.remove();
 if(!state.pendingStory||state.pendingTurningPoint||!state.alive)return;
 const chapter=state.pendingStory;
 const prompt=document.getElementById("story");
 const choices=document.getElementById("choices");
 if(prompt)prompt.textContent="[인생 스토리 · "+chapter.age+"살] "+chapter.title+" — "+chapter.text;
 if(choices)choices.innerHTML=chapter.options.map((option,i)=>nuriOptionCard({...option,effect:growthEffect(option.effect,option.label,i)},i,"chooseStoryOption","turning-choice")).join("");
}
function chooseStoryOption(index){
 ensureStory();
 const chapter=state.pendingStory;
 if(!chapter?.options?.[index]||state.pendingTurningPoint)return;
 const option=chapter.options[index];
 const fx=actualEffect(growthEffect(option.effect,option.label,index));
 for(let i=0;i<fx.length;i+=2){
  const stat=fx[i],value=fx[i+1];
  if(stat==="money")state.money=Math.max(0,state.money+value);
  else state.stats[stat]=limitStat(stat,state.stats[stat]+value);
 }
 if(option.careerId){ensureCareer();state.careerPoints[option.careerId]=(state.careerPoints[option.careerId]||0)+4;}
 if(option.bond)state.storyFlags.bond=(state.storyFlags.bond||0)+option.bond;
 if(option.flag&&!state.storyFlags.flags.includes(option.flag))state.storyFlags.flags.push(option.flag);
 if(chapter.interviewType){
  const score=Number(option.interviewScore)||0;
  const readiness=(Number(state.stats.intelligence)||0)+(Number(state.stats.creativity)||0)+(Number(state.stats.social)||0);
  const passed=score>=3||(score===2&&readiness>=85);
  const kind=chapter.interviewType;
  if(passed){
   if(kind==='university'){
    state.lifeRoute='university';state.workStatus='none';state.applicationStatus='대학 합격 · 재학 중';
    option.outcome='🎉 대학 합격! '+option.outcome+' 입학 후의 전공 생활이 시작돼.';
   }else{
    state.lifeRoute='work';setWorkCareer();state.applicationStatus='채용 합격 · 재직 중';
    ensureWorld().performance=Math.max(12,ensureWorld().performance||0);
    option.outcome='🎉 채용 합격! '+option.outcome+' 첫 출근을 시작했어.';
   }
  }else{
   state.lifeRoute='prep';state.workStatus='none';state.applicationStatus=kind==='university'?'대학 불합격 · 재지원 가능':'채용 불합격 · 재지원 가능';
   option.outcome='📨 이번에는 불합격했어. '+option.outcome+' 포트폴리오와 면접을 보완해 재지원할 수 있어.';
  }
  state.log.push((passed?'✅ ':'📌 ')+state.age+'살 · '+state.applicationStatus);
 }
 if(option.arcAction)applyLifeArcAction(option.arcAction,option);
 if(option.relAction)applyRomanceEvent(option.relAction,true);
 if(option.familyAction)applyFamilyStoryAction(option.familyAction);
 if(chapter.family===state.family)state.familyStoryMemory={family:state.family,age:chapter.age,choice:option.label,outcome:option.outcome};
 state.storyJournal.push({age:chapter.age,title:chapter.title,intro:chapter.text,choice:option.label,outcome:option.outcome});
 state.latestStory=chapter.age+"살 · "+option.outcome;
 state.log.push("📖 "+chapter.age+"살 스토리: "+option.label+" · "+option.outcome);
 state.pendingStory=null;
 showNextLifeArc();render();save();toast("스토리 선택이 태빈이의 삶에 기록됐어!");
}
function renderStoryJournal(){
 ensureStory();modalHeader("스토리 앨범","태빈이 키우기 · LIFE STORY");
 const journal=state.storyJournal.slice().reverse();
 document.getElementById("appModalBody").innerHTML=`
 <p class="modal-hint">어릴 때의 선택, 하린과의 우정, 직업 적성이 이어지는 태빈이의 이야기야. 주요 나이마다 새로운 장이 열려.</p>
 <div class="settings-list">${journal.length?journal.map(ch=>`<article class="story-journal-entry"><h3>📖 ${typeof ch.age==='number'?ch.age+'살':ch.age} · ${ch.title}</h3><p>${ch.intro}</p><p><b>선택:</b> ${ch.choice}</p><p><b>그 후:</b> ${ch.outcome}</p></article>`).join(""):'<p class="modal-hint">아직 기록된 이야기가 없어. 태빈이의 첫 이야기를 선택해 줘.</p>'}</div>
 <div class="menu-actions"><button class="modal-action" onclick="renderMenuModal()">← 메뉴로 돌아가기</button></div>`;
}

const turningPointEvents={
 3:{title:"처음으로 사귄 친구",story:"놀이터에서 마음이 잘 맞는 친구를 만났어. 태빈이는 어떻게 다가가 볼까?",options:[
  {label:"먼저 다가가 인사하기",desc:"새로운 관계에 용기를 내기",effect:["social",5,"happiness",4,"charm",1]},
  {label:"천천히 지켜보며 친해지기",desc:"자신의 속도로 관계 맺기",effect:["intelligence",2,"happiness",2]}
 ]},
 7:{title:"초등학교 첫날",story:"새로운 교실과 친구들. 태빈이의 학교생활이 시작돼!",options:[
  {label:"친구들에게 먼저 말 걸기",desc:"친구를 사귀며 자신감 얻기",effect:["social",5,"charm",2,"happiness",2]},
  {label:"수업과 새로운 배움에 집중하기",desc:"관심 있는 분야를 발견하기",effect:["intelligence",5,"creativity",2]}
 ]},
 13:{title:"중학교 생활의 시작",story:"수업도 다양해지고 관심사도 달라지는 시기야. 무엇에 힘을 쏟을까?",options:[
  {label:"동아리 활동에 참여하기",desc:"취미와 새로운 친구 만들기",effect:["creativity",4,"social",3,"happiness",2]},
  {label:"관심 과목을 깊게 공부하기",desc:"배움의 기초를 다지기",effect:["intelligence",5,"happiness",-1]}
 ]},
 20:{title:"성인이 된 태빈이",story:"이제 스스로 삶의 방향을 선택할 수 있어. 새로운 시작을 어떻게 맞이할까?",options:[
  {label:"새로운 환경에서 독립하기",desc:"경험을 넓히지만 지출이 생겨",effect:["charm",3,"social",3,"money",-8]},
  {label:"익숙한 곳에서 기반 다지기",desc:"안정적으로 다음 단계를 준비해",effect:["money",8,"happiness",3,"intelligence",1]}
 ]},
 25:{title:"첫 번째 큰 갈림길",story:"익숙한 길을 이어갈 수도, 새로운 도전을 시작할 수도 있어.",options:[
  {label:"안정적인 길을 선택하기",desc:"꾸준히 기반을 쌓기",effect:["money",12,"happiness",2]},
  {label:"새로운 도전에 뛰어들기",desc:"성장 가능성을 넓히기",effect:["creativity",5,"intelligence",3,"money",-5]}
 ]},
 30:{title:"내가 원하는 삶 돌아보기",story:"지금까지의 선택을 돌아보며 앞으로의 방향을 다시 생각하게 됐어.",options:[
  {label:"새로운 분야에 도전하기",desc:"변화를 통해 활력 얻기",effect:["creativity",4,"happiness",3,"money",-5]},
  {label:"지금 하는 일의 전문성 키우기",desc:"경험을 깊게 쌓기",effect:["intelligence",5,"money",5,"happiness",-2]}
 ]},
 40:{title:"일과 삶의 균형",story:"일과 주변 사람들, 나 자신을 돌보는 시간 사이에서 균형을 고민하게 됐어.",options:[
  {label:"건강과 휴식을 우선하기",desc:"몸과 마음을 돌보기",effect:["health",4,"happiness",4]},
  {label:"오래 품었던 목표에 도전하기",desc:"새로운 성취에 도전하기",effect:["intelligence",3,"creativity",4,"happiness",-2]}
 ]},
 50:{title:"새로운 장을 열기",story:"지금까지 미뤄 두었던 일에 도전할 기회가 찾아왔어.",options:[
  {label:"오래 미뤄 둔 취미 시작하기",desc:"일상에 즐거움 더하기",effect:["happiness",5,"creativity",4]},
  {label:"내 경험을 다른 사람과 나누기",desc:"도움을 주며 관계 넓히기",effect:["social",4,"charm",3,"happiness",2]}
 ]},
 60:{title:"인생의 새로운 챕터",story:"삶의 속도를 조절하며 새로운 일상을 만들어 갈 때야.",options:[
  {label:"새로운 분야 배우기",desc:"호기심을 계속 이어가기",effect:["intelligence",4,"creativity",3]},
  {label:"가까운 사람들과 시간 보내기",desc:"소중한 관계를 돌보기",effect:["social",4,"happiness",4]}
 ]},
 70:{title:"건강을 돌아보는 시기",story:"앞으로의 시간을 위해 생활 습관을 점검하게 됐어.",options:[
  {label:"건강한 생활 습관 만들기",desc:"꾸준히 몸을 돌보기",effect:["health",5,"happiness",1]},
  {label:"가까운 곳으로 여행 떠나기",desc:"새로운 추억 만들기",effect:["happiness",4,"creativity",3,"money",-8]}
 ]},
 80:{title:"지나온 시간을 돌아보기",story:"오랜 시간 쌓인 추억과 경험이 태빈이에게 큰 의미로 다가와.",options:[
  {label:"추억을 기록으로 남기기",desc:"소중한 순간을 정리하기",effect:["happiness",5,"creativity",2]},
  {label:"새로운 활동에 도전하기",desc:"지금도 새로운 경험을 만들기",effect:["creativity",3,"social",3,"happiness",2]}
 ]},
 90:{title:"경험을 전하는 시간",story:"태빈이의 이야기를 궁금해하는 사람들이 찾아왔어.",options:[
  {label:"후배들에게 경험 전하기",desc:"살아온 지혜를 나누기",effect:["social",5,"charm",3]},
  {label:"가족과 추억 나누기",desc:"함께한 시간을 소중히 하기",effect:["happiness",5,"social",2]}
 ]}
};
function triggerTurningPoint(age){
 const event=turningPointEvents[age];
 if(!event)return;
 state.turningPoints=Array.isArray(state.turningPoints)?state.turningPoints:[];
 if(state.turningPoints.includes(age))return;
 state.turningPoints.push(age);
 state.pendingTurningPoint={age,title:event.title,story:event.story,options:event.options};
 state.log.push("인생의 전환점 · "+age+"살: "+event.title);
}
function renderTurningPoint(){
 const old=document.getElementById("turningPointOverlay");
 if(old)old.remove();
 if(!state.pendingTurningPoint||!state.alive)return;
 const event=state.pendingTurningPoint;
 const prompt=document.getElementById("story");
 const choices=document.getElementById("choices");
 if(prompt)prompt.textContent="[인생의 전환점 · "+event.age+"살] "+event.title+" — "+event.story;
 if(choices)choices.innerHTML=event.options.map((o,i)=>nuriOptionCard({...o,effect:growthEffect(o.effect,o.label,i)},i,"chooseTurningPoint","turning-choice")).join("");
}
function chooseTurningPoint(index){
 const event=state.pendingTurningPoint;
 if(!event?.options?.[index])return;
 const option=event.options[index];
 const balancedEffect=actualEffect(growthEffect(option.effect,option.label,index));
 recordCareerChoice(option);
 for(let i=0;i<balancedEffect.length;i+=2){
  const key=balancedEffect[i],value=balancedEffect[i+1];
  if(key==="money")state.money=Math.max(0,state.money+value);
  else state.stats[key]=limitStat(key,state.stats[key]+value);
 }
 state.log.push(event.age+"살 전환점 선택: "+option.label+" ("+effectSummary(growthEffect(option.effect,option.label,index))+ ")");
 state.pendingTurningPoint=null;
 showNextLifeArc();render();save();toast("인생의 전환점을 선택했어!");
}


const CORE_STATS=["health","happiness","intelligence","creativity","social","charm"];
const TRADEOFF_COSTS={health:"happiness",happiness:"health",intelligence:"happiness",creativity:"intelligence",social:"happiness",charm:"social",money:"happiness"};
function normalizeTradeoff(effect){
 const pairs=[];
 for(let i=0;i<effect.length;i+=2)pairs.push([effect[i],Number(effect[i+1])||0]);
 let gains=pairs.filter(([k,v])=>v>0&&CORE_STATS.includes(k));
 if(!gains.length)gains=pairs.filter(([k,v])=>v>0);
 if(!gains.length)return ["happiness",2,"social",-1];
 gains.sort((a,b)=>b[1]-a[1]);
 const [gainKey,gainValue]=gains[0];
 const losses=pairs.filter(([k,v])=>v<0&&k!==gainKey).sort((a,b)=>a[1]-b[1]);
 if(losses.length){
  const [lossKey,lossValue]=losses[0];
  return [gainKey,Math.max(1,gainValue),lossKey,lossValue];
 }
 const lossKey=TRADEOFF_COSTS[gainKey]||"happiness";
 const lossValue=-Math.max(2,Math.min(4,Math.round(gainValue*.35)));
 return [gainKey,Math.max(1,gainValue),lossKey,lossValue];
}
function choiceSignature(effect){
 const fx=normalizeTradeoff(effect);
 return fx[0]+"|"+fx[2];
}
function uniqueChoiceSet(options,limit=4){
 const usedLabels=new Set(),usedPairs=new Set(),result=[];
 for(const option of options){
  const fx=normalizeTradeoff(option.effect);
  const label=String(option.label||"").trim();
  const sig=choiceSignature(fx);
  if(!label||usedLabels.has(label)||usedPairs.has(sig))continue;
  usedLabels.add(label);usedPairs.add(sig);
  result.push({...option,effect:fx,desc:effectSummary(fx)});
  if(result.length>=limit)return result;
 }
 for(const option of options){
  if(result.length>=limit)break;
  const label=String(option.label||"").trim();
  if(!label||usedLabels.has(label))continue;
  usedLabels.add(label);
  const fx=normalizeTradeoff(option.effect);
  result.push({...option,effect:fx,desc:effectSummary(fx)});
 }
 return result;
}
function shuffleOptions(options){
 const copy=options.slice();
 for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}
 return copy;
}


// 체력 관리: 낮은 체력은 선택의 학습 효율과 하루 중 이벤트에 영향을 줘.
// 순수 UI 요약 함수도 이 값을 사용해 표시와 실제 효과가 어긋나지 않도록 해.
function fatigueTier(hp=state.stats.health){
 const value=Math.max(0,Number(hp)||0);
 return value<=10?3:value<30?2:value<60?1:0;
}
function fatigueEfficiency(hp=state.stats.health){
 return [1,.8,.6,.6][fatigueTier(hp)];
}
function fatigueDailyEvent(){
 if(!state.alive||state.settings?.randomEvents===false||state.stats.health>=30||Math.random()>=.45)return;
 const events=state.age<13?[
  ["🛌 피곤해서 놀이나 공부 계획을 미뤘어.","happiness",-2],
  ["🧩 집중이 잘 안 돼 하던 일을 마무리하지 못했어.","intelligence",-.5],
  ["🍵 컨디션 회복을 위한 돌봄 비용이 들었어.","money",-3]
 ]:[
  ["📉 피로 때문에 중요한 일에 집중하지 못했어.","intelligence",-.5],
  ["📅 몸이 피곤해서 약속을 미루게 됐어.","social",-.5],
  ["💸 컨디션 관리를 위한 비용이 발생했어.","money",-5]
 ];
 const [description,key,penalty]=events[Math.floor(Math.random()*events.length)];
 if(key==="money")state.money=Math.max(0,state.money+penalty);
 else state.stats[key]=limitStat(key,state.stats[key]+penalty);
 const msg="⚠️ 체력 관리 실패: "+description+" ("+(key==="money"?formatWon(penalty):penalty)+")";
 state.log.push(state.age+"살 · "+msg);
 state.latestEvent=msg;
 state.lastOutcome=msg;
}
// 휴식은 체력과 행복을 회복하는 대신 플레이 가능한 하루를 소모해.
function restNow(){
 if(!state.alive||state.pendingTurningPoint||state.pendingStory)return;
 if(state.stats.health>=85)return toast("체력이 충분해서 지금은 휴식이 필요하지 않아!");
 const previous=state.stats.health;
 state.stats.health=limitStat("health",previous+12);
 state.stats.happiness=limitStat("happiness",state.stats.happiness+1);
 adjustHealthRisk(-7);
 const beforeAge=state.age;
 state.log.push(state.age+"살 · 하루 휴식: 체력 +"+(state.stats.health-previous)+", 행복 +1");
 advanceSceneTurn();
 advanceOneDay();
 if(!state.alive){render();save();return;}
 state.lastOutcome="🛏️ 하루를 쉬면서 체력 +"+(state.stats.health-previous)+" · 행복 +1";
 render();save();
 toast(state.age!==beforeAge?"충분히 쉬었어! "+state.age+"살로 성장했어.":"하루 쉬고 체력을 회복했어!");
}

function actualEffect(effect,fillsGrowth=false){
 const slow=state.settings?.slowGrowth!==false;
 const multiplier=fillsGrowth?growthPerChoice():1;
 return effect.map((v,i)=>{
  if(i%2===0)return v;
  const key=effect[i-1];
  if(key==="health"&&v<0)return -1;
  let value=slow?(v>0?Math.max(.2,Math.round(v*.22*10)/10):Math.min(-.2,Math.round(v*.3*10)/10)):v;
  if(v>0&&GROWTH_SKILLS.includes(key)){
   value=Math.max(.1,Math.round(value*fatigueEfficiency()*10)/10);
   value=Math.round(value*multiplier*10)/10;
  }
  return value;
 });
}
function effectSummary(effect,fillsGrowth=false){
 effect=actualEffect(effect,fillsGrowth);
 const parts=[];
 for(let i=0;i<effect.length;i+=2){
  const key=effect[i], value=effect[i+1];
  const name=key==="money"?"돈":(labels[key]||key);
  const sign=value>0?"+":"";
  parts.push(name+" "+sign+(key==="money"?formatWon(value):value));
 }
 return parts.join(" · ");
}

const CAREER_PATHS=[
 {id:"technology",name:"IT·개발",job:"소프트웨어 개발자",emoji:"💻",words:/코딩|컴퓨터|로봇|프로그래밍|게임 제작|앱|기술|과학|실험|개발/,stats:["intelligence","creativity"]},
 {id:"art",name:"디자인·영상",job:"콘텐츠 디자이너",emoji:"🎨",words:/그림|미술|영상|촬영|편집|창작|예술|음악|악기|디자인|포트폴리오|애니/,stats:["creativity","charm"]},
 {id:"health",name:"의료·돌봄",job:"의료·돌봄 전문가",emoji:"🩺",words:/건강|간호|돌봄|치료|응급|의료|병원|운동|체육|산책/,stats:["health","social"]},
 {id:"business",name:"경영·금융",job:"기획·경영 전문가",emoji:"📊",words:/돈|용돈|상점|판매|경제|투자|창업|기획|사업|알바|취업/,stats:["intelligence","social"]},
 {id:"people",name:"교육·소통",job:"교육·상담 전문가",emoji:"🤝",words:/친구|소통|발표|토론|가르|봉사|도와|모임|동아리|대화/,stats:["social","charm"]},
 {id:"research",name:"학문·연구",job:"연구원",emoji:"🔬",words:/공부|독서|책|탐구|수학|과학|연구|시험|문제|퍼즐/,stats:["intelligence","creativity"]}
];
function ensureCareer(){if(!state.careerPoints||typeof state.careerPoints!=="object")state.careerPoints={};if(!Array.isArray(state.recentChoices))state.recentChoices=[];}
function recordCareerChoice(chosen){
 ensureCareer();const label=String(chosen.label||"");let matched=false;
 for(const path of CAREER_PATHS){if(path.words.test(label)){state.careerPoints[path.id]=(state.careerPoints[path.id]||0)+2;matched=true;}}
 if(!matched){const stat=chosen.effect?.[0];for(const path of CAREER_PATHS){if(path.stats[0]===stat)state.careerPoints[path.id]=(state.careerPoints[path.id]||0)+.35;}}
 state.recentChoices.push(label);if(state.recentChoices.length>30)state.recentChoices.shift();
}
function bestCareer(){ensureCareer();return CAREER_PATHS.slice().sort((a,b)=>(state.careerPoints[b.id]||0)-(state.careerPoints[a.id]||0))[0];}
function careerOptions(age){
 const early=[
 ["🖍️ 그림으로 하루 기록하기",["creativity",3,"intelligence",-1]], ["🎵 악기 소리 따라하기",["creativity",3,"health",-1]],
 ["🧩 새로운 퍼즐 도전",["intelligence",3,"happiness",-1]], ["🌿 식물 돌보기",["health",3,"happiness",-1]],
 ["🤲 가족과 역할놀이",["social",3,"intelligence",-1]], ["📚 동화책 이야기하기",["intelligence",3,"health",-1]],
 ["🧸 장난감 고쳐보기",["intelligence",3,"social",-1]], ["🎨 손가락 물감놀이",["creativity",3,"social",-1]],
 ["👟 산책하며 세상 구경",["health",3,"creativity",-1]], ["🥁 리듬 놀이하기",["charm",3,"health",-1]]];
 const student=[
 ["💻 코딩으로 작은 게임 만들기",["intelligence",4,"health",-2]], ["🎬 짧은 영상 촬영·편집",["creativity",4,"health",-2]],
 ["🔬 과학 실험 프로젝트",["intelligence",4,"money",-3]], ["🩺 보건 동아리 활동",["health",4,"happiness",-2]],
 ["📊 학교 축제 예산 기획",["intelligence",4,"social",-2]], ["🎤 친구들 앞에서 발표",["charm",4,"happiness",-2]],
 ["🎨 캐릭터 디자인 연습",["creativity",4,"happiness",-2]], ["🤝 후배 공부 도와주기",["social",4,"health",-2]],
 ["📚 관심 분야 독서 기록",["intelligence",4,"social",-2]], ["🏃 체육대회 연습",["health",4,"intelligence",-2]],
 ["🛍️ 작은 물건 판매해 보기",["money",5,"health",-2]], ["🎸 밴드 동아리 합주",["charm",4,"intelligence",-2]],
 ["📱 앱 화면 디자인하기",["creativity",4,"money",-2]], ["🗣️ 토론 대회 참가",["social",4,"happiness",-2]]];
 const adult=[
 ["💻 개발 프로젝트 맡기",["intelligence",5,"health",-2]], ["🎥 영상 콘텐츠 제작",["creativity",5,"health",-2]],
 ["🩺 건강·돌봄 봉사",["social",5,"money",-2]], ["📈 사업 아이디어 기획",["money",8,"happiness",-2]],
 ["🔬 연구 프로젝트 도전",["intelligence",5,"social",-2]], ["🎓 후배 멘토링",["social",5,"health",-2]],
 ["🎨 작품 전시 준비",["creativity",5,"money",-3]], ["🏃 규칙적인 운동",["health",5,"happiness",-2]],
 ["📖 자격증 공부",["intelligence",5,"happiness",-2]], ["🤝 네트워킹 행사 참여",["charm",5,"money",-3]],
 ["🛒 소규모 온라인 판매",["money",8,"health",-2]], ["🎤 강의 준비하기",["social",5,"happiness",-2]]];
 return age<7?early:age<20?student:adult;
}
function randomDailyEvent(){
 if(state.settings?.randomEvents===false)return;
 if(familyBackgroundEvent())return;
 const age=state.age;let chance=age<3?.13:age<13?.09:.065;
 if(Math.random()>chance)return;
 const pool=age<3?[
 ["🤒 갑자기 감기에 걸렸어. 가족이 돌봐주며 쉬었어.",-3,1],
 ["🍼 배앓이로 잠을 설쳤어. 따뜻하게 쉬었어.",-2,-1],
 ["🌙 낮잠을 푹 자고 기운을 차렸어.",3,1],
 ["🧸 예방접종을 다녀왔어. 잠시 피곤해졌어.",-2,0],
 ["🌼 처음 보는 장난감에 신이 났어.",0,2]]:age<13?[
 ["🤧 감기 기운이 있어 집에서 쉬었어.",-3,1],
 ["🏃 놀이터에서 신나게 뛰어놀았어.",2,1],
 ["📚 재미있는 책을 발견했어.",0,2],
 ["🌧️ 비 때문에 약속이 취소됐어.",0,-2]]:[
 ["🤒 몸살 기운으로 휴식이 필요했어.",-3,0],
 ["☀️ 기분 좋은 하루를 보냈어.",1,2],
 ["💤 잠을 푹 자고 회복했어.",3,1],
 ["📬 반가운 소식을 들었어.",0,2]];
 const [msg,hp,happy]=pool[Math.floor(Math.random()*pool.length)];
 state.stats.health=limitStat("health",state.stats.health+hp);state.stats.happiness=limitStat("happiness",state.stats.happiness+happy);
 state.log.push(state.age+"살 · DAY "+((state.yearDay||0)+1)+" · "+msg);state.latestEvent=msg;
}

// From middle school on, each set of four has exactly one tempting but harmful detour.
const DETOUR_OPTIONS={
 middle:[
  {label:"⚠️ 숙제를 숨기고 안 한 척하기",effect:["happiness",2,"intelligence",-5],desc:"당장은 편하지만 공부 습관과 신뢰가 흔들려."},
  {label:"⚠️ 친구와 한 약속을 몰래 어기기",effect:["happiness",2,"social",-5],desc:"순간은 편해도 친구의 신뢰가 낮아질 수 있어."},
  {label:"⚠️ 준비하지 않고 핑계로 넘어가기",effect:["happiness",3,"charm",-4],desc:"실수를 감추면서 관계가 불편해질 수 있어."},
  {label:"⚠️ 공동 과제에서 책임 미루기",effect:["happiness",2,"social",-4],desc:"내 몫을 피하는 대신 협력의 기회를 잃어."},
  {label:"⚠️ 수업을 대충 듣고 장난으로 넘기기",effect:["charm",2,"intelligence",-5],desc:"그 순간은 신나도 배움의 기회를 놓쳐."}
 ],
 high:[
  {label:"⚠️ 과제를 남에게 떠넘기기",effect:["happiness",3,"social",-5],desc:"잠깐 편해지지만 팀의 신뢰가 떨어져."},
  {label:"⚠️ 중요한 약속에 거짓 핑계 대기",effect:["happiness",2,"charm",-5],desc:"눈앞의 일을 피하지만 평판이 흔들려."},
  {label:"⚠️ 진로 준비를 계속 회피하기",effect:["happiness",3,"intelligence",-5],desc:"잠깐 즐겁지만 앞으로의 선택 폭이 줄어들어."},
  {label:"⚠️ 모임에서 친구를 무시하기",effect:["charm",2,"social",-6],desc:"눈길은 끌지만 우정이 멀어질 수 있어."},
  {label:"⚠️ 팀 프로젝트의 책임 피하기",effect:["happiness",2,"creativity",-5],desc:"부담은 줄지만 좋은 기회를 놓칠 수 있어."}
 ],
 adult:[
  {label:"⚠️ 해야 할 일을 핑계로 미루기",effect:["happiness",3,"intelligence",-5],desc:"오늘은 편하지만 중요한 기회가 멀어져."},
  {label:"⚠️ 약속을 어기고 연락 피하기",effect:["happiness",2,"social",-6],desc:"불편함은 피하지만 관계가 소원해져."},
  {label:"⚠️ 충동적으로 돈을 써버리기",effect:["happiness",3,"money",-10],desc:"지금 즐겁지만 살림에 부담이 생겨."},
  {label:"⚠️ 실수를 감추고 남 탓하기",effect:["charm",2,"social",-5],desc:"체면을 지키려다 신뢰를 잃을 수 있어."},
  {label:"⚠️ 지나친 자만으로 조언 무시하기",effect:["charm",3,"intelligence",-5],desc:"자신감은 생겨도 배움의 기회를 잃어."}
 ]
};
function detourChoice(age){
 const pool=age<16?DETOUR_OPTIONS.middle:age<20?DETOUR_OPTIONS.high:DETOUR_OPTIONS.adult;
 const last=String(state.lastDetour||"");
 const opts=pool.filter(o=>o.label!==last);
 const choice=opts[Math.floor(Math.random()*opts.length)];
 return {...choice,detour:true};
}
function fourLifeChoices(safeOptions,age,allowRecovery=true){
 if(age<13)return uniqueChoiceSet(safeOptions,4);
 // When detours accumulate, a repair option lets the player earn back trust.
 if(allowRecovery&&(Number(state.detourPoints)||0)>=2){
  safeOptions=[{label:"🤝 실수를 인정하고 관계 바로잡기",effect:["social",5,"happiness",-2],desc:"용기 내어 사과하고 다시 신뢰를 쌓아.",recovery:true},...safeOptions];
 }
 const good=uniqueChoiceSet(safeOptions.filter(o=>!o.detour),3);
 const risky=detourChoice(age);
 // If a random card has the same stat tradeoff, drop it and choose a different normal card.
 const sig=choiceSignature(normalizeTradeoff(risky.effect));
 let filtered=good.filter(o=>choiceSignature(o.effect)!==sig);
 if(filtered.length<3){
  for(const alt of uniqueChoiceSet(safeOptions,Math.max(6,safeOptions.length))){
   if(filtered.length>=3)break;
   if(filtered.some(o=>o.label===alt.label)||choiceSignature(alt.effect)===sig||filtered.some(o=>choiceSignature(o.effect)===choiceSignature(alt.effect)))continue;
   filtered.push(alt);
  }
 }
 // Preserve exactly four choices, with exactly one detour.
 return shuffleOptions([...filtered.slice(0,3),{...risky,effect:normalizeTradeoff(risky.effect),desc:risky.desc+" · "+effectSummary(normalizeTradeoff(risky.effect))}]);
}
function handleDetour(chosen,age){
 if(chosen.detour){
  state.detourPoints=Math.max(0,(Number(state.detourPoints)||0)+1);
  state.lastDetour=chosen.label;
  state.log.push("⚠️ "+age+"살 · 흔들리는 선택: "+chosen.label+" · 주변의 신뢰에 영향을 남겼어.");
  if(state.detourPoints===3||state.detourPoints===7){
   state.latestEvent="반복된 잘못된 선택 때문에 주변 사람들과 관계가 멀어졌어. 아직 바로잡을 기회는 있어.";
   state.stats.social=limitStat("social",state.stats.social-2);
   state.stats.happiness=limitStat("happiness",state.stats.happiness-1);
  }
 }else if(chosen.recovery){
  state.detourPoints=Math.max(0,(Number(state.detourPoints)||0)-2);
  state.log.push("🌱 "+age+"살 · 잘못을 인정하고 다시 신뢰를 쌓기 시작했어.");
  state.latestEvent="잘못을 인정하고 다음 선택을 바꾸기로 했어.";
 }
}


// Age-specific everyday scenes with four contextual actions each.
const SCENE_BANK={
 "baby-0":[
  ["새벽에 태빈이가 자꾸 잠에서 깨. 가족은 어떻게 달래 줄까?",[["🍼 수유 시간을 차분히 맞추기","h","j"],["🎵 작은 자장가 불러주기","c","h"],["🤲 피부 접촉으로 안심시키기","s","i"],["🌙 불을 낮추고 잠자리 정돈하기","j","c"]]],
  ["태빈이가 처음으로 소리 나는 장난감을 발견했어.",[["🪇 딸랑이 소리 비교하기","i","h"],["🥁 탁자에 리듬 두드리기","c","j"],["😊 가족 얼굴을 보고 따라 웃기","s","i"],["🧸 촉감이 다른 장난감 만져보기","h","c"]]],
  ["예방접종을 앞둔 날, 태빈이가 낯선 곳을 무서워해.",[["🤱 보호자의 품에서 기다리기","j","i"],["🩺 간호사에게 상태 살펴달라 하기","h","j"],["🎶 익숙한 노래로 진정시키기","c","h"],["🧸 좋아하는 인형을 함께 데려가기","s","c"]]],
  ["햇살이 좋은 오후, 유모차를 끌고 산책할 수 있어.",[["🌳 나무 그림자 구경하기","i","h"],["🐦 새소리를 천천히 들려주기","c","j"],["👋 이웃과 눈 맞추고 인사하기","s","c"],["🍃 조용한 길로 가서 편히 쉬기","h","i"]]],
  ["태빈이가 처음으로 이유식을 먹으려 해.",[["🥄 한 숟갈씩 천천히 시도하기","h","j"],["🍠 다양한 재료 냄새 맡아 보기","i","h"],["😄 가족이 함께 식사 분위기 만들기","s","c"],["🎨 음식의 색깔을 가리켜 보기","c","i"]]],
  ["태빈이가 낯선 소리에 울음을 터뜨렸어.",[["🤲 바로 안아 안정시키기","j","i"],["👂 소리의 방향을 확인하기","i","h"],["🧸 장난감으로 주의를 돌리기","c","s"],["🪟 창문을 닫고 조용하게 하기","h","c"]]],
  ["아침에 태빈이가 손가락으로 무언가를 가리켜.",[["🗣️ 가리킨 물건 이름 알려주기","i","h"],["😊 손짓에 크게 반응해주기","s","i"],["🎵 사물 이름으로 노래 만들기","c","j"],["👣 가까이 가서 직접 만져 보기","h","c"]]],
  ["태빈이가 처음으로 몸을 뒤집으려 하고 있어.",[["🧸 안전한 매트 깔아 주기","h","i"],["👏 작은 성공에 박수 쳐 주기","j","h"],["📷 움직임을 사진으로 남기기","c","j"],["🤝 함께 천천히 움직여 보기","s","c"]]],
  ["구름이 잔뜩 낀 날, 실내에서 지내야 해.",[["🖼️ 그림 카드 여러 장 보기","i","j"],["🎹 건반 장난감 연주하기","c","h"],["😊 거울 속 표정 따라 하기","m","i"],["🧦 따뜻하게 입고 쉬기","h","c"]]],
  ["태빈이가 새 장난감을 만지다가 떨어뜨렸어.",[["🔍 떨어진 위치를 함께 찾기","i","h"],["🔔 떨어지는 소리 관찰하기","c","i"],["🤲 다시 건네며 기다려 주기","s","c"],["🧸 단단한 장난감으로 바꿔 주기","h","j"]]],
  ["어른이 책을 펼치자 태빈이가 그림을 뚫어지게 봐.",[["📖 그림 속 동물 이름 알려주기","i","h"],["🎭 그림 속 표정 흉내 내기","m","i"],["🎨 손가락으로 색깔 짚어 주기","c","j"],["🤗 책을 보며 대화하듯 반응하기","s","c"]]],
  ["태빈이가 조금 열이 나는 듯해 보여.",[["🌡️ 보호자와 상태 살피기","h","j"],["🛌 편하게 쉴 수 있게 하기","j","i"],["🍼 수분을 충분히 챙기기","h","c"],["📞 필요하면 의료진에게 상담하기","i","j"]]],
  ["태빈이가 주변 사람의 웃음소리에 반응해.",[["😄 같은 표정을 따라 해 보기","m","h"],["🤲 손을 잡고 까꿍 놀이하기","s","i"],["🎵 웃음소리로 짧은 노래 만들기","c","j"],["🧸 잠깐 혼자 탐색할 시간 주기","i","s"]]],
  ["목욕 후 태빈이가 신나게 물장구를 쳐.",[["🧴 피부를 잘 닦고 보습하기","h","c"],["🫧 물방울 모양 관찰하기","i","j"],["🎵 물장구 박자에 노래 부르기","c","h"],["🤲 수건으로 감싸 안심시키기","s","i"]]],
  ["태빈이가 창문에 비친 햇살을 손으로 잡으려고 해.",[["빛이 움직이는 쪽 가리키기","i","h"],["손으로 작은 그림자 만들기","c","j"],["태빈이 손을 잡고 같이 흔들기","s","i"],["커튼 너머 풍경 보여주기","m","h"]]],
  ["태빈이가 포대기에서 손을 빼더니 가족의 손가락을 꼭 잡았어.",[["손가락을 하나씩 펴 보기","i","h"],["태빈이의 손동작 따라 하기","s","c"],["작은 손을 종이에 그려 보기","c","i"],["눈을 맞추며 이름 불러주기","m","s"]]]
 ],
 "baby-1":[
  ["첫 걸음을 떼려다 주저앉은 태빈이, 어떻게 도울까?",[["👟 손을 잡고 천천히 연습하기","h","j"],["🎈 눈앞에 풍선을 두고 유도하기","c","h"],["👏 실패해도 응원해 주기","j","i"],["🛋️ 안전한 공간부터 확인하기","i","c"]]],
  ["태빈이가 손을 흔들며 “빠이” 하고 인사했어.",[["같이 손을 흔들어 답하기","s","h"],["인사말로 작은 노래 부르기","c","j"],["손 인사와 고개 인사 보여주기","i","s"],["현관에서 가족에게 인사해 보기","m","c"]]],
  ["태빈이가 빈 통에 나무 블록을 하나씩 넣고 있어.",[["떨어지는 소리 비교하기","i","h"],["블록 넣는 박자에 손뼉 치기","c","j"],["가족과 번갈아 블록 넣기","s","i"],["다 채운 뒤 통을 뒤집어 보기","m","c"]]],
  ["그림책을 읽는데 태빈이가 같은 쪽을 자꾸 다시 펼쳐.",[["태빈이가 가리킨 오리 이름 말하기","i","h"],["오리 소리를 흉내 내기","m","c"],["책장을 스스로 넘기게 기다리기","s","h"],["그림 속 오리에게 인사하기","c","j"]]],
  ["태빈이가 혼자 양손으로 작은 컵을 들었어.",[["두 손으로 잡는 법 보여주기","i","h"],["조금 마신 뒤 같이 손뼉 치기","s","j"],["자주 쓰는 컵 고르게 하기","m","h"],["흘린 물을 마른 천으로 같이 닦기","c","s"]]],
  ["가족이 보여 준 손뼉 놀이를 태빈이가 한 박자 늦게 따라 해.",[["박자를 조금 느리게 바꾸기","i","h"],["다른 박자를 섞어 보기","c","j"],["한 번씩 번갈아 박수 치기","s","i"],["발도 움직여 함께 춤추기","m","c"]]],
  ["태빈이가 소파 쿠션 뒤에 숨은 곰 인형을 찾아냈어.",[["이번엔 다른 쿠션 뒤에 숨기기","i","h"],["곰이 깨어나는 소리 내기","m","s"],["태빈이가 곰을 숨기도록 기다리기","s","j"],["쿠션을 곰의 침대로 꾸미기","c","i"]]],
  ["태빈이가 집 안에서 가족 발소리를 듣고 현관을 바라봐.",[["누구의 발소리인지 따라 말하기","i","h"],["현관까지 같이 마중 가기","s","i"],["발소리를 손뼉으로 흉내 내기","c","j"],["돌아온 가족에게 인사하기","m","c"]]],
  ["태빈이가 상자를 열었다 닫았다 하며 뚜껑을 연구해.",[["가벼운 뚜껑끼리 비교하기","i","h"],["상자 안에 인형을 앉혀 보기","c","j"],["뚜껑 닫을 때 기다려 주기","s","i"],["열 때마다 놀란 표정 짓기","m","c"]]],
  ["낮잠을 마친 태빈이가 담요를 끌고 가족 옆에 앉았어.",[["담요를 다같이 덮어 보기","s","h"],["담요 무늬 따라 손가락 움직이기","i","h"],["담요를 작은 텐트처럼 펼치기","c","j"],["낮잠에서 깨는 인형 흉내 내기","m","c"]]],
  ["유모차에서 내린 태빈이가 난간을 잡고 옆으로 걸어 봐.",[["한 걸음씩 옆에서 걷기","s","h"],["발을 옮기는 방향 가리키기","i","h"],["한 걸음마다 짧은 소리 내기","c","j"],["도착했을 때 함께 손뼉 치기","m","s"]]],
  ["태빈이가 처음 신는 장화에 한쪽 발을 넣고 빼기를 반복해.",[["장화 두 짝을 나란히 놓기","i","h"],["태빈이가 혼자 해 볼 때까지 기다리기","s","i"],["발소리를 쿵쿵 따라 하기","m","c"],["현관 밖 빗소리와 발소리 비교하기","c","j"]]],
  ["태빈이가 거실에 떨어진 가족 사진을 들고 얼굴을 짚어.",[["사진 속 식구의 이름 알려주기","i","h"],["사진과 같은 표정 지어 보기","m","c"],["사진 속 사람에게 같이 인사하기","s","i"],["앨범에 사진을 다시 꽂아 보기","c","j"]]],
  ["목욕이 끝났는데 태빈이가 거품 모자를 다시 만들어 달라고 해.",[["거품 모자 모양을 바꿔 보기","c","i"],["손바닥으로 거품을 보여주기","i","h"],["같은 모자를 쓴 척 인사하기","m","s"],["수건을 어깨에 두르고 마무리하기","s","h"]]],
  ["태빈이가 가족이 가리킨 방향을 보다가 멀리 지나가는 버스를 찾았어.",[["버스가 움직이는 방향 따라 보기","i","h"],["버스에게 손 흔들어 주기","s","i"],["바퀴 소리를 흉내 내기","m","c"],["버스 색깔로 짧은 노래 부르기","c","j"]]],
  ["태빈이가 간식 그릇을 가리키며 한 접시 더 달라고 표현해.",[["태빈이가 원하는 것 확인하기","i","h"],["손짓과 말로 함께 답하기","s","i"],["다 먹은 그릇을 책상에 포개기","c","j"],["맛있다는 표정 따라 해 보기","m","c"]]]
 ],
 "baby-2":[
  ["태빈이가 산책길의 웅덩이를 보고 어느 쪽으로 건널지 살펴봐.",[["마른 길을 지도처럼 짚어 보기","i","h"],["장화를 신고 가족 손 잡고 지나가기","s","i"],["물에 비친 하늘을 그림으로 기억하기","c","j"],["웅덩이 가장자리에서 개구리 흉내 내기","m","c"]]],
  ["태빈이가 “내가 할래”라며 외투를 뒤집어 들었어.",[["소매 끝을 찾아보기","i","h"],["도움이 필요한지 먼저 물어보기","s","i"],["외투 안팎의 무늬를 비교하기","c","h"],["다 입은 외투를 가족에게 보여주기","m","s"]]],
  ["놀이터에서 또래 아이가 태빈이 옆에 양동이를 내려놨어.",[["모래를 한 삽씩 나누어 담기","s","h"],["두 양동이의 크기를 비교하기","i","j"],["모래에 작은 돌을 줄지어 놓기","c","i"],["손을 흔들며 즐겁게 인사하기","m","s"]]],
  ["태빈이가 크레파스로 그린 동그라미를 보고 “달”이라고 불러.",[["밤에 본 달 모양과 비교하기","i","h"],["옆에 작은 별 더 그리기","c","i"],["가족에게 달 그림을 보여주기","s","j"],["달이 말하는 목소리 흉내 내기","m","c"]]],
  ["동네 가게에서 태빈이가 귤을 작은 바구니에 직접 담고 싶어 해.",[["귤을 두 개씩 세어 담기","i","h"],["가게 주인에게 인사하기","s","i"],["귤 크기 순서대로 늘어놓기","c","j"],["장바구니 손잡이를 가족과 같이 들기","m","s"]]],
  ["태빈이가 세 칸짜리 상자에 장난감의 자리를 정하고 있어.",[["모양에 따라 자리를 나누기","i","h"],["장난감이 잘 보이도록 배치하기","c","i"],["가족과 각자 한 칸씩 정리하기","s","h"],["장난감에 잘 자라고 인사하기","m","c"]]],
  ["태빈이가 벽에 붙은 키 표시를 보며 자기 키를 재 보자고 해.",[["발뒤꿈치를 붙이고 곧게 서 보기","i","h"],["가족과 서로 키를 표시해 주기","s","j"],["오늘 높이에 색깔 점 그리기","c","i"],["신발을 벗기 전후를 비교해 보기","m","i"]]],
  ["그림책 속 강아지가 길을 잃었대. 태빈이가 다음 쪽을 직접 이야기해.",[["그림에서 강아지 발자국 찾기","i","h"],["강아지가 집에 가는 장면 꾸미기","c","i"],["가족과 역할을 나눠 읽기","s","j"],["강아지 목소리로 길 묻기","m","c"]]],
  ["태빈이가 의자 아래에 천을 걸고 자기만의 방을 만들었어.",[["작은 방에 물건 놓을 자리 고르기","i","h"],["천을 접어 문처럼 열리게 하기","c","i"],["가족 한 명을 방에 초대하기","s","j"],["방 주인처럼 방문객 맞이하기","m","c"]]],
  ["공원에 낙엽이 많이 떨어졌어. 태빈이는 가장 큰 잎을 찾아보기로 했어.",[["잎을 나란히 놓고 크기 비교하기","i","h"],["모은 잎으로 큰 물고기 만들기","c","i"],["가족에게 자기 잎 한 장씩 나누기","s","j"],["낙엽 밟을 때 나는 소리 따라 하기","m","c"]]],
  ["태빈이가 우유를 조금 흘렸어. 작은 행주를 가져와 가족을 불러.",[["물이 더 번지기 전 닦는 순서 정하기","i","h"],["행주를 양쪽에서 잡고 같이 닦기","s","i"],["물 자국이 닮은 모양 찾아보기","c","j"],["다 닦은 뒤 서로 손뼉 치기","m","s"]]],
  ["동네 고양이가 벤치 아래에서 쉬고 있어. 태빈이가 잠시 걸음을 멈췄어.",[["조용히 앉아 귀 움직임 지켜보기","i","h"],["멀리서 가족과 고양이 이야기하기","s","i"],["집에 돌아가 고양이 그림 그리기","c","j"],["사뿐사뿐 걷는 발걸음 흉내 내기","m","c"]]],
  ["태빈이와 가족이 현관에서 오늘 신을 신발을 고르고 있어.",[["날씨를 보고 맞는 신발 찾기","i","h"],["양말과 신발에 같은 색 찾기","c","i"],["가족 신발도 옆에 챙겨 두기","s","j"],["같은 속도로 조금씩 걸어 보기","m","h"]]],
  ["태빈이가 두 조각으로 갈라진 바나나를 보고 간식을 나누려 해.",[["어느 조각이 큰지 비교하기","i","h"],["먼저 가족에게 조각을 골라 달라고 하기","s","i"],["접시에 조각을 초승달 모양으로 놓기","c","j"],["나눠 먹으니 어떤지 말해 보기","m","s"]]],
  ["비가 그친 뒤 태빈이가 창가에 남은 물방울을 세기 시작했어.",[["움직이는 물방울부터 세어 보기","i","h"],["큰 물방울과 작은 물방울 그림 그리기","c","i"],["가족에게 어느 물방울인지 알려주기","s","j"],["물방울이 만날 때 나는 소리 상상하기","m","c"]]],
  ["태빈이가 등 뒤에 천을 두르고 가족에게 거실 공연을 보여 주겠대.",[["공연 시작 신호 정하기","i","h"],["천 색에 맞춰 동작 만들기","c","i"],["가족에게 박수를 부탁하기","s","j"],["끝나고 무대 인사하기","m","s"]]]
 ],
 "child":[["유치원에서 색종이로 무엇이든 만들 수 있어.",[["✂️ 종이 동물 접기","c","h"],["🧩 접는 순서 기억해 보기","i","j"],["🤝 친구와 큰 작품 합치기","s","i"],["🎤 완성한 작품 소개하기","m","c"]]],["놀이터 미끄럼틀에 친구들이 줄을 서 있어.",[["🤲 차례 지켜서 기다리기","s","j"],["🛝 새 놀이기구 도전하기","h","i"],["🗣️ 친구와 놀이 규칙 정하기","i","h"],["😄 순서를 양보하고 응원하기","m","c"]]],["가족이 주말에 어디로 갈지 물어봐.",[["🏞️ 숲에서 자연 관찰하기","h","i"],["🏛️ 어린이 박물관 가기","i","j"],["🎭 인형극 구경하기","c","h"],["🍪 집에서 간식 만들기","j","c"]]],["아침에 양말 한 짝이 사라졌어.",[["🔍 방을 차근차근 뒤지기","i","j"],["🧺 옷 정리하며 찾기","h","c"],["😂 가족과 양말 탐정 놀이하기","m","i"],["🤝 도움 요청해 함께 찾기","s","h"]]],["하린이 혼자 모래성을 쌓고 있어.",[["🏰 함께 성을 확장하기","s","h"],["🎨 성 주위에 무늬 그리기","c","i"],["🧩 무너지지 않는 방법 고민하기","i","j"],["😊 칭찬하고 도구 빌려주기","m","c"]]],["비가 와서 실외 수업이 취소됐어.",[["🎲 보드게임 규칙 배우기","i","j"],["🎵 친구들과 동요 만들기","c","h"],["🧘 조용한 독서 시간 갖기","j","s"],["🤲 교실 정리 돕기","s","i"]]],["처음으로 혼자 옷을 입어 보려고 해.",[["👕 천천히 단추 잠가 보기","i","h"],["👟 신발 끈 묶는 법 연습","h","j"],["🎨 오늘 입을 색깔 직접 고르기","c","i"],["👏 친구에게 방법 설명하기","m","c"]]],["생일 파티에서 친구가 선물을 두고 왔다고 해.",[["😊 괜찮다고 말해 주기","s","i"],["🎤 함께 축하 노래 부르기","m","h"],["🎨 손편지 같이 만들어 보기","c","j"],["🍰 케이크를 나누어 먹기","j","c"]]],["선생님이 작은 화분을 한 개씩 나눠 줬어.",[["🌱 물 주는 날짜 기록하기","i","h"],["🌞 햇빛 드는 자리에 옮기기","h","j"],["🎨 화분에 그림 그리기","c","i"],["🤝 친구 화분도 함께 돌보기","s","c"]]],["동화 속 주인공이 길을 잃었어. 결말을 골라 봐.",[["🧭 지도를 그려 탈출시키기","i","h"],["🦊 새로운 동물 친구 만들기","c","j"],["💬 주인공의 마음 이야기하기","s","i"],["🎭 동화를 연극으로 바꿔 보기","m","c"]]],["옆 반 친구와 처음 인사를 나눌 기회야.",[["👋 먼저 이름 소개하기","m","h"],["🎲 같이 게임하자고 제안하기","s","i"],["🧩 좋아하는 장난감 물어보기","i","j"],["🎨 서로의 얼굴 그려 주기","c","h"]]],["장난감 로봇이 움직이지 않아.",[["🔧 건전지 상태 살펴보기","i","j"],["🎨 로봇에게 새 모습 그려주기","c","i"],["🤲 어른에게 안전하게 부탁하기","s","h"],["😊 다른 놀이로 전환해 보기","j","c"]]],["친구 두 명이 같은 블록을 쓰고 싶어 해.",[["🤝 번갈아 쓰자고 조율하기","s","j"],["⏳ 모래시계로 시간 정하기","i","h"],["🏗️ 블록을 나눠 다른 작품 만들기","c","i"],["🎤 서로의 생각을 발표시키기","m","c"]]],["운동회에서 단체 경기가 시작돼.",[["🏃 달리기 연습으로 준비하기","h","i"],["🤝 뒤처진 친구 응원하기","s","h"],["📣 응원 구호 직접 만들기","c","j"],["🎤 응원단 앞에 서 보기","m","i"]]],["방에서 이상한 그림자가 보였어.",[["🔦 빛이 어디서 오는지 확인","i","j"],["🎨 그림자를 동물로 표현하기","c","i"],["🤲 가족에게 함께 봐 달라 하기","s","h"],["🛌 무서우면 밝게 하고 쉬기","j","c"]]],["친구가 네가 만든 그림을 칭찬해 줬어.",[["🖌️ 새 작품 하나 더 그리기","c","h"],["😊 친구 그림도 칭찬하기","s","i"],["🔍 왜 좋았는지 물어보기","i","j"],["🎤 작은 전시회 열어 보기","m","c"]]]],
 "primary":[["학급에서 새로운 프로젝트 주제를 정하는 날이야.",[["💻 간단한 코딩 게임 제안하기","i","h"],["🎨 교실 벽화 프로젝트 제안","c","j"],["🤝 학교 주변 청소 행사 제안","s","i"],["🎤 주제 투표를 직접 진행","m","h"]]],["체육시간, 팀마다 작전이 달라 갈등이 생겨.",[["🏃 연습 시간을 더 갖자고 하기","h","i"],["💬 서로 전략을 들어 보기","s","h"],["📋 승리 확률 계산해 보기","i","j"],["📣 팀 사기를 높이는 응원 구호","m","c"]]],["시험에서 예상보다 점수가 낮게 나왔어.",[["📚 오답 노트 만들기","i","j"],["🤝 선생님께 설명 부탁하기","s","h"],["🎨 개념을 그림으로 정리하기","c","i"],["🌳 산책하고 다시 계획 세우기","h","c"]]],["하린이 과학 발표 준비에 막혀 있어.",[["🔬 실험 방법 함께 찾아보기","i","h"],["🎬 실험 영상을 만들어 주기","c","j"],["🤝 발표 대본 같이 읽어주기","s","i"],["🎤 무대 리허설 도와주기","m","h"]]],["등굣길에 쓰레기가 널려 있는 걸 봤어.",[["🌱 혼자 쓰레기 줍기","h","j"],["📢 친구들에게 정화 활동 제안","m","i"],["📊 쓰레기 종류를 조사하기","i","h"],["🎨 환경 포스터 만들기","c","i"]]],["학교 도서관에서 새 책 코너를 꾸며 달래.",[["📚 책을 장르별로 분류하기","i","j"],["🎨 손글씨 추천 카드 만들기","c","h"],["🤝 친구들과 역할 나누기","s","i"],["🎤 책 소개 방송 진행하기","m","c"]]],["친구와 좋아하는 게임 장르가 달라.",[["🎮 서로 게임을 번갈아 해 보기","s","j"],["🧠 게임 규칙 비교해 보기","i","h"],["🎨 둘만의 게임 아이디어 그리기","c","i"],["🎤 좋아하는 이유 발표하기","m","c"]]],["비 오는 점심시간에 급식 줄이 길어졌어.",[["😊 차분히 기다리며 이야기하기","s","i"],["📖 책 읽으며 기다리기","i","h"],["🎭 친구들에게 재미있는 퀴즈 내기","m","j"],["☔ 우산 정리 도와주기","h","c"]]],["학교 축제에서 한 가지 역할을 선택해야 해.",[["🎬 공연 영상 촬영하기","c","h"],["📊 행사 비용 정리하기","i","j"],["🤝 방문객 길 안내하기","s","i"],["🎤 무대 사회 맡기","m","c"]]],["방과 후 친구들이 서로 다른 놀이를 제안해.",[["⚽ 운동장에서 축구하기","h","i"],["🎨 만화 캐릭터 그리기","c","j"],["🧩 전략 보드게임 하기","i","h"],["💬 친구들 의견 합쳐 새 놀이 만들기","s","c"]]],["동네 작은 가게에서 하루 체험을 모집해.",[["💰 물건 정리와 계산 배우기","w","j"],["🎨 진열대 디자인 도와주기","c","i"],["🤝 손님 인사 연습하기","s","h"],["📊 어떤 물건이 인기인지 조사","i","c"]]],["학급 단톡방에서 오해가 생겼어.",[["💬 당사자에게 차분히 물어보기","s","j"],["📝 사실관계 정리하기","i","h"],["🎨 상황을 만화로 풀어 보기","c","i"],["🤝 서로 직접 만나 얘기하도록 돕기","m","c"]]],["과학의 날에 발명품을 만들어야 해.",[["🔧 간단한 장치 조립하기","i","h"],["🎨 사용하기 편한 겉모습 디자인","c","j"],["🤝 팀원 의견을 모으기","s","i"],["🎤 발명품을 소개하기","m","c"]]],["선생님이 토론 주제를 하나 정해 보래.",[["🔬 과학 뉴스 분석하기","i","j"],["🌱 환경 보호 토론 준비","s","h"],["🎥 미디어의 영향 이야기하기","c","i"],["🎤 진행자 역할 맡기","m","c"]]],["친구가 운동회 때 넘어져 기분이 가라앉았어.",[["🤝 옆에서 위로하기","s","j"],["🏃 함께 가볍게 연습하기","h","i"],["📸 재미있는 단체 사진 찍기","c","h"],["🎤 친구의 좋은 점 말해 주기","m","c"]]],["학급 신문 첫 호를 제작하게 됐어.",[["📰 기사 자료 조사하기","i","j"],["🎨 표지와 삽화 그리기","c","h"],["🤝 인터뷰 대상 섭외하기","s","i"],["🎤 신문 발표 맡기","m","c"]]]],
 "middle":[["중학교 첫 조별 과제에서 역할을 나누는 중이야.",[["💻 자료 조사 프로그램 만들기","i","h"],["🎨 발표 자료 디자인 맡기","c","j"],["🤝 팀원 역할 정리하기","s","i"],["⚠️ 내 몫을 친구에게 떠넘기기","j","s"]]],["하린이 다른 친구와 다툰 뒤 속상해해.",[["💬 먼저 둘의 이야기를 듣기","s","h"],["📋 오해를 정리해 전달하기","i","j"],["🎬 함께 추억 영상 만들기","c","i"],["⚠️ 소문을 부풀려 관심받기","m","s"]]],["수학 시험이 다음 주인데 친구가 놀자고 해.",[["📚 중요한 공식만 복습하기","i","j"],["🤝 같이 공부하는 모임 만들기","s","h"],["🏃 잠깐 운동 후 공부하기","h","i"],["⚠️ 준비 없이 벼락치기만 믿기","j","i"]]],["동아리 신입생 모집 포스터가 필요해.",[["🎨 포스터 직접 디자인하기","c","j"],["💻 온라인 신청 페이지 만들기","i","h"],["🎤 복도에서 동아리 홍보하기","m","i"],["⚠️ 다른 동아리 포스터 훼손하기","j","s"]]],["반장 선거에서 공약을 발표하래.",[["📋 실현 가능한 공약 조사하기","i","j"],["🤝 친구들의 요청 먼저 듣기","s","h"],["🎬 영상으로 공약 설명하기","c","i"],["⚠️ 지키지 못할 약속 남발하기","m","s"]]],["학교 체육대회 연습 시간이 부족해.",[["🏃 점심시간에 짧게 연습하기","h","i"],["🎤 응원 구호를 준비하기","m","j"],["🤝 체력이 약한 친구에게 역할 나누기","s","c"],["⚠️ 연습 안 하고 친구 탓하기","j","s"]]],["집에서 용돈 사용 내역을 물어봐.",[["💰 사용한 돈을 기록하기","w","j"],["📊 필요한 지출과 취미 지출 나누기","i","h"],["🤝 가족과 다음 달 예산 의논","s","i"],["⚠️ 지출을 숨기고 거짓말하기","j","m"]]],["미디어 수업에서 한 편의 영상을 제작해야 해.",[["🎥 촬영과 편집 맡기","c","h"],["💻 영상 자막 자동화 도전","i","j"],["🤝 친구들의 경험을 인터뷰","s","i"],["⚠️ 남의 작품을 내 것처럼 제출","j","s"]]],["하린과 약속한 날에 다른 모임도 생겼어.",[["📆 시간을 조정해 둘 다 챙기기","i","h"],["💬 하린에게 솔직히 사정 설명하기","s","j"],["🎨 짧은 손편지로 마음 전하기","c","i"],["⚠️ 연락 끊고 모임만 가기","j","s"]]],["진로 체험 부스에서 선택할 시간이 짧아.",[["🔬 과학·연구 부스 먼저 방문","i","j"],["🎨 디자인·콘텐츠 체험하기","c","h"],["🤝 상담·교육 부스 체험하기","s","i"],["⚠️ 귀찮다며 부스를 모두 건너뛰기","j","i"]]],["도서관 독서 모임에서 의견이 갈렸어.",[["📚 근거가 있는 문장 찾아오기","i","h"],["💬 서로 차례대로 말하게 하기","s","j"],["🎭 작품의 다른 결말 상상하기","c","i"],["⚠️ 반대 의견을 비웃기","m","s"]]],["봉사활동 장소에서 예상보다 일이 많아.",[["🧹 맡은 구역부터 차근히 하기","h","i"],["🤝 다른 친구와 일을 나누기","s","j"],["📋 작업 순서를 계획하기","i","h"],["⚠️ 출석만 하고 몰래 빠져나가기","j","s"]]],["선생님이 과학 실험의 결과가 이상하다고 해.",[["🔬 조건을 바꿔 재실험하기","i","j"],["🎬 실패 과정도 영상으로 남기기","c","h"],["🤝 팀원과 원인 분석하기","s","i"],["⚠️ 결과 숫자를 적당히 고쳐 제출","j","s"]]],["친구가 내 SNS 글을 잘못 이해했어.",[["💬 직접 만나 설명하기","s","h"],["📝 오해를 살 표현 수정하기","i","j"],["🎨 취지를 짧은 만화로 정리","c","i"],["⚠️ 악성 댓글로 되받아치기","m","s"]]],["학급에서 작은 기부행사를 열려고 해.",[["🎨 안내 포스터 제작하기","c","h"],["📊 예산과 물품 목록 정리","i","j"],["🤝 동네 가게에 협조 부탁","s","i"],["⚠️ 모금 내역을 대충 숨기기","j","s"]]],["고등학교 진학 상담 전에 적성을 돌아봐.",[["💻 개발·기술 체험 기록 정리","i","h"],["🎥 영상·디자인 작품 모아보기","c","j"],["🤝 멘토에게 다양한 길 질문","s","i"],["⚠️ 불안하다며 상담 약속 피하기","j","i"]]]],
 "high":[["고등학교 첫 모둠 프로젝트를 시작해.",[["💻 기능 시제품 직접 만들기","i","h"],["🎬 결과물을 소개할 영상 제작","c","j"],["🤝 팀원 역할표 만들기","s","i"],["⚠️ 내 일을 남에게 떠넘기기","j","s"]]],["하린이 진로 때문에 고민을 털어놨어.",[["💬 걱정부터 충분히 들어 주기","s","h"],["📚 진학 자료 같이 찾아주기","i","j"],["🎨 서로 미래 모습 그려 보기","c","i"],["⚠️ 대수롭지 않게 무시하기","j","s"]]],["실기 과제 마감이 다가오는데 결과가 마음에 안 들어.",[["🎨 구성을 바꿔 다시 제작하기","c","h"],["📋 요구 사항부터 점검하기","i","j"],["🤝 선생님에게 피드백 요청","s","i"],["⚠️ 남의 결과물을 베껴 마무리하기","j","s"]]],["학교 축제 방송부에서 갑자기 카메라가 멈췄어.",[["🔧 연결 상태 점검하기","i","h"],["🎥 스마트폰 예비 촬영 진행","c","j"],["🤝 다른 스태프와 대응 나누기","s","i"],["⚠️ 실수를 숨기고 남 탓하기","j","s"]]],["모의 면접을 보는데 자기소개가 막혔어.",[["🎤 다시 천천히 말하기","m","h"],["📋 질문별 요점을 정리하기","i","j"],["🎬 영상을 찍어 스스로 점검하기","c","i"],["⚠️ 말문 막힌 이유를 면접관 탓하기","j","s"]]],["친구들이 온라인 콘텐츠 채널을 같이 만들자고 해.",[["🎬 기획·촬영 도맡아 보기","c","h"],["📈 조회수 분석표 만들기","i","j"],["🤝 댓글 소통 담당하기","s","i"],["⚠️ 출처 없는 영상 무단으로 올리기","j","s"]]],["전공 수업과 일반 교과 공부 시간이 겹쳐.",[["📅 일주일 시간표 설계하기","i","j"],["🎨 전공 과제부터 집중하기","c","h"],["🤝 친구와 스터디 분담하기","s","i"],["⚠️ 수행평가를 모른 척 미루기","j","i"]]],["알바 첫날, 주문이 몰려 정신이 없어.",[["🧾 주문 순서를 메모하기","i","h"],["🤝 동료에게 도움 요청하기","s","j"],["😊 손님에게 상황 설명하기","m","i"],["⚠️ 실수를 숨기고 주문 넘기기","j","s"]]],["졸업 작품 주제를 정해야 해.",[["💻 생활 편의 앱 만들기","i","h"],["🎨 단편 애니메이션 제작","c","j"],["🤝 지역 문제 해결 캠페인 기획","s","i"],["⚠️ 남의 아이디어를 그대로 가져오기","j","s"]]],["시험 기간에 갑자기 감기가 찾아왔어.",[["🛌 컨디션 회복부터 챙기기","h","i"],["📚 짧게 핵심만 복습하기","i","j"],["🤝 빠진 수업 자료 요청하기","s","h"],["⚠️ 아프다는 핑계로 준비 전부 포기","j","i"]]],["친구가 익명 계정에서 괴롭힘을 당하고 있어.",[["🤝 친구를 지지하고 돕기","s","h"],["📋 학교에 상황 상담하기","i","j"],["🎨 건강한 온라인 문화 콘텐츠 만들기","c","i"],["⚠️ 같이 놀림에 가담하기","m","s"]]],["직업 체험 행사에서 현직자를 만났어.",[["💻 개발자에게 실무 과정 질문","i","h"],["🎬 PD에게 영상 제작 과정 질문","c","j"],["🤝 교육·상담사에게 하루 일과 질문","s","i"],["⚠️ 질문도 없이 대충 참여 인증하기","j","i"]]],["가족이 진로 선택에 대해 다른 의견을 내.",[["💬 서로 원하는 점 이야기하기","s","h"],["📋 진학·취업 정보 비교하기","i","j"],["🎨 포트폴리오로 강점 보여주기","c","i"],["⚠️ 대화 거부하고 연락 피하기","j","s"]]],["모의 창업 대회에서 제품 가격을 정해야 해.",[["📊 원가와 수요 계산하기","i","j"],["🎨 제품 패키지 디자인하기","c","h"],["🤝 고객 설문 인터뷰 진행","s","i"],["⚠️ 제품 단점을 감춰서 홍보하기","m","s"]]],["취업 준비 중 첫 탈락 소식을 들었어.",[["📋 부족한 항목 점검하기","i","j"],["🎨 포트폴리오 보완하기","c","h"],["🤝 면접 경험을 친구와 나누기","s","i"],["⚠️ 포기한 척 주변에 화풀이하기","j","s"]]],["졸업 앨범에 남길 한 장면을 정해.",[["📸 동아리 단체사진 촬영","c","h"],["📚 선생님께 감사 편지 쓰기","i","j"],["🤝 하린과 추억 장소 찾아가기","s","i"],["⚠️ 마지막까지 친구 약속 무시하기","j","s"]]]],
 "young":[["독립한 첫 집, 생활비가 예상보다 많이 나와.",[["💰 지출 내역 기록하며 예산 짜기","w","j"],["📚 계약서와 공과금 공부하기","i","h"],["🤝 경험 많은 친구에게 조언받기","s","i"],["⚠️ 청구서를 보지 않고 방치하기","j","w"]]],["첫 직장 또는 학교에서 새로운 동료와 팀을 꾸려.",[["💬 먼저 업무 방식 물어보기","s","h"],["📋 일정표와 기준 정리하기","i","j"],["🎨 새로운 방식의 자료 만들기","c","i"],["⚠️ 본인 실수를 새 동료에게 돌리기","j","s"]]],["하린이 오랜만에 만나자고 연락했어.",[["☕ 시간을 내어 깊게 대화하기","s","h"],["🎨 함께 사진 전시회 가기","c","j"],["📅 다음 모임 계획 세우기","i","h"],["⚠️ 바쁘다며 약속을 반복해서 깨기","j","s"]]],["새로운 분야로 진로를 넓힐 기회가 생겼어.",[["💻 온라인 코딩 강의 도전","i","h"],["🎬 영상 제작 실습 시작","c","j"],["🤝 현직자 모임 참석","s","i"],["⚠️ 당장 어렵다며 모든 제안 무시","j","i"]]],["친구와 작은 온라인 가게를 열기로 해.",[["📊 제품 원가 계산하기","w","j"],["🎨 판매 페이지 디자인하기","c","h"],["🤝 고객 의견 직접 모으기","s","i"],["⚠️ 품질 문제를 알면서도 숨기기","j","s"]]],["이력서에 쓸 경험이 부족한 것 같아.",[["📚 자격증 한 과목 공부하기","i","j"],["🎬 포트폴리오 프로젝트 시작","c","h"],["🤝 봉사·멘토링 경험 쌓기","s","i"],["⚠️ 하지 않은 활동을 경력에 쓰기","j","s"]]],["월급이 들어왔는데 사고 싶은 물건이 많아.",[["🏦 비상금부터 따로 모으기","w","j"],["📊 목표별 저축 계획 만들기","i","h"],["🎨 저렴한 취미활동 찾아보기","c","i"],["⚠️ 필요 없는 물건을 충동구매하기","j","w"]]],["팀 발표 전날 주요 파일에 문제가 생겼어.",[["💻 이전 버전 복구 시도하기","i","h"],["🎨 중요한 그림만 다시 만들기","c","j"],["🤝 팀에 상황 알리고 역할 나누기","s","i"],["⚠️ 문제를 숨기고 발표 당일 넘기기","j","s"]]],["주말에 무료 강연과 지역 봉사가 겹쳐.",[["📚 관심 분야 강연 참여","i","j"],["🤝 지역 봉사 약속 지키기","s","h"],["🎬 강연 내용을 영상으로 정리","c","i"],["⚠️ 둘 다 신청만 하고 불참하기","j","s"]]],["새로운 사람과 협업하다 의견이 엇갈렸어.",[["💬 각자의 우선순위 듣기","s","h"],["📋 비교표로 선택 기준 만들기","i","j"],["🎨 시안 두 개를 만들어 비교","c","i"],["⚠️ 남의 의견을 비웃고 밀어붙이기","m","s"]]],["헬스장에서 컨디션이 평소보다 좋지 않아.",[["🧘 무리하지 않고 쉬기","h","i"],["📚 회복에 관한 정보 찾아보기","i","j"],["🤝 전문가에게 운동 강도 상담","s","h"],["⚠️ 쉬어야 할 몸 상태를 무시하기","j","h"]]],["첫 성과 발표에서 좋은 평가를 받았어.",[["🎤 동료와 성과 나눠 발표","m","h"],["📊 다음 목표를 데이터로 설정","i","j"],["🎨 경험을 콘텐츠로 정리하기","c","i"],["⚠️ 남의 공로까지 혼자 차지하기","j","s"]]],["해외 여행을 계획하면서 예산이 빠듯해.",[["💰 교통비 아끼는 일정 계획","w","j"],["📚 현지 문화 미리 조사하기","i","h"],["🎥 여행 기록 영상을 기획","c","i"],["⚠️ 비용 생각 없이 예약부터 하기","j","w"]]],["이웃이 작은 지역 행사를 준비 중이야.",[["🤝 행사 진행 자원봉사하기","s","h"],["🎨 행사 홍보물 제작하기","c","j"],["📊 후원금 계획 검토해 주기","i","h"],["⚠️ 도움 약속만 하고 연락 피하기","j","s"]]],["취업 면접과 개인 프로젝트 일정이 겹쳤어.",[["📅 중요도를 따져 일정 조정하기","i","j"],["🎬 프로젝트 작업을 효율화하기","c","h"],["🤝 팀원에게 역할 조정 요청","s","i"],["⚠️ 약속을 둘 다 숨긴 채 미루기","j","s"]]],["오래된 노트에서 어릴 적 꿈을 발견했어.",[["📖 지금까지 배운 것 돌아보기","i","h"],["🎨 꿈을 주제로 작품 제작하기","c","j"],["🤝 하린과 옛 기억 이야기하기","s","i"],["⚠️ 과거를 부끄러워하며 기록 버리기","j","s"]]]],
 "adult":[["진행하던 프로젝트에서 예상 못 한 문제가 생겼어.",[["💻 원인을 하나씩 분석하기","i","h"],["🎨 다른 해결책 시안 만들기","c","j"],["🤝 팀 회의를 열어 공유하기","s","i"],["⚠️ 책임을 피하며 문제 숨기기","j","s"]]],["직장 동료가 새로운 역할을 제안해 왔어.",[["📚 관련 기술 배우기","i","j"],["🎬 발표 자료 새롭게 제작","c","h"],["🤝 필요한 지원을 협의하기","s","i"],["⚠️ 아무 준비 없이 성과만 약속하기","m","s"]]],["한동안 연락이 뜸했던 가족에게서 전화가 와.",[["☎️ 시간을 내어 안부 듣기","s","h"],["📅 다음 방문 날짜 정하기","i","j"],["📸 가족 사진을 정리해 보내기","c","i"],["⚠️ 귀찮다며 연락을 무시하기","j","s"]]],["작은 사업 아이디어가 떠올랐어.",[["📊 초기 비용과 수요 조사","i","j"],["🎨 시제품 디자인하기","c","h"],["🤝 잠재 고객 인터뷰하기","s","i"],["⚠️ 허황된 수익을 약속해 홍보하기","m","s"]]],["하린과 함께 가기로 한 전시가 취소됐어.",[["🤝 다른 만남 장소 찾기","s","h"],["🎨 직접 작은 전시 기획하기","c","j"],["📋 새로운 일정 미리 정하기","i","h"],["⚠️ 취소 소식을 알리지 않고 잠수하기","j","s"]]],["건강검진 결과 생활 습관을 돌아보게 됐어.",[["🥗 균형 잡힌 식사 챙기기","h","j"],["📚 건강 정보 확인하기","i","h"],["🤝 가족과 산책 약속 잡기","s","i"],["⚠️ 결과를 아예 무시하기","j","h"]]],["동네에서 작은 축제를 함께 열자고 해.",[["🎥 지역 홍보 영상 만들기","c","h"],["📊 예산·일정표 정리하기","i","j"],["🤝 주민 의견을 모으기","s","i"],["⚠️ 지원금을 제멋대로 쓰기","j","w"]]],["후배가 자신에게 맞는 직업을 모르겠대.",[["💬 고민을 끝까지 들어주기","s","h"],["💻 실제 직무 사례 보여주기","i","j"],["🎨 관심사 지도 같이 그리기","c","i"],["⚠️ 내 경험만 정답이라 우기기","m","s"]]],["업무에 새로운 AI 도구를 도입할지 고민이야.",[["📚 기능과 한계 공부하기","i","j"],["🎨 작은 시험용 콘텐츠 제작","c","h"],["🤝 팀과 사용 기준 논의","s","i"],["⚠️ 결과 검토 없이 그대로 제출","j","s"]]],["오랜만에 휴가가 생겼어.",[["🧘 충분히 쉬며 재충전하기","h","i"],["🎨 취미 공방에 참가하기","c","j"],["🤝 친구들과 짧은 여행 가기","s","h"],["⚠️ 약속을 어기고 일정을 숨기기","j","s"]]],["이사할 집을 두 곳 중 고르게 됐어.",[["📊 월세와 교통비 비교하기","w","j"],["📚 계약 조건 꼼꼼히 살펴보기","i","h"],["🤝 주변 사람 의견 듣기","s","i"],["⚠️ 계약서 안 읽고 서명하기","j","w"]]],["팀의 노력으로 좋은 평가를 받았어.",[["🎤 팀원들의 기여 알리기","m","h"],["📊 다음 분기 목표 세우기","i","j"],["🎨 성공 사례 영상 제작","c","i"],["⚠️ 공로를 독차지하기","j","s"]]],["반려식물 잎이 노랗게 변했어.",[["🌱 햇빛과 물 주기 점검하기","h","j"],["📚 관리 방법 찾아보기","i","h"],["🎨 성장 일지를 그림으로 남기기","c","i"],["⚠️ 문제가 없는 척 방치하기","j","h"]]],["가계에 예상치 못한 수리비가 나왔어.",[["🏦 비상금 일부 사용하기","w","j"],["📋 수리 견적 여러 곳 비교","i","h"],["🤝 가족과 지출 계획 상의하기","s","i"],["⚠️ 고장 사실을 숨겨 더 미루기","j","w"]]],["새로운 취미 동호회에 처음 나가게 됐어.",[["🤝 먼저 자기소개하기","s","h"],["🎨 작품 한 점 가져가기","c","j"],["📚 활동 규칙 미리 읽기","i","h"],["⚠️ 다른 사람 작품을 비웃기","m","s"]]],["젊을 때 만든 포트폴리오를 다시 열어봤어.",[["🎬 최근 활동까지 새로 편집","c","h"],["📊 성과를 항목별로 정리","i","j"],["🤝 멘토에게 피드백 받기","s","i"],["⚠️ 실패한 기록을 남 탓하며 삭제","j","s"]]]],
 "midlife":[["일과 가족 일정이 한꺼번에 겹쳐 버렸어.",[["📅 한 주 우선순위 정리하기","i","j"],["🤝 가족과 역할을 나누기","s","h"],["🎨 짧은 휴식 시간을 창의적으로 만들기","c","i"],["⚠️ 말 없이 약속을 잊은 척하기","j","s"]]],["오랫동안 해오던 업무 방식에 변화가 생겼어.",[["💻 새 도구 사용법 배우기","i","h"],["🎨 기존 방식을 개선한 시안 만들기","c","j"],["🤝 동료 교육 시간 마련하기","s","i"],["⚠️ 변화가 싫다며 다른 사람 비난","j","s"]]],["하린이 오래된 사진을 한 장 보내 왔어.",[["☎️ 오랜 친구와 안부 나누기","s","h"],["🎬 사진으로 추억 영상 제작","c","j"],["📚 그때의 기록을 정리하기","i","h"],["⚠️ 예전 약속을 또 무시하기","j","s"]]],["지역에서 청소년 멘토를 모집하고 있어.",[["💬 학생들의 진로 고민 듣기","s","h"],["💻 기술 수업 짧게 열어보기","i","j"],["🎨 포트폴리오 워크숍 준비","c","i"],["⚠️ 할 수 없는 약속으로 기대만 높이기","m","s"]]],["휴일에 건강한 생활 계획을 세우려 해.",[["🚶 가벼운 산책 습관 만들기","h","i"],["📊 수면 패턴 기록해 보기","i","j"],["🤝 친구와 운동 약속 만들기","s","h"],["⚠️ 몸 상태를 무시한 채 무리하기","j","h"]]],["작은 창작 프로젝트를 다시 시작하고 싶어.",[["🎨 옛 아이디어를 새로 디자인하기","c","h"],["📚 최신 기술을 공부하기","i","j"],["🤝 협업 동료 찾기","s","i"],["⚠️ 남의 작품을 자기 아이디어라 하기","j","s"]]],["동네 상점이 운영 방식을 바꾸려고 해.",[["📈 매출 흐름 분석해 주기","i","j"],["🎬 홍보 영상을 만들어 주기","c","h"],["🤝 단골들의 의견 듣기","s","i"],["⚠️ 과장된 후기 올리자고 제안","m","s"]]],["가족 여행을 계획하자 의견이 다양해졌어.",[["🤝 원하는 일정 듣고 조율하기","s","h"],["📊 예산표를 만들어 비교하기","i","j"],["📸 모두가 즐길 사진 코스 찾기","c","i"],["⚠️ 혼자 결정하고 나중에 통보하기","j","s"]]],["회사에서 한 팀의 책임자를 맡아 달래.",[["📚 리더십 교육 들어보기","i","h"],["🤝 팀원과 목표 합의하기","s","j"],["🎨 회의 방식을 새롭게 설계","c","i"],["⚠️ 책임은 피하고 직함만 받기","m","s"]]],["갑자기 고장 난 컴퓨터에 중요한 파일이 있어.",[["💻 저장 장치 상태를 진단하기","i","h"],["🤝 전문 업체에 상담하기","s","j"],["🎬 백업된 자료부터 복구하기","c","i"],["⚠️ 문제를 숨기고 업무를 미루기","j","s"]]],["예전에 포기했던 공부를 다시 시작할 수 있어.",[["📚 매일 조금씩 공부하기","i","j"],["🎨 공부 내용을 그림으로 남기기","c","h"],["🤝 스터디 모임에 참여하기","s","i"],["⚠️ 시작 전부터 안 된다고 단정하기","j","i"]]],["학교 동창 모임에서 새로운 사업 제안을 들었어.",[["📊 사업 계획 먼저 검토하기","i","j"],["🎨 서비스 시안 만들어 보기","c","h"],["🤝 동창들의 역할 확인하기","s","i"],["⚠️ 수익만 듣고 무턱대고 투자 약속","j","w"]]],["동네 도서관에서 강연자를 찾고 있어.",[["🎤 경험을 사람들 앞에서 나누기","m","h"],["📚 자료를 근거 중심으로 준비","i","j"],["🎨 그림과 영상 자료 만들기","c","i"],["⚠️ 확인 안 된 정보를 사실처럼 발표","j","s"]]],["가족 중 누군가의 일상을 도와줄 일이 생겼어.",[["🤝 필요한 도움부터 물어보기","s","h"],["📋 돌봄 일정을 같이 정리하기","i","j"],["🎨 즐거운 추억 활동 제안하기","c","i"],["⚠️ 필요를 묻지도 않고 일방적으로 결정","m","s"]]],["새로운 기술 흐름 때문에 불안감이 들었어.",[["📚 차근차근 기본부터 배우기","i","j"],["🎬 내 경험과 결합한 콘텐츠 제작","c","h"],["🤝 동료와 함께 배우는 모임 만들기","s","i"],["⚠️ 배운 사람들을 비난하며 회피","j","s"]]],["동네 공원 개선 제안서를 받았어.",[["📊 주민 이용 데이터를 정리하기","i","h"],["🎨 공원 안내판 디자인하기","c","j"],["🤝 주민 의견을 청취하기","s","i"],["⚠️ 반대 의견을 확인도 않고 무시","m","s"]]]],
 "older":[["지역 문화센터에서 새 강좌를 열었어.",[["🎨 수채화 수업 참가하기","c","h"],["📚 역사 강연 듣기","i","j"],["🤝 낯선 수강생에게 인사하기","s","i"],["⚠️ 다른 수강생 실력을 비웃기","m","s"]]],["하린과 오래전 친구들이 소규모 모임을 계획해.",[["☕ 만나 추억 이야기 나누기","s","h"],["📷 옛 사진 모아 앨범 제작","c","j"],["📅 모두의 일정 조정하기","i","h"],["⚠️ 약속을 잊고 핑계 대기","j","s"]]],["걷기 좋은 계절, 건강한 일과를 만들고 싶어.",[["🚶 무리 없는 산책 꾸준히 하기","h","i"],["📚 운동 정보 전문가에게 확인","i","j"],["🤝 가까운 이웃과 걷기 모임 만들기","s","h"],["⚠️ 몸이 보내는 이상 신호를 무시하기","j","h"]]],["오래된 서랍에서 편지 뭉치를 발견했어.",[["📚 날짜별로 추억 정리하기","i","h"],["🎨 가족 사진과 엮어 앨범 만들기","c","j"],["☎️ 편지 보낸 이에게 안부 전하기","s","i"],["⚠️ 불편한 기억을 가족에게 떠넘기기","j","s"]]],["동네 어린이들이 인터뷰를 부탁했어.",[["💬 질문을 정성껏 들어주기","s","h"],["📖 옛날과 지금 차이를 설명하기","i","j"],["🎬 사진으로 경험을 소개하기","c","i"],["⚠️ 질문을 무시하고 훈계만 늘어놓기","m","s"]]],["취미로 만든 물건을 전시할 기회가 생겼어.",[["🎨 새 작품을 한 점 더 완성","c","h"],["📊 전시 비용을 점검하기","i","j"],["🤝 이웃을 초대해 설명하기","s","i"],["⚠️ 다른 작가의 작품을 깎아내리기","m","s"]]],["친척들이 가족 모임 음식 메뉴를 두고 고민해.",[["🥗 부담 없는 식단으로 조율하기","h","i"],["🤝 각자 먹고 싶은 음식 듣기","s","j"],["📋 장보기 예산 정리하기","i","h"],["⚠️ 다른 사람의 식습관을 비난하기","m","s"]]],["큰 도로 공사 때문에 평소 길이 막혔어.",[["🗺️ 안전한 대체 경로 알아보기","i","j"],["🚶 가까운 길을 천천히 걷기","h","i"],["🤝 이웃과 교통 정보 나누기","s","h"],["⚠️ 안내를 무시하고 위험한 길 고집","j","h"]]],["오랜 경험을 후배들에게 전하고 싶어.",[["📚 경험담을 글로 정리하기","i","j"],["🎬 짧은 교육 영상 만들기","c","h"],["🤝 후배 멘토링 시작하기","s","i"],["⚠️ 내 방식만 옳다며 조언 강요하기","m","s"]]],["정원에 심은 식물이 예상보다 잘 자랐어.",[["🌱 물·햇빛 관리 이어가기","h","i"],["📸 성장 과정을 사진으로 기록","c","j"],["🤝 이웃에게 모종 나눠주기","s","h"],["⚠️ 다른 사람 텃밭을 함부로 평가","m","s"]]],["휴대전화에 새로운 기능이 생겼어.",[["📱 기본 사용법 차근히 익히기","i","j"],["🎨 사진 편집에 활용해 보기","c","h"],["🤝 가족에게 기능 물어보기","s","i"],["⚠️ 모른다는 이유로 화부터 내기","j","s"]]],["하린이 예전 함께한 작품을 다시 보자고 해.",[["📽️ 옛 영상을 함께 감상하기","c","h"],["☎️ 그때 동료에게 연락하기","s","j"],["📚 제작 과정을 정리해 보기","i","h"],["⚠️ 예전 실수를 모두 남 탓하기","m","s"]]],["동네 축제에서 진행 보조를 구해.",[["🤝 방문객 안내 돕기","s","h"],["🎨 안내 표지판 디자인하기","c","j"],["📋 행사 흐름 확인하기","i","h"],["⚠️ 맡은 자리 비워두고 숨기기","j","s"]]],["가족이 새로운 취미를 추천해 줬어.",[["🎵 악기 연습을 시작하기","c","h"],["📚 외국어 기초 공부하기","i","j"],["🤝 취미 모임에 참가하기","s","i"],["⚠️ 시작도 안 해 보고 모두 비웃기","m","s"]]],["시청에서 지역 역사 이야기를 수집 중이야.",[["📖 기억나는 사건을 정리해 주기","i","j"],["📸 옛 사진을 디지털로 보관하기","c","h"],["🤝 동네 사람 인터뷰에 협조하기","s","i"],["⚠️ 확인되지 않은 이야기를 사실로 퍼뜨리기","j","s"]]],["따뜻한 오후에 조용한 시간을 가질 수 있어.",[["🧘 몸 상태에 맞춰 쉬기","h","i"],["📚 좋아하는 책 다시 읽기","i","j"],["🎨 작은 풍경 그림 그리기","c","h"],["⚠️ 가족과의 약속을 모른 척하기","j","s"]]]],
 "elder":[["손주뻘 아이가 옛날 학교생활을 물어봐.",[["📚 차근차근 추억 들려주기","i","j"],["🎨 옛 교실 그림 그려주기","c","h"],["🤝 서로 다른 시대 이야기 듣기","s","i"],["⚠️ 요즘 아이들을 무턱대고 비난하기","m","s"]]],["산책 중 오랜 친구가 벤치에 앉아 있어.",[["☕ 옆에 앉아 이야기 나누기","s","h"],["📷 함께 풍경 사진 남기기","c","j"],["📅 다음 만남 약속 정하기","i","h"],["⚠️ 불편했던 오해를 풀지 않고 핑계 대기","j","s"]]],["건강검진 예약일이 다가와.",[["📅 예약을 확인하고 준비하기","i","j"],["🤝 가족에게 이동 도움 요청하기","s","h"],["🧘 충분히 쉬고 컨디션 챙기기","h","i"],["⚠️ 검사 일정을 일부러 숨기기","j","h"]]],["가족이 태빈이의 인생을 책으로 남기자고 제안해.",[["📖 중요한 사건을 연대순 정리","i","j"],["🎨 사진과 그림으로 꾸미기","c","h"],["🤝 가족 모두의 추억을 인터뷰","s","i"],["⚠️ 마음에 안 드는 기억은 남 탓하기","m","s"]]],["동네 공원에 새로운 벤치가 생겼어.",[["🚶 천천히 걸어 풍경 즐기기","h","i"],["🎨 벤치를 배경으로 그림 그리기","c","j"],["🤝 이웃과 이야기 나누기","s","h"],["⚠️ 공원 이용 규칙을 무시하기","j","s"]]],["옛날에 만든 영상 파일을 다시 발견했어.",[["🎬 가족과 함께 감상하기","c","h"],["📚 날짜와 제작 배경 정리","i","j"],["🤝 함께 만든 친구에게 연락","s","i"],["⚠️ 다른 사람 공로를 깎아내리기","m","s"]]],["가족 모임에서 서로 의견이 엇갈려.",[["💬 모두의 말에 귀 기울이기","s","h"],["📋 쟁점별로 차분히 정리하기","i","j"],["🎨 사진을 꺼내 분위기 풀기","c","i"],["⚠️ 내 말만 맞다며 소리 높이기","m","s"]]],["새로운 그림을 한 장 완성했어.",[["🎨 다른 색감으로 한 장 더 그리기","c","h"],["📚 작품에 얽힌 기억 적기","i","j"],["🤝 이웃과 작품 나누기","s","i"],["⚠️ 다른 사람 작품을 조롱하기","m","s"]]],["가족이 오래된 물건을 정리하자고 해.",[["📋 필요한 것부터 분류하기","i","j"],["🎨 추억 물건 사진으로 남기기","c","h"],["🤝 가족과 이야기를 나누며 정리","s","i"],["⚠️ 상의 없이 가족 물건 버리기","j","s"]]],["아침에 새소리가 유난히 선명하게 들려.",[["🪟 창을 열고 잠깐 감상하기","h","i"],["🎵 들리는 소리를 노래로 흥얼","c","j"],["☎️ 친구에게 좋은 아침 인사","s","h"],["⚠️ 몸이 피곤한데 무리해서 나가기","j","h"]]],["지역 행사에서 감사장을 받게 됐어.",[["🤝 함께한 사람들에게 감사 전하기","s","h"],["📚 활동을 차분히 회고하기","i","j"],["🎬 짧은 감사 영상 남기기","c","i"],["⚠️ 모든 공을 혼자 차지하기","m","s"]]],["하린에게서 오래된 편지가 도착했어.",[["✉️ 답장을 천천히 써 보내기","s","h"],["📷 옛 추억 사진 함께 보내기","c","j"],["📚 편지 내용을 일기에 남기기","i","h"],["⚠️ 편지를 읽지도 않고 무시하기","j","s"]]],["비가 내려 하루 종일 집에 머물러야 해.",[["📚 읽던 책 마저 읽기","i","j"],["🎨 창밖 풍경 그리기","c","h"],["☎️ 가족과 안부 통화하기","s","i"],["⚠️ 기분이 나쁘다며 주변에 화풀이하기","m","s"]]],["이웃이 동네 역사 기록을 부탁했어.",[["📜 옛 동네 지도를 떠올려 보기","i","j"],["📷 기억나는 장소 사진 정리","c","h"],["🤝 다른 어르신 이야기 함께 듣기","s","i"],["⚠️ 확실치 않은 이야기를 진실이라 우기기","m","s"]]],["가족과 함께 작은 생일 축하 자리를 준비해.",[["🤝 모두의 근황 듣기","s","h"],["🎨 추억 사진을 벽에 꾸미기","c","j"],["📋 음식 준비를 미리 나누기","i","h"],["⚠️ 다른 사람의 준비를 비난하기","m","s"]]],["여유로운 오후, 남길 말을 생각하게 돼.",[["📖 자신이 배운 교훈 적기","i","j"],["🎬 한 장면을 영상으로 남기기","c","h"],["🤝 소중한 사람에게 감사 전하기","s","i"],["⚠️ 지난 선택의 책임을 다른 사람에게 돌리기","m","s"]]]]
};
const SCENE_STATS={h:"health",i:"intelligence",c:"creativity",s:"social",m:"charm",j:"happiness",w:"money"};
// Every decision costs energy and grows TWO uncapped abilities. Currency is
// separate from skill growth, and health-recovery items remain available.
const GROWTH_SKILLS=["intelligence","creativity","social","charm"];
const GROWTH_PAIRS=[
 ["intelligence","creativity"],["social","charm"],
 ["intelligence","social"],["creativity","charm"],
 ["intelligence","charm"],["creativity","social"]
];
const GROWTH_CUES=[
 [/코딩|기술|앱|게임|컴퓨터|로봇|과학|실험|연구|퍼즐|수학|공부|수업|책|독서|문제|자료|시험|숙제|진학|자격증|분석|집중/, ["intelligence","creativity"]],
 [/영상|촬영|카메라|편집|그림|음악|노래|악기|그리|미술|포스터|만들|창작|예술|디자인|공연|자장가|리듬/, ["creativity","charm"]],
 [/친구|가족|하린|이웃|대화|함께|인사|도와|협력|사과|공유|봉사|돌보|안아|상담|의견|팀|배려/, ["social","charm"]],
 [/발표|무대|체육|운동|달리|축구|산책|자전거|연극|행사|축제|도전|여행|말하|친해/, ["charm","social"]],
 [/판매|용돈|돈|알바|기획|사업|경제|가게|상점|투자|취업/, ["intelligence","social"]]
];
function growthEffect(source,label="",seed=0,used=null){
 const fx=Array.isArray(source)?source:[];
 const gains=[];
 const add=k=>{if(GROWTH_SKILLS.includes(k)&&!gains.includes(k))gains.push(k);};
 // Original positive ability remains the primary focus, when available.
 for(let i=0;i<fx.length;i+=2)if(Number(fx[i+1])>0)add(fx[i]);
 for(const [test,pair] of GROWTH_CUES)if(test.test(label))pair.forEach(add);
 // Other effects may hint at another relevant ability, but never reduce one.
 for(let i=0;i<fx.length;i+=2)if(Number(fx[i+1])<0)add(fx[i]);
 GROWTH_PAIRS[(seed+GROWTH_PAIRS.length)%GROWTH_PAIRS.length].forEach(add);
 GROWTH_SKILLS.forEach(add);
 let pair=gains.slice(0,2);
 if(used){
  const signature=arr=>arr.slice().sort().join("|");
  if(used.has(signature(pair))){
   const alternate=GROWTH_PAIRS.find(p=>!used.has(signature(p))&&p.includes(pair[0]))
                  || GROWTH_PAIRS.find(p=>!used.has(signature(p)));
   if(alternate)pair=alternate;
  }
  used.add(signature(pair));
 }
 // The slow-growth setting affects skill increases, never the 1-point energy cost.
 const out=[pair[0],4,pair[1],3,"health",-1];
 // Keep earned/spent KRW as an extra economic effect, not an ability increase.
 for(let i=0;i<fx.length;i+=2){
  if(fx[i]==="money"&&Number(fx[i+1])!==0){out.push("money",Number(fx[i+1]));break;}
 }
 return out;
}
const SCENE_GAINS={
 health:"몸을 돌보는 경험을 쌓았어", intelligence:"새로운 방법을 배웠어",
 creativity:"새로운 아이디어가 생겼어", social:"사람들과 신뢰를 쌓았어",
 charm:"자신감을 키웠어", happiness:"마음이 한결 가벼워졌어",
 money:"돈을 조금 모았어"
};
const SCENE_COSTS={
 health:"몸은 조금 피곤해졌어", intelligence:"공부할 여유는 줄었어",
 creativity:"창작에 쓸 시간은 부족해졌어", social:"누군가와 보낼 시간이 줄었어",
 charm:"자신감은 조금 흔들렸어", happiness:"기분은 조금 가라앉았어",
 money:"돈이 조금 들었어"
};
/* ===== TAEBIN LIFE · 선택에 따라 변하는 병맛 사건 =====
 * 모든 사건은 게임 속 가상 상황이며, 일반 선택과 같은 속도/체력 규칙을 사용한다.
 * 선택 직전에 그린 상태에 따라 결정되므로 화면 다시 그리기로 내용이 바뀌지 않는다.
 */
const NURI_ABSURD_BANK={
 baby:[
  ["태빈이가 가족회의에서 리모컨을 의장봉처럼 두드렸어. 온 가족이 긴급 소집됐어.",[
   ["엄마에게 우선 발언권 주기","social","charm","엄마가 의장을 칭찬하며 가족회의가 훈훈하게 끝났어.",0,2],
   ["리모컨 버튼의 규칙 연구하기","intelligence","creativity","그날 태빈이는 버튼마다 다른 결과가 나온다는 사실을 발견했어.",0,1],
   ["거실을 손짓으로 지휘하기","charm","social","가족 모두가 태빈이의 지휘를 따라 박수쳤어.",0,2],
   ["리모컨을 왕관으로 쓰고 잠들기","creativity","charm","태빈이는 왕관을 쓴 채 잠들었고 사진이 가족 앨범에 남았어.",0,1]]],
  ["태빈이가 양말 두 짝으로 세상 최초의 양말 인형 회사를 창업했다고 우겨.",[
   ["양말 인형에게 이름 붙여 주기","creativity","social","태빈이의 첫 고객은 기분 좋은 가족이었어.",0,2],
   ["양말 무늬를 유심히 관찰하기","intelligence","creativity","양말은 숫자와 모양을 배우는 훌륭한 교구가 됐어.",0,1],
   ["양말 인형으로 가족 공연 열기","charm","creativity","가족이 관객이 되어 작은 공연을 즐겼어.",0,2],
   ["양말 두 짝을 한 손에 모두 끼기","creativity","charm","태빈이는 손을 두 배 크게 보이게 만들었다고 뿌듯해했어.",0,1]]],
  ["태빈이가 젖병 앞에서 진지하게 면접을 보는 표정을 지어. 면접관은 곰 인형이야.",[
   ["곰 인형에게 손 흔들어 인사하기","social","charm","면접관이 고개를 끄덕이는 것 같았어.",0,1],
   ["젖병 뚜껑이 돌아가는 원리 보기","intelligence","creativity","태빈이는 꼼꼼히 관찰하는 법을 익혔어.",0,0],
   ["옹알이로 자기소개를 완성하기","charm","social","가족이 태빈이의 첫 자기소개를 영상으로 남겼어.",0,2],
   ["곰 인형에게 면접 팁 알려주기","creativity","intelligence","면접은 끝났지만 태빈이만 만족한 모양이야.",0,1]]],
  ["거울을 본 태빈이가 자기 자신을 새 친구로 착각하고 인사했어.",[
   ["거울 속 친구와 손뼉 맞추기","social","charm","새 친구와 놀 듯 신나게 웃었어.",0,2],
   ["움직임이 똑같다는 걸 살펴보기","intelligence","creativity","비친 모습의 신기한 비밀을 조금 알아냈어.",0,0],
   ["표정을 바꿔 가며 장난치기","charm","creativity","가족이 웃으며 태빈이의 표정을 따라 했어.",0,1],
   ["거울 친구에게 간식 양보하기","social","creativity","친절한 마음만큼은 진짜였어.",0,1]]]
 ],
 child:[
  ["유치원에서 태빈이가 종이컵을 들고 '오늘부터 내가 원장'이라고 선언했어.",[
   ["친구들에게 먼저 놀이 제안하기","social","charm","원장 역할은 금방 돌아가며 하는 놀이가 됐어.",0,2],
   ["놀이 규칙을 그림으로 그리기","creativity","intelligence","모두가 쉽게 이해할 수 있는 규칙표가 완성됐어.",0,1],
   ["선생님께 오늘 할 일 물어보기","intelligence","social","태빈이는 진짜 원장의 일이 얼마나 많은지 알게 됐어.",0,1],
   ["종이컵 명찰을 직접 디자인하기","creativity","charm","명찰은 멋졌지만 원장은 다음 날 교체됐어.",0,2]]],
  ["동네 비둘기가 태빈이의 과자를 훔쳐보는 것 같아. 태빈이는 협상 회의를 열었어.",[
   ["비둘기 대신 친구와 과자 나누기","social","charm","과자는 친구와 안전하게 나누어 먹었어.",0,2],
   ["비둘기를 멀리서 관찰하기","intelligence","creativity","도시 동물에 대한 새로운 궁금증이 생겼어.",0,0],
   ["비둘기 모양 만화 그리기","creativity","charm","주인공 비둘기는 세계 최고의 간식 평론가가 됐어.",0,2],
   ["협상 내용을 일기로 남기기","intelligence","social","그날의 협상은 태빈이만의 비밀 기록으로 남았어.",0,1]]],
  ["태빈이가 냉장고에 '퇴근했습니다' 쪽지를 붙였어. 냉장고의 근무시간은 끝났대.",[
   ["냉장고가 쉬는 이유 상상하기","creativity","intelligence","아주 짧은 냉장고 동화를 만들었어.",0,2],
   ["식품 보관 온도 알아보기","intelligence","creativity","냉장고의 진짜 역할을 배웠어.",0,1],
   ["가족에게 냉장고 감사장 쓰기","social","charm","식구들이 웃으며 냉장고를 토닥여 줬어.",0,2],
   ["퇴근한 냉장고에게 내일 출근 부탁하기","charm","social","태빈이는 냉장고가 다음 날도 열심히 일한다고 믿었어.",0,1]]],
  ["운동회 날 태빈이가 자신만의 종목 '천천히 뛰기'를 제안했어.",[
   ["친구들과 새로운 규칙 만들기","social","intelligence","누구나 참여할 수 있는 재미있는 종목이 만들어졌어.",0,2],
   ["안전한 달리기 자세 알아보기","intelligence","charm","몸을 무리하지 않는 방법을 함께 배웠어.",0,1],
   ["응원 구호를 만들어 주기","creativity","charm","운동장에 태빈이표 응원가가 울려 퍼졌어.",0,2],
   ["가장 느린 사람에게 박수 제안하기","social","creativity","결과와 관계없이 모두를 응원하는 분위기가 됐어.",0,2]]]
 ],
 school:[
  ["급식 메뉴에 '셰프의 비밀'이 적혀 있어. 친구들은 태빈이가 진짜 비밀요원이라고 믿기 시작했어.",[
   ["급식실에 정중히 메뉴 물어보기","social","intelligence","비밀은 그날의 특별 소스였어.",0,1],
   ["친구와 메뉴 리뷰 콘텐츠 만들기","creativity","charm","평범한 급식이 재미있는 영상 소재가 됐어.",0,2],
   ["급식 칼로리 대신 맛 표현 연구하기","intelligence","creativity","태빈이의 음식 표현 사전이 두꺼워졌어.",0,1],
   ["확인도 안 하고 비밀이 유출됐다고 소문내기","charm","social","소문이 커져 친구들과 오해를 풀어야 했어.",-2,-3]]],
  ["단톡방 투표에서 '반장' 대신 '반찬'을 뽑는 일이 일어났어.",[
   ["투표를 다시 정확히 진행하기","intelligence","social","투표가 정상적으로 마무리됐어.",0,1],
   ["반찬 후보들로 유머 포스터 만들기","creativity","charm","급식 시간이 조금 더 즐거워졌어.",0,3],
   ["선생님께 상황을 정중히 설명하기","social","intelligence","실수를 함께 웃으며 넘겼어.",0,1],
   ["친구가 실수한 거라고 공개적으로 놀리기","charm","social","순간 웃음은 났지만 친구는 마음이 상했어.",0,-3]]],
  ["학교 방송실에서 태빈이 이름 대신 '누룽지'가 대본에 적혔어.",[
   ["대본을 확인하고 차분히 수정하기","intelligence","social","방송이 깔끔하게 마무리됐어.",0,1],
   ["별명으로 짧은 오프닝 만들기","creativity","charm","친구들이 오프닝을 재미있게 기억했어.",0,2],
   ["방송팀과 리허설 다시 하기","social","intelligence","모두가 합을 맞춰 방송을 성공시켰어.",0,1],
   ["남의 실수라며 마이크 앞에서 큰소리 내기","charm","social","사과해야 할 사람이 한 명 늘었어.",0,-3]]],
  ["교실에 '오늘의 최강자'라고 쓰인 종이 왕관이 놓여 있어. 친구들이 네게 판정을 부탁해.",[
   ["가장 친절했던 친구에게 왕관 주기","social","charm","친절한 행동이 최고의 기준이 됐어.",0,3],
   ["왕관 선정 기준을 투표로 정하기","intelligence","social","친구들이 공정한 규칙을 함께 만들었어.",0,2],
   ["왕관 디자인을 더 멋지게 바꾸기","creativity","charm","왕관은 곧 미술 작품이 됐어.",0,1],
   ["왕관을 혼자 차지하고 친구들 무시하기","charm","intelligence","왕관은 얻었지만 친구들의 호감은 잃었어.",0,-4]]],
  ["진로 상담에서 선생님이 '꿈이 뭐니?'라고 묻자 태빈이가 '주말'이라고 답해 버렸어.",[
   ["진짜 관심 있는 직업 설명하기","intelligence","charm","상담이 진지한 진로 탐색으로 이어졌어.",0,1],
   ["주말을 연구하는 창작 아이디어 제시하기","creativity","intelligence","선생님도 예상 밖의 상상력에 흥미를 보였어.",0,2],
   ["친구들의 진로 이야기도 듣기","social","charm","다른 사람의 꿈에서 영감을 받았어.",0,1],
   ["상담은 귀찮다며 책임을 친구에게 넘기기","charm","social","중요한 조언을 듣지 못하고 분위기만 어색해졌어.",0,-3]]]
 ],
 young:[
  ["태빈이가 면접에서 '장점이 뭐냐'는 질문에 '알람을 다섯 개 맞춘다'고 대답했어.",[
   ["시간 관리 경험으로 답변 보완하기","intelligence","charm","실수를 수습하고 진지하게 면접을 이어 갔어.",0,1],
   ["실패 경험을 유머 있게 설명하기","creativity","social","면접관도 이야기를 잘 들어 줬어.",0,2],
   ["업무 준비 과정부터 다시 이야기하기","intelligence","social","준비한 내용이 제대로 전달됐어.",0,1],
   ["면접관 탓을 하며 질문 무시하기","charm","social","면접 분위기가 얼어붙었어.",0,-3]]],
  ["새로 산 화분이 태빈이의 투자 조언가가 됐어. 별명은 '주식왕 선인장'이야.",[
   ["화분 대신 투자 공부 자료 살펴보기","intelligence","creativity","태빈이는 근거를 확인하는 습관을 배웠어.",0,1],
   ["선인장 재테크 웹툰 그리기","creativity","charm","가상의 선인장 투자왕이 인기 캐릭터가 됐어.",5,2],
   ["친구에게 장난으로 이야기를 들려주기","social","charm","친구들과 즐거운 시간을 보냈어.",0,2],
   ["선인장 예언이라며 소문 퍼뜨리기","charm","social","주변의 신뢰를 조금 잃고 소문을 정정했어.",-4,-3]]],
  ["카페 영수증에 '오늘의 운세: 당신은 사장'이 찍혔어. 태빈이는 진지하게 창업을 고민해.",[
   ["실제 창업 비용부터 조사하기","intelligence","creativity","태빈이는 사업 계획서의 첫 장을 썼어.",-2,1],
   ["사장 캐릭터를 그려 홍보물 만들기","creativity","charm","주변 사람들에게 웃음을 준 작품이 됐어.",4,2],
   ["경험 많은 사람에게 조언 구하기","social","intelligence","현실적인 사업 조언을 들었어.",0,1],
   ["운세만 믿고 친구 돈으로 파티 열기","charm","social","분위기는 잠깐 좋았지만 돈 문제를 해결해야 했어.",-8,-3]]],
  ["태빈이가 알람을 끄다 상사 대신 베개에 출근 보고를 했어.",[
   ["출근 전 해야 할 일 목록 점검하기","intelligence","social","실수를 반복하지 않을 준비가 됐어.",0,1],
   ["상황을 짧은 만화로 그려보기","creativity","charm","잠이 깬 뒤 그린 만화가 큰 웃음을 줬어.",0,2],
   ["동료에게 재미있는 이야기로 털어놓기","social","charm","동료가 농담을 받아주며 긴장이 풀렸어.",0,1],
   ["늦은 이유를 베개 탓으로 돌리기","charm","intelligence","베개는 항변할 수 없었지만 동료들은 의아해했어.",0,-2]]]
 ],
 office:[
  ["회사 회의실에서 의자가 대표님보다 먼저 회의에 참석했다는 소문이 돌았어.",[
   ["회의 자료를 정리해 보기","intelligence","creativity","회의에서 정말 필요한 안건을 정리했어.",0,1],
   ["의자 소개 영상을 점심시간에 만들기","creativity","charm","동료들이 다 같이 웃으며 봤어.",2,2],
   ["동료에게 다음 회의 일정을 알려 주기","social","intelligence","모두가 제시간에 회의에 참석했어.",0,1],
   ["의자가 책임자라며 업무를 전부 떠넘기기","charm","social","회의 분위기가 싸늘해져 사과했어.",0,-3]]],
  ["팀장님이 발표 자료 제목을 '꿈 백 개 프로젝트' 대신 '꿈 백 개 프로젝터'로 적어 왔어.",[
   ["제목을 바로잡고 발표 이어가기","intelligence","social","실수를 바로잡고 설명을 이어 갔어.",0,1],
   ["프로젝터를 마스코트로 디자인하기","creativity","charm","발표 장면에 웃음이 더해졌어.",0,2],
   ["팀장님과 발표 흐름 다시 맞추기","social","intelligence","팀워크가 좋아졌어.",0,1],
   ["실수한 사람을 몰아세우기","charm","social","동료들이 말을 아끼기 시작했어.",0,-3]]],
  ["회의에서 태빈이가 '자료 공유'를 '과자 공유'로 잘못 들었어. 과자만 챙겨 왔어.",[
   ["과자를 나누고 자료 준비하기","social","intelligence","동료들과 분위기를 풀고 업무도 마쳤어.",-3,2],
   ["과자 포장에 기획안 써 보기","creativity","intelligence","기묘하지만 기억에 남는 초안이 탄생했어.",0,2],
   ["발표 자료 준비 시간을 요청하기","intelligence","charm","솔직하게 상황을 설명하고 신뢰를 지켰어.",0,0],
   ["준비 부족을 동료 탓으로 돌리기","charm","social","협업 관계가 어색해졌어.",0,-4]]],
  ["사내 메신저의 자동완성이 '승진'을 '승천'으로 고쳤어. 전 직원이 태빈이를 축하해.",[
   ["오타를 바로잡고 감사 인사하기","social","charm","직원들이 가볍게 웃으며 일을 계속했어.",0,2],
   ["승천 기념 포스터 그리기","creativity","charm","포스터는 사내 게시판에서 인기였어.",1,2],
   ["진짜 성과를 차분히 정리하기","intelligence","social","성과 평가에 도움이 될 자료를 모았어.",0,1],
   ["진짜 승진했다고 속이며 선물 요구하기","charm","social","거짓말이 들통나 동료들의 신뢰가 흔들렸어.",0,-4]]]
 ],
 military:[
  ["생활관에 양말 한 짝이 사라졌어. 동료들은 '양말 괴도'를 찾는 중이야.",[
   ["다 같이 분실물함 확인하기","social","intelligence","양말은 의외로 가까운 곳에서 발견됐어.",0,2],
   ["양말 찾기 포스터 그리기","creativity","charm","유쾌한 포스터 덕에 분위기가 풀렸어.",0,2],
   ["분실 방지를 위한 정리 습관 만들기","intelligence","social","함께 쓰는 공간이 훨씬 정돈됐어.",0,1],
   ["근거 없이 동료를 범인으로 지목하기","charm","social","동료와 오해를 풀고 사과했어.",0,-3]]],
  ["식당 메뉴판에 국 이름 대신 '비밀 프로젝트'가 적혀 있어.",[
   ["식당 담당자에게 메뉴 확인하기","social","intelligence","그날 메뉴를 정확히 알게 됐어.",0,1],
   ["친구들과 메뉴 별명 정하기","creativity","charm","식사 시간이 조금 더 즐거워졌어.",0,2],
   ["동료들의 알레르기 정보 챙기기","intelligence","social","동료들이 안전하게 식사할 수 있었어.",0,1],
   ["확인 없이 이상한 소문 퍼뜨리기","charm","social","불필요한 오해가 생겨 정정했어.",0,-3]]],
  ["동료가 수첩에 '오늘의 목표: 침대 정복'이라고 적어 왔어.",[
   ["동료와 하루 일정 계획하기","intelligence","social","할 일을 차례대로 정리했어.",0,1],
   ["재미있는 하루 목표 그림 그리기","creativity","charm","작은 그림이 동료에게 힘이 됐어.",0,2],
   ["쉬는 시간에 서로 안부 묻기","social","charm","서로의 고민을 조금 더 이해했어.",0,1],
   ["동료의 수첩을 공개적으로 놀리기","charm","social","동료의 마음이 상해 사과해야 했어.",0,-3]]]
 ],
 business:[
  ["태빈이 회사의 마스코트가 실수로 '대표이사 선인장'으로 등록됐어.",[
   ["사업 정보부터 바로 수정하기","intelligence","social","대표 이름이 정확히 정리됐어.",0,1],
   ["선인장 마스코트 굿즈 기획하기","creativity","charm","작은 굿즈가 팔려 추가 수익이 났어.",25,2],
   ["직원들과 브랜딩 회의 열기","social","intelligence","팀에서 재미있는 홍보 아이디어가 나왔어.",0,2],
   ["고객에게 일부러 잘못된 정보 보내기","charm","social","고객에게 정정 안내를 하고 신뢰를 회복해야 했어.",-18,-4]]],
  ["가게 신메뉴 이름을 자동완성이 '크로플' 대신 '크로마키'로 바꿨어.",[
   ["메뉴 이름 정확히 다시 쓰기","intelligence","social","손님들도 새 메뉴를 이해했어.",0,1],
   ["크로마키 사진 이벤트 기획하기","creativity","charm","재미있는 이벤트가 작은 매출로 이어졌어.",18,2],
   ["직원들과 메뉴판 점검하기","social","intelligence","실수를 미리 찾는 습관이 생겼어.",0,1],
   ["고객 탓이라며 환불 문의 무시하기","charm","social","평판이 나빠지고 일부 손님에게 환불했어.",-24,-4]]],
  ["회사가 '직원 행복 지수'를 계산하다 고양이 출근 횟수를 집어넣었어.",[
   ["지표 계산식을 다시 점검하기","intelligence","creativity","오류를 고치고 더 믿을 만한 지표를 만들었어.",0,1],
   ["사내 고양이 포스터 디자인하기","creativity","charm","직원들이 작은 포스터를 좋아했어.",4,2],
   ["직원에게 만족도 의견 묻기","social","intelligence","실제 직원들의 목소리를 들었어.",0,2],
   ["잘못된 수치를 그대로 홍보에 쓰기","charm","social","정정 공지와 수습 비용이 생겼어.",-25,-4]]]
 ],
 middle:[
  ["태빈이는 집안 가계부를 정리하다 자신의 이름이 '가계부의 수호자'로 적혀 있는 걸 봤어.",[
   ["실제 지출을 꼼꼼하게 확인하기","intelligence","social","새어 나가는 돈을 조금 절약했어.",8,1],
   ["가계부 수호자 만화 만들기","creativity","charm","가족이 태빈이의 만화를 재미있게 봤어.",0,2],
   ["가족에게 돈 관리 요령 설명하기","social","intelligence","서로 돈 관리 방법을 공유했어.",0,1],
   ["가족 몰래 중요한 장부를 버리기","charm","social","가족과 함께 기록을 다시 정리해야 했어.",-6,-3]]],
  ["태빈이가 택배를 받았더니 물건보다 포장 상자가 더 거대했어. 가족이 새 집이냐고 물어.",[
   ["상자를 재활용해서 정리함 만들기","creativity","intelligence","집 안에 새로운 수납공간이 생겼어.",0,1],
   ["배송업체에 포장 개선 의견 남기기","social","intelligence","다음 배송에 대한 좋은 의견을 전했어.",0,1],
   ["상자로 가족 사진 배경 만들기","creativity","charm","가족에게 재미있는 추억이 생겼어.",0,2],
   ["상자를 친구 집 앞에 몰래 쌓아 두기","charm","social","친구와 오해가 생겨 직접 치웠어.",0,-3]]],
  ["동네 행사에서 태빈이 이름이 '무려 백 개 씨'로 소개됐어.",[
   ["정중히 이름을 바로잡기","social","charm","진행자가 바로 수정해 줬어.",0,1],
   ["100가지 목표를 유머로 소개하기","creativity","charm","행사에 참석한 사람들이 웃으며 응원했어.",0,2],
   ["목표를 이루기 위한 계획 설명하기","intelligence","social","새로운 인연과 조언을 얻었어.",0,1],
   ["주변 사람에게 거짓 투자 약속하기","charm","social","신뢰를 잃고 말을 바로잡아야 했어.",-12,-4]]]
 ],
 elder:[
  ["손주뻘 아이들이 태빈이에게 '옛날엔 와이파이도 손으로 돌렸어요?'라고 물었어.",[
   ["옛날 기술 이야기를 친절히 들려주기","intelligence","social","아이들이 흥미롭게 이야기를 들었어.",0,2],
   ["시대별 기기를 만화로 그리기","creativity","charm","세대를 잇는 재미있는 그림이 됐어.",0,1],
   ["요즘 기술을 거꾸로 배워 보기","social","intelligence","서로 배우는 즐거움을 느꼈어.",0,2],
   ["틀린 상식을 사실인 것처럼 우기기","charm","social","아이들이 당황해 태빈이가 사실을 바로잡았어.",0,-2]]],
  ["태빈이가 산책하며 '나의 라이벌은 어제의 나'라고 했더니 뒤에 있던 친구가 박수쳤어.",[
   ["친구와 옛 추억 나누기","social","charm","오랫동안 이어진 우정을 돌아봤어.",0,2],
   ["경험을 짧은 수필로 써 보기","creativity","intelligence","사소한 하루도 글이 될 수 있었어.",0,1],
   ["적당한 휴식 시간을 함께 정하기","intelligence","social","서로 건강을 챙기기로 약속했어.",0,1],
   ["친구를 이겨야 한다며 괜히 경쟁하기","charm","social","생각보다 지쳐 잠시 쉬기로 했어.",0,-2]]],
  ["가족이 생일 케이크에 촛불 대신 '태빈이 업적 달성' 스티커를 붙였어.",[
   ["가족과 오늘의 추억 사진 남기기","social","charm","작은 생일 파티가 오래 기억될 추억이 됐어.",0,2],
   ["인생의 업적을 편지로 정리하기","intelligence","creativity","가족에게 소중한 이야기를 들려줬어.",0,2],
   ["스티커를 모아 앨범 만들기","creativity","charm","독특한 추억 앨범을 완성했어.",0,1],
   ["가족의 축하가 마음에 안 든다며 무시하기","charm","social","분위기가 어색해져 감사 인사를 전했어.",0,-3]]]
 ]
};
function ensureAbsurdState(){
 if(!Array.isArray(state.absurdHistory))state.absurdHistory=[];
 if(!Number.isFinite(Number(state.absurdCount)))state.absurdCount=state.absurdHistory.length;
}
function nuriAbsurdSceneForTurn(age,sequence){
 if(state.settings?.absurdEvents===false||!state.alive||sequence<4||sequence%8!==4)return null;
 ensureAbsurdState();
 let kind=age<3?'baby':age<13?'child':age<19?'school':age>=65?'elder':age<25?'young':age<50?'middle':'middle';
 if(age>=20&&age<22&&state.lifeRoute==='military'&&!state.serviceCompleted)kind='military';
 else if(age>=19&&age<65&&state.world?.business&&sequence%16===4)kind='business';
 else if(age>=19&&age<65&&state.workStatus==='employed'&&sequence%16===12)kind='office';
 const pool=NURI_ABSURD_BANK[kind]||NURI_ABSURD_BANK.middle;
 const poolKey='absurd-'+kind;
 const turn=dailySceneCursor(poolKey);
 if(turn>=pool.length)return null;
 const idx=(turn+familySceneOffset())%pool.length;
 return {prompt:'오늘의 황당 사건 · '+pool[idx][0],actions:pool[idx][1],id:poolKey+'-'+idx,poolKey,absurd:true};
}
function nuriAbsurdChoices(scene,age){
 const used=new Set();
 return scene.actions.map(([label,gain,secondary,outcome,money=0,mood=0],index)=>{
  const source=[gain,4,secondary,3];
  if(money)source.push('money',money);
  const effect=growthEffect(source,label,index,used);
  if(mood)effect.push('happiness',mood);
  const risky=age>=13&&index===3;
  return {label,effect,desc:risky?'너무 무리한 선택은 후회가 남을 수 있어.':'뜻밖의 하루를 어떻게 보낼까?',
   outcome,detour:risky,absurd:true,absurdId:scene.id,absurdPrompt:scene.prompt,sceneId:scene.id};
 });
}
function nuriAbsurdAfterChoice(chosen,age){
 if(!chosen.absurd)return;
 ensureAbsurdState();
 const entry={id:chosen.absurdId,age,prompt:chosen.absurdPrompt.replace(/^오늘의 황당 사건 · /,''),choice:nuriChoiceClean(chosen.label),outcome:chosen.outcome};
 state.absurdCount++;
 state.absurdHistory.push(entry);
 state.absurdHistory=state.absurdHistory.slice(-80);
 worldNote('황당 사건: '+entry.choice+' — '+entry.outcome,'absurd');
 worldCheckAchievements();
}
function renderAbsurdAlbum(){
 ensureAbsurdState();
 modalHeader('태빈이의 황당 사건록','TAEBIN LIFE · FUNNY MOMENTS');
 const entries=state.absurdHistory.slice().reverse();
 document.getElementById('appModalBody').innerHTML=`
  <div class="absurd-intro"><strong>상식은 잠시 퇴근했습니다.</strong><p>태빈이가 실제로 겪은 황당한 사건만 기록돼. 병맛 사건은 기본적으로 약 8번 선택 중 한 번 등장하며, 설정에서 끌 수 있어.</p><div class="absurd-count">경험한 병맛 사건 <b>${state.absurdCount}회</b></div></div>
  <div class="absurd-album-list">${entries.length?entries.map(e=>`<article class="absurd-album-entry"><small>${e.age}살의 사건</small><h3>${nuriChoiceEscape(e.prompt)}</h3><p>내 선택: ${nuriChoiceEscape(e.choice)}</p><p>${nuriChoiceEscape(e.outcome)}</p></article>`).join(''):'<p class="modal-hint">아직 황당한 사건은 없어. 선택지를 계속 진행하면 등장할 수 있어.</p>'}</div>
  <div class="menu-actions"><button class="modal-action" onclick="renderMenuModal()">← 메뉴로 돌아가기</button></div>`;
}
function nuriAbsurdReview(){
 ensureAbsurdState();
 const recent=state.absurdHistory.slice(-5);
 if(!recent.length)return '';
 return `<div class="life-review-title">태빈이의 황당한 기록 · ${state.absurdCount}회</div>
  <p class="life-review-sub">100가지 인생 목표를 하나씩 채우면서도 가끔은 엉뚱한 하루를 보냈어.</p>
  <div class="world-history">${recent.map(e=>`<div><strong>${e.age}살</strong><span>${nuriChoiceEscape(e.choice)} — ${nuriChoiceEscape(e.outcome)}</span></div>`).join('')}</div>`;
}

function currentSceneBand(age){
 if(age<3)return "baby-"+age;
 if(age<7)return "child";
 if(age<13)return "primary";
 if(age<16)return "middle";
 if(age<19)return "high";
 if(age<25)return "young";
 if(age<40)return "adult";
 if(age<60)return "midlife";
 if(age<80)return "older";
 return "elder";
}
// When a stage's authored scenes are used up, pair places with new situations.
const LIFE_SCENE_PLACES={
 child:'모래 놀이터|유치원 교실|그림책방|실내 놀이터|할머니 댁|어린이 도서관|유치원 정원|동네 빵집|골목 슈퍼|인형극장|작은 분수 광장|아파트 현관|유치원 식당|어린이 체험관|가족 거실|동물원'.split('|'),
 primary:'초등학교 운동장|과학 체험실|학교 도서실|통학 버스 정류장|동네 문구점|학교 옥상 정원|친구 집 거실|피아노 학원|방과 후 교실|지역 역사관|운동회 준비실|학교 앞 분식집|물놀이장|학급 회의실|동네 축구장|어린이 방송실'.split('|'),
 middle:'중학교 복도|동아리방|급식실 앞|자율학습실|교내 방송실|학교 체육관|악기 연습실|반 친구의 생일 모임|진로 체험 교실|스케이트장|교내 축제 천막|미술 준비실|토론 교실|과학 동아리 창고|청소년 쉼터|동네 운동장'.split('|'),
 high:'고등학교 교실|축제 무대 뒤|교내 진로 상담실|학교 신문 편집실|고등학교 복도|시험 공부 모임|미디어 실습실|동아리 발표장|학생회 회의실|봉사활동 장소|진학 설명회|모의 면접 대기실|졸업 사진 촬영장|교내 전시장|고등학교 실험실|버스 종점'.split('|'),
 young:'동네 원룸|지역 청년센터|공용 책상|취미 모임 작업실|이사 온 골목|스터디 카페|자취방 건물 옥상|빨래방|동네 공방|지역 축제 안내 부스|중고 장터|작은 공연장|공유 부엌|계절마다 여는 벼룩시장|진로 박람회|친구의 작업실'.split('|'),
 adult:'프로젝트 준비실|거래처 휴게실|출근길 지하철역|업무 교육장|동네 식당|공동 창고|주말 취미 교실|지역 행사 준비실|단골 세탁소|장보기 시장|직장인 운동 모임|저녁 강좌 교실|공유 오피스|출장 대합실|동네 서점|지역 봉사 센터'.split('|'),
 midlife:'동네 협동조합 사무실|지역 전시관|체육 동호회 운동장|마을 회의실|저녁 강연장|해변 산책로|오랜 친구의 가게|아파트 주민 회의실|동문 모임 장소|가족 모임 식당|봄맞이 원예 교실|자원봉사 물류실|문화회관 강의실|학창 시절 통학길|동네 재봉 공방|여행자 안내소'.split('|'),
 older:'주민센터 민원실|동네 둘레길 쉼터|성인 문해학교|정원 가꾸기 모임|복지관 식당|지역 사진 전시실|기차역 대합실|새로 이사한 이웃의 집|시립 도서관 낭독실|공동 텃밭 쉼터|마을 라디오 방송국|가족이 모인 부엌|보건소 휴게실|동네 음악회 객석|한옥 마당|자전거 수리점'.split('|'),
 elder:'동네 공원 정자|마을 옛 사진 자료실|경로당 바둑방|평생학습관 수업방|동네 빵집 앞 테이블|지역 나눔 장터|온실 입구|오래된 시장 골목|미술관 휴게실|마을 버스 회차장|도서관 햇빛 드는 자리|공원 느티나무 아래|역사관 안내소|주민센터 편지 쓰기 모임|동네 꽃집|주말 가족 식탁'.split('|')
};
const LIFE_SCENE_SITUATIONS=[
 ["옆 사람이 이름표 없는 가방을 발견하고 태빈이에게 어떻게 하면 좋겠냐고 물어.",[["가방을 맡길 곳을 확인하기","i","s"],["주변 사람에게 주인을 아는지 묻기","s","h"],["주인에게 상황을 알릴 안내 메모 쓰기","c","i"],["가방을 발견한 사람과 함께 관리자에게 설명하기","m","s"]]],
 ["안내판이 바뀌어서 온 사람들이 엉뚱한 쪽으로 가고 있어.",[["정확한 위치를 확인해 알려주기","i","s"],["길을 잃은 사람과 함께 이동하기","s","h"],["방향이 잘 보이는 안내 그림 그리기","c","i"],["입구에서 먼저 온 사람들에게 길 설명하기","m","s"]]],
 ["오래된 사진을 정리하던 사람이 같은 자리를 오늘 다시 찍어 보자고 해.",[["사진의 날짜와 장소를 알아보기","i","s"],["사진을 보며 그날 이야기를 듣기","s","h"],["옛 사진과 같은 구도로 찍어 보기","c","i"],["예전과 지금 달라진 점을 이야기하기","m","s"]]],
 ["새로 온 사람이 이미 친해 보이는 사람들 사이에 끼기 어려워해.",[["자주 나오는 이야기부터 간단히 알려주기","i","s"],["옆자리를 비워 같이 앉기","s","h"],["함께 답할 수 있는 질문 만들기","c","i"],["서로 이름을 소개할 자리를 마련하기","m","s"]]],
 ["갑자기 소나기가 내려 밖에 나가려던 사람들이 한쪽에 모였어.",[["비가 그치는 시간과 우회로 확인하기","i","s"],["잠시 머물 사람들의 자리를 만들기","s","h"],["떨어지는 빗소리로 짧은 리듬 만들기","c","i"],["비가 그치기까지 할 만한 놀이 제안하기","m","s"]]],
 ["누군가 여러 사람에게 부탁해 놓은 일이 아무도 맡지 않은 채 남았어.",[["남은 일과 시간을 정리하기","i","s"],["작은 부분부터 나누어 맡기","s","h"],["손이 덜 가는 방법 생각해 보기","c","i"],["급한 일부터 해 보자고 제안하기","m","s"]]],
 ["오래 사용하던 물건이 부러졌지만, 누군가는 고쳐 쓸 수 있을 거라고 생각해.",[["어느 부분을 교체할 수 있는지 살피기","i","s"],["고치는 법을 아는 사람에게 물어보기","s","h"],["남은 재료로 다른 쓰임 만들기","c","i"],["고쳐서 써 본 경험을 들려주기","m","s"]]],
 ["누군가 떨어진 쪽지를 주웠어. ‘고마웠어요’라는 말만 적혀 있어.",[["쪽지가 떨어진 자리를 기억해 두기","i","s"],["함께 있던 사람에게 쪽지 이야기 들려주기","s","h"],["태빈이도 누군가에게 고마운 일을 적기","c","i"],["쪽지 주인에게 돌려줄 방법을 제안하기","m","s"]]],
 ["두 사람이 같은 시간을 써야 하는데 서로에게 먼저 양보해 달라고 해.",[["각자 꼭 필요한 시간을 계산해 보기","i","s"],["각자의 사정을 듣고 시간을 나누기","s","h"],["같은 시간에 함께 할 수 있는 방식 찾기","c","i"],["두 사람이 해 볼 수 있는 순서를 제안하기","m","s"]]],
 ["한 사람이 만든 결과물을 보여주고 싶은데, 누구도 아직 본 사람이 없어.",[["만든 과정부터 차근차근 물어보기","i","s"],["시간을 내어 옆에서 함께 보기","s","h"],["잘 드러나는 곳에 결과물 놓기","c","i"],["사람들을 불러 직접 소개할 기회 만들기","m","s"]]],
 ["멀리서 평소 듣지 못한 소리가 들려. 사람들은 하던 말을 멈추고 귀를 기울여.",[["어디에서 들리는 소리인지 살피기","i","s"],["먼저 들은 사람은 어떻게 느꼈는지 묻기","s","h"],["소리의 높낮이를 그림으로 표현하기","c","i"],["직접 흉내 내며 들은 소리를 설명하기","m","s"]]],
 ["평소에는 여유 있던 곳에 오늘따라 긴 줄이 생겨. 기다리던 사람이 길을 못 찾고 있어.",[["줄이 생긴 이유와 예상 시간 알아보기","i","s"],["늦게 온 사람에게 줄 끝 알려주기","s","h"],["기다리는 동안 읽을 안내문을 눈에 띄게 놓기","c","i"],["앞뒤 사람들과 혼잡을 줄일 방법 이야기하기","m","s"]]],
 ["빌려준 물건이 돌아왔는데 안에 작은 감사 카드가 함께 들어 있어.",[["카드와 물건을 어디에 둘지 정리하기","i","s"],["빌려 간 사람에게 잘 돌려줘서 고맙다고 하기","s","h"],["카드를 보관할 작은 종이집 접기","c","i"],["물건이 어떻게 도움이 됐는지 물어보기","m","s"]]],
 ["오늘 할 일을 적어 둔 종이가 찢어져 반쪽만 남았어.",[["기억나는 일과 시간을 먼저 써 보기","i","s"],["같이 있던 사람에게 빠진 일 물어보기","s","h"],["한눈에 보이는 새 일정표 만들기","c","i"],["확인한 순서를 모인 사람들에게 설명하기","m","s"]]],
 ["사람들이 알려진 방법을 계속 쓰고 있는데, 한 사람이 새 방법을 제안했어.",[["두 방법으로 각각 작은 부분만 해 보기","i","s"],["새 방법을 낸 사람이 설명할 수 있게 돕기","s","h"],["좋은 점을 섞어 세 번째 방법 만들기","c","i"],["한 가지 방법을 함께 시험하자고 제안하기","m","s"]]],
 ["쓰지 않는 물건이 한곳에 쌓였어. 그대로 두면 내일도 길을 막을 것 같아.",[["쓸 수 있는 것과 버릴 것을 나누기","i","s"],["필요한 사람이 있는지 알아보기","s","h"],["모두 꺼내기 편하도록 자리를 다시 꾸미기","c","i"],["정리할 시간을 정해 함께하자고 말하기","m","s"]]],
 ["정해진 시간보다 조금 일찍 일이 끝났어. 한 사람이 오늘을 기념하고 싶대.",[["짧은 기록에 오늘의 날짜와 일 적기","i","s"],["함께했던 사람들에게 이야기를 듣기","s","h"],["기억에 남은 순간을 작은 그림으로 그리기","c","i"],["사람들에게 좋았던 순간을 하나씩 물어보기","m","s"]]],
 ["평소 말을 아끼던 사람이 자기 실수 이야기를 처음으로 들려줘.",[["무엇을 배웠는지 차분히 묻기","i","s"],["말을 끊지 않고 마지막까지 듣기","s","h"],["실수에서 나온 재미있는 발견을 적어 보기","c","i"],["태빈이도 비슷한 경험이 있었다고 이야기하기","m","s"]]],
 ["모인 사람들이 다음에 다시 만나자는 데는 동의했지만 시간은 아직 못 정했어.",[["가능한 날짜를 두 개로 좁히기","i","s"],["빠짐없이 각자의 가능한 시간을 묻기","s","h"],["누구나 확인할 수 있는 약속 표 만들기","c","i"],["가장 많이 만날 수 있는 시간을 말해 보기","m","s"]]],
 ["늘 닫혀 있던 문이 열렸어. 안을 구경해도 되는지 사람들끼리 의견이 갈려.",[["문 앞 안내를 먼저 읽어 보기","i","s"],["사용하는 사람에게 들어가도 되는지 묻기","s","h"],["밖에서 보이는 모습으로 안을 그려 보기","c","i"],["궁금한 점을 하나씩 모아 물어보기","m","s"]]]
];
function newLifeSituation(band,slot,age){
 const places=LIFE_SCENE_PLACES[band];
 if(!places){
  // Extra scenes are only needed if an older save or repeated speed changes exhaust the baby cards.
  const scenes=SCENE_BANK[band];
  const [prompt,actions]=scenes[slot%scenes.length];
  return [age+'살 태빈이의 돌봄 기록 '+(slot+1)+'번째 장면이야. '+prompt.replace('처음으로 ','').replace('첫 걸음을','걸음을'),actions];
 }
 const placeIndex=slot%places.length;
 const cycle=Math.floor(slot/places.length);
 const situationIndex=(cycle+placeIndex*3)%LIFE_SCENE_SITUATIONS.length;
 const [incident,actions]=LIFE_SCENE_SITUATIONS[situationIndex];
 const place=places[placeIndex];
 const intro=cycle<LIFE_SCENE_SITUATIONS.length?'태빈이가 '+place+'에 있을 때야. ':place+'에서 보낸 '+(slot+1)+'번째 이야기야. ';
 if(age<13)return [intro+incident,actions];
 const detour=LIFE_SCENE_DETOURS[situationIndex];
 return [intro+incident,[...actions.slice(0,3),[detour,'m','s']]];
}
const LIFE_SCENE_DETOURS=[
 "주인이 올 때까지 도움 요청을 미루기","모르는 길을 아는 척 알려 주기","옛 사진에 나온 사람의 기억을 비웃기","새로 온 사람을 모른 척하기",
 "젖은 사람이 알아서 하라며 자리 차지하기","맡은 일을 모르는 척 자리를 비우기","고장 난 물건을 말없이 버리기","쪽지에 적힌 말을 장난으로 퍼뜨리기",
 "다른 사람 시간을 묻지 않고 먼저 써 버리기","보지도 않고 별로라고 말하기","누가 낸 소리인지 확인도 없이 탓하기","먼저 온 사람을 제치고 들어가기",
 "감사 카드를 비웃으며 돌려주기","찢어진 일정표를 본 사람이 해결하라고 하기","새 방법을 들어보지도 않고 반대하기","쌓인 물건을 다른 통로로 밀어두기",
 "끝난 일을 자기 공으로만 이야기하기","들었던 실수를 다른 사람에게 퍼뜨리기","모두 괜찮다고 답했다고 지레 말하기","허락을 확인하지 않고 먼저 들어가기"
];
function familySceneOffset(){return ({wealthy:1,frugal:2,supportive:3})[state.family]||0;}
function dailySceneCursor(key){
 const value=Number(state.dailySceneProgress?.[key]);
 return Number.isSafeInteger(value)&&value>=0?value:0;
}
let activeDailyScene=null;
function advanceSceneTurn(){
 if(activeDailyScene){
  const key=activeDailyScene.poolKey;
  state.dailySceneProgress={...state.dailySceneProgress,[key]:dailySceneCursor(key)+1};
  activeDailyScene=null;
 }
 state.sceneTurn=Math.max(0,Number(state.sceneTurn)||0)+1;
}
function sceneForTurn(age){
 const sequence=Math.max(0,Math.floor(Number(state.sceneTurn)||0));
 const funScene=nuriAbsurdSceneForTurn(age,sequence);
 if(funScene)return funScene;
 const routeScenes=routeSceneBank(age);
 const band=currentSceneBand(age);
 const routeKey='path-'+state.lifeRoute;
 const useRoute=routeScenes&&dailySceneCursor(routeKey)<routeScenes.length;
 const poolKey=useRoute?routeKey:band;
 const scenes=useRoute?routeScenes:SCENE_BANK[band];
 const turn=dailySceneCursor(poolKey);
 const pos=(turn+familySceneOffset())%scenes.length;
 const scene=turn<scenes.length?scenes[pos]:newLifeSituation(band,turn-scenes.length,age);
 let lead="";
 if(turn<scenes.length){
  if(age>=16&&age<19&&state.schoolPath&&sequence%3===1)lead=state.schoolPath+" 생활 중, ";
  else if(age>=19&&age<25&&state.adultPath&&sequence%3===2)lead=state.lifeRoute==="military"?"복무 중, ":state.lifeRoute==="work"?"직장에서, ":state.lifeRoute==="university"?"대학생 태빈이, ":"진로를 준비하며, ";
  else if(age>=25&&sequence%6===3)lead="요즘 "+bestCareer().name+" 분야에 관심이 많은 태빈이. ";
 }
 return {prompt:lead+scene[0],actions:scene[1],id:poolKey+"-"+turn,poolKey};
}
function sceneChoices(scene,age){
 if(scene.absurd)return nuriAbsurdChoices(scene,age);
 const used=new Set();
 return scene.actions.map(([label,gainCode,costCode],index)=>{
   // Each click grows two skills and consumes energy, including recovery choices.
   if(age>=13&&index===2&&(Number(state.detourPoints)||0)>=2){
     const label=age<20?"🤝 친구에게 실수를 인정하고 사과하기":"🤝 상대에게 책임을 인정하고 신뢰 회복하기";
     const effect=growthEffect(["social",5,"charm",2],label,index,used);
     return {label,effect,recovery:true,sceneId:scene.id,
       desc:"사과하고 다시 시작할 기회",
       outcome:"잘못을 인정하고 진심으로 사과했어. 관계를 회복할 작은 기회가 생겼어."};
   }
   const gain=SCENE_STATS[gainCode], cost=SCENE_STATS[costCode];
   const risky=age>=13&&index===3;
   const original=[gain,gain==="money"?18:4,cost,cost==="money"?-12:-2];
   const effect=growthEffect(original,label,index,used);
   const description=risky?"⚠️ 관계나 미래에 좋지 않은 영향이 남을 수 있어.":"";
   return {label,effect,desc:description,detour:risky,sceneId:scene.id,
     outcome:risky?"순간의 편함을 택했지만 주변 사람의 신뢰에 영향을 남겼어.":"이번 경험으로 두 가지 능력을 키웠어. 체력은 조금 소모했어."};
 });
}
function choiceOutcome(chosen,age){
 const clean=String(chosen.label).replace(/^[^가-힣]+/u,"");
 const consequence=chosen.outcome||"태빈이는 그 선택으로 새로운 경험을 쌓았어.";
 state.lastOutcome="📌 "+age+"살 · "+clean+" → "+consequence;
}


// ===== TAEBIN LIFE: a playthrough-specific life review =====
function lifeReviewEscape(value){
 return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function lifeReviewRoute(){
 const route=state.lifeRoute||'';
 if(route==='military')return state.serviceCompleted?'군 복무 후 새로운 길':'군 복무';
 if(route==='university')return '대학과 배움';
 if(route==='prep')return '진로 탐색';
 if(state.workStatus==='employed')return (state.jobTitle||bestCareer().job||'직장인')+' · 직장생활';
 return state.adultPath ? String(state.adultPath).replace(/[\u{1F300}-\u{1FAFF}]/gu,'').trim() : '자신의 길을 찾아가는 시간';
}
function lifeReviewTrait(){
 const scores=[
  {id:'intelligence',name:'배우고 탐구하는 삶',word:'새로운 것을 알아가는 순간'},
  {id:'creativity',name:'상상하고 만드는 삶',word:'아이디어를 현실로 바꾸는 순간'},
  {id:'social',name:'사람들과 함께한 삶',word:'함께하고 마음을 나누는 순간'},
  {id:'charm',name:'자신만의 색을 찾은 삶',word:'자신의 개성을 표현하는 순간'}
 ];
 return scores.reduce((a,b)=>(Number(state.stats?.[b.id])||0)>(Number(state.stats?.[a.id])||0)?b:a);
}
function lifeReviewMilestones(){
 const ageLimit=Math.max(0,Math.floor(Number(state.age)||0));
 const moments=[];const seen=new Set();
 function add(age,title,desc,priority=5){
  const a=Math.max(0,Math.min(ageLimit,Math.floor(Number(age)||0)));
  const t=String(title||'').trim(),d=String(desc||'').trim();
  if(!t)return;
  const key=a+'|'+t.replace(/[^가-힣a-z0-9]/gi,'').slice(0,45);
  if(seen.has(key))return;seen.add(key);
  moments.push({age:a,title:t,desc:d,priority,order:moments.length});
 }
 const familyName=families[state.family]?.name||'한 가정';
 add(0,'🏡 첫 페이지 — '+familyName,'새로운 가정에서 태빈이의 이야기가 시작됐어.',1);
 if(state.schoolPath&&ageLimit>=16)add(16,'🏫 학교에서 정한 방향',state.schoolPath+'을(를) 선택했어.',2);
 if(state.adultPath&&ageLimit>=19)add(19,'🧭 성인으로서 내린 결정',state.adultPath+'을(를) 선택했어.',2);
 // Real decisions from the story journal, including the military, university and company story arcs.
 const journal=Array.isArray(state.storyJournal)?state.storyJournal:[];
 for(const entry of journal){
  if(!entry||Number(entry.age)>ageLimit)continue;
  const choice=entry.choice?'선택: '+String(entry.choice):'';
  const outcome=entry.outcome?'결과: '+String(entry.outcome):'';
  add(entry.age,'📖 '+String(entry.title||'인생의 특별한 순간'),[choice,outcome].filter(Boolean).join('\n'),3);
 }
 const romance=ensureRomance();
 for(const moment of romance.history){if(Number(moment.age)<=ageLimit)add(moment.age,'♡ '+moment.title,moment.details,4);}
 const photoAlbum=ensurePhotoAlbum();
 for(const ph of photoAlbum.history){if(Number(ph.age)<=ageLimit)add(ph.age,'📸 '+ph.title,ph.reason+' · '+ph.desc,4);}
 // Turning-point decisions and meaningful consequences from older saves are also included.
 const lines=Array.isArray(state.log)?state.log:[];
 const important=/전환점 선택|인생 진로 선택|첫 출근|입사|전역|면접|승진|이직|졸업|신뢰가 흔들|신뢰를 회복|건강을 회복|인생의 전환점/;
 let found=0;
 for(const line of lines){
  const str=String(line||'');
  if(!important.test(str)||str.includes('인생의 마지막 기록'))continue;
  const ageMatch=str.match(/(?:^|\s|[🎞️📖💼🪖🎓])\s*(\d{1,3})살/);
  if(!ageMatch)continue;
  const a=Number(ageMatch[1]);if(a>ageLimit)continue;
  let description=str.replace(/^.*?\d{1,3}살\s*[·:]?\s*/,'').trim().slice(0,135);
  if(!description||/급여 수령|생활 지원금 수령/.test(description))continue;
  // Don't list the generic route-choice log on top of the same age's route summary.
  if(description.includes('인생 진로 선택')&&state.adultPath)continue;
  add(a,'✦ '+description.slice(0,50),description.length>50?description:'',6);
  if(++found>=22)break;
 }
 add(ageLimit,'🌷 마지막 페이지','태빈이가 살아온 '+ageLimit+'년의 기록이 여기에서 마무리됐어.',1);
 return moments.sort((a,b)=>a.age-b.age||a.priority-b.priority||a.order-b.order).slice(0,50);
}
function lifeReviewNarrative(){
 const trait=lifeReviewTrait();
 const familyName=families[state.family]?.name||'한 가정';
 const intro='태빈이는 '+familyName+'에서 태어나 '+(state.age||0)+'살까지 자신만의 선택을 이어 왔어.';
 const school=state.schoolPath?' 학교에서는 '+state.schoolPath+'을(를) 선택했고,':'';
 const adult=state.adultPath?' 성인이 되어서는 '+state.adultPath+'이라는 방향을 골랐어.':'';
 const actualWork=state.workStatus==='employed'?' '+(state.jobCompany||'회사')+'에서 '+(state.jobTitle||'일')+'을(를) 경험했어.':'';
 const memoryCount=Array.isArray(state.storyJournal)?state.storyJournal.length:0;
 const story=memoryCount?' '+memoryCount+'개의 중요한 이야기가 앨범에 남았어.':'';
 const lesson=Number(state.detourPoints)>0?' 돌아보면 아쉬웠던 선택도 있지만, 그 경험 역시 태빈이의 이야기 일부야.':'';
 return intro+school+adult+actualWork+' 특히 '+trait.word+'을(를) 많이 선택한 인생이었어.'+story+lesson+romanceLifeSummary()+' '+worldLifeSummary();
}
function renderLifeReviewModal(){
 if(state.alive){renderMenuModal();return;}
 ensureStory();ensureCareer();ensureLifeArc();
 const trait=lifeReviewTrait();
 const moments=lifeReviewMilestones();
 const total=Math.max(0,Number(state.totalChoices)||0);
 const archive=Array.isArray(state.storyJournal)?state.storyJournal.length:0;
 const route=lifeReviewRoute();
 const age=Math.max(0,Number(state.age)||0);
 const content=`
 <div class="life-review-cover">
  <div class="life-review-eyebrow">TAEBIN LIFE · MY LIFE STORY</div>
  <h3>🌼 ${lifeReviewEscape(trait.name)}</h3>
  <p>${lifeReviewEscape(lifeReviewNarrative())}</p>
 </div>
 <div class="life-review-snapshot">
  <div><small>살아온 시간</small><b>${age}살</b></div>
  <div><small>인생의 방향</small><b>${lifeReviewEscape(route)}</b></div>
  <div><small>내가 한 선택</small><b>${total.toLocaleString('ko-KR')}번</b></div>
  <div><small>기록된 이야기</small><b>${archive}장</b></div>
 </div>
  <div class="life-review-title">🌟 한태빈이 이룬 인생 목표</div>
  <p class="life-review-sub">100가지 목표 중 ${typeof window.taebinGoalCount==='function'?window.taebinGoalCount():0}개 달성! ${state.taebinAllGoalsAchieved?'모든 버킷리스트를 완주했어.':'아직 남은 꿈은 다음 인생에서 다시 도전해 볼 수 있어.'} · 마지막 순자산 ${formatWon(nuriNetWorth())}</p>
  ${worldReviewMarkup()}
  ${nuriAbsurdReview()}
  <div class="life-review-title">♡ 관계의 이야기</div><p class="life-review-sub">${lifeReviewEscape(romanceLifeSummary())}</p>
 <div class="life-review-title">✨ 태빈이가 걸어온 길</div>
 <p class="life-review-sub">실제로 선택했던 사건을 시간순으로 정리했어. 플레이마다 서로 다른 인생 기록이 남아.</p>
 <div class="life-review-timeline">${moments.map(m=>`
  <article class="life-review-event">
   <div class="life-review-age">${m.age}살</div>
   <strong>${lifeReviewEscape(m.title)}</strong>
   ${m.desc?`<p>${lifeReviewEscape(m.desc)}</p>`:''}
  </article>`).join('')}</div>
 <div class="life-review-title">🌙 마지막 기록</div>
 <p class="life-review-sub">${lifeReviewEscape(state.deathCause||'태빈이의 인생이 마무리됐어.')} · 마지막 보유 금액 ${lifeReviewEscape(formatWon(state.money))} · 가장 성장한 능력 ${lifeReviewEscape(labels[trait.id]||trait.id)} ${Math.round((Number(state.stats?.[trait.id])||0)*10)/10}</p>
 <div class="life-review-actions">
  <button class="modal-action" onclick="openAppModal('story')">📖 스토리 앨범 더 보기</button>
  <button class="replay-button" onclick="closeAppModal();resetGame(true)">↻ 새로운 인생 시작하기</button>
 </div>
 <p class="life-review-footnote">이 인생 회고록은 현재 게임 저장 기록으로 만들어졌어. 새 게임을 시작하면 이전 기록은 초기화돼.</p>`;
 modalHeader('태빈이의 인생 회고록','TAEBIN LIFE · THE END');
 document.getElementById('appModalBody').innerHTML=content;
 document.querySelector('.app-modal-card')?.scrollTo?.(0,0);
}

let currentChoices=[];
function savedChoiceOptions(event){
 return Array.isArray(event?.options)?event.options.filter(option=>typeof option?.label==="string"&&option.label.trim()):[];
}
function restorePendingChoices(){
 if(!state.alive)return;
 const turningPoint=state.pendingTurningPoint;
 if(turningPoint){
  const options=savedChoiceOptions(turningPoint);
  if(options.length)turningPoint.options=options;
  else {
   const event=turningPoint.age===state.age?turningPointEvents[state.age]:null;
   state.pendingTurningPoint=event?{age:state.age,...event}:null;
  }
 }
 const story=state.pendingStory;
 if(story){
  const options=savedChoiceOptions(story);
  if(options.length)story.options=options;
  else {
   state.pendingStory=null;
   if(!story.fromLifeArc&&!story.fromRomance&&story.age===state.age){
    ensureStory();
    const chapter=familyStoryChapter(state.age);
    if(chapter&&!state.storyJournal.some(entry=>entry?.age===state.age&&entry.title===chapter.title)){
     state.storySeen=state.storySeen.filter(age=>age!==state.age);
     maybeStartStory(state.age);
    }
   }
  }
 }
 showNextLifeArc();
}
function render(){
 restorePendingChoices();
 ensureLifeHealth();
 let s=state.stats, age=state.age??0;
 // Older saved games used 5 choices/day; prevent an old gauge overflowing the new speed.
 state.progress=Math.max(0,Math.min(growthRequired(age)-1,Math.floor(Number(state.progress)||0)));
 let progress=state.progress;
 const speed=gameSpeed();
 document.getElementById("tempoHint").textContent=speed.steps+"번 선택하면 다음 날 · 3일 지나면 1살 성장";
 document.getElementById("tempoQuickButton").textContent="⚙ 속도 변경 · "+speed.name+" ↻";
 const portrait=document.getElementById("nuriImg");
 const newPortrait=taebinAvatar(age);
 if(portrait.dataset.drawnAge!==String(age)){
  portrait.src=newPortrait;
  portrait.dataset.drawnAge=String(age);
  portrait.classList.remove("age-pop");
  void portrait.offsetWidth;
  if(!state.settings?.reduceMotion)portrait.classList.add("age-pop");
 }
 const growthTag=document.getElementById("growthAgeTag");if(growthTag)growthTag.textContent="🧬 "+age+"살 · "+agingStage(age)+" · 외형 변화 적용";
 document.getElementById("stagePill").textContent=age+"살 · "+stageName(age);
 const arcPill=document.getElementById("lifePathPill");if(arcPill)arcPill.textContent=lifeRouteLabel();
 document.getElementById("ageLabel").textContent=age+"살 · "+stageName(age);
 document.getElementById("lifeLabel").textContent=state.alive?"체력과 건강에 따라 수명이 달라지는 인생 시뮬레이션":"태빈이의 인생이 마무리됐어";
 document.getElementById("cash").textContent="💰 "+formatWon(state.money);
 checkWealthGoal();updateWealthHud();
 let hp=Math.max(0,Number(s.health)||0);
 let hpLevel=hp<30?"low":hp<60?"medium":"good";
 document.getElementById("healthValue").textContent=hp+" / 100";
 document.getElementById("healthFill").style.width=Math.min(100,hp)+"%";
 document.getElementById("healthFill").className="health-fill"+(hpLevel==="good"?"":" "+hpLevel);
 document.getElementById("healthTrack").setAttribute("aria-valuenow",String(hp));
 let hpStatus=document.getElementById("healthStatus");
 hpStatus.textContent=hp<=10?"탈진 · 강제 휴식 / 비용 발생":hp<30?"위험 · 성장 -40% · 행복 -1":hp<60?"주의 · 성장 효율 -20%":"좋음 · 능력치 정상 성장";
 document.getElementById("fatigueEffect").textContent=hp<=10?"⚠️ 다음 선택에서 강제 휴식 · 비용 5,000원":hp<30?"⚠️ 선택마다 행복 -1 · 피로 이벤트 가능":hp<60?"⚡ 체력 부족으로 능력치 성장량 감소":"✨ 건강한 상태 · 능력치 성장 페널티 없음";
 document.getElementById("healthRiskValue").textContent=healthRiskSummary();
 document.getElementById("healthRiskFill").style.width=Math.min(100,state.healthRisk)+"%";
 document.getElementById("healthRiskPanel").classList.toggle("is-warning",state.healthRisk>=50);
 document.getElementById("healthRiskHint").textContent=state.illnessSeverity?"건강 문제가 생겼어. 휴식과 회복으로 위험을 낮춰 보자.":"휴식과 건강 관리로 위험을 낮출 수 있어. 게임 안의 가상 수치야.";
 const restButton=document.getElementById("restButton");
 restButton.disabled=!state.alive||hp>=85||!!state.pendingTurningPoint||!!state.pendingStory;
 restButton.title=hp>=85?"체력이 85 이상이면 쉴 필요가 없어":"하루를 사용해 체력을 12 회복하고 행복을 1 올려";
 hpStatus.className=hpLevel==="good"?"":" "+hpLevel;
 document.getElementById("day").textContent="DAY "+((Number(state.yearDay)||0)+1);
 document.getElementById("stats").innerHTML=Object.entries(labels).filter(([k])=>k!=="money"&&k!=="health").map(([k,n])=>{
  const val=Number(s[k])||0;
  const range=k==="happiness"?100:Math.max(100,Math.ceil(val/100)*100);
  return `<div class="stat"><div class="statline"><span>${n}${k==="happiness"?"":" ∞"}</span><b>${val.toLocaleString("ko-KR")}${k==="happiness"?" / 100":""}</b></div><div class="bar"><div class="fill" style="width:${Math.min(100,Math.max(0,val/range*100))}%"></div></div></div>`;
 }).join("");
 const career=bestCareer();
 document.getElementById("statusText").textContent=state.alive?((age>=80?"태빈이는 여유로운 노년을 보내고 있어.":stages[stageForAge(age)].desc)+(state.settings?.careerHints!==false&&age>=7?" · "+career.emoji+" 관심 진로: "+career.name+(age>=20?" · 추천 직업: "+career.job:""):"")+(age>=13&&state.detourPoints?" · ⚠️ 신뢰 회복이 필요한 선택 "+state.detourPoints+"회":"")):"태빈이의 이야기가 끝났어.";
 let needed=growthRequired(age);
 document.getElementById("progressText").textContent=progress+" / "+needed+"회 완료";
 document.getElementById("progressFill").style.width=(Math.min(100,progress/needed*100))+"%";
 const scene=state.alive?sceneForTurn(age):null;
 activeDailyScene=scene;
 document.getElementById("chapter").textContent=state.alive?(stageName(age)+" · "+age+"살 · 오늘의 선택"):"태빈이의 인생 기록";
 if(state.comedyLine){document.getElementById("comedyLine").textContent=state.comedyLine;}
 const sceneResult=document.getElementById("sceneResult");
 sceneResult.textContent=state.lastOutcome||"";
 sceneResult.classList.toggle("active",!!state.lastOutcome);
 document.getElementById("story").textContent=state.alive?(age===16&&!state.schoolPath?"고등학교 진학을 결정해야 해. 어떤 학교에 갈까?":age===19&&!state.adultPath?"고등학교를 마치고 진로를 정할 시간이야. 대학은 입학 면접, 취업은 채용 면접이 이어지고, 군대는 20살 입대야.":scene.prompt):"태빈이는 "+age+"살에 인생을 마무리했어. 마지막 기록: "+state.deathCause+". 태빈이가 남긴 이야기를 돌아봐.";
 if(!state.alive){
  document.getElementById("choices").innerHTML=`<div class="life-end" style="grid-column:1/-1"><div class="end-kicker">TAEBIN LIFE · THE END</div><h3>🌼 태빈이의 인생 이야기</h3><p class="end-sub">${age}살 · ${lifeReviewEscape(state.deathCause)}</p><div class="end-results"><div><small>살아온 시간</small><b>${age}살</b></div><div><small>선택한 행동</small><b>${Math.max(0,state.totalChoices||0)}번</b></div><div><small>인생의 방향</small><b>${lifeReviewEscape(lifeReviewRoute())}</b></div><div><small>남은 돈</small><b>${formatWon(state.money)}</b></div></div><p class="end-note">어린 시절부터 마지막 순간까지, 태빈이의 선택을 한 편의 이야기로 되돌아봐.</p><button class="replay-button" onclick="openAppModal('lifeReview')">📜 나의 인생 회고록 열기</button><button class="smallbtn" onclick="resetGame(true)">↻ 새로운 인생 시작하기</button></div>`;
 }else{
  let opts;
  if(age===16&&!state.schoolPath)opts=fourLifeChoices(schoolChoices().slice(0,3).map(x=>({label:x[0],desc:x[1],effect:x[2],special:"school"})),age,false);
  else if(age===19&&!state.adultPath)opts=adultChoices().map(x=>({label:x[0],desc:x[1]+(state.settings?.careerHints!==false?" · 현재 적성: "+bestCareer().name:""),effect:x[2],special:"adult"}));
  else {
   opts=sceneChoices(scene,age);
  }
  if(age===16&&!state.schoolPath||age===19&&!state.adultPath){
   const used=new Set();
   opts=opts.map((o,i)=>{
     const fx=growthEffect(o.effect,o.label,i,used);
     const intro=o.detour?"⚠️ 선택은 이후 관계에도 영향을 줄 수 있어.":(o.desc?o.desc.split(" · ")[0]:"");
     return {...o,effect:fx,desc:intro};
   });
  }
  currentChoices=opts;
  document.getElementById("choices").innerHTML=opts.map((o,n)=>nuriOptionCard(o,n,"choose")).join("");
 }
 refreshRomancePanel();
 ensureStory();
 document.getElementById("storyPathText").textContent=state.latestStory||"오래된 앨범의 첫 장. 태빈이의 선택에 따라 다음 이야기가 달라질 거야.";
 document.getElementById("storyPathProgress").textContent="선택한 스토리 "+state.storyJournal.length+"장 · 남은 장은 성장하면서 열려";
 document.getElementById("storyPathPanel").style.display=state.settings?.storyPanel===false?"none":"";
 document.getElementById("log").innerHTML=state.log.slice(-8).reverse().map(x=>"• "+x).join("<br>")||"아직 기록이 없어.";
 renderShop();
 worldRenderMain();
 renderTurningPoint();
 renderStoryOverlay();
 if(state.stockGoalPopup){state.stockGoalPopup=false;}
 if(!state.alive&&!state.lifeReviewSeen){
  state.justEnded=false;
  state.lifeReviewSeen=true;
  openAppModal('lifeReview');
  save();
 }else if(state.justEnded){state.justEnded=false;document.getElementById("storySection")?.scrollIntoView?.({behavior:"smooth",block:"start"});}
}
const nuriComedyLines=[
 "태빈이의 오늘의 목표: 대단한 어른 되기. 일단 양말부터 찾자.",
 "태빈이는 방금 계획을 세웠다. 계획을 실천할 계획은 내일 세울 예정이다.",
 "속보: 태빈이, 냉장고 문을 열고 왜 열었는지 잊어.",
 "태빈이의 자신감은 100점, 방향 감각은 아직 로딩 중.",
 "오늘도 태빈이는 최선을 다했다. 침대가 특히 감동했다.",
 "태빈이 왈: '저는 즉흥적인 게 아니라 계획에 유연한 거예요.'",
 "태빈이의 통장: 들어올 땐 반갑고 나갈 땐 빛의 속도.",
 "태빈이는 방금 작은 실수를 했다. 본인은 역사적인 시도라고 부른다.",
 "오늘의 명언: 간식은 배신하지 않는다. 마지막 한 입만 빼고.",
 "태빈이의 집중력은 짧지만, 딴생각의 세계관은 넓다."
];
function refreshNuriComedy(){
 const line=nuriComedyLines[Math.floor(Math.random()*nuriComedyLines.length)];
 const node=document.getElementById("comedyLine");
 if(node)node.textContent=line;
 if(state)state.comedyLine=line;
}

function choose(n){
 if(!state.alive||state.pendingTurningPoint||state.pendingStory)return;
 let age=state.age??0;
 let chosen=currentChoices[n]; if(!chosen)return;
 let effect=actualEffect(chosen.effect,true);
 const fatigueBefore=fatigueTier();
 state.totalChoices=Math.max(0,Number(state.totalChoices)||0)+1;
 if(/건강검진|정기검진|진료|건강 관리|꾸준히 운동|규칙적으로 운동/.test(chosen.label))adjustHealthRisk(-4);
 recordCareerChoice(chosen);
 recordWorldChoice(chosen);
 handleDetour(chosen,age);
 choiceOutcome(chosen,age);
 advanceSceneTurn();
 for(let i=0;i<effect.length;i+=2){
  let k=effect[i],v=effect[i+1];
  if(k==="money")state.money=Math.max(0,state.money+v);
  else state.stats[k]=limitStat(k,state.stats[k]+v);
 }
 nuriAbsurdAfterChoice(chosen,age);
 if(fatigueBefore>=2){
  state.stats.happiness=limitStat("happiness",state.stats.happiness-1);
  state.log.push("⚠️ 체력 부족: 집중 저하로 행복 -1, 능력치 성장 효율 감소");
 }
 let special=(age===16&&!state.schoolPath)||(age===19&&!state.adultPath);
 if(special){
  if(age===16)state.schoolPath=chosen.detour?"진학 준비를 미룬 시기":chosen.label;
  if(age===19){state.adultPath=chosen.detour?"진로를 고민하며 방황한 시기":chosen.label;setAdultLifeRoute(chosen);}
 }
 if(special&&age===19)maybeStartLifeArc(19);
 const currentDay=(Number(state.yearDay)||0)+1;
 state.log.push(age+"살 · DAY "+currentDay+" · 성장 "+((Number(state.progress)||0)+1)+"/"+growthRequired(age)+": "+chosen.label);
 state.progress=Math.min(growthRequired(age),(Number(state.progress)||0)+1);
 let dayAdvanced=false;
 if(state.progress>=growthRequired(age)){
  dayAdvanced=advanceOneDay();
 }
 if(!state.alive){render();save();return;}
 let rested=false,recovered=0;
 if(state.alive&&state.stats.health<=10){
  let before=state.stats.health;
  state.stats.health=limitStat("health",Math.max(35,before+25));
  adjustHealthRisk(3);
  recovered=state.stats.health-before;
  state.stats.happiness=limitStat("happiness",state.stats.happiness-2);
  state.money=Math.max(0,state.money-5);
  // Exhaustion causes a forced rest day. This is the only exception to
  // the normal rule that a day passes after filling the current growth gauge.
  if(!dayAdvanced){
   state.progress=growthRequired(age);
   dayAdvanced=advanceOneDay();
   if(!state.alive){render();save();return;}
  }
  state.log.push("⚠️ 탈진으로 강제 휴식: 체력 +"+recovered+", 행복 -2, 회복 비용 5,000원");
  state.lastOutcome="⚠️ 무리해서 탈진했어! 하루 휴식 · 행복 -2 · 비용 5,000원";
  rested=true;
 }
 if(state.pendingTurningPoint){
  // The life-event window is rendered after the regular screen refresh.
 } else if(rested){
  toast("⚠️ 탈진! 강제 휴식 · 비용 5,000원 · 체력 +"+recovered);
 } else if(dayAdvanced&&state.alive){
  toast(state.age>age?"3일이 지나 "+state.age+"살이 됐어!":"성장 게이지가 차서 DAY "+((Number(state.yearDay)||0)+1)+"로 넘어갔어!");
 } else if(special){
  toast("앞으로의 방향을 선택했어!");
 } else {
  toast("성장 게이지 "+state.progress+"/"+growthRequired(state.age)+" · DAY "+((Number(state.yearDay)||0)+1));
 }
 refreshNuriComedy();render();save();
}
function advance(){toast("선택지로 경험을 쌓으면 게이지가 차!")}
function checkLifeEvent(){if(state.age>=100)return; if(Math.random()<.1)randomDailyEvent();}
function advance(){toast("선택지를 고르면 자동으로 한 살 성장해!")}
function showShop(mode,btn){shopMode=mode;document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));btn.classList.add("active");renderShop()}
function renderShop(){document.getElementById("shop").innerHTML=upgrades[shopMode].map((u,i)=>`<button class="upgrade" onclick="buy(${i})" ${state.money<u[2]?"disabled":""}><span><b>${u[0]}</b><small>${u[1]}</small></span><span class="price">${formatWon(u[2])}</span></button>`).join("")}
function buy(i){let u=upgrades[shopMode][i];if(state.money<u[2])return toast("돈이 부족해!");state.money-=u[2];if(u[3]==="combo"){state.stats.health=limitStat("health",state.stats.health+8);state.stats.happiness=limitStat("happiness",state.stats.happiness+5)}else if(u[3]==="money")state.money+=u[4];else state.stats[u[3]]=limitStat(u[3],state.stats[u[3]]+u[4]);state.log.push(u[0]+" 구매");toast(u[0]+" 완료!");render();save()}
let toastTimer=null;
function toast(t){
 let el=document.getElementById("toast");el.textContent=t;el.classList.add("show");
 if(toastTimer!==null)clearTimeout(toastTimer);
 const duration=gameSpeed()===GAME_SPEEDS.turbo?520:gameSpeed()===GAME_SPEEDS.fast?850:1700;
 toastTimer=setTimeout(()=>{el.classList.remove("show");toastTimer=null;},duration);
}

const DEFAULT_SETTINGS={absurdEvents:true,largeText:false,reduceMotion:false,confirmReset:true,slowGrowth:true,randomEvents:true,careerHints:true,storyPanel:true,agingPortrait:true,gameSpeed:"fast",realisticLife:true};
const ITEM_CATALOG={
 fruit:{name:"과일 도시락",icon:"🍎",desc:"체력 +18 · 행복 -1",price:22,effect:["health",18,"happiness",-1]},
 tea:{name:"따뜻한 허브차",icon:"🍵",desc:"행복 +12 · 돈 -2,000원",price:18,effect:["happiness",12,"money",-2]},
 notebook:{name:"집중 노트",icon:"📓",desc:"지능 +10 · 행복 -2",price:26,effect:["intelligence",10,"happiness",-2]},
 artkit:{name:"미니 창작 키트",icon:"🎨",desc:"창의력 +10 · 돈 -3,000원",price:28,effect:["creativity",10,"money",-3]},
 friendship:{name:"우정 배지",icon:"🎖️",desc:"인간관계 +9 · 매력 -1",price:24,effect:["social",9,"charm",-1]},
 charm:{name:"행운의 리본",icon:"🎀",desc:"매력 +8 · 행복 -1",price:20,effect:["charm",8,"happiness",-1]}
};
let activeModal="menu";
function ensurePlayerExtras(){
 if(!state.items||typeof state.items!=="object")state.items={};
 if(!state.settings||typeof state.settings!=="object")state.settings={...DEFAULT_SETTINGS};
 state.settings={...DEFAULT_SETTINGS,...state.settings};
}
function applySettings(){
 ensurePlayerExtras();
 document.body.classList.toggle("large-text",!!state.settings.largeText);
 document.documentElement.classList.toggle("reduce-motion",!!state.settings.reduceMotion);
 document.documentElement.classList.toggle("fast-tempo",state.settings.gameSpeed==="fast");
 document.documentElement.classList.toggle("turbo-tempo",state.settings.gameSpeed==="turbo");
 const storyPanel=document.getElementById("storyPathPanel");if(storyPanel)storyPanel.style.display=state.settings.storyPanel===false?"none":"";
}
function openAppModal(view="menu"){
 ensurePlayerExtras();
 activeModal=view;
 const modal=document.getElementById("appModal");
 modal.classList.add("open");
 modal.setAttribute("aria-hidden","false");
 if(view==="menu")renderMenuModal();
 else if(view==="settings")renderSettingsModal();
 else if(view==="inventory")renderInventoryModal();
 else if(view==="career")renderCareerModal();
 else if(view==="absurd")renderAbsurdAlbum();
 else if(view==="story")renderStoryJournal();
 else if(view==="growth")renderGrowthGalleryModal();

 else if(view==="account")window.nuriRenderAccountPanel();
 else if(view==="lifeReview")renderLifeReviewModal();
 else if(view==="relationship")renderRomanceModal();
 else if(view==="social")nuriRenderSocial();
 else if(view==="ranking")window.taebinRenderRanking?window.taebinRenderRanking():renderNuriPublicRanking();
 else if(view==="goals" && typeof window.renderTaebinGoalModal==='function')window.renderTaebinGoalModal();
 else if(view==="stocks")renderStockModal();
 else if(view==="crypto")renderNuriCrypto();
 else if(view==="certificates")renderNuriCertificates();
 else if(view==="vehicles")renderNuriVehicles();
 else if(view==="wealthGoal")renderWealthGoalModal();
 else if(['bank','realestate','business','children','credit','careerWorld','friends','talents','achievements'].includes(view))worldRender(view);
 modal.classList.toggle("life-review-open",view==="lifeReview");
}
function closeAppModal(){
 const modal=document.getElementById("appModal");
 modal.classList.remove("open", "life-review-open");
 activeModal="menu";
 modal.setAttribute("aria-hidden","true");
}
function modalHeader(title,eyebrow="TAEBIN LIFE"){
 document.getElementById("appModalEyebrow").textContent=eyebrow;
 document.getElementById("appModalTitle").textContent=title;
}
function renderMenuModal(){
 activeModal="menu";
 document.getElementById("appModal").classList.remove("life-review-open");
 modalHeader("메뉴","태빈이 키우기 · MENU");
 document.getElementById("appModalBody").innerHTML=`
  <div class="menu-grid">
   <button type="button" class="menu-tile" onclick="openAppModal('goals')"><span class="tile-icon">🌟</span><span><b>인생의 목표 100가지</b><small>직접 도전 · 달성 체크 · 100/100 완주</small></span></button>
   <button type="button" class="menu-tile" id="nuriUpdateMenuTile" onclick="window.nuriOpenUpdateStatus&&window.nuriOpenUpdateStatus()"><span class="tile-icon">📢</span><span><b>업데이트 현황</b><small>최신 버전 · 배포 내역 확인</small></span></button>
   <button type="button" class="menu-tile" onclick="window.nuriPreviewPrologue&&window.nuriPreviewPrologue()"><span class="tile-icon">📖</span><span><b>프롤로그 다시 보기</b><small>기존 저장을 유지하며 100칸 수첩 이야기 감상</small></span></button>
   <button type="button" class="menu-tile" onclick="openAppModal('account')"><span class="tile-icon">●</span><span><b>내 계정</b><small>로그인 상태 · 저장 동기화 · 로그아웃</small></span></button>
   <button class="menu-tile" onclick="openAppModal('absurd')"><span class="tile-icon">ㅋㅋ</span><span><b>황당 사건록</b><small>지나온 병맛 사건과 결과 모아보기</small></span></button>
   <button class="menu-tile" onclick="openAppModal('realestate')"><span class="tile-icon">🏠</span><span><b>부동산</b><small>매입 · 매도 · 임대 수익</small></span></button>
   <button type="button" class="menu-tile" onclick="openAppModal('bank')"><span class="tile-icon">💳</span><span><b>은행 · 내 통장</b><small>현금 입금 · 출금 · 거래 내역</small></span></button>
   <button class="menu-tile" onclick="openAppModal('business')"><span class="tile-icon">📈</span><span><b>창업·사업</b><small>8가지 업종 · 직원 채용·감원 · 확장</small></span></button>
   <button class="menu-tile" onclick="openAppModal('children')"><span class="tile-icon">👪</span><span><b>자녀·가족</b><small>자녀 성장 · 가족 관계</small></span></button>
   <button class="menu-tile" onclick="openAppModal('credit')"><span class="tile-icon">🏦</span><span><b>대출·신용</b><small>대출 · 이자 · 상환</small></span></button>
   <button class="menu-tile" onclick="openAppModal('careerWorld')"><span class="tile-icon">💼</span><span><b>월급·승진</b><small>연봉 · 실적 · 승진</small></span></button>
   <button class="menu-tile" onclick="openAppModal('friends')"><span class="tile-icon">🤝</span><span><b>주변 인물 · 친구와 라이벌</b><small>우정 · 경쟁 · 인물별 이야기</small></span></button>
   <button class="menu-tile" onclick="openAppModal('social')"><span class="tile-icon">📱</span><span><b>태빈이스타</b><small>게임 속 피드 · 팔로우 · 메시지</small></span></button>
   <button class="menu-tile" onclick="openAppModal('talents')"><span class="tile-icon">◈</span><span><b>재능·특기</b><small>타고난 재능 · 훈련</small></span></button>
   <button class="menu-tile" onclick="openAppModal('achievements')"><span class="tile-icon">★</span><span><b>업적·엔딩</b><small>목표 · 인생 유형 · 보상</small></span></button>
   <button class="menu-tile" onclick="openAppModal('relationship')"><span class="tile-icon">♡</span><span><b>연애 · 결혼</b><small>만남, 교제, 결혼생활, 이혼</small></span></button>
   <button class="menu-tile" onclick="openAppModal('stocks')"><span class="tile-icon">₩</span><span><b>주식 투자 · 가상 시장</b><small>가상 기업 매수·매도, 내 순자산 확인</small></span></button>
   <button type="button" class="menu-tile" onclick="openAppModal('crypto')"><span class="tile-icon">₿</span><span><b>비트코인</b><small>게임 시세 · 소수점 단위 매수·매도</small></span></button>
   <button type="button" class="menu-tile" onclick="openAppModal('certificates')"><span class="tile-icon">🏅</span><span><b>자격증</b><small>공부 · 시험 · 취득하면 연봉 보너스</small></span></button>
   <button type="button" class="menu-tile" onclick="openAppModal('vehicles')"><span class="tile-icon">🚲</span><span><b>탈것 · 내 차고</b><small>자전거·차량 구매, 이용 및 판매</small></span></button>
   <button class="menu-tile" onclick="openAppModal('inventory')"><span class="tile-icon">🎒</span><span><b>아이템 창</b><small>아이템 구매와 사용</small></span></button>
<button class="menu-tile" onclick="openAppModal('growth')"><span class="tile-icon">🧬</span><span><b>성장 앨범</b><small>아기부터 노년까지 실제 모습 비교</small></span></button><button class="menu-tile" onclick="openAppModal('story')"><span class="tile-icon">📖</span><span><b>스토리 앨범</b><small>나이에 따라 이어지는 태빈이의 이야기</small></span></button>
   ${!state.alive?'<button class="menu-tile" onclick="openAppModal(&quot;lifeReview&quot;)"><span class="tile-icon">📜</span><span><b>인생 회고록</b><small>태빈이가 걸어온 길 다시 보기</small></span></button>':''}
   <button class="menu-tile" onclick="openAppModal('career')"><span class="tile-icon">🧭</span><span><b>진로·적성 창</b><small>태빈이의 선택으로 쌓인 진로 점수</small></span></button>
   <button class="menu-tile" onclick="openAppModal('settings')"><span class="tile-icon">⚙️</span><span><b>설정 창</b><small>화면과 플레이 설정</small></span></button>
   <button class="menu-tile" onclick="closeAppModal();document.getElementById('feedback').scrollIntoView({behavior:'smooth'})"><span class="tile-icon">💌</span><span><b>건의함</b><small>새 아이디어 전달</small></span></button>
   <button class="menu-tile" onclick="closeAppModal();document.getElementById('feedback').scrollIntoView({behavior:'smooth'})"><span class="tile-icon">🐞</span><span><b>버그 신고</b><small>문제 상황 접수</small></span></button>
  </div>
  <div class="menu-actions">
   <button class="modal-action" onclick="save();toast('태빈이의 현재 상태를 저장했어!');closeAppModal()">💾 현재 상태 저장하기</button>
   <button class="modal-action" onclick="closeAppModal()">▶ 게임으로 돌아가기</button>
   <button class="modal-action danger" onclick="closeAppModal();resetGame()">↻ 처음부터 다시 시작</button>
  </div>`;
}
function renderCareerModal(){
 ensureCareer();modalHeader("진로·적성","태빈이 키우기 · CAREER");
 const top=bestCareer();
 document.getElementById("appModalBody").innerHTML=`<p class="modal-hint">선택한 행동이 적성 점수로 쌓여. 추천 진로는 바뀔 수 있어. 면접 결과에 따라 다음 생활도 달라져.</p><h3>${top.emoji} 현재 추천: ${top.name} · ${top.job}</h3><div class="settings-list">${CAREER_PATHS.slice().sort((a,b)=>(state.careerPoints[b.id]||0)-(state.careerPoints[a.id]||0)).map(p=>`<div class="setting-row"><div><b>${p.emoji} ${p.name}</b><small>${p.job}</small></div><b>${Math.round((state.careerPoints[p.id]||0)*10)/10}점</b></div>`).join("")}</div><div class="menu-actions"><button class="modal-action" onclick="worldApplyUniversity()" ${state.age<19||state.lifeRoute==='military'&&state.age<22||state.lifeRoute==='university'&&state.applicationStatus!=='대학 면접 대기'?'disabled':''}>🎓 대학 지원 · 면접 보기</button><button class="modal-action" onclick="worldApplyJob()" ${state.age<19||state.lifeRoute==='military'&&state.age<22||state.workStatus==='employed'?'disabled':''}>💼 취업 지원 · 면접 보기</button><button class="modal-action" onclick="renderMenuModal()">← 메뉴로 돌아가기</button></div>`;
}
function renderSettingsModal(){
 ensurePlayerExtras();
 modalHeader("설정","태빈이 키우기 · SETTINGS");
 const settings=state.settings;
 const speedButtons=Object.entries(GAME_SPEEDS).map(([key,mode])=>`<button type="button" class="tempo-mode ${settings.gameSpeed===key?"selected":""}" aria-pressed="${settings.gameSpeed===key}" onclick="setGameSpeed('${key}')"><b>${mode.mark} ${mode.name}</b><small>하루 ${mode.steps}번 · 성장 ${growthPerChoice(mode)}배</small></button>`).join("");
 const rows=[
  ["slowGrowth","느린 능력치 성장","선택 한 번에 능력치가 조금씩 올라가도록 조절"],
  ["randomEvents","랜덤 생활 이벤트","아기 감기·성장통·학교생활 등 예상 밖의 상황"],
  ["absurdEvents","병맛 사건 켜기","약 8번 선택 중 한 번씩 웃긴 사건 등장 · 선택에 따라 돈과 행복도 변화"],
  ["careerHints","진로 추천 표시","그동안의 선택으로 쌓인 적성과 추천 직업 표시"],
  ["storyPanel","스토리 진행 표시","이야기 카드 표시 여부 (챕터 선택은 계속 진행)"],
  
  ["largeText","큰 글씨","선택지와 설명을 더 크게 표시"],
  ["reduceMotion","움직임 줄이기","화면 전환 효과를 최소화"],
  ["confirmReset","초기화 전 확인","처음부터 다시 시작할 때 확인창 표시"],
  ["realisticLife","변동 수명 시스템","게임 속 건강 위험·질환·나이·드문 사건에 따라 100살 이전에도 인생 종료"]
 ];
 document.getElementById("appModalBody").innerHTML=`<div class="tempo-settings"><b>⚙ 게임 진행 속도 선택</b><p class="modal-hint">빠른 속도일수록 성장 게이지를 채우는 선택 한 번에 지능·창의력·인간관계·매력이 더 많이 올라. 어느 모드든 3일 지나면 나이가 1살 늘어나.</p><div class="tempo-mode-list">${speedButtons}</div></div><div class="settings-list">${rows.map(([key,title,desc])=>`
  <div class="setting-row"><div><b>${title}</b><small>${desc}</small></div>
   <button class="switch-btn ${settings[key]?"on":""}" onclick="toggleGameSetting('${key}')">${settings[key]?"켜짐":"꺼짐"}</button>
  </div>`).join("")}</div>
  <p class="modal-hint">수명: 건강 위험도가 높거나 질환이 있으면 조기에 인생이 마무리될 수도 있어. 나이가 들면 기본 위험도도 높아져. 이 수치는 재미를 위한 게임 규칙이며 실제 건강 예측이 아니야.</p>
  <p class="modal-hint">체력 관리: 60 미만 성장량 -20%, 30 미만 성장량 -40% 및 매 선택 행복 -1, 10 이하 탈진으로 하루 강제 휴식·행복 -2·5,000원 지출. 체력 창에서 직접 하루 쉬기도 가능해.</p>
  <p class="modal-hint">성장 규칙: 선택마다 체력 -1, 지능·창의력·인간관계·매력 중 두 가지 성장. ${gameSpeed().steps}번 선택하면 하루, 3일마다 1살 성장해. 체력·행복 최대 100, 다른 능력치는 제한 없어. 체력이 10 이하일 때 자동 휴식하고 상점 아이템으로도 회복할 수 있어. 중학교부터는 4개 중 1개가 일탈 선택이야. 돈은 원(₩)으로 표시돼.</p>
  <div class="menu-actions"><button class="modal-action" onclick="renderMenuModal()">← 메뉴로 돌아가기</button></div>`;
}
function toggleGameSetting(key){
 ensurePlayerExtras();
 state.settings[key]=!state.settings[key];
 applySettings();save();render();
 renderSettingsModal();
}
function renderInventoryModal(){
 ensurePlayerExtras();
 modalHeader("아이템 창","태빈이 키우기 · INVENTORY");
 const keys=Object.keys(ITEM_CATALOG);
 const owned=keys.filter(k=>(Number(state.items[k])||0)>0);
 const inventoryMarkup=owned.length?owned.map(k=>{
  const item=ITEM_CATALOG[k];
  return `<div class="inventory-item"><div class="inventory-icon">${item.icon}</div><div><b>${item.name}</b><small>${item.desc}</small><div class="inventory-count">보유 ${state.items[k]}개</div></div><button class="item-button" onclick="useGameItem('${k}')">사용하기</button></div>`;
 }).join(""):`<div class="inventory-empty">아직 아이템이 없어. 아래 상점에서 태빈이에게 필요한 물건을 골라줘!</div>`;
 const shopMarkup=keys.map(k=>{
  const item=ITEM_CATALOG[k];
  return `<div class="inventory-item"><div class="inventory-icon">${item.icon}</div><div><b>${item.name}</b><small>${item.desc}</small><div class="inventory-count">${formatWon(item.price)}</div></div><button class="item-button" onclick="buyGameItem('${k}')" ${state.money<item.price?"disabled":""}>구매</button></div>`;
 }).join("");
 document.getElementById("appModalBody").innerHTML=`
  <div class="inventory-balance">💰 보유 금액 ${formatWon(state.money)}</div>
  <h3 style="font-size:14px;margin:0 0 9px">내 가방</h3>
  <div class="inventory-list">${inventoryMarkup}</div>
  <div class="item-shop"><h3>🛍️ 아이템 상점</h3><div class="inventory-list">${shopMarkup}</div></div>
  <p class="modal-hint">아이템은 사용하면 효과가 바로 적용돼. 한 번 사용한 아이템은 가방에서 사라져.</p>
  <div class="menu-actions"><button class="modal-action" onclick="renderMenuModal()">← 메뉴로 돌아가기</button></div>`;
}
function buyGameItem(id){
 ensurePlayerExtras();
 const item=ITEM_CATALOG[id];
 if(!item)return;
 if(state.money<item.price)return toast("돈이 부족해!");
 state.money-=item.price;
 state.items[id]=(Number(state.items[id])||0)+1;
 state.log.push(item.name+" 구매 · "+formatWon(item.price));
 save();render();renderInventoryModal();toast(item.name+"을(를) 가방에 넣었어!");
}
function useGameItem(id){
 ensurePlayerExtras();
 const item=ITEM_CATALOG[id];
 if(!item||(Number(state.items[id])||0)<=0)return;
 for(let i=0;i<item.effect.length;i+=2){
  const key=item.effect[i],value=item.effect[i+1];
  if(key==="money")state.money=Math.max(0,state.money+value);
  else state.stats[key]=limitStat(key,state.stats[key]+value);
 }
 state.items[id]--;
 state.log.push(item.name+" 사용 · "+effectSummary(item.effect));
 save();render();renderInventoryModal();toast(item.name+" 사용 완료!");
}

function migrateOldLog(lines){
 return Array.isArray(lines)?lines.map(line=>String(line).replace(/(\d+(?:\.\d+)?) 코인/g,(_,n)=>formatWon(Number(n))).replace(/코인/g,"원")):[];
}

/* ===== Relationship life system: adult meetings, dating, marriage, divorce ===== */
const ROMANCE_PARTNER_NAMES={
 female:['하은','예린','수아','유나','지은','민서'],
 male:['지훈','태현','도윤','현우','건우','준혁']
};
const LEGACY_ROMANCE_NAMES=new Map([['하늘','하은'],['서윤','예린'],['도윤','수아'],['연우','유나'],['지민','지은']]);
function romanceWith(name){
 const last=name.charCodeAt(name.length-1);
 return name+(last>=0xac00&&last<=0xd7a3&&(last-0xac00)%28?'과':'와');
}
function migrateRomanceNames(r){
 if(r.namesVersion===1)return;
 r.namesVersion=1;
 if(r.partnerGender==='male')return;
 const rename=n=>LEGACY_ROMANCE_NAMES.get(n)||n;
 const renameText=t=>typeof t==='string'?t.replace(/(하늘|서윤|도윤|연우|지민)와(?=의|\s)/g,(_,n)=>romanceWith(rename(n))):t;
 if(r.partner)r.partner=rename(r.partner);
 r.exPartners=r.exPartners.map(rename);
 for(const item of r.history)if(item&&typeof item==='object'){
  const old=item.details;
  item.details=renameText(old);
  if(old!==item.details&&typeof state.latestStory==='string'&&state.latestStory.endsWith(' — '+old)){
   state.latestStory=state.latestStory.slice(0,-old.length)+item.details;
  }
 }
 if(Array.isArray(state.arcQueue))for(const chapter of state.arcQueue)if(chapter?.fromRomance)chapter.text=renameText(chapter.text);
 if(state.pendingStory?.fromRomance)state.pendingStory.text=renameText(state.pendingStory.text);
 if(Array.isArray(state.log))state.log=state.log.map(t=>typeof t==='string'&&t.startsWith('♡ ')?renameText(t):t);
 if(r.partner)r.partnerGender='female';
}
function setRomancePreference(gender){
 if(!Object.hasOwn(ROMANCE_PARTNER_NAMES,gender)||!romanceCan('meet'))return;
 ensureRomance().meetPreference=gender;
 save();renderRomanceModal();
}
function ensureRomance(){
 if(!state.romance||typeof state.romance!=='object')state.romance={};
 const r=state.romance;
 if(!['single','meeting','dating','married','divorced'].includes(r.status))r.status='single';
 if(typeof r.partner!=='string')r.partner='';
 if(!Number.isFinite(Number(r.affection)))r.affection=0;
 if(!Number.isFinite(Number(r.trust)))r.trust=0;
 r.affection=Math.min(100,Math.max(0,Math.round(Number(r.affection))));
 r.trust=Math.min(100,Math.max(0,Math.round(Number(r.trust))));
 if(!Array.isArray(r.history))r.history=[];
 if(!Array.isArray(r.chapterAges))r.chapterAges=[];
 if(!Array.isArray(r.exPartners))r.exPartners=[];
 migrateRomanceNames(r);
 if(!Object.hasOwn(ROMANCE_PARTNER_NAMES,r.meetPreference))r.meetPreference='female';
 r.datingAge=Number.isFinite(Number(r.datingAge))?Number(r.datingAge):-1;
 r.marriageAge=Number.isFinite(Number(r.marriageAge))?Number(r.marriageAge):-1;
 return r;
}
function romanceStatusLabel(){
 const r=ensureRomance();
 return ({single:'혼자만의 시간',meeting:'알아가는 사이',dating:'교제 중',married:'결혼생활',divorced:'이혼 후 새 출발'})[r.status];
}
function romanceLog(title,details){
 const r=ensureRomance();
 const item={age:Math.max(0,Math.floor(Number(state.age)||0)),title:String(title),details:String(details)};
 r.history.push(item);if(r.history.length>100)r.history.shift();
 state.log.push('♡ '+item.age+'살 · '+item.title+' · '+item.details);
 state.latestStory=item.age+'살 · '+item.title+' — '+item.details;
}
function romanceCan(action){
 const r=ensureRomance();
 if(!state.alive||state.age<18)return false;
 if(action==='meet')return r.status==='single'||r.status==='divorced';
 if(['talk','time'].includes(action))return ['meeting','dating','married'].includes(r.status);
 if(action==='startDating')return r.status==='meeting'&&r.affection>=40&&r.trust>=35;
 if(action==='marry')return r.status==='dating'&&state.age>=20&&state.age>r.datingAge&&r.affection>=70&&r.trust>=60&&state.money>=50;
 if(action==='disagree')return ['dating','married'].includes(r.status);
 if(action==='repair')return ['dating','married'].includes(r.status);
 if(action==='breakup')return r.status==='dating';
 if(action==='divorce')return r.status==='married';
 if(action==='alone')return true;
 return false;
}
function applyRomanceEvent(action,fromStory=false){
 if(!romanceCan(action))return false;
 const r=ensureRomance();
 if(action==='meet'){
  const names=ROMANCE_PARTNER_NAMES[r.meetPreference].filter(n=>n!==r.exPartners.at(-1));
  const index=Math.max(0,Math.floor(state.age)+Math.floor(Number(state.totalChoices)||0)+r.exPartners.length)%names.length;
  r.partner=names[index];
  r.partnerGender=r.meetPreference;
  r.status='meeting';r.affection=25;r.trust=25;
  romanceLog('새로운 만남',romanceWith(r.partner)+' 서로의 관심사를 이야기하기 시작했어.');
 }else if(action==='talk'){
  r.affection=Math.min(100,r.affection+13);r.trust=Math.min(100,r.trust+14);
  romanceLog('솔직한 대화',romanceWith(r.partner)+' 서로의 생각을 차분히 나누며 신뢰가 깊어졌어.');
 }else if(action==='time'){
  r.affection=Math.min(100,r.affection+18);r.trust=Math.min(100,r.trust+8);
  state.money=Math.max(0,state.money-10);
  state.stats.happiness=limitStat('happiness',state.stats.happiness+3);
  romanceLog('함께한 시간',romanceWith(r.partner)+' 휴일을 보내며 추억을 만들었어. 비용 10,000원.');
 }else if(action==='startDating'){
  r.status='dating';r.datingAge=state.age;
  state.stats.happiness=limitStat('happiness',state.stats.happiness+5);
  romanceLog('교제 시작',romanceWith(r.partner)+' 서로의 마음을 확인하고 연인이 되었어.');
 }else if(action==='marry'){
  r.status='married';r.marriageAge=state.age;state.money=Math.max(0,state.money-50);
  state.stats.happiness=limitStat('happiness',state.stats.happiness+7);
  romanceLog('결혼',romanceWith(r.partner)+' 앞으로의 생활을 함께 만들어가기로 약속했어. 결혼 비용 50,000원.');
 }else if(action==='disagree'){
  r.affection=Math.max(0,r.affection-15);r.trust=Math.max(0,r.trust-20);
  state.stats.happiness=limitStat('happiness',state.stats.happiness-4);
  romanceLog('의견 충돌',romanceWith(r.partner)+' 갈등이 생겼어. 서로 생각을 돌아볼 시간이 필요해.');
 }else if(action==='repair'){
  r.affection=Math.min(100,r.affection+11);r.trust=Math.min(100,r.trust+22);
  state.stats.happiness=limitStat('happiness',state.stats.happiness+2);
  romanceLog('갈등 해결',romanceWith(r.partner)+' 솔직히 대화하고 앞으로 지킬 약속을 정했어.');
 }else if(action==='breakup'){
  const partner=r.partner;
  r.exPartners.push(partner);r.status='single';r.partner='';r.partnerGender=null;r.affection=0;r.trust=0;r.datingAge=-1;
  state.stats.happiness=limitStat('happiness',state.stats.happiness-5);
  romanceLog('이별',romanceWith(partner)+' 각자의 길을 가기로 했어. 관계를 돌아보며 새로운 일상을 시작했어.');
 }else if(action==='divorce'){
  const partner=r.partner;
  r.exPartners.push(partner);r.status='divorced';r.partner='';r.partnerGender=null;r.affection=0;r.trust=0;r.datingAge=-1;r.marriageAge=-1;
  state.money=Math.max(0,state.money-40);
  state.stats.happiness=limitStat('happiness',state.stats.happiness-8);
  romanceLog('이혼',romanceWith(partner)+' 충분히 대화한 끝에 혼인 관계를 정리했어. 생활 정리 비용 40,000원.');
 }else if(action==='alone'){
  romanceLog('나만의 삶', '당장은 연애보다 친구, 일, 취미에 시간을 쓰기로 했어.');
 }
 if(!fromStory){
  // Relationship actions follow the same game balance: health -1, two skills up.
  const skillPairs={meet:['social','charm'],talk:['social','intelligence'],time:['social','creativity'],startDating:['charm','social'],marry:['social','charm'],disagree:['intelligence','charm'],repair:['social','intelligence'],breakup:['intelligence','creativity'],divorce:['intelligence','social'],alone:['creativity','intelligence']};
  const [a,b]=skillPairs[action]||['social','charm'];
  const fx=actualEffect([a,3.4,b,2.8,'health',-1],true);
  for(let i=0;i<fx.length;i+=2){let key=fx[i],v=fx[i+1];state.stats[key]=limitStat(key,state.stats[key]+v);}
  state.totalChoices=Math.max(0,Number(state.totalChoices)||0)+1;
  advanceSceneTurn();
  state.progress=Math.min(growthRequired(state.age),Math.max(0,Number(state.progress)||0)+1);
  if(state.progress>=growthRequired(state.age))advanceOneDay();
  if(state.alive&&state.stats.health<=10){
    state.stats.health=limitStat('health',Math.max(35,state.stats.health+25));
    state.stats.happiness=limitStat('happiness',state.stats.happiness-2);
    state.money=Math.max(0,state.money-5);
    adjustHealthRisk(3);
    state.log.push('체력 부족으로 휴식 비용 5,000원이 들었어.');
  }
 }
 return true;
}
function romanceAction(action){
 if(!state.alive||state.pendingTurningPoint||state.pendingStory)return toast('진행 중인 스토리를 먼저 선택해 줘!');
 if(action==='divorce'&&!confirm('결혼생활을 정리하고 이혼할까? 이 선택은 인생 기록에 남아.'))return;
 if(!applyRomanceEvent(action))return toast('아직 이 행동을 선택할 조건이 충족되지 않았어.');
 closeAppModal();
 render();save();
 if(state.alive)toast('관계에 새로운 변화가 생겼어.');
}
function refreshRomancePanel(){
 const el=document.getElementById('romanceGlance');if(!el)return;
 if(state.age<18){el.classList.remove('visible');return;}
 const r=ensureRomance();el.classList.add('visible');
 document.getElementById('romanceStatus').textContent='RELATIONSHIP · '+romanceStatusLabel();
 document.getElementById('romanceMiniText').textContent=r.partner?r.partner+' · 호감도 '+r.affection+'/100 · 신뢰도 '+r.trust+'/100':r.exPartners.length?'지금은 혼자만의 시간 · 지난 관계 '+r.exPartners.length+'회':'만남·교제·결혼은 선택할 수 있어. 연애하지 않아도 괜찮아.';
}
function renderRomanceModal(){
 const r=ensureRomance();
 modalHeader('연애 · 결혼 · 관계','TAEBIN LIFE · RELATIONSHIP');
 const age=Number(state.age)||0;
 if(age<18){
  document.getElementById('appModalBody').innerHTML='<p class="modal-hint">연애와 결혼 시스템은 태빈이가 18살이 된 후 열려. 지금은 친구 관계와 성장에 집중해 보자.</p><button class="modal-action" onclick="renderMenuModal()">메뉴로 돌아가기</button>';return;
 }
 const actions=[
  ['meet','새로운 사람 만나기',(r.meetPreference==='male'?'남성':'여성')+' 인물과 새로운 인연을 시작'],
  ['talk','서로의 이야기 듣기','호감도 +13 · 신뢰도 +14'],
  ['time','함께 시간 보내기','호감도 +18 · 신뢰도 +8 · 10,000원'],
  ['startDating','교제 시작하기','알아가는 사이 · 호감도 40 / 신뢰도 35 이상'],
  ['marry','결혼하기','20살 이상 · 교제 1년 이상 · 호감도 70 / 신뢰도 60 · 50,000원'],
  ['disagree','갈등을 겪기','의견 차이가 생겨 신뢰도가 낮아져'],
  ['repair','사과하고 해결하기','갈등을 돌아보고 신뢰도 +22'],
  ['breakup','연인과 이별하기','교제 관계 종료 · 새로운 길 선택 가능'],
  ['divorce','이혼하기','결혼생활 종료 · 재산과 행복에 영향'],
  ['alone','나를 위한 시간 보내기','연애와 별개로 나만의 성장을 선택']
 ];
 const visible=actions.filter(([id])=>{
   if(id==='meet')return ['single','divorced'].includes(r.status);
   if(['talk','time'].includes(id))return ['meeting','dating','married'].includes(r.status);
   if(id==='startDating')return r.status==='meeting';
   if(id==='marry')return r.status==='dating';
   if(['disagree','repair'].includes(id))return ['dating','married'].includes(r.status);
   if(id==='breakup')return r.status==='dating';
   if(id==='divorce')return r.status==='married';
   return true;
 });
 const safe=t=>lifeReviewEscape(t);
 document.getElementById('appModalBody').innerHTML=`
  <div class="romance-card"><small>현재 관계 · ${safe(romanceStatusLabel())}${r.partner&&r.partnerGender?' · '+(r.partnerGender==='male'?'남성':'여성'):''}</small><h3>${r.partner?safe(romanceWith(r.partner))+'의 이야기':'태빈이의 관계 이야기'}</h3><p class="romance-summary">${r.partner?'서로의 신뢰를 지키거나, 다른 삶의 방향을 선택할 수 있어.':'태빈이는 연애와 결혼을 선택할 수도, 혼자만의 삶을 이어갈 수도 있어.'}</p>
  <div class="romance-meter"><div><label><span>호감도</span><b>${r.affection} / 100</b></label><div class="track"><span class="fill" style="width:${r.affection}%"></span></div></div><div><label><span>신뢰도</span><b>${r.trust} / 100</b></label><div class="track"><span class="fill trust-fill" style="width:${r.trust}%"></span></div></div></div></div>
  <p class="modal-hint">관계 행동도 성장 선택으로 계산돼. 매번 체력 -1, 다른 능력치 2개 증가. 결혼과 이혼은 인생 회고록에 기록돼.</p>
  ${romanceCan('meet')?`<fieldset class="romance-preference"><legend>만날 인물</legend><div><button type="button" aria-pressed="${r.meetPreference==='female'}" onclick="setRomancePreference('female')">여성</button><button type="button" aria-pressed="${r.meetPreference==='male'}" onclick="setRomancePreference('male')">남성</button></div></fieldset>`:''}
  <div class="romance-actions">${visible.map(([id,title,help])=>`<button type="button" class="romance-action ${id==='divorce'||id==='breakup'?'danger':''}" onclick="romanceAction('${id}')" ${romanceCan(id)?'':'disabled'}><b>${safe(title)}</b><small>${safe(help)}</small></button>`).join('')}</div>
  <h3 style="margin:20px 0 10px;font-size:15px">관계의 기록</h3><div class="romance-history">${r.history.length?r.history.slice(-10).reverse().map(e=>`<div><b>${e.age}살 · ${safe(e.title)}</b><p>${safe(e.details)}</p></div>`).join(''):'<p class="modal-hint">아직 관계 기록이 없어. 태빈이만의 속도로 시작할 수 있어.</p>'}</div>
  <div class="menu-actions"><button class="modal-action" onclick="renderMenuModal()">← 메뉴로 돌아가기</button></div>`;
}
function romanceAnnualUpdate(){
 const r=ensureRomance();
 if(r.status==='dating'||r.status==='married'){
  r.affection=Math.max(0,r.affection-1);
  if(r.affection<25&&r.trust<25){
    romanceLog('멀어진 관계',romanceWith(r.partner)+'의 소통이 줄어들고 있어. 대화로 회복할 수 있어.');
  }
 }
}
function romanceStoryOption(label,a,b,outcome,action){
 return {label,effect:[a,3.5,b,3,'health',-1],outcome,relAction:action};
}
function maybeStartRomanceChapter(age){
 if(!state.alive||age<18)return;
 const ages=[18,23,27,32,39,46,58,70,85];
 if(!ages.includes(age))return;
 const r=ensureRomance();if(r.chapterAges.includes(age))return;
 r.chapterAges.push(age);
 const opts=[];
 let title,text;
 if(r.status==='married'){
  title='함께 만들어가는 결혼생활';text=romanceWith(r.partner)+' 함께 지내며 일과 생활의 균형을 고민하게 됐어. 앞으로의 관계를 어떻게 만들어갈까?';
  opts.push(romanceStoryOption('서로의 고민을 천천히 듣기','social','intelligence','서로의 생각을 나누며 관계를 돌봤어.','talk'));
  opts.push(romanceStoryOption('함께 보내는 휴일 계획하기','social','creativity','바쁜 일상 속에서 함께할 시간을 만들었어.','time'));
  opts.push(romanceStoryOption('갈등을 인정하고 대화하기','intelligence','charm','서로 다른 생각을 받아들이는 일이 필요했어.','repair'));
  opts.push(romanceStoryOption('각자의 길을 위해 이혼 결정하기','intelligence','social','오랜 고민 끝에 결혼생활을 정리하고 새로운 삶을 시작했어.','divorce'));
 }else if(r.status==='dating'){
  title='앞으로의 관계를 고민하는 날';text=romanceWith(r.partner)+' 서로의 생활 방식에 대해 이야기했어. 작은 선택들이 관계의 방향을 바꾸고 있어.';
  opts.push(romanceStoryOption('미래에 대해 솔직히 대화하기','social','intelligence','함께 바라는 미래에 대해 알게 됐어.','talk'));
  opts.push(romanceStoryOption('추억을 만들며 관계 돌보기','social','creativity','일상의 기억을 하나 더 쌓았어.','time'));
  if(romanceCan('marry'))opts.push(romanceStoryOption('결혼을 선택하기','social','charm','두 사람은 앞으로의 생활을 함께 만들어가기로 했어.','marry'));
  else opts.push(romanceStoryOption('각자의 목표를 존중하기','intelligence','creativity','서로에게 필요한 시간을 인정했어.','talk'));
  opts.push(romanceStoryOption('서로 다른 길로 헤어지기','intelligence','social','각자의 삶을 이어가기 위해 헤어졌어.','breakup'));
 }else if(r.status==='meeting'){
  title='새 인연과의 중요한 대화';text=romanceWith(r.partner)+' 조금씩 알아가고 있어. 태빈이는 관계를 천천히 발전시킬 수 있어.';
  opts.push(romanceStoryOption('관심사를 나누며 대화하기','social','intelligence','서로를 한층 더 이해하게 됐어.','talk'));
  opts.push(romanceStoryOption('함께 문화생활 즐기기','creativity','charm','함께 시간을 보내며 마음의 거리가 가까워졌어.','time'));
  if(romanceCan('startDating'))opts.push(romanceStoryOption('서로의 마음을 확인하고 교제하기','social','charm','서로 동의하며 교제를 시작했어.','startDating'));
  else opts.push(romanceStoryOption('서로를 알아갈 시간을 더 갖기','intelligence','social','서두르지 않고 자연스럽게 가까워지기로 했어.','talk'));
  opts.push(romanceStoryOption('지금은 내 목표에 집중하기','intelligence','creativity','관계보다 나의 일상을 챙기기로 했어.','alone'));
 }else{
  title='나의 삶과 새로운 만남';text='태빈이에게 새로운 인연을 알아갈 기회가 왔어. 태빈이는 어떤 길을 선택할까?';
  opts.push(romanceStoryOption('새로운 사람과 대화 시작하기','social','charm','새로운 만남이 태빈이의 삶에 들어왔어.','meet'));
  opts.push(romanceStoryOption('친구들과 더 가까워지기','social','intelligence','친구들과의 관계를 더 깊이 돌봤어.','alone'));
  opts.push(romanceStoryOption('취미와 개인 프로젝트에 집중하기','creativity','intelligence','내가 좋아하는 일을 하며 좋은 시간을 보냈어.','alone'));
  opts.push(romanceStoryOption('당분간 혼자 지내기로 하기','intelligence','charm','태빈이는 자신만의 속도를 존중했어.','alone'));
 }
 ensureLifeArc();
 state.arcQueue.push({age,title,text,options:opts,fromRomance:true});
 showNextLifeArc();
}
function romanceLifeSummary(){
 const r=ensureRomance();
 const marriages=r.history.filter(e=>e.title==='결혼').length;
 const divorces=r.history.filter(e=>e.title==='이혼').length;
 const relations=r.history.filter(e=>e.title==='교제 시작').length;
 let details='';
 if(marriages)details+=' 태빈이는 '+marriages+'번 결혼을 선택했고';
 if(divorces)details+=(marriages?',':' 태빈이는')+' '+divorces+'번 이혼을 경험했어.';
 else if(marriages)details+=' 서로의 관계를 함께 만들어갔어.';
 if(!marriages&&relations)details+=' 마음이 닿는 인연과 '+relations+'번 교제하며 관계에 대해 배웠어.';
 if(r.status==='married')details+=' 마지막에는 '+romanceWith(r.partner)+' 함께 생활했어.';
 if(!r.history.length)details+=' 연애나 결혼 없이 자신의 일상과 목표에 집중했어.';
 return details;
}

/* === TAEBIN LIFE: integrated living world, all fictional in-game values. === */
const WORLD_PROPERTIES = [
 {id:'studio',name:'작은 원룸',price:26000,rent:1200,desc:'첫 내 집 마련이나 소액 임대 수익에 도전해.'},
 {id:'apartment',name:'도심 아파트',price:160000,rent:8400,desc:'수요가 꾸준한 주거용 자산이야.'},
 {id:'shopbuilding',name:'상가 건물',price:670000,rent:37000,desc:'상권에 따라 가격과 임대 수입이 달라져.'},
 {id:'tower',name:'대형 빌딩',price:3500000,rent:196000,desc:'운영 비용도 크지만 높은 임대 수입을 기대할 수 있어.'}
];
const WORLD_BUSINESSES = [
 {id:'cafe',name:'동네 카페',cost:14000,desc:'맛과 서비스로 단골을 모으는 가게',talent:'social'},
 {id:'media',name:'영상 제작 스튜디오',cost:30000,desc:'촬영과 콘텐츠 제작으로 의뢰를 받는 사업',talent:'creativity'},
 {id:'game',name:'게임 개발사',cost:65000,desc:'작은 게임부터 만들어 성장하는 회사',talent:'intelligence'},
 {id:'tech',name:'기술 스타트업',cost:115000,desc:'기술과 경영 감각이 필요한 성장형 기업',talent:'business'},
 {id:'snack',name:'동네 분식점',cost:8500,desc:'친근한 메뉴와 서비스로 동네 손님을 모으는 가게',talent:'social'},
 {id:'design',name:'디자인 공방',cost:23000,desc:'맞춤 굿즈와 브랜드 디자인을 만드는 작은 스튜디오',talent:'creativity'},
 {id:'academy',name:'공부방',cost:27000,desc:'배우는 사람에게 맞춤 수업과 학습 계획을 제공하는 곳',talent:'intelligence'},
 {id:'logistics',name:'지역 배송 업체',cost:45500,desc:'동네 상점의 배송을 맡아 꾸준히 거래처를 늘리는 사업',talent:'business'}
];
const WORLD_TALENTS = [
 {id:'intelligence',name:'분석·연구',desc:'공부·기술·연구에 도움',regex:/공부|연구|코딩|컴퓨터|분석|수학|시험|기술|계획|자료|투자|장학/},
 {id:'creativity',name:'창작·제작',desc:'영상·디자인·창업에 도움',regex:/그림|영상|디자인|창작|제작|촬영|음악|기획|게임|아이디어|미술|사진/},
 {id:'social',name:'소통·협력',desc:'친구·가족·직장에 도움',regex:/친구|대화|가족|함께|동료|설득|팀|협력|인사|관계|하린/},
 {id:'business',name:'사업·경영',desc:'창업·부동산·승진에 도움',regex:/사업|창업|거래|돈|경영|회사|매출|고객|예산|가게|주식|경제|마케팅/}
];
const WORLD_ACHIEVEMENTS = [
 {id:'firstJob',name:'첫 직장',desc:'처음으로 취업하기'},
 {id:'firstPay',name:'첫 월급',desc:'일해서 소득 받기'},
 {id:'firstHome',name:'내 이름의 공간',desc:'첫 부동산 매입'},
 {id:'landlord',name:'부동산 자산가',desc:'부동산 3채 보유'},
 {id:'founder',name:'사장님',desc:'첫 사업 시작'},
 {id:'businessGrowth',name:'성장하는 기업',desc:'사업 레벨 3 달성'},
 {id:'creditGood',name:'신뢰받는 신용',desc:'신용 점수 820점 달성'},
 {id:'debtFree',name:'대출 완납',desc:'빌린 돈을 모두 갚기'},
 {id:'promotion',name:'커리어 성장',desc:'첫 승진 성공'},
 {id:'friendship',name:'오래된 우정',desc:'친구 호감도 85 달성'},
 {id:'rivalry',name:'멋진 경쟁',desc:'라이벌과 선의의 경쟁에서 인정받기'},
 {id:'talented',name:'빛나는 재능',desc:'재능 점수 30 달성'},
 {id:'parent',name:'새로운 가족',desc:'자녀 맞이하기'},
 {id:'wealth100m',name:'1억의 벽',desc:'순자산 1억 원 달성'},
 {id:'wealth1b',name:'10억 달성',desc:'순자산 10억 원 달성'},
 {id:'wealth10b',name:'여유로운 삶',desc:'순자산 5억 원 달성'},
 {id:'lateLife',name:'긴 여정',desc:'70살까지 인생 이어가기'},
 {id:'absurdMaster',name:'전설의 황당 인생',desc:'병맛 사건 10번 경험하기'}
];
const WORLD_FRIENDS = [
 {id:'harin',name:'하린',gender:'female',trait:'어린 시절부터 함께한 여자아이'},
 {id:'eunwoo',name:'은우',trait:'배우고 도전하는 걸 좋아하는 친구'},
 {id:'junho',name:'준호',trait:'함께 일하며 성장하는 친구'},
 {id:'seoyun',name:'서윤',trait:'동네 사진 동아리 친구',minAge:10},
 {id:'jia',name:'지아',trait:'진로를 함께 고민하는 선배',minAge:16}
];
function worldRound(v){return Math.round((Number(v)||0)*100)/100;}
function worldSafe(v){return lifeReviewEscape(v);}
function ensureWorld(){
 if(!state.world||typeof state.world!=='object')state.world={};
 const w=state.world;
 if(!Array.isArray(w.properties))w.properties=[];
 if(!Array.isArray(w.loans))w.loans=[];
 if(!Number.isSafeInteger(w.bankWon)||w.bankWon<0)w.bankWon=0;
 if(!Array.isArray(w.bankHistory))w.bankHistory=[];
 if(!Array.isArray(w.vehicles))w.vehicles=[];
 if(typeof w.activeVehicle!=='string')w.activeVehicle='';
 if(!w.certificates||typeof w.certificates!=='object'||Array.isArray(w.certificates))w.certificates={};
 if(!Number.isSafeInteger(w.lastCertStudyDay))w.lastCertStudyDay=-1;
 if(w.certExam&&!NURI_CERTS.find(c=>c.id===w.certExam.id&&c.questions[w.certExam.question]))w.certExam=null;
 if(!Array.isArray(w.children))w.children=[];
 if(!Array.isArray(w.events))w.events=[];
 if(!Array.isArray(w.achievements))w.achievements=[];
 if(!w.friends||typeof w.friends!=='object')w.friends={};
 for(const f of WORLD_FRIENDS)if(!w.friends[f.id]||typeof w.friends[f.id]!=='object')w.friends[f.id]={bond:f.id==='harin'?35:f.id==='eunwoo'?25:18,lastAge:-1};
 if(!w.rival||typeof w.rival!=='object')w.rival={name:'민준',respect:24,lastAge:-1};
 if(!w.talents||typeof w.talents!=='object'){
  w.talents={intelligence:2,creativity:2,social:2,business:1};
  if(state.family==='frugal'){w.talents.intelligence+=8;w.talents.creativity+=8;}
  if(state.family==='wealthy')w.talents.business+=4;
  if(state.family==='supportive')w.talents.creativity+=5;
 }
 if(!w.trainAge||typeof w.trainAge!=='object')w.trainAge={};
 if(!Number.isFinite(Number(w.credit)))w.credit=700;
 if(!Number.isFinite(Number(w.performance)))w.performance=8;
 if(!Number.isFinite(Number(w.lastPromotionAge)))w.lastPromotionAge=-1;
 if(!Number.isFinite(Number(w.lastLoanId)))w.lastLoanId=0;
 if(!Number.isFinite(Number(w.lastPropertyId)))w.lastPropertyId=0;
 if(!Number.isFinite(Number(w.lastChildAge)))w.lastChildAge=-10;
 if(!Number.isFinite(Number(w.lastBonusAge)))w.lastBonusAge=-1;
 w.credit=Math.max(300,Math.min(950,Math.round(w.credit)));
 return w;
}
function worldRealEstateValue(){return ensureWorld().properties.reduce((sum,p)=>sum+Math.max(0,Number(p.value)||0),0);}
function worldDebt(){return ensureWorld().loans.reduce((sum,p)=>sum+Math.max(0,Number(p.balance)||0),0);}
function worldBusinessValue(){const b=ensureWorld().business;return b?Math.max(0,Number(b.value)||0):0;}
function worldWorthParts(){return {cash:Math.max(0,Number(state.money)||0),bank:ensureWorld().bankWon/1000,stocks:holdingsValue(),crypto:nuriCryptoValue(),property:worldRealEstateValue(),business:worldBusinessValue(),vehicles:nuriVehicleWorth(),debt:worldDebt()};}
function worldNote(msg,type='event'){
 const w=ensureWorld();
 const label=state.age+'살 · '+msg;
 w.events.push({age:state.age,title:msg,type});
 w.events=w.events.slice(-120);
 state.log.push(label);
 return label;
}
function worldFictionalIncome(){
 const w=ensureWorld();
 if(state.workStatus!=='employed'||state.age<19||state.age>69)return 0;
 const level=Math.max(0,Number(state.jobLevel)||0);
 const score=Number(w.talents.intelligence)||0;
 return Math.round((30000+level*10000)*(1+Math.min(.25,score/600)+nuriCertCount(w)*.02));
}
function recordWorldChoice(choice){
 const w=ensureWorld();
 const label=String(choice?.label||'');
 for(const t of WORLD_TALENTS)if(t.regex.test(label))w.talents[t.id]=worldRound(Math.max(0,(w.talents[t.id]||0)+.6));
 if(state.workStatus==='employed'&&state.age>=19){
  w.performance=Math.min(100,worldRound(w.performance+(/업무|기획|팀|발표|프로젝트|실무|상담|고객|협력|제작|분석|촬영|해결|기술|책임/.test(label)?2:.6)));
 }
 if(/하린|친구|관계|동료/.test(label))w.friends.harin.bond=Math.min(100,w.friends.harin.bond+.3);
 worldCheckAchievements();
}
function worldCheckAchievements(){
 if(!state.family)return;
 const w=ensureWorld(),net=nuriNetWorth();
 const checks={
  firstJob:state.workStatus==='employed',firstPay:!!w.everPaid,firstHome:w.properties.length>0,
  landlord:w.properties.length>=3,founder:!!w.everFounded,businessGrowth:!!w.everLevel3,
  creditGood:w.credit>=820,debtFree:!!w.everPaidOff,promotion:Number(state.jobLevel)>0,
  friendship:Object.values(w.friends).some(f=>Number(f.bond)>=85),rivalry:w.rival.respect>=85,
  talented:Object.values(w.talents).some(t=>Number(t)>=30),parent:w.children.length>0,
  wealth100m:net>=100000,wealth1b:net>=1000000,wealth10b:net>=500000,lateLife:state.age>=70,absurdMaster:(state.absurdCount||0)>=10
 };
 for(const achievement of WORLD_ACHIEVEMENTS){
  if(checks[achievement.id]&&!w.achievements.includes(achievement.id)){
   w.achievements.push(achievement.id);
   worldNote('업적 달성: '+achievement.name,'achievement');
  }
 }
}
function worldAnnualUpdate(){
 const w=ensureWorld();
 if(state.age<1||!state.alive)return;
 // One financial settlement per game year (3 game-days), never per render.
 if(w.lastAnnualAge===state.age)return;
 w.lastAnnualAge=state.age;
 nuriVehicleAnnual(w);
 if(state.age>=19){
  const salary=worldFictionalIncome();
  if(salary>0){
   state.money=worldRound(state.money+salary);
   if(!w.everPaid){w.everPaid=true;worldNote('첫 연봉 정산 '+formatWon(salary),'work');}
   else worldNote('연봉 정산 '+formatWon(salary),'work');
   w.performance=Math.min(100,w.performance+3);
   if(w.performance>=60&&state.age-(Number(w.lastPromotionAge)||-1)>=3&&Number(state.jobLevel||0)<12){
    state.jobLevel=(Number(state.jobLevel)||0)+1;
    w.lastPromotionAge=state.age;
    w.performance=20;
    worldNote('성과를 인정받아 승진했어!','work');
   }
  }
  // Property prices and net rent depend on the game's fictional economy.
  for(const p of w.properties){
   const r=WORLD_PROPERTIES.find(x=>x.id===p.id);if(!r)continue;
   const priceChange=-.08+Math.random()*.19;
   p.value=Math.max(r.price*.45,worldRound(p.value*(1+priceChange)));
   const upkeep=Math.round(p.value*.008);
   const rent=Math.max(0,Math.round(r.rent*(p.value/r.price)*(.7+Math.random()*.6)-upkeep));
   state.money=worldRound(state.money+rent);
   if(rent>0)worldNote(r.name+' 임대 수익 '+formatWon(rent),'property');
  }
  // Loans have fictional annual interest; a late payment affects credit.
  for(const loan of w.loans){
   const interest=Math.max(1,Math.round(loan.balance*loan.rate));
   if(state.money>=interest){state.money=worldRound(state.money-interest);w.credit=Math.min(950,w.credit+3);}
   else {loan.balance=worldRound(loan.balance+interest);w.credit=Math.max(300,w.credit-35);worldNote('대출 이자를 내지 못해 신용이 떨어졌어.','credit');}
  }
  // Operating a business can lead to profit or loss.
  if(w.business){
   const b=w.business;
   const definition=WORLD_BUSINESSES.find(x=>x.id===b.id);
   const name=definition?.name||'사업';
   const relevant=Number(w.talents[definition?.talent]||0);
   const chance=Math.random();
   const variance=chance<.20?-.23+Math.random()*.13:.08+Math.random()*.25;
   const margin=(variance + Math.min(.09,relevant*.0015)+Math.min(.05,b.staff*.012));
   const netProfit=Math.round(b.value*margin)-worldAnnualStaffCost(b);
   if(netProfit>=0){state.money+=netProfit;worldNote(name+' 사업 수익 '+formatWon(netProfit),'business');}
   else {const paid=Math.min(state.money,Math.abs(netProfit));state.money=worldRound(state.money-paid);b.value=Math.max(0,worldRound(b.value-(Math.abs(netProfit)-paid)));worldNote(name+' 적자 발생 '+formatWon(Math.abs(netProfit)),'business');}
   b.value=Math.max(0,worldRound(b.value*(1+(chance<.2?-.07:.04)+Math.min(.08,relevant*.001))));
   b.lastProfit=netProfit;
  }
  // Raising a child costs money and can strengthen family bonds.
  for(const child of w.children){
   if(state.age<=child.birthAge)continue;
   const years=state.age-child.birthAge;
   if(years<=20){
    const expense=years<7?2400:years<18?3700:2400;
    state.money=Math.max(0,worldRound(state.money-expense));
    child.bond=Math.max(0,Math.min(100,child.bond+1));
    if([1,7,14,19].includes(years))worldNote(child.name+' '+years+'살: 가족과 새로운 추억을 만들었어.','family');
   }
  }
 }
 worldCheckAchievements();checkWealthGoal();
}
function worldCanAct(minAge=0){if(!state.alive){toast('새 인생을 시작한 뒤 이용할 수 있어.');return false;}if(state.age<minAge){toast(minAge+'살부터 이용할 수 있어.');return false;}return true;}
function worldCommit(message,view){
 if(message)worldNote(message);
 worldCheckAchievements();checkWealthGoal();
 render();save();
 if(document.getElementById('appModal')?.classList.contains('open')&&activeModal===view)worldRender(view);
 if(message)toast(message);
}

function worldBankTransfer(direction,all=false){
 if(!state.family||!worldCanAct()||!['deposit','withdraw'].includes(direction))return false;
 const w=ensureWorld(),deposit=direction==='deposit';
 const cash=Math.round((Number(state.money)||0)*1000);
 const available=deposit?cash:w.bankWon;
 const amount=all?available:Number(document.getElementById('nuriBankAmount')?.value);
 if(!Number.isSafeInteger(amount)||amount<=0){toast('1원 이상의 금액을 입력해 줘.');return false;}
 if(amount>available){toast(deposit?'보유 현금이 부족해.':'통장 잔액이 부족해.');return false;}
 const nextCash=cash+(deposit?-amount:amount);
 const nextBank=w.bankWon+(deposit?amount:-amount);
 if(!Number.isSafeInteger(nextCash)||nextCash<0||!Number.isSafeInteger(nextBank)||nextBank<0)return false;
 state.money=nextCash/1000;
 w.bankWon=nextBank;
 w.bankHistory.unshift({age:state.age,direction,amount});
 w.bankHistory=w.bankHistory.slice(0,20);
 worldCommit((deposit?'통장에 입금 ':'현금으로 출금 ')+formatWon(amount/1000),'bank');
 return true;
}
function worldAnnualStaffCost(b){
 return Math.round((Number(b.value)||0)*.025*(Number(b.staff)||0));
}
function worldDismissalCost(b){
 return Math.max(500,Math.round((Number(b.value)||0)*.025*.25));
}
function worldDismissStaff(){
 if(!worldCanAct(19))return false;
 const b=ensureWorld().business;
 if(!b||!Number.isInteger(b.staff)||b.staff<1)return false;
 const fee=worldDismissalCost(b);
 if(state.money<fee){toast('감원 비용을 낼 현금이 부족해.');return false;}
 if(!confirm('직원 1명을 감원할까? '+formatWon(fee)+'이 한 번 지출되고, 다음 정산부터 인건비와 직원의 매출 기여가 함께 줄어들어.'))return false;
 state.money=worldRound(state.money-fee);b.staff--;
 worldCommit('직원 1명 감원 · 비용 '+formatWon(fee)+' · 남은 직원 '+b.staff+'명','business');
 return true;
}

function worldBuyProperty(id){
 if(!worldCanAct(18))return;
 const w=ensureWorld();const item=WORLD_PROPERTIES.find(x=>x.id===id);if(!item)return;
 if(w.properties.length>=8)return toast('한 인생에서 부동산은 최대 8채까지 소유할 수 있어.');
 if(state.money<item.price)return toast('현금이 부족해. 대출이나 저축을 활용할 수 있어.');
 state.money=worldRound(state.money-item.price);
 w.properties.push({id,value:item.price,boughtAt:state.age,uid:++w.lastPropertyId});
 worldCommit(item.name+' 매입 '+formatWon(item.price),'realestate');
}
function worldSellProperty(uid){
 if(!worldCanAct(18))return;
 const w=ensureWorld();const i=w.properties.findIndex(p=>p.uid===uid);if(i<0)return;
 const p=w.properties.splice(i,1)[0];const r=WORLD_PROPERTIES.find(x=>x.id===p.id);
 const sale=Math.round(p.value*.98);
 state.money=worldRound(state.money+sale);
 worldCommit((r?.name||'부동산')+' 매도 '+formatWon(sale)+' (거래 비용 포함)','realestate');
}
function worldFoundBusiness(id){
 if(!worldCanAct(19))return;
 const w=ensureWorld();const b=WORLD_BUSINESSES.find(x=>x.id===id);if(!b||w.business)return toast('기존 사업을 먼저 매각해야 다른 사업을 시작할 수 있어.');
 if(state.money<b.cost)return toast('창업 자금이 부족해.');
 state.money=worldRound(state.money-b.cost);
 w.business={id,value:b.cost,staff:0,level:1,started:state.age,lastProfit:0};w.everFounded=true;
 worldCommit(b.name+' 창업! 앞으로의 사업 실적에 따라 수익이 달라져.','business');
}
function worldExpandBusiness(){
 if(!worldCanAct(19))return;
 const w=ensureWorld();const b=w.business;if(!b)return;
 if(b.level>=8)return toast('이미 최대 확장 단계야.');
 const cost=Math.round(b.value*.3);
 if(state.money<cost)return toast('사업 확장 자금이 부족해.');
 state.money=worldRound(state.money-cost);b.value=worldRound(b.value+cost*1.08);b.level++;
 if(b.level>=3)w.everLevel3=true;
 worldCommit('사업 확장 완료 · 레벨 '+b.level,'business');
}
function worldHireStaff(){
 if(!worldCanAct(19))return;
 const w=ensureWorld(),b=w.business;if(!b)return;
 if(b.staff>=12)return toast('직원 최대 인원에 도달했어.');
 const cost=1500+b.staff*500;
 if(state.money<cost)return toast('채용 비용이 부족해.');
 state.money=worldRound(state.money-cost);b.staff++;
 worldCommit('새로운 직원 채용 · 총 '+b.staff+'명','business');
}
function worldSellBusiness(){
 if(!worldCanAct(19))return;
 const w=ensureWorld();if(!w.business)return;
 const b=w.business;const name=WORLD_BUSINESSES.find(x=>x.id===b.id)?.name||'사업';
 const proceeds=Math.round(b.value*.96);
 state.money=worldRound(state.money+proceeds);w.business=null;
 worldCommit(name+'을 매각해 '+formatWon(proceeds)+'을 받았어.','business');
}
function worldTakeLoan(amount){
 if(!worldCanAct(18))return;
 const w=ensureWorld();amount=Number(amount);
 const limits=[5000,20000,50000,120000];
 if(!limits.includes(amount))return;
 if(w.credit<480)return toast('신용 점수가 낮아 이번 대출은 승인되지 않았어.');
 if(worldDebt()+amount>Math.max(10000,Math.round(180000*(w.credit/950))))return toast('현재 신용 한도를 넘었어. 먼저 일부 상환해 줘.');
 const rate=w.credit>=820?.038:w.credit>=700?.052:w.credit>=580?.074:.095;
 w.loans.push({uid:++w.lastLoanId,balance:amount,rate,started:state.age});
 state.money=worldRound(state.money+amount);w.credit=Math.max(300,w.credit-6);
 worldCommit('대출 '+formatWon(amount)+' 실행 (게임 연 이자 '+(rate*100).toFixed(1)+'%)','credit');
}
function worldRepayLoan(uid,all=false){
 if(!worldCanAct(18))return;
 const w=ensureWorld(),idx=w.loans.findIndex(x=>x.uid===uid);if(idx<0)return;
 const loan=w.loans[idx];
 const amount=all?loan.balance:Math.min(loan.balance,Math.max(1000,Math.round(loan.balance*.25)));
 if(state.money<amount)return toast('상환할 현금이 부족해.');
 state.money=worldRound(state.money-amount);loan.balance=worldRound(Math.max(0,loan.balance-amount));
 if(loan.balance<=0){w.loans.splice(idx,1);w.everPaidOff=true;w.credit=Math.min(950,w.credit+30);}
 else w.credit=Math.min(950,w.credit+10);
 worldCommit('대출 '+formatWon(amount)+' 상환','credit');
}
function worldApplyJob(){
 if(!worldCanAct(19))return;
 if(state.lifeRoute==='military'&&state.age<22)return toast('22살 전역 후 취업 면접을 볼 수 있어.');
 if(state.workStatus==='employed')return toast('이미 취업한 상태야.');
 ensureLifeArc();state.lifeRoute='work';state.workStatus='none';state.applicationStatus='채용 면접 대기';state.adultPath=state.adultPath||'취업';
 state.arcQueue.unshift(makeFollowupInterview('work'));closeAppModal();showNextLifeArc();render();save();toast('채용 면접 질문에 답해 줘!');
}
function worldAskPromotion(){
 if(!worldCanAct(19))return;
 const w=ensureWorld();if(state.workStatus!=='employed')return toast('현재 재직 중인 직장이 없어.');
 if(state.age-w.lastPromotionAge<2)return toast('승진 후 2년 이상 경력을 더 쌓아야 해.');
 if(w.performance<22)return toast('업무 경험이 더 필요해. 평소 선택으로 실적을 쌓아 봐.');
 const threshold=30+Math.min(20,Number(state.jobLevel||0)*3);
 if(w.performance<threshold)return toast('아직 성과가 부족해. 프로젝트 경험을 더 쌓아 봐.');
 state.jobLevel=Math.min(12,Number(state.jobLevel||0)+1);w.lastPromotionAge=state.age;w.performance=Math.max(0,w.performance-22);
 worldCommit('승진에 성공했어! 직급 '+state.jobLevel+'단계','careerWorld');
}
function worldMeetFriend(id){
 const w=ensureWorld(),person=w.friends[id],def=WORLD_FRIENDS.find(f=>f.id===id);
 if(!person||!def||!worldCanAct(def.minAge||7))return;
 if(person.lastAge===state.age)return toast('올해는 이미 시간을 보냈어. 다음 해에 또 만나 봐.');
 person.lastAge=state.age;person.bond=Math.min(100,person.bond+12);
 state.stats.social=limitStat('social',state.stats.social+.8);
 state.stats.happiness=limitStat('happiness',state.stats.happiness+2);
 worldCommit(def.name+'와 시간을 보내 우정이 깊어졌어.','friends');
}
function worldFaceRival(){
 if(!worldCanAct(13))return;
 const w=ensureWorld();if(w.rival.lastAge===state.age)return toast('올해 라이벌과의 대결은 이미 끝났어.');
 w.rival.lastAge=state.age;
 const score=Number(w.talents.intelligence)+Number(w.talents.creativity)+Number(w.talents.business);
 const success=Math.random()<Math.min(.85,.35+score/300);
 w.rival.respect=Math.min(100,w.rival.respect+(success?13:6));
 state.stats.intelligence=limitStat('intelligence',state.stats.intelligence+.4);
 worldCommit(success?'라이벌 민준과의 도전에서 좋은 평가를 받았어.':'민준과 경쟁했지만 원하는 결과는 아니었어. 그래도 배웠어.','friends');
}
function worldTrainTalent(id){
 if(!worldCanAct(6))return;
 const w=ensureWorld(),t=WORLD_TALENTS.find(x=>x.id===id);if(!t)return;
 if(w.trainAge[id]===state.age)return toast('올해 이 재능은 이미 훈련했어.');
 const cost=state.age<18?200:600;
 if(state.money<cost)return toast('훈련 비용이 부족해.');
 w.trainAge[id]=state.age;state.money-=cost;w.talents[id]=worldRound((w.talents[id]||0)+3);
 if(id!=='business')state.stats[id]=limitStat(id,state.stats[id]+.7);
 else state.stats.intelligence=limitStat('intelligence',state.stats.intelligence+.4);
 state.stats.health=limitStat('health',state.stats.health-1);
 worldCommit(t.name+' 재능 훈련 완료 · '+formatWon(cost)+' 사용','talents');
}
function worldAddChild(){
 if(!worldCanAct(22))return;
 const w=ensureWorld(),r=ensureRomance();
 if(r.status!=='married')return toast('이 게임에서는 결혼 이후 자녀를 맞이할 수 있어.');
 if(w.children.length>=3)return toast('자녀는 최대 세 명까지 키울 수 있어.');
 if(state.age-w.lastChildAge<3)return toast('가족의 새 식구를 맞이하기 전에 시간이 조금 더 필요해.');
 if(state.money<1800)return toast('가족을 위한 준비 비용이 부족해.');
 state.money-=1800;w.lastChildAge=state.age;
 const names=['시온','유나','이든','다온','서아','지우'];
 const name=names[(w.children.length+state.age)%names.length];
 w.children.push({name,birthAge:state.age,bond:55,lastAge:-1});
 state.stats.happiness=limitStat('happiness',state.stats.happiness+4);
 worldCommit('가족에게 '+name+'라는 새 식구가 찾아왔어.','children');
}
function worldChildTime(idx){
 if(!worldCanAct(22))return;
 const w=ensureWorld(),c=w.children[idx];if(!c)return;
 if(c.lastAge===state.age)return toast('올해는 이미 가족과 특별한 시간을 보냈어.');
 c.lastAge=state.age;c.bond=Math.min(100,c.bond+12);
 state.stats.happiness=limitStat('happiness',state.stats.happiness+2);
 state.stats.social=limitStat('social',state.stats.social+.5);
 worldCommit(c.name+'와 함께 하루를 보내 가족의 유대가 깊어졌어.','children');
}
function worldEndingName(){
 const w=ensureWorld();
 if(state.taebinAllGoalsAchieved)return '100가지 꿈을 모두 이룬 인생';
 if(w.business&&w.business.level>=3)return '회사를 키운 경영자의 인생';
 if(w.children.length&&w.children.some(x=>x.bond>=75))return '가족을 아끼며 살아온 인생';
 if(w.properties.length>=2)return '꾸준히 자산을 쌓은 인생';
 if(state.workStatus==='employed'&&state.jobLevel>=2)return '실력으로 인정받은 직장인의 인생';
 if(Object.values(w.talents).some(v=>v>=30))return '재능을 키운 도전자의 인생';
 if((state.absurdCount||0)>=10)return '세상을 웃긴 황당한 인생';
 return '다음 장을 꿈꾸며 살아온 인생';
}
function worldLifeSummary(){
 const w=ensureWorld();const items=[];
 if(w.properties.length)items.push('부동산 '+w.properties.length+'채를 소유했어.');
 if(w.everFounded)items.push('직접 사업을 시작했고, '+(w.business?'마지막까지 운영했어.':'변화를 위해 사업을 정리했어.'));
 if(w.children.length)items.push(w.children.length+'명의 자녀와 가족을 이루었어.');
 if(w.everPaid)items.push('직장에서 연봉을 받으며 경험을 쌓았어.');
 if(w.loans.length)items.push('인생 마지막까지 갚아야 할 대출이 '+formatWon(worldDebt())+' 남았어.');
 if(w.everPaidOff)items.push('빌린 돈을 끝까지 갚은 경험도 있어.');
 const best=WORLD_TALENTS.slice().sort((a,b)=>(w.talents[b.id]||0)-(w.talents[a.id]||0))[0];
 if(state.absurdCount)items.push('예상 못한 황당 사건을 '+state.absurdCount+'번 마주하고 웃음으로 넘겼어.');
 items.push('가장 많이 키운 재능은 '+best.name+'이야.');
 return items.join(' ');
}
function worldReviewMarkup(){
 const w=ensureWorld(),parts=worldWorthParts();
 const rows=[['현금',parts.cash],['통장',parts.bank],['주식',parts.stocks],['비트코인',parts.crypto],['부동산',parts.property],['사업 가치',parts.business],['탈것',parts.vehicles],['대출 잔액',-parts.debt]];
 const last=w.events.filter(e=>e.type!=='achievement').slice(-16);
 return `<div class="life-review-title">인생의 결과 · ${worldSafe(worldEndingName())}</div>
 <p class="life-review-sub">${worldSafe(worldLifeSummary())}</p>
 <div class="world-mini-grid">${rows.map(([name,n])=>`<div><small>${name}</small><b>${n<0?'−':''}${formatWon(Math.abs(n))}</b></div>`).join('')}</div>
 <div class="life-review-title">추가된 삶의 사건</div>
 <div class="world-history">${last.length?last.map(e=>`<div><strong>${e.age}살</strong><span>${worldSafe(e.title)}</span></div>`).join(''):'<p>아직 추가 기록이 없어.</p>'}</div>
 <div class="life-review-title">수집한 업적 · ${w.achievements.length}/${WORLD_ACHIEVEMENTS.length}</div>
 <p class="life-review-sub">${w.achievements.map(id=>WORLD_ACHIEVEMENTS.find(a=>a.id===id)?.name||id).join(' · ')||'이번 인생에서 모은 업적은 없어.'}</p>`;
}


/* Optional qualifications and a fictional bitcoin market. */
const NURI_CERTS=[
 {id:'office',name:'문서 활용',age:16,study:2,fee:8,icon:'📝',questions:[
  ['표의 제목 행을 제외하고 가나다순으로 정렬하려면?',['데이터 행을 선택한다','제목만 바꾼다','모든 셀을 지운다'],0],
  ['같은 서식을 여러 문단에 씌우려면?',['글자 하나씩 다시 입력한다','문단 스타일을 적용한다','다른 문서로 옮긴다'],1]]},
 {id:'design',name:'디자인 제작',age:16,study:3,fee:12,icon:'🎨',questions:[
  ['밝은 배경에서 글자를 또렷하게 보이려면?',['밝은 노랑을 쓴다','어두운 색으로 대비를 높인다','투명도를 높인다'],1],
  ['중요한 제목을 먼저 발견하게 하려면?',['모든 글자 크기를 같게 한다','제목을 그림 뒤에 둔다','제목의 크기와 여백을 구분한다'],2]]},
 {id:'coding',name:'코딩 기초',age:16,study:3,fee:16,icon:'💻',questions:[
  ['같은 작업을 열 번 실행하려면 무엇이 어울릴까?',['반복문','글자 색 변경','파일 이름 삭제'],0],
  ['입력이 빈 경우까지 점검하는 이유는?',['실행 속도를 무조건 높이려고','예상하지 못한 입력에서도 동작하는지 보려고','코드 길이를 늘리려고'],1]]},
 {id:'service',name:'고객 응대',age:17,study:2,fee:10,icon:'🤝',questions:[
  ['고객의 요청이 모호할 때 먼저 할 일은?',['요청을 확인하는 질문을 한다','바로 결론을 말한다','아무 답도 하지 않는다'],0],
  ['해결에 시간이 걸린다면 어떻게 안내할까?',['확인 없이 금방 된다고 말한다','설명 없이 기다리게 한다','확인할 내용과 다음 안내 시간을 알려 준다'],2]]},
 {id:'accounting',name:'회계 기초',age:18,study:4,fee:22,icon:'🧾',questions:[
  ['가게의 매출이 80,000원이고 비용이 50,000원이면 남은 금액은?',['130,000원','30,000원','50,000원'],1],
  ['지출을 나중에도 확인할 수 있게 하려면?',['영수증과 지출 기록을 함께 보관한다','금액을 모두 같게 적는다','큰 금액만 기억한다'],0]]},
 {id:'delivery',name:'물류 관리',age:18,study:4,fee:24,icon:'📦',questions:[
  ['유통기한이 서로 다른 상품의 출고 순서는?',['상자가 큰 것부터','진열된 위치순','유통기한이 빠른 것부터'],2],
  ['보관 중 파손된 물건이 발견되면?',['정상 재고와 구분해 기록한다','정상 상품에 섞는다','기록 없이 수량만 줄인다'],0]]}
];
function nuriCertRecord(w,id){return w.certificates[id]??={study:0,attempts:0,lastExamDay:-1,earnedAt:null};}
function nuriCertCount(w=ensureWorld()){
 return NURI_CERTS.filter(c=>Number.isInteger(w.certificates[c.id]?.earnedAt)).length;
}
function nuriStudyCert(id){
 const cert=NURI_CERTS.find(c=>c.id===id);
 if(!cert||!state.family||!worldCanAct(cert.age))return false;
 const w=ensureWorld(),rec=nuriCertRecord(w,id);
 if(Number.isInteger(rec.earnedAt)||rec.study>=cert.study||w.certExam)return false;
 if(w.lastCertStudyDay===state.day){toast('오늘은 이미 공부했어. 다음 날 다시 공부해 줘.');return false;}
 if(state.stats.health<=10){toast('먼저 쉬어서 체력을 회복해 줘.');return false;}
 rec.study++;w.lastCertStudyDay=state.day;state.stats.health=limitStat('health',state.stats.health-1);
 render();save();if(activeModal==='certificates')renderNuriCertificates();toast(cert.name+' 공부 '+rec.study+'/'+cert.study);
 return true;
}
function nuriTakeCertExam(id){
 const cert=NURI_CERTS.find(c=>c.id===id);
 if(!cert||!state.family||!worldCanAct(cert.age))return false;
 const w=ensureWorld(),rec=nuriCertRecord(w,id);
 if(w.certExam||rec.study<cert.study||rec.lastExamDay===state.day||Number.isInteger(rec.earnedAt))return false;
 if(state.money<cert.fee){toast('응시료를 낼 현금이 부족해.');return false;}
 state.money=Math.round((state.money-cert.fee)*1000)/1000;
 w.certExam={id,question:rec.attempts%cert.questions.length};
 rec.attempts++;rec.lastExamDay=state.day;
 render();save();if(activeModal==='certificates')renderNuriCertificates();
 return true;
}
function nuriAnswerCert(index){
 if(!state.alive||!Number.isInteger(index))return false;
 const w=ensureWorld(),exam=w.certExam;
 const cert=NURI_CERTS.find(c=>c.id===exam?.id),question=cert?.questions[exam?.question];
 if(!question||index<0||index>=question[1].length)return false;
 const rec=nuriCertRecord(w,cert.id);
 w.certExam=null;
 const passed=index===question[2];
 if(passed){
  rec.earnedAt=state.age;
  worldNote('🏅 '+cert.name+' 자격증 취득','certificate');
 }
 const result=passed?cert.name+' 시험에 합격했어!':cert.name+' 시험 불합격. 공부 기록은 유지돼. 다음 날 다시 응시할 수 있어.';
 render();save();if(activeModal==='certificates')renderNuriCertificates(result);toast(result);
 return passed;
}
function renderNuriCertificates(result=''){
 const w=ensureWorld(),count=nuriCertCount(w),exam=w.certExam;
 const current=NURI_CERTS.find(c=>c.id===exam?.id),question=current?.questions[exam?.question];
 modalHeader('자격증','태빈이 키우기 · CERTIFICATES');
 const stop=state.alive?'':'disabled';
 const list=NURI_CERTS.map(c=>{
  const r=nuriCertRecord(w,c.id);
  const earned=Number.isInteger(r.earnedAt),locked=state.age<c.age;
  return `<article class="world-item"><div><b>${c.icon} ${c.name}</b><small>${earned?r.earnedAt+'살에 취득':c.age+'살부터 · 공부 '+r.study+'/'+c.study+'회 · 응시료 '+formatWon(c.fee)}</small></div>
   ${earned?'<strong>취득 완료</strong>':`<div class="world-actions"><button type="button" class="world-button" onclick="nuriStudyCert('${c.id}')" ${locked||r.study>=c.study||w.lastCertStudyDay===state.day?'disabled':stop}>공부하기</button><button type="button" class="world-button" onclick="nuriTakeCertExam('${c.id}')" ${locked||r.study<c.study||r.lastExamDay===state.day||state.money<c.fee?'disabled':stop}>시험 응시</button></div>`}</article>`;
 }).join('');
 document.getElementById('appModalBody').innerHTML=`
  <p class="modal-hint">게임 전용 자격증이야. 하루 한 번 공부할 수 있고 체력 1을 써. 필요한 공부를 마치고 시험 문제를 맞히면 취득해.</p>
  <div class="world-feature"><b>취득 ${count}/${NURI_CERTS.length}개 · 재직 중 기본 연봉 +${count*2}%</b></div>
  ${result?`<p class="rank-status" role="status">${worldSafe(result)}</p>`:''}
  ${question?`<section class="social-panel"><h3>${current.name} 모의 시험</h3><p>${question[0]}</p><div class="social-actions">${question[1].map((answer,i)=>`<button type="button" class="modal-action" onclick="nuriAnswerCert(${i})" ${stop}>${answer}</button>`).join('')}</div></section>`:`<div class="world-list">${list}</div>`}
  <div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal('menu')">← 메뉴로 돌아가기</button></div>`;
}

const NURI_BTC_INITIAL=100000000, NURI_BTC_UNIT=100000000n, NURI_BTC_MAX_WON=5000000000;
function nuriCryptoState(w=ensureWorld()){
 if(!w.crypto||typeof w.crypto!=='object'||Array.isArray(w.crypto))w.crypto={};
 const b=w.crypto;
 if(!Number.isSafeInteger(b.price)||b.price<10000||b.price>NURI_BTC_MAX_WON)b.price=NURI_BTC_INITIAL;
 if(!Number.isSafeInteger(b.sats)||b.sats<0)b.sats=0;
 if(!Array.isArray(b.chart)||!b.chart.length)b.chart=[b.price];
 if(!Array.isArray(b.history))b.history=[];
 return b;
}
function nuriCryptoValue(){
 const b=nuriCryptoState();
 return Number(BigInt(b.sats)*BigInt(b.price)/NURI_BTC_UNIT)/1000;
}
function nuriUpdateCrypto(){
 if(!state.alive||state.age<18)return;
 const b=nuriCryptoState();
 b.price=Math.max(10000,Math.min(NURI_BTC_MAX_WON,Math.round(b.price*(1+(Math.random()-.5)*.15))));
 b.chart.push(b.price);b.chart=b.chart.slice(-30);
}
function nuriParseBtc(value){
 const input=String(value??'').trim();
 if(!/^(?:\d{1,8}(?:\.\d{0,8})?|\.\d{1,8})$/.test(input))return null;
 const [whole='',fraction='']=input.split('.');
 const sats=Number(BigInt(whole||'0')*NURI_BTC_UNIT+BigInt(fraction.padEnd(8,'0')));
 return Number.isSafeInteger(sats)&&sats>0?sats:null;
}
function nuriFormatBtc(sats){return (sats/Number(NURI_BTC_UNIT)).toLocaleString('en',{maximumFractionDigits:8})+' BTC';}
function nuriMaxBtc(b,cash){
 if(!Number.isSafeInteger(cash)||cash<1)return 0;
 const affordable=BigInt(cash)*1000n*NURI_BTC_UNIT/(BigInt(b.price)*1002n);
 return Math.min(Number(affordable),Number.MAX_SAFE_INTEGER-b.sats);
}
function nuriTradeCrypto(side,all=false){
 if(!state.family||!worldCanAct(18)||!['buy','sell'].includes(side))return false;
 const b=nuriCryptoState(),buy=side==='buy',cash=Math.round(state.money*1000);
 if(!Number.isSafeInteger(cash)||cash<0)return false;
 const qty=all?(buy?nuriMaxBtc(b,cash):b.sats):nuriParseBtc(document.getElementById('nuriBtcQty')?.value);
 if(!Number.isSafeInteger(qty)||qty<=0){toast('0.00000001 BTC 이상의 수량을 입력해 줘.');return false;}
 if(!buy&&qty>b.sats){toast('보유한 비트코인보다 많이 팔 수 없어.');return false;}
 const amount=BigInt(b.price)*BigInt(qty)*(buy?1002n:998n);
 const divisor=NURI_BTC_UNIT*1000n;
 const won=Number(buy?(amount+divisor-1n)/divisor:amount/divisor);
 const nextCash=cash+(buy?-won:won),nextSats=b.sats+(buy?qty:-qty);
 if(won<1){toast('거래 금액이 1원보다 작아. 수량을 늘려 줘.');return false;}
 if(!Number.isSafeInteger(won)||!Number.isSafeInteger(nextCash)||!Number.isSafeInteger(nextSats)||nextCash<0){toast('보유 현금이나 거래 한도를 확인해 줘.');return false;}
 b.sats=nextSats;state.money=nextCash/1000;
 const entry=(buy?'매수 ':'매도 ')+nuriFormatBtc(qty)+' · '+formatWon(won/1000)+' (수수료 반영)';
 b.history.unshift({age:state.age,entry});b.history=b.history.slice(0,24);
 worldNote('비트코인 '+entry,'crypto');render();save();if(activeModal==='crypto')renderNuriCrypto();toast('비트코인 '+(buy?'매수':'매도')+' 완료');
 return true;
}
function renderNuriCrypto(){
 const b=nuriCryptoState(),cash=Math.round(state.money*1000);
 const previous=b.chart.length>1?b.chart.at(-2):b.price;
 const rate=previous>0?Number(((b.price/previous-1)*100).toFixed(2)):0,trend=stockTrend(rate);
 const locked=!state.alive||state.age<18;
 modalHeader('비트코인','태빈이 키우기 · 가상 거래');
 document.getElementById('appModalBody').innerHTML=`
  <p class="modal-hint">18살부터 거래할 수 있어. 시세는 게임 속 하루마다 바뀌어. 매수·매도 수수료는 각각 0.2%야. 실제 시세나 거래소와 연결되지 않아.</p>
  <div class="world-feature"><div class="world-mini-grid">
   <div><small>1 BTC 시세</small><b class="${trend.className}">${formatWon(b.price/1000)}</b><small class="${trend.className}">${trend.mark} ${trend.label} ${Math.abs(rate).toFixed(2)}%</small></div>
   <div><small>보유량</small><b>${nuriFormatBtc(b.sats)}</b></div>
   <div><small>비트코인 평가액</small><b>${formatWon(nuriCryptoValue())}</b></div>
   <div><small>거래에 쓸 현금</small><b>${formatWon(state.money)}</b></div>
  </div>${marketSpark(b.chart,trend,'BTC 시세')}
   <div class="bank-form"><label for="nuriBtcQty">거래 수량 (BTC)</label><input id="nuriBtcQty" type="text" inputmode="decimal" maxlength="17" placeholder="예: 0.0001" ${locked?'disabled':''}>
   <div class="social-actions"><button type="button" class="modal-action" onclick="nuriTradeCrypto('buy')" ${locked||nuriMaxBtc(b,cash)===0?'disabled':''}>매수</button><button type="button" class="modal-action" onclick="nuriTradeCrypto('sell')" ${locked||b.sats===0?'disabled':''}>매도</button></div>
   <div class="social-actions"><button type="button" class="modal-action" onclick="nuriTradeCrypto('buy',true)" ${locked||nuriMaxBtc(b,cash)===0?'disabled':''}>최대 매수</button><button type="button" class="modal-action" onclick="nuriTradeCrypto('sell',true)" ${locked||b.sats===0?'disabled':''}>전량 매도</button></div></div>
  </div>
  <div class="stock-history"><h3>최근 거래</h3><ul>${b.history.length?b.history.slice(0,8).map(h=>`<li>${worldSafe(h.age)}살 · ${worldSafe(h.entry)}</li>`).join(''):'<li>아직 거래 기록이 없어.</li>'}</ul></div>
  <div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal('stocks')">주식 시장</button><button type="button" class="modal-action" onclick="openAppModal('menu')">← 메뉴로 돌아가기</button></div>`;
}


/* Fictional vehicles: values and ownership are separate from spendable cash. */
const NURI_VEHICLES=[
 {id:'bike',name:'동네 자전거',icon:'🚲',age:7,price:60,upkeep:2,depreciation:.05,stat:'health',gain:2},
 {id:'kick',name:'접이식 킥보드',icon:'🛴',age:10,price:95,upkeep:3,depreciation:.06,stat:'happiness',gain:1},
 {id:'ebike',name:'전기 자전거',icon:'🚲',age:16,price:650,upkeep:18,depreciation:.08,stat:'health',gain:1},
 {id:'scooter',name:'클래식 스쿠터',icon:'🛵',age:18,price:1800,upkeep:60,depreciation:.09,stat:'happiness',gain:1},
 {id:'compact',name:'중고 경차',icon:'🚙',age:19,price:5200,upkeep:160,depreciation:.08,stat:'happiness',gain:2},
 {id:'sedan',name:'중형 세단',icon:'🚗',age:20,price:22000,upkeep:450,depreciation:.11,stat:'happiness',gain:2},
 {id:'suv',name:'여행용 SUV',icon:'🚘',age:23,price:39000,upkeep:750,depreciation:.11,stat:'happiness',gain:3}
];
function nuriVehicleWorth(w=ensureWorld()){
 return w.vehicles.reduce((sum,vehicle)=>sum+Math.max(0,Number(vehicle?.value)||0),0);
}
function nuriVehicleAction(action,id){
 const spec=NURI_VEHICLES.find(v=>v.id===id);
 if(!spec||!state.family||!worldCanAct(spec.age))return false;
 const w=ensureWorld(),index=w.vehicles.findIndex(v=>v.id===id);
 let message;
 if(action==='buy'){
  if(index>=0){toast('이미 소유한 탈것이야.');return false;}
  if(w.vehicles.length>=4){toast('차고에는 탈것을 최대 4대까지 둘 수 있어.');return false;}
  if(state.money<spec.price){toast('보유 현금이 부족해.');return false;}
  state.money=Math.round((state.money-spec.price)*1000)/1000;
  w.vehicles.push({id,value:spec.price,boughtAt:state.age});
  if(!w.activeVehicle)w.activeVehicle=id;
  message=spec.name+' 구입 · '+formatWon(spec.price);
 }else if(action==='sell'&&index>=0){
  const price=Math.floor(w.vehicles[index].value*.95);
  if(!confirm(spec.name+'을 '+formatWon(price)+'에 판매할까?'))return false;
  w.vehicles.splice(index,1);
  if(w.activeVehicle===id)w.activeVehicle='';
  state.money=Math.round((state.money+price)*1000)/1000;
  message=spec.name+' 판매 · '+formatWon(price);
 }else if(action==='use'&&index>=0){
  w.activeVehicle=w.activeVehicle===id?'':id;
  message=w.activeVehicle?spec.name+'을 타고 다니기로 했어.':spec.name+'을 차고에 보관했어.';
 }else return false;
 worldNote(message,'vehicle');
 render();save();if(activeModal==='vehicles')renderNuriVehicles();toast(message);
 return true;
}
function nuriVehicleAnnual(w){
 for(const vehicle of w.vehicles){
  const spec=NURI_VEHICLES.find(v=>v.id===vehicle.id);
  if(!spec)continue;
  vehicle.value=Math.max(Math.round(spec.price*.2),worldRound(vehicle.value*(1-spec.depreciation)));
  if(w.activeVehicle!==vehicle.id)continue;
  if(state.money<spec.upkeep){w.activeVehicle='';worldNote(spec.name+' 유지비가 부족해 차고에 보관했어.','vehicle');continue;}
  state.money=Math.round((state.money-spec.upkeep)*1000)/1000;
  state.stats[spec.stat]=limitStat(spec.stat,state.stats[spec.stat]+spec.gain);
  worldNote(spec.name+' 연간 유지비 '+formatWon(spec.upkeep)+' · '+labels[spec.stat]+' +'+spec.gain,'vehicle');
 }
}
function renderNuriVehicles(){
 const w=ensureWorld(),stop=state.alive?'':'disabled';
 modalHeader('탈것 · 내 차고','태빈이 키우기 · GARAGE');
 const cards=NURI_VEHICLES.map(spec=>{
  const own=w.vehicles.find(v=>v.id===spec.id),using=w.activeVehicle===spec.id;
  const locked=state.age<spec.age;
  return `<article class="world-item"><div><b>${spec.icon} ${spec.name}${using?' · 이용 중':''}</b><small>${own?'현재 가치 '+formatWon(own.value):spec.age+'살부터 · 구매 '+formatWon(spec.price)}</small><small>이용 중 연 유지비 ${formatWon(spec.upkeep)} · ${labels[spec.stat]} +${spec.gain}</small></div><div class="world-actions">${own?`<button type="button" class="world-button" onclick="nuriVehicleAction('use','${spec.id}')" ${stop}>${using?'차고에 보관':'타고 다니기'}</button><button type="button" class="world-button" onclick="nuriVehicleAction('sell','${spec.id}')" ${stop}>${formatWon(Math.floor(own.value*.95))}에 판매</button>`:`<button type="button" class="world-button" onclick="nuriVehicleAction('buy','${spec.id}')" ${locked||w.vehicles.length>=4||state.money<spec.price?'disabled':stop}>${locked?spec.age+'살부터':'구매하기'}</button>`}</div></article>`;
 }).join('');
 document.getElementById('appModalBody').innerHTML=`
  <div class="world-moneybar"><span>현금 <b>${formatWon(state.money)}</b></span><span>탈것 평가액 <b>${formatWon(nuriVehicleWorth(w))}</b></span><span>차고 ${w.vehicles.length}/4대</span></div>
  <p class="modal-hint">한 대를 골라 타고 다닐 수 있어. 보유한 탈것의 가치는 해마다 내려가고, 유지비와 효과는 타고 다니는 탈것에만 적용돼.</p>
  <div class="world-list">${cards}</div><div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal('menu')">← 메뉴로 돌아가기</button></div>`;
}

/* Meta collection survives a restart on the same browser/device. */
let worldLegacyCache=null;
function worldLegacy(){
 if(worldLegacyCache)return worldLegacyCache;
 let saved=null;
 try{saved=JSON.parse(localStorage.getItem(window.nuriCurrentLegacyKey())||'null');}catch(e){}
 worldLegacyCache={
  achievements:Array.isArray(saved?.achievements)?saved.achievements:[],
  endings:Array.isArray(saved?.endings)?saved.endings:[],
  runs:Number.isFinite(Number(saved?.runs))?saved.runs:0
 };
 return worldLegacyCache;
}
function worldPersistLegacy(finished=false){
 if(!state.family)return;
 const record=worldLegacy(),w=ensureWorld();
 for(const id of w.achievements)if(!record.achievements.includes(id))record.achievements.push(id);
 if(finished){
  record.runs++;
  record.endings.push({title:worldEndingName(),age:state.age,wealth:nuriNetWorth()});
  record.endings=record.endings.slice(-30);
 }
 try{localStorage.setItem(window.nuriCurrentLegacyKey(),JSON.stringify(record));}catch(e){}
}


/* Rank the current game and the completed lives kept by this save. */
function nuriRankRows(metric='wealth'){
 const archive=worldLegacy(),endings=archive.endings;
 const start=Math.max(0,archive.runs-endings.length);
 const rows=endings.flatMap((end,index)=>{
  if(!end||!Number.isFinite(Number(end.age))||!Number.isFinite(Number(end.wealth)))return [];
  return [{title:String(end.title||'지난 인생'),age:Number(end.age),wealth:Number(end.wealth),run:start+index+1,current:false}];
 });
 if(state.family&&state.alive){
  rows.push({title:families[state.family]?.name||'현재 인생',age:state.age,wealth:nuriNetWorth(),run:archive.runs+1,current:true});
 }
 const key=metric==='age'?'age':'wealth',secondary=key==='age'?'wealth':'age';
 rows.sort((a,b)=>b[key]-a[key]||b[secondary]-a[secondary]||b.run-a.run);
 rows.forEach((row,index)=>{row.rank=index&&row[key]===rows[index-1][key]?rows[index-1].rank:index+1;});
 return rows;
}

/* Public leaderboard does not share account identifiers or game saves. */
const NURI_RANK_PATH='/.netlify/functions/ranking';
function nuriRankRegistration(){
 try{return JSON.parse(localStorage.getItem(window.nuriCurrentSaveKey()+':rank'))||{};}
 catch{return {};}
}
function nuriRankStore(record){
 try{localStorage.setItem(window.nuriCurrentSaveKey()+':rank',JSON.stringify(record));return true;}
 catch{return false;}
}
function renderNuriPublicRanking(metric='wealth',message=''){
 const byAge=metric==='age',by=byAge?'age':'wealth';
 const registration=nuriRankRegistration();
 const localScore={age:state.age,wealth:Math.round(nuriNetWorth()*1000)};
 modalHeader('인생 랭킹','태빈이 키우기 · LEADERBOARD');
 document.getElementById('appModalBody').innerHTML=`
  <div class="social-tabs" aria-label="랭킹 종류"><button type="button" aria-pressed="true" onclick="renderNuriPublicRanking()">전체 플레이어</button><button type="button" aria-pressed="false" onclick="renderNuriRanking()">내 인생 기록</button></div>
  <div class="social-tabs" aria-label="정렬 기준"><button type="button" aria-pressed="${!byAge}" onclick="renderNuriPublicRanking('wealth')">순자산 순</button><button type="button" aria-pressed="${byAge}" onclick="renderNuriPublicRanking('age')">나이 순</button></div>
  <p class="modal-hint">플레이어가 직접 등록한 게임 기록이야. 상위 50개를 보여 줘.</p>
  <div id="nuriPublicRankRows" aria-live="polite"><p class="rank-status">랭킹을 불러오는 중이야…</p></div>
  ${state.family?`<form class="world-feature social-compose" onsubmit="return nuriPublishRanking(event,'${by}')"><h3>내 기록 등록</h3><label>공개 닉네임<input name="nickname" value="${nuriChoiceEscape(registration.nickname||'')}" minlength="2" maxlength="16" placeholder="게임 닉네임" required></label>
   <p class="modal-hint">등록하면 닉네임, ${localScore.age}살, 순자산 ${formatWon(localScore.wealth/1000)}이 공개돼. 이름 대신 게임 닉네임을 사용해 줘.</p>
   <div class="social-actions"><button type="submit" class="modal-action">${registration.nickname?'기록 갱신':'공개 랭킹에 올리기'}</button>${registration.nickname?`<button type="button" class="modal-action" onclick="nuriRemoveRanking('${by}')">내 공개 기록 지우기</button>`:''}</div></form>`:''}
  <p id="nuriPublicRankMessage" class="modal-hint" role="status">${worldSafe(message)}</p>
  <div class="menu-actions"><button type="button" class="modal-action" onclick="closeAppModal()">게임으로 돌아가기</button></div>`;
 const target=document.getElementById('nuriPublicRankRows');
 fetch(NURI_RANK_PATH+'?by='+by,{cache:'no-store'})
  .then(async res=>{if(!res.ok)throw Error();return res.json();})
  .then(data=>{
   if(!target.isConnected)return;
   const rows=Array.isArray(data.entries)?data.entries:[];
   target.innerHTML=rows.length?`<ol class="rank-list">${rows.map(row=>`<li class="rank-row"><span class="rank-place">${worldSafe(row.rank)}위</span><div><b>${worldSafe(row.nickname)}</b><small>${byAge?formatWon(row.wealth/1000):worldSafe(row.age)+'살'}</small></div><strong>${byAge?worldSafe(row.age)+'살':formatWon(row.wealth/1000)}</strong></li>`).join('')}</ol>`:'<p class="rank-status">아직 등록된 기록이 없어. 첫 기록을 남겨 봐!</p>';
  })
  .catch(()=>{if(target.isConnected)target.innerHTML='<p class="rank-status">공개 랭킹을 불러오지 못했어. 잠시 후 다시 열어 봐.</p>';});
 document.querySelector('.app-modal-card')?.scrollTo?.(0,0);
}
function nuriPublishRanking(event,metric){
 event.preventDefault();
 const form=event.currentTarget;
 const button=form.querySelector('button[type=submit]');
 const feedback=document.getElementById('nuriPublicRankMessage');
 const nickname=String(new FormData(form).get('nickname')||'').normalize('NFC').trim();
 if(!state.family||!/^[\p{L}\p{N} _-]{2,16}$/u.test(nickname)||/^\d{6,}$/.test(nickname)){
  feedback.textContent='글자나 숫자로 된 2~16자 게임 닉네임을 입력해 줘.';return false;
 }
 let record=nuriRankRegistration();
 if(!/^[a-f0-9]{64}$/.test(record.token||'')){
  record={token:Array.from(crypto.getRandomValues(new Uint8Array(32)),b=>b.toString(16).padStart(2,'0')).join('')};
 }
 if(!nuriRankStore(record)){feedback.textContent='브라우저 저장이 필요해. 저장을 허용하고 다시 시도해 줘.';return false;}
 button.disabled=true;feedback.textContent='기록을 등록하는 중이야…';
 fetch(NURI_RANK_PATH,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+record.token},
  body:JSON.stringify({nickname,age:state.age,wealth:Math.round(nuriNetWorth()*1000)})})
  .then(async res=>{const data=await res.json();if(!res.ok)throw Error(data.error);})
  .then(()=>{
   nuriRankStore({...record,nickname});
   if(form.isConnected)renderNuriPublicRanking(metric,'공개 랭킹에 기록을 등록했어.');
  })
  .catch(error=>{if(form.isConnected){feedback.textContent=error.message||'등록에 실패했어. 다시 시도해 줘.';button.disabled=false;}});
 return false;
}
function nuriRemoveRanking(metric){
 const record=nuriRankRegistration();
 const feedback=document.getElementById('nuriPublicRankMessage');
 if(!record.token||!confirm('공개 랭킹에서 내 기록을 지울까? 게임 저장은 그대로 남아.'))return;
 fetch(NURI_RANK_PATH,{method:'DELETE',headers:{Authorization:'Bearer '+record.token}})
  .then(async res=>{const data=await res.json();if(!res.ok)throw Error(data.error);})
  .then(()=>{nuriRankStore({token:record.token});if(feedback.isConnected)renderNuriPublicRanking(metric,'공개 기록을 지웠어.');})
  .catch(error=>{if(feedback.isConnected)feedback.textContent=error.message||'공개 기록을 지우지 못했어. 다시 시도해 줘.';});
}

function renderNuriRanking(metric='wealth'){
 const byAge=metric==='age';
 const rows=nuriRankRows(byAge?'age':'wealth');
 const current=rows.find(row=>row.current);
 const top=rows.slice(0,10);
 const renderRank=row=>`<li class="rank-row ${row.current?'rank-current':''}" value="${row.rank}"><span class="rank-place">${row.rank}위</span><div><b>${worldSafe(row.title)}</b><small>${row.current?'현재 진행 중':row.run+'번째 인생 · 완주'} · ${byAge?formatWon(row.wealth):row.age+'살'}</small></div><strong>${byAge?row.age+'살':formatWon(row.wealth)}</strong></li>`;
 modalHeader('인생 랭킹','태빈이 키우기 · 내 기록');
 document.getElementById('appModalBody').innerHTML=`
  <div class="social-tabs" aria-label="랭킹 종류"><button type="button" aria-pressed="false" onclick="renderNuriPublicRanking()">전체 플레이어</button><button type="button" aria-pressed="true" onclick="renderNuriRanking()">내 인생 기록</button></div>
  <p class="modal-hint">현재 인생과 이 저장에 남아 있는 완주 기록을 비교해. ${byAge?'살아온 나이':'순자산(현금·통장·주식·비트코인·부동산·사업·탈것에서 대출을 뺀 금액)'}이 같으면 공동 순위야.</p>
  <div class="social-tabs" aria-label="랭킹 기준"><button type="button" aria-pressed="${!byAge}" onclick="renderNuriRanking('wealth')">순자산 순</button><button type="button" aria-pressed="${byAge}" onclick="renderNuriRanking('age')">나이 순</button></div>
  ${current?`<p class="rank-status">현재 인생 <b>${current.rank}위</b> / ${rows.length}개 기록</p>`:''}
  ${top.length?`<ol class="rank-list" aria-label="상위 10개 인생 기록">${top.map(renderRank).join('')}</ol>`:'<p class="rank-status">아직 비교할 인생 기록이 없어.</p>'}
  ${current&&!top.includes(current)?`<div class="rank-overflow"><h3>현재 인생</h3><ol class="rank-list">${renderRank(current)}</ol></div>`:''}
  <p class="modal-hint">개인 기록은 공개 랭킹에 등록하기 전까지 이 화면에만 보여.</p>
  <div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal('menu')">← 메뉴로 돌아가기</button></div>`;
 document.querySelector('.app-modal-card')?.scrollTo?.(0,0);
}

function worldRender(view){
 ensureWorld();
 const headings={bank:['은행 · 내 통장','TAEBIN LIFE · BANK'],realestate:['부동산','TAEBIN LIFE · REAL ESTATE'],business:['창업·사업','TAEBIN LIFE · BUSINESS'],children:['자녀·가족','TAEBIN LIFE · FAMILY'],credit:['대출·신용','TAEBIN LIFE · CREDIT'],careerWorld:['월급·승진','TAEBIN LIFE · CAREER'],friends:['친구·라이벌','TAEBIN LIFE · FRIENDS'],talents:['재능·특기','TAEBIN LIFE · TALENTS'],achievements:['업적·엔딩','TAEBIN LIFE · ACHIEVEMENTS']};
 if(!headings[view])return;
 modalHeader(...headings[view]);
 const w=state.world;const locked=state.alive?'':'disabled';
 const button=(txt,call,disabled)=>`<button type="button" class="world-button" onclick="${call}" ${(disabled||!state.alive)?'disabled':''}>${txt}</button>`;
 let html=`<div class="world-moneybar"><span>현금 <b>${formatWon(state.money)}</b></span><span>순자산 <b>${formatWon(nuriNetWorth())}</b></span></div>`;

 if(view==='bank'){
  const disabled=state.alive?'':'disabled';
  const movable=Math.round(state.money*1000)>0;
  html+=`<div class="world-feature"><div class="world-mini-grid"><div><small>지갑 속 현금</small><b>${formatWon(state.money)}</b></div><div><small>통장 잔액</small><b>${formatWon(w.bankWon/1000)}</b></div></div>
  <p class="modal-hint">현금과 통장 사이를 수수료 없이 옮길 수 있어. 통장 잔액도 순자산에 포함돼. 상점이나 투자에 쓰려면 먼저 현금으로 출금해 줘.</p>
  <div class="bank-form"><label for="nuriBankAmount">옮길 금액 (원)</label><input id="nuriBankAmount" type="number" inputmode="numeric" min="1" step="1" placeholder="예: 10000" ${disabled}>
  <div class="social-actions">${button('통장으로 입금',"worldBankTransfer('deposit')",!movable)}${button('현금으로 출금',"worldBankTransfer('withdraw')",w.bankWon===0)}</div>
  <div class="social-actions">${button('현금 전액 입금',"worldBankTransfer('deposit',true)",!movable)}${button('통장 전액 출금',"worldBankTransfer('withdraw',true)",w.bankWon===0)}</div></div></div>
  <div class="stock-history"><h3>최근 통장 거래</h3><ul>${w.bankHistory.length?w.bankHistory.slice(0,10).map(t=>`<li>${worldSafe(t.age)}살 · ${t.direction==='deposit'?'입금':'출금'} · ${formatWon(t.amount/1000)}</li>`).join(''):'<li>아직 거래 내역이 없어.</li>'}</ul></div>`;
 }
 if(view==='realestate'){
  html+='<p class="modal-hint">18살부터 매매 가능. 매년 가격이 변하고 임대수익에서 관리비가 차감돼. 이 게임만의 가상 부동산이야.</p><h3>매물</h3><div class="world-list">';
  for(const p of WORLD_PROPERTIES)html+=`<article class="world-item"><div><b>${p.name}</b><small>${p.desc}</small><small>매입 ${formatWon(p.price)} · 연 임대료 기준 ${formatWon(p.rent)}</small></div>${button('매입',`worldBuyProperty('${p.id}')`,state.age<18||state.money<p.price)}</article>`;
  html+='</div><h3>내 부동산</h3><div class="world-list">';
  html+=w.properties.length?w.properties.map(p=>{let name=WORLD_PROPERTIES.find(x=>x.id===p.id)?.name||p.id;return `<article class="world-item"><div><b>${name}</b><small>${p.boughtAt}살에 매입 · 현재 가치 ${formatWon(p.value)}</small></div>${button('매도',`worldSellProperty(${p.uid})`)}</article>`;}).join(''):'<p class="world-empty">아직 소유한 부동산이 없어.</p>';
  html+='</div>';
 }
 if(view==='business'){
  html+='<p class="modal-hint">19살부터 창업 가능 · 8가지 업종 중 선택. 사업 수익은 매년 시장 상황과 재능에 따라 달라져. 적자가 날 수도 있어.</p>';
  if(!w.business){html+='<div class="world-list">'+WORLD_BUSINESSES.slice().sort((a,b)=>a.cost-b.cost).map(b=>`<article class="world-item"><div><b>${b.name}</b><small>${b.desc}</small><small>필요 자본 ${formatWon(b.cost)}</small></div>${button('창업',`worldFoundBusiness('${b.id}')`,state.age<19||state.money<b.cost)}</article>`).join('')+'</div>';
  } else {
   const b=w.business;const name=WORLD_BUSINESSES.find(x=>x.id===b.id)?.name||b.id;
   html+=`<div class="world-feature"><h3>${name}</h3><div class="world-mini-grid"><div><small>사업 레벨</small><b>${b.level}</b></div><div><small>직원</small><b>${b.staff}명</b></div><div><small>평가 가치</small><b>${formatWon(b.value)}</b></div><div><small>최근 연 실적</small><b>${b.lastProfit<0?'−':''}${formatWon(Math.abs(b.lastProfit))}</b></div><div><small>예상 연 인건비</small><b>${formatWon(worldAnnualStaffCost(b))}</b></div></div><p class="modal-hint">${b.staff?'직원 1명을 줄이면 '+formatWon(worldDismissalCost(b))+'을 한 번 내. 다음 정산부터 인건비와 직원의 매출 기여가 줄어들어.':'채용하면 매출에 도움이 되지만 해마다 인건비가 들어.'}</p><div class="world-actions">${button('사업 확장',`worldExpandBusiness()`,b.level>=8||state.money<Math.round(b.value*.3))}${button('직원 채용',`worldHireStaff()`,b.staff>=12||state.money<1500+b.staff*500)}${button('직원 1명 감원','worldDismissStaff()',b.staff<1||state.money<worldDismissalCost(b))}${button('사업 매각',`worldSellBusiness()`)}</div></div>`;
  }
 }
 if(view==='children'){
  const r=ensureRomance();
  html+='<p class="modal-hint">결혼한 뒤 자녀를 맞이할 수 있어. 자녀를 키우는 데는 매년 생활비가 들고, 함께 시간을 보내면 가족의 유대가 자라.</p>';
  html+=`<div class="world-feature"><b>현재 관계 상태</b><p>${worldSafe(romanceStatusLabel())}</p><div class="world-actions">${button('자녀 맞이하기 · 준비비 1,800,000원','worldAddChild()',state.age<22||r.status!=='married'||w.children.length>=3||state.money<1800)}</div></div>`;
  html+=w.children.length?'<div class="world-list">'+w.children.map((c,i)=>`<article class="world-item"><div><b>${worldSafe(c.name)} · ${Math.max(0,state.age-c.birthAge)}살</b><small>가족 유대 ${Math.round(c.bond)} / 100 · 해마다 성장해</small></div>${button('함께 시간 보내기',`worldChildTime(${i})`,c.lastAge===state.age)}</article>`).join('')+'</div>':'<p class="world-empty">아직 자녀가 없어. 혼자만의 삶을 살아도 괜찮아.</p>';
 }
 if(view==='credit'){
  html+=`<div class="world-feature"><div class="world-mini-grid"><div><small>게임 신용 점수</small><b>${w.credit} / 950</b></div><div><small>대출 총액</small><b>${formatWon(worldDebt())}</b></div></div><p class="modal-hint">18살부터 대출 가능. 매년 이자가 들고 제때 갚지 못하면 원금과 신용에 영향을 줘. 실제 금융상품과 무관한 가상 시스템이야.</p></div><h3>대출 신청</h3><div class="world-actions">`;
  for(const amount of [5000,20000,50000,120000])html+=button(formatWon(amount),`worldTakeLoan(${amount})`,state.age<18||w.credit<480);
  html+='</div><h3>상환 내역</h3><div class="world-list">';
  html+=w.loans.length?w.loans.map(p=>`<article class="world-item"><div><b>대출 잔액 ${formatWon(p.balance)}</b><small>가상 연 이율 ${(p.rate*100).toFixed(1)}% · ${p.started}살에 대출</small></div><div class="world-actions">${button('25% 상환',`worldRepayLoan(${p.uid})`,state.money<Math.min(p.balance,Math.max(1000,Math.round(p.balance*.25))))}${button('전액 상환',`worldRepayLoan(${p.uid},true)`,state.money<p.balance)}</div></article>`).join(''):'<p class="world-empty">상환 중인 대출이 없어.</p>';
  html+='</div>';
 }
 if(view==='careerWorld'){
  html+=`<div class="world-feature"><div class="world-mini-grid"><div><small>근무 상태</small><b>${state.workStatus==='employed'?'재직 중':'구직·준비 중'}</b></div><div><small>게임 월급(연봉의 1/12)</small><b>${formatWon(worldFictionalIncome()/12)}</b></div><div><small>연봉</small><b>${formatWon(worldFictionalIncome())}</b></div><div><small>직급</small><b>${Number(state.jobLevel||0)+1}단계</b></div><div><small>업무 실적</small><b>${Math.round(w.performance)}점</b></div></div><p class="modal-hint">${worldSafe(state.jobCompany||'회사 미정')} · ${worldSafe(state.jobTitle||'내 적성과 맞는 직업을 찾는 중')} / 월급은 매년 합산해 한 살 성장할 때 정산돼.</p><div class="world-actions">${button('취업 면접 지원',`worldApplyJob()`,state.age<19||state.workStatus==='employed'||state.lifeRoute==='military'&&state.age<22)}${button('승진 심사 도전',`worldAskPromotion()`,state.workStatus!=='employed'||w.performance<22)}</div></div>`;
 }
 if(view==='friends'){
  html+=nuriPeopleSummary()+'<div class="world-list">';
  for(const f of WORLD_FRIENDS){
   const p=w.friends[f.id],minAge=f.minAge||7;
   html+=`<article class="world-item"><div><b>${f.name}</b><small>${f.trait}</small><small>${state.age<minAge?`${minAge}살부터 만날 수 있어`:`친밀도 ${Math.round(p.bond)} / 100`}</small></div><div class="world-actions">${button('만나기',`worldMeetFriend('${f.id}')`,state.age<minAge||p.lastAge===state.age)}${button('이야기',`nuriOpenPerson('${f.id}')`,state.age<minAge)}</div></article>`;
  }
  html+=`<article class="world-item"><div><b>라이벌 ${worldSafe(w.rival.name)}</b><small>${state.age<13?'13살부터 만날 수 있어':`상대의 인정 ${Math.round(w.rival.respect)} / 100`}</small></div><div class="world-actions">${button('선의의 경쟁','worldFaceRival()',state.age<13||w.rival.lastAge===state.age)}${button('이야기',"nuriOpenPerson('minjun')",state.age<13)}</div></article></div>`;
  html+='<div class="social-actions"><button type="button" class="modal-action" onclick="openAppModal(\'social\')">태빈이스타 열기</button></div>';
 }
 if(view==='talents'){
  html+='<p class="modal-hint">가족의 영향으로 시작한 재능과 직접 키운 특기는 달라. 평소 선택과 연 1회 훈련으로 성장하고, 직업·사업 수익에도 반영돼.</p><div class="world-list">';
  for(const t of WORLD_TALENTS)html+=`<article class="world-item"><div><b>${t.name} · ${Number(w.talents[t.id]).toFixed(1)}점</b><small>${t.desc}</small><div class="world-meter"><span style="width:${Math.min(100,(w.talents[t.id]||0)/60*100)}%"></span></div></div>${button('훈련',`worldTrainTalent('${t.id}')`,state.age<6||w.trainAge[t.id]===state.age||state.money<(state.age<18?200:600))}</article>`;
  html+='</div>';
 }
 if(view==='achievements'){
  const archive=worldLegacy();
  html+=`<div class="world-feature"><h3>${worldSafe(worldEndingName())}</h3><p>이번 인생의 업적 ${w.achievements.length}/${WORLD_ACHIEVEMENTS.length}개 · 누적 업적 ${archive.achievements.length}개 · 완주한 인생 ${archive.runs}회</p><p>달성 업적과 지난 인생 엔딩은 같은 기기의 브라우저에 저장돼.</p></div><div class="world-list">`;

  for(const a of WORLD_ACHIEVEMENTS)html+=`<article class="world-item ${w.achievements.includes(a.id)?'unlocked':'locked'}"><div><b>${w.achievements.includes(a.id)?'달성':'미달성'} · ${a.name}</b><small>${a.desc}</small></div></article>`;
  html+='</div><h3>지난 인생 엔딩 모음</h3><div class="world-list">'+(archive.endings.length?archive.endings.slice(-8).reverse().map(e=>`<article class="world-item"><div><b>${worldSafe(e.title)}</b><small>${e.age}살 · 최종 순자산 ${formatWon(e.wealth)}</small></div></article>`).join(''):'<p class="world-empty">새로운 인생을 완주하면 이곳에 엔딩이 모여.</p>')+'</div>';
 }
 html+='<div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal(\'menu\')">← 메뉴로</button><button type="button" class="modal-action" onclick="closeAppModal()">게임 계속하기</button></div>';
 document.getElementById('appModalBody').innerHTML=html;
 document.querySelector('.app-modal-card')?.scrollTo?.(0,0);
}
function worldRenderMain(){
 const el=document.getElementById('worldMainSummary');if(!el||!state.family)return;
 const w=ensureWorld();const parts=worldWorthParts();
 el.innerHTML=`<div class="world-main-top"><div><small>내 인생의 경제·가족 시스템</small><h2>나의 삶 · 자산 관리</h2></div><span>순자산 ${formatWon(Math.max(0,nuriNetWorth()))}</span></div>
 <div class="world-mini-grid"><div><small>통장 잔액</small><b>${formatWon(parts.bank)}</b></div><div><small>부동산 가치</small><b>${formatWon(parts.property)}</b></div><div><small>사업 가치</small><b>${formatWon(parts.business)}</b></div><div><small>대출 잔액</small><b>${formatWon(parts.debt)}</b></div><div><small>업적</small><b>${w.achievements.length} / ${WORLD_ACHIEVEMENTS.length}</b></div></div>
 <div class="world-main-actions"><button type="button" onclick="openAppModal('bank')">은행</button><button type="button" onclick="openAppModal('realestate')">부동산</button><button type="button" onclick="openAppModal('business')">창업·사업</button><button type="button" onclick="openAppModal('careerWorld')">월급·승진</button><button type="button" onclick="openAppModal('achievements')">업적 보기</button></div>`;
}

function save(){try{localStorage.setItem(window.nuriCurrentSaveKey(),JSON.stringify(state))}catch(e){}worldPersistLegacy(false);if(window.nuriCloudSchedule)window.nuriCloudSchedule();}
function resetGame(force=false){ensurePlayerExtras();if(!force&&state.alive&&state.settings.confirmReset&&!confirm("태빈이의 이야기를 처음부터 다시 시작할까?"))return;try{localStorage.removeItem(window.nuriCurrentSaveKey())}catch(e){}closeAppModal();state={version:3,stage:0,age:0,progress:0,yearDay:0,turningPoints:[],pendingTurningPoint:null,items:{},settings:{...DEFAULT_SETTINGS},schoolPath:"",adultPath:"",day:1,event:0,family:null,alive:true,deathCause:"",healthRisk:5,illnessSeverity:0,totalChoices:0,stats:{intelligence:5,health:50,social:5,creativity:5,charm:5,happiness:50},money:100,log:[],seen:0,storySeen:[],storyJournal:[],storyFlags:{bond:0,flags:[]},pendingStory:null,latestStory:"",detourPoints:0,lastDetour:"",sceneTurn:0,lastOutcome:"",photoAlbum:{unlocked:[],seen:[],featured:null,history:[]}};document.getElementById("gameMain").style.display="none";document.getElementById("familyScreen").style.display="block";selectFamily("ordinary");save();if(window.nuriResetPrologueFlow)window.nuriResetPrologueFlow();toast("집안을 다시 선택해 줘!")}
/* ===== TAEBIN LIFE: aging gallery and interconnected service / workplace arcs ===== */
function agingStage(age){
 if(age<3)return "갓난아기";
 if(age<7)return "유아기";
 if(age<13)return "어린이";
 if(age<19)return "청소년";
 if(age<30)return "청년";
 if(age<45)return "사회인";
 if(age<60)return "중년";
 if(age<75)return "장년";
 return "노년";
}
function renderGrowthGalleryModal(){
 modalHeader("성장 앨범","TAEBIN LIFE · AGE GALLERY");
 const marks=[0,3,7,13,16,19,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
 const age=Math.max(0,Math.min(100,Math.floor(state.age)));
 const everyYear=[Math.max(0,age-8),age,Math.min(100,age+8)];
 const markup=(n)=>`<article class="growth-gallery-tile ${n===age?'is-current':''}"><img src="${taebinAvatar(n)}" alt="태빈이 ${n}살 모습"><b>${n}살</b><small>${agingStage(n)}</small></article>`;
 document.getElementById("appModalBody").innerHTML=`<div class="modal-hint">실제로 나이가 들 때마다 캐릭터 이미지가 바뀌어. 8년 전과 8년 후의 모습도 비교해 봐.</div><div class="growth-gallery-grid compact">${everyYear.map(markup).join('')}</div><h3 class="growth-gallery-heading">0살부터 100살까지의 변화</h3><div class="growth-gallery-grid">${marks.map(markup).join('')}</div><div class="menu-actions"><button class="modal-action" onclick="renderMenuModal()">← 메뉴로 돌아가기</button></div>`;
}
function ensureLifeArc(){
 if(!state||typeof state!=="object")return;
 if(!Array.isArray(state.arcQueue))state.arcQueue=[];
 if(!Array.isArray(state.arcSeen))state.arcSeen=[];
 if(!state.lifeRoute&&state.adultPath){const p=state.adultPath;state.lifeRoute=p.includes('군')?'military':p.includes('취업')?'work':p.includes('대학교')?'university':'prep';}
 if(!state.workStatus)state.workStatus=state.lifeRoute==='work'?'employed':'none';
 if(!Number.isFinite(Number(state.jobLevel)))state.jobLevel=0;
 if(!state.jobCompany)state.jobCompany='새봄컴퍼니';
 if(!state.jobTitle)state.jobTitle='';
}
function lifeRouteLabel(){
 ensureLifeArc();
 if(state.age<19)return '🌱 '+agingStage(state.age);
 if(state.lifeRoute==='military')return state.age<20?'🪖 20살 입영 예정':state.age>=22?'🎖️ 22살 전역 · 진로 전환':'🪖 군 복무 중 · 22살 전역';
 if(state.lifeRoute==='university')return state.applicationStatus==='대학 면접 대기'?'🎓 대학 입학 면접 대기':'🎓 대학 생활';
 if(state.lifeRoute==='prep')return '🧭 '+(state.applicationStatus||'진로 준비');
 if(state.workStatus==='employed')return '💼 '+(state.jobTitle||bestCareer().job)+(state.jobLevel?' · 경력 '+state.jobLevel+'단계':'');
 if(state.lifeRoute==='work')return '💼 채용 면접 대기';
 return '🧭 새로운 진로';
}
function setAdultLifeRoute(chosen){
 ensureLifeArc();
 const lab=chosen.label||'';
 state.lifeRoute=lab.includes('입대')||lab.includes('군')?'military':lab.includes('회사')||lab.includes('취업')?'work':lab.includes('대학')?'university':'prep';
 state.workStatus='none';
 if(state.lifeRoute==='work'){const best=bestCareer();state.jobTitle=best.job;state.jobCompany={technology:'오로라테크',art:'모션스튜디오 봄',health:'늘봄케어',business:'한울기획',people:'다온교육',research:'파란연구소'}[best.id]||'새봄컴퍼니';}
 state.applicationStatus=state.lifeRoute==='university'?'대학 면접 대기':state.lifeRoute==='work'?'채용 면접 대기':state.lifeRoute==='military'?'20살 입영 예정':'진로 탐색 중';
 state.log.push('🧭 19살 · 인생 진로 선택: '+state.lifeRoute+' · '+lab);
}
function setWorkCareer(){
 ensureCareer();
 const career=bestCareer();
 const company={technology:'오로라테크',art:'모션스튜디오 봄',health:'늘봄케어',business:'한울기획',people:'다온교육',research:'파란연구소'};
 state.jobCompany=company[career.id]||'새봄컴퍼니';
 state.jobTitle=career.job;
 state.workStatus='employed';
}
function makeFollowupInterview(kind){
 const uni=kind==='university';
 const title=uni?'🎓 대학 재지원 면접':'💼 채용 면접';
 return {age:state.age,title,text:uni?'면접관: “지원한 전공과 관련해 준비한 활동을 소개해 주세요.”':'면접관: “지원 직무에 적합한 경험을 구체적으로 설명해 주세요.”',interviewType:kind,fromLifeArc:true,options:[
  {...makeArcChoice('📁 준비한 프로젝트를 사례로 설명','intelligence','creativity','실제 경험을 구체적으로 보여줬어.'),interviewScore:3},
  {...makeArcChoice('🤝 협업에서 맡았던 역할 설명','social','intelligence','협업 과정을 조리 있게 설명했어.'),interviewScore:2},
  {...makeArcChoice('🎨 포트폴리오를 근거로 답변','creativity','charm','결과물과 배운 점을 연결했어.'),interviewScore:3},
  {...makeArcChoice('⚠️ 질문을 넘기고 준비 안 된 답변','charm','happiness','준비가 부족한 점이 드러났어.'),interviewScore:0}
 ]};
}
function worldApplyUniversity(){
 if(!state.alive||state.age<19)return toast('19살부터 대학에 지원할 수 있어.');
 if(state.lifeRoute==='military'&&state.age<22)return toast('22살 전역 후 대학에 지원할 수 있어.');
 if(state.lifeRoute==='university'&&state.applicationStatus!=='대학 면접 대기')return toast('이미 대학에 재학 중이야.');
 ensureLifeArc();state.applicationStatus='대학 면접 대기';state.lifeRoute='university';
 state.arcQueue.unshift(makeFollowupInterview('university'));closeAppModal();showNextLifeArc();render();save();
}
function applyLifeArcAction(action,option){
 ensureLifeArc();
 if(action==='work'){state.lifeRoute='work';state.workStatus='none';state.applicationStatus='채용 면접 대기';state.arcQueue.unshift(makeFollowupInterview('work'));}
 if(action==='university'){state.lifeRoute='university';state.workStatus='none';state.applicationStatus='대학 면접 대기';state.arcQueue.unshift(makeFollowupInterview('university')) ;}
 if(action==='prep'){state.lifeRoute='prep';state.workStatus='none';state.applicationStatus='진로 재정비 중';}
 if(action==='military'){state.lifeRoute='military';state.workStatus='none';}
 if(action==='discharged'){state.serviceCompleted=true;state.applicationStatus='전역 완료';}
 if(action==='promote'){state.jobLevel=Math.min(12,Number(state.jobLevel||0)+1);}
 if(action==='bad'){state.detourPoints=(Number(state.detourPoints)||0)+1;state.log.push('⚠️ '+state.age+'살 · 책임을 피하는 선택으로 신뢰가 흔들렸어.');}
 if(action==='repair'){state.detourPoints=Math.max(0,(Number(state.detourPoints)||0)-2);}
}
function makeArcChoice(label,gain1,gain2,outcome,action='',careerId=''){
 return {label,effect:[gain1,4,gain2,3],outcome,arcAction:action,careerId};
}
function createLifeArc(age){
 ensureLifeArc();
 if(age<19)return null;
 const route=state.lifeRoute||'prep';
 const job=state.jobTitle||bestCareer().job;
 const company=state.jobCompany||'새봄컴퍼니';
 const mk=(title,text,options)=>({age,title,text,options});
 if(age===19&&(route==='university'||route==='work')){
  const university=route==='university',career=bestCareer();
  const title=university?'🎓 대학 입학 면접 · '+career.name:'💼 '+(state.jobCompany||'회사')+' 채용 면접';
  const text=university?'입학 면접관: “우리 전공에 지원한 이유와 지금까지 한 경험을 구체적으로 설명해 주세요.”':'면접관: “'+(state.jobTitle||career.job)+' 직무에 왜 지원했고 어떤 역량으로 기여할 수 있나요?”';
  return {...mk(title,text,university?[
   {...makeArcChoice('📁 직접 만든 프로젝트와 배운 점 설명','creativity','intelligence','활동 경험과 배운 점을 구체적으로 이야기했어.'),interviewScore:3,careerId:'art'},
   {...makeArcChoice('📚 관심 전공의 탐구 경험을 근거로 설명','intelligence','social','전공을 알아본 노력과 앞으로의 목표를 연결했어.'),interviewScore:3,careerId:'research'},
   {...makeArcChoice('🤝 친구와 협업한 경험을 위주로 설명','social','charm','팀 활동은 돋보였지만 전공 이해도 질문이 더 남았어.'),interviewScore:2,careerId:'people'},
   {...makeArcChoice('⚠️ 지원 동기를 묻자 “그냥요”라고 답하기','charm','happiness','준비 부족이 드러나 추가 준비가 필요해졌어.'),interviewScore:0}
  ]:[
   {...makeArcChoice('🧩 실제 프로젝트의 문제와 해결 과정 설명','intelligence','creativity','문제를 해결해 낸 과정이 면접관에게 전달됐어.'),interviewScore:3,careerId:'technology'},
   {...makeArcChoice('🤝 팀 갈등 해결과 소통 경험 설명','social','charm','협업 경험을 구체적인 사례로 보여줬어.'),interviewScore:3,careerId:'people'},
   {...makeArcChoice('🎨 작품집을 보여주며 피드백에 답하기','creativity','social','작품의 장단점을 차분히 설명했어.'),interviewScore:2,careerId:'art'},
   {...makeArcChoice('⚠️ 질문을 무시하고 근거 없이 잘한다고 주장','charm','happiness','근거가 부족해 실력을 보여주지 못했어.'),interviewScore:0}
  ]),interviewType:university?'university':'work'};
 }
 if(route==='military'){
  const stories={
   19:mk('📅 20살 입대 준비의 해','군 복무를 시작하기 전, 태빈이는 가족과 일상을 정리하고 낯선 환경에 적응할 준비를 해. 새로운 친구들과 어떤 시간을 보내게 될까?',[
    makeArcChoice('📦 필요한 일상을 차분히 정리하기','intelligence','social','준비할 일들을 하나씩 정리하니 마음이 편해졌어.'),
    makeArcChoice('🤝 가족과 친구에게 인사 전하기','social','charm','소중한 사람들과 약속을 나누고 새로운 출발을 준비했어.'),
    makeArcChoice('📝 규칙적인 생활 목표 적기','intelligence','creativity','바뀐 일상에 적응할 나만의 계획을 만들었어.'),
    makeArcChoice('⚠️ 해야 할 준비를 계속 미루기','charm','creativity','준비를 미룬 탓에 첫날부터 마음이 복잡했어.','bad')]),
   20:mk('🪖 20살 입대 · 첫 생활관','처음 만난 동료들과 일과를 함께하게 됐어. 익숙하지 않은 일정과 생활 규칙 앞에서 태빈이는 어떻게 행동할까?',[
    makeArcChoice('⏰ 생활 리듬을 기록하며 적응하기','intelligence','charm','규칙적인 생활에 조금씩 적응했어.'),
    makeArcChoice('🤝 힘들어하는 동료를 돕기','social','charm','동료와 서로 믿고 의지하는 관계가 됐어.'),
    makeArcChoice('🧹 공동 공간의 일 맡아보기','social','intelligence','함께 쓰는 공간을 책임지는 법을 배웠어.'),
    makeArcChoice('⚠️ 공동 규칙을 무시하고 핑계 대기','charm','creativity','동료들이 태빈이를 믿기 어려워졌어.','bad')]),
   21:mk('🪖 동료들과 만드는 하루','복무 중 중요한 것은 서로의 상황을 이해하고 생활을 함께 꾸리는 일이야. 한 동료가 개인적인 고민을 털어놨어.',[
    makeArcChoice('🤝 고민을 차분히 들어주기','social','charm','동료는 태빈이에게 고맙다고 말했어.'),
    makeArcChoice('📖 여가 시간에 공부 습관 만들기','intelligence','creativity','남는 시간을 배움으로 채우는 습관을 들였어.'),
    makeArcChoice('🎨 동료들과 작은 추억 기록하기','creativity','social','서로 힘이 되는 소중한 기록을 만들었어.'),
    makeArcChoice('⚠️ 동료의 실수를 무조건 남 탓하기','charm','intelligence','불신이 생겼고 태빈이는 관계를 되돌아봤어.','bad')]),
   22:mk('🎖️ 22살 전역, 새로운 시작','긴 복무를 마치고 일상으로 돌아왔어. 복무 기간에 익힌 생활 습관과 동료애가 앞으로의 삶에도 남겠지. 이제 다음 길을 골라보자.',[
    makeArcChoice('💼 관심 분야 회사에 지원하기','intelligence','social','면접을 거쳐 새로운 직장에서 첫 출근을 준비했어.','work','business'),
    makeArcChoice('🎓 공부를 이어가며 새로운 전공 선택','intelligence','creativity','새로운 학교에서 다시 배움을 시작했어.','university','research'),
    makeArcChoice('🎨 포트폴리오와 자격 준비하기','creativity','charm','전역 후의 목표를 구체적인 계획으로 만들었어.','prep','art'),
    makeArcChoice('⚠️ 복귀 후 약속을 모두 미루기','charm','creativity','시간이 흐르는 동안 진로는 여전히 정해지지 않았어.','prep')])
  };
  return stories[age]||null;
 }
 if(route==='university'){
  const stories={
   19:mk('🎓 캠퍼스 첫날','새로운 교실, 동아리, 강의실. 자유가 커진 만큼 스스로 시간을 관리해야 해.',[
    makeArcChoice('📚 전공 수업 꼼꼼히 찾아보기','intelligence','creativity','전공에서 더 배우고 싶은 것을 발견했어.','','research'),
    makeArcChoice('🤝 관심 동아리에서 친구 만나기','social','charm','새로운 사람들과 친해지며 학교생활이 즐거워졌어.','','people'),
    makeArcChoice('🎥 프로젝트 팀을 직접 만들기','creativity','social','학기 첫 공동 프로젝트를 시작했어.','','art'),
    makeArcChoice('⚠️ 출석과 과제를 계속 미루기','charm','creativity','해야 할 일이 점점 쌓이고 말았어.','bad')]),
   20:mk('📚 전공 선택과 팀 프로젝트','한 학기 프로젝트의 방향을 정해야 해. 누구와 어떤 결과물을 만들까?',[
    makeArcChoice('💻 기술 문제 해결을 맡기','intelligence','creativity','논리적인 해결 방법을 발견했어.','','technology'),
    makeArcChoice('🎨 기획과 디자인을 맡기','creativity','charm','창의적인 프로젝트를 완성했어.','','art'),
    makeArcChoice('🤝 팀장으로 의견을 조율하기','social','intelligence','다른 생각을 하나로 모으는 법을 배웠어.','','business'),
    makeArcChoice('⚠️ 역할을 피하고 팀에 연락 안 하기','charm','creativity','팀원들의 신뢰가 흔들렸어.','bad')]),
   21:mk('🧑‍💻 첫 현장 실습','학교 밖에서 실제 업무를 경험할 기회가 생겼어. 아직 낯설지만 책임을 맡을 수 있겠어.',[
    makeArcChoice('🗂️ 실습 기록을 꼼꼼히 남기기','intelligence','charm','실수도 배움으로 바꾸는 기록을 만들었어.'),
    makeArcChoice('🎬 배운 것을 작품으로 정리하기','creativity','intelligence','현장 경험이 포트폴리오로 이어졌어.','','art'),
    makeArcChoice('🤝 담당자에게 피드백 요청하기','social','charm','현실적인 직무 조언을 얻었어.','','people'),
    makeArcChoice('⚠️ 실수를 숨기며 넘어가기','charm','creativity','숨긴 실수가 나중에 다시 문제가 됐어.','bad')]),
   22:mk('🎓 졸업과 첫 진로 결정','졸업 작품이 끝났어. 태빈이가 쌓은 적성을 살릴 기회가 왔어. 졸업 후의 길을 고르자.',[
    makeArcChoice('💼 적성에 맞는 회사 입사하기','intelligence','social','첫 회사에 취업해 새로운 직장 생활을 시작했어.','work','business'),
    makeArcChoice('🔬 대학원·연구 분야 더 공부하기','intelligence','creativity','더 깊은 공부를 시작했어.','university','research'),
    makeArcChoice('🧳 포트폴리오 보완하며 준비하기','creativity','charm','취업 준비를 차근차근 이어 갔어.','prep','art'),
    makeArcChoice('⚠️ 결정이 두려워 아무것도 하지 않기','charm','creativity','기회를 놓쳤지만 다른 길을 다시 찾을 수 있어.','prep')])
  };
  return stories[age]||null;
 }
 if(route==='prep'){
  const stories={
   19:mk('🧭 진로를 찾는 첫 해','태빈이는 대학, 회사, 자유로운 프로젝트 중 무엇이 자기에게 맞는지 알아보고 있어.',[
    makeArcChoice('🎨 포트폴리오 첫 페이지 만들기','creativity','charm','태빈이가 잘하는 것을 직접 보여주는 작품집을 만들었어.','','art'),
    makeArcChoice('📚 자격·실무 공부를 시작하기','intelligence','creativity','관심 직무를 위한 준비가 쌓였어.','','research'),
    makeArcChoice('🤝 일하는 사람을 만나 질문하기','social','intelligence','막연했던 꿈이 구체적인 일로 보이기 시작했어.','','people'),
    makeArcChoice('⚠️ 계획 없이 모든 약속을 미루기','charm','creativity','해야 할 일이 밀려서 마음이 바빠졌어.','bad')]),
   20:mk('🧰 첫 실무 경험','단기 프로젝트와 아르바이트 경험을 쌓을 수 있어. 작은 기회도 진로에 영향을 주겠지.',[
    makeArcChoice('🎥 작은 콘텐츠 프로젝트 맡기','creativity','intelligence','첫 결과물이 다음 기회의 출발점이 됐어.','','art'),
    makeArcChoice('💼 직무 체험을 지원하기','social','intelligence','업무가 어떻게 돌아가는지 배웠어.','','business'),
    makeArcChoice('📑 일정을 정해 꾸준히 준비하기','intelligence','charm','계획을 실천하는 힘을 키웠어.'),
    makeArcChoice('⚠️ 연락을 피하고 지원을 포기하기','charm','creativity','아쉬운 기회를 놓쳤어.','bad')]),
   21:mk('📬 면접 제안이 도착했다','태빈이의 작업을 보고 첫 면접 제안이 왔어. 마음을 정할 시간이야.',[
    makeArcChoice('💼 면접에 도전하고 입사하기','intelligence','social','태빈이는 첫 회사의 구성원이 됐어.','work','business'),
    makeArcChoice('🎓 더 공부하기로 결정하기','intelligence','creativity','조금 다른 방향으로 배움을 이어 갔어.','university','research'),
    makeArcChoice('🎨 개인 프로젝트 한 번 더 만들기','creativity','charm','좋아하는 일을 더 단단한 실력으로 발전시켰어.','prep','art'),
    makeArcChoice('⚠️ 답장을 미뤄 면접을 놓치기','charm','creativity','기회는 떠났지만 새로운 준비를 시작했어.','bad')]),
   22:mk('🧭 다시 그리는 진로 지도','지금까지의 경험을 돌아보며 다음 결정을 해보자.',[
    makeArcChoice('💼 관심 회사에 지원하기','social','intelligence','새 회사에서 함께 일하게 됐어.','work','business'),
    makeArcChoice('🎓 원하는 분야 수업을 듣기','intelligence','creativity','새로운 교육 과정을 시작했어.','university','research'),
    makeArcChoice('🧑‍💻 프리랜서 프로젝트 시작하기','creativity','charm','작은 일부터 직접 경험을 쌓기 시작했어.','prep','art'),
    makeArcChoice('⚠️ 너무 큰 목표만 세우고 행동하지 않기','charm','creativity','계획이 멈췄지만 시작할 기회는 남아 있어.','bad')])
  };
  return stories[age]||null;
 }
 if(route==='work'){
  const workStories={
   19:['💼 첫 출근을 준비하는 아침',`${company}의 ${job} 직무로 첫 출근을 앞뒀어. 이름표를 받은 태빈이는 어떤 마음가짐으로 첫날을 보낼까?`],
   20:['📎 신입 사원의 첫 업무',`${company}에서 첫 업무가 왔어. 회의에는 처음 듣는 용어가 많아.`],
   21:['☕ 동료와의 갈등',`팀의 일정이 밀리자 동료와 의견이 갈렸어. 회사 생활에서 실력만큼 중요한 건 협력이야.`],
   22:['🧩 큰 프로젝트 제안',`${company}가 큰 프로젝트를 맡았어. 책임과 성장 기회 사이에서 태빈이의 선택은?`],
   23:['📈 첫 성과 평가','팀장이 태빈이의 성과를 돌아보자고 해. 잘한 일과 개선할 점을 어떻게 설명할까?'],
   25:['📬 이직 제안',`다른 회사에서 ${job} 분야 제안이 왔어. 안정과 도전 중 어떤 쪽을 택할까?`],
   27:['🤝 새로운 후배의 입사','팀에 새로운 후배가 들어왔어. 태빈이는 누군가의 첫 회사 선배가 됐어.'],
   30:['📊 팀의 방향을 정하는 회의','업무가 익숙해진 태빈이에게 작은 팀의 기획을 맡아 달라고 해.'],
   35:['🌿 번아웃 경고','오래 일하다 보니 같은 일도 버겁게 느껴지는 날이 있어. 지속 가능한 일상을 고민할 때야.'],
   40:['🔁 커리어 전환점',`태빈이의 ${job} 경력을 바탕으로 팀장 제안이 왔어. 다른 선택도 가능해.`],
   45:['🧭 일과 삶의 균형','회사 밖에서 태빈이를 기다리는 사람들과 개인의 시간을 어떻게 지킬까?'],
   50:['📚 경험을 전하는 선배',`후배가 ${job}의 노하우를 물어봐. 경험을 어떻게 나눌까?`],
   55:['🏢 조직 변화','회사에 새로운 시스템이 도입됐어. 익숙한 업무 방식도 바꿔야 할 때야.'],
   60:['🌅 다음 일상을 준비하기','오랫동안 쌓은 경력 덕분에 태빈이는 여러 선택을 할 수 있어.'],
   65:['🌳 새로운 시간의 시작','회사에서의 역할을 정리하는 시기가 찾아왔어. 그동안의 경험을 어떻게 이어갈까?']
  };
  if(!workStories[age])return null;
  const [title,text]=workStories[age];
  const choices=[
   makeArcChoice('📚 필요한 업무 역량을 더 배우기','intelligence','creativity','다음 프로젝트를 위한 기술과 지식을 배웠어.','','technology'),
   makeArcChoice('🤝 동료와 의견을 나누고 협력하기','social','charm','동료들의 신뢰를 얻고 일의 방향을 정리했어.','','people'),
   makeArcChoice('💡 새로운 방식 제안하고 책임 맡기','creativity','intelligence','새로운 업무 방식을 시도하고 좋은 성과를 냈어.','promote','business'),
   makeArcChoice('⚠️ 문제를 숨기고 책임을 피하기','charm','creativity','일시적으로 편해졌지만 팀의 신뢰에 금이 갔어.','bad')
  ];
  if(age===65){choices[0]=makeArcChoice('🎓 후배를 교육하며 경험 전하기','social','intelligence','동료들에게 오래 쌓인 경험을 나눴어.','promote','people');}
  return mk(title,text,choices);
 }
 return null;
}
function maybeStartLifeArc(age){
 ensureLifeArc();
 if(age===19&&!state.adultPath)return;
 if(state.arcSeen.includes(age))return;
 const arc=createLifeArc(age);
 if(!arc)return;
 state.arcSeen.push(age);
 state.arcQueue.push(arc);
 state.log.push('🎞️ '+age+'살 · '+arc.title+' 챕터 해금');
 showNextLifeArc();
}
function showNextLifeArc(){
 ensureLifeArc();
 if(!state.alive)return;
 if(state.pendingStory||state.pendingTurningPoint||!state.arcQueue.length)return;
 let next,options;
 while(state.arcQueue.length){
  next=state.arcQueue.shift();
  options=savedChoiceOptions(next);
  if(options.length)break;
 }
 if(!options?.length)return;
 state.pendingStory={...next,options,fromLifeArc:true};
 state.latestStory='🎞️ '+next.age+'살 · '+next.title;
}


/* The four everyday choice cards follow the life the player actually chose. */
const LIFE_ROUTE_SCENES={
 military:[
 ["새로운 생활관에서 서로의 생활 습관이 달라 불편함이 생겼어.",[["🤝 서로의 생활 습관 들어 보기","s","i"],["🗓️ 함께 사용할 시간표 만들기","i","h"],["🎨 공용 공간 정리 아이디어 내기","c","j"],["⚠️ 아무 말 없이 다른 동료 탓하기","m","s"]]],
 ["복무 중 자유시간이 생겼어. 무엇을 하며 시간을 보낼까?",[["📚 관심 분야 책 읽기","i","j"],["🤝 동료와 근황 이야기하기","s","h"],["🎨 작은 일기나 그림 남기기","c","i"],["⚠️ 내일 할 일까지 계속 미루기","j","i"]]],
 ["같은 공간을 쓰는 동료가 고민을 털어놨어.",[["🤝 이야기를 차분히 들어 주기","s","h"],["📝 고민을 정리하도록 돕기","i","j"],["🎨 편지를 함께 써 보기","c","i"],["⚠️ 다른 사람에게 고민 퍼뜨리기","m","s"]]],
 ["새로운 공동 활동을 준비해야 하는데 모두 의견이 달라.",[["🗣️ 서로의 의견을 듣기","s","i"],["📋 해야 할 일을 목록으로 정리","i","h"],["🎬 모두의 기록을 사진으로 남기기","c","j"],["⚠️ 맡은 책임을 몰래 피하기","j","s"]]],
 ["익숙하지 않은 하루 일과 때문에 조금 지쳤어.",[["🧘 휴식 시간을 규칙적으로 관리하기","i","m"],["🤝 동료와 일정 조정 의논하기","s","h"],["🎵 마음을 다스릴 취미 찾아보기","c","j"],["⚠️ 힘들다는 말 대신 화만 내기","m","s"]]],
 ["가족에게 연락할 시간이 생겼어.",[["📞 가족에게 안부 전하기","s","m"],["📝 생활에서 배운 점 알려 주기","i","c"],["🎨 최근의 추억을 그림으로 남기기","c","j"],["⚠️ 연락하기 싫다며 약속 무시하기","j","s"]]],
 ["새로 온 동료가 생활 규칙을 잘 몰라 어려워하고 있어.",[["🤝 차근차근 안내해 주기","s","i"],["📋 중요한 규칙을 메모로 정리","i","m"],["🎨 기억하기 쉬운 안내 자료 만들기","c","h"],["⚠️ 모른다고 면박 주기","m","s"]]],
 ["휴일에 동료들과 조용한 실내 활동을 함께하려 해.",[["🎲 함께 보드게임 하기","s","i"],["📚 새로운 공부법 공유하기","i","h"],["📷 추억이 될 사진 남기기","c","j"],["⚠️ 다른 사람을 일부러 따돌리기","m","s"]]]
 ],
 work:[
 ["회사에서 첫 팀 회의를 시작해. 오늘 맡을 일의 우선순위를 정해야 해.",[["📋 업무 우선순위를 정리하기","i","h"],["🤝 동료들의 의견 듣기","s","j"],["💡 새로운 기획안 제안하기","c","i"],["⚠️ 모르는 일을 아는 척하기","m","s"]]],
 ["프로젝트 마감일이 다가오는데 작업물이 기대만큼 나오지 않아.",[["🔎 문제 원인을 차분히 분석하기","i","j"],["🎨 다른 디자인 방향 제안하기","c","h"],["🤝 팀원과 역할 다시 나누기","s","i"],["⚠️ 작업 지연을 동료 탓으로 돌리기","m","s"]]],
 ["상사가 새 업무를 맡기면서 필요한 지원이 있는지 물었어.",[["📚 필요한 자료 먼저 요청하기","i","h"],["🤝 도움받을 사람과 협력하기","s","j"],["🧩 새로운 해결 방식 찾아보기","c","i"],["⚠️ 일단 알겠다고만 하고 무시하기","m","s"]]],
 ["점심시간에 동료들이 각자의 커리어 고민을 나누고 있어.",[["💬 서로의 고민 들어 주기","s","i"],["📖 관심 분야 공부법 공유하기","i","h"],["🎨 새로운 협업 아이디어 내기","c","j"],["⚠️ 다른 사람의 고민 비웃기","m","s"]]],
 ["태빈이가 맡은 업무에 예상하지 못한 오류가 생겼어.",[["🔧 오류 원인을 기록하며 찾기","i","h"],["🤝 동료에게 상황 공유하기","s","j"],["💡 대체 방법 빠르게 기획하기","c","i"],["⚠️ 실수를 숨긴 채 넘어가기","m","s"]]],
 ["새로운 후배가 회사에 들어왔어. 업무를 배울 시간이 필요해 보여.",[["📋 처음 할 일을 정리해 주기","i","j"],["🤝 후배에게 질문할 시간 만들기","s","h"],["🎬 간단한 안내 영상 만들어 주기","c","i"],["⚠️ 질문한다고 무시하기","m","s"]]],
 ["회사에서 기획 발표 기회를 줬어.",[["🧠 자료로 설득력 높이기","i","h"],["🎨 시각 자료 직접 만들기","c","j"],["🗣️ 팀의 의견을 모아 발표하기","s","m"],["⚠️ 남의 성과를 내 것처럼 말하기","m","s"]]],
 ["이번 달 성과를 돌아보는 1:1 면담 시간이야.",[["📝 개선한 점을 객관적으로 정리하기","i","j"],["🤝 솔직하게 피드백 받기","s","h"],["💡 다음 분기 목표 새롭게 제안하기","c","i"],["⚠️ 어려웠던 점을 전부 남 탓하기","m","s"]]],
 ["퇴근을 앞두고 예상 못한 요청이 들어왔어.",[["📅 가능한 일정부터 조정하기","i","h"],["🤝 업무를 나누는 방안 의논하기","s","j"],["💡 간단한 해결책 먼저 제안하기","c","i"],["⚠️ 답장을 무시하고 문제를 숨기기","m","s"]]],
 ["팀에서 새로운 협업 도구를 사용하기로 했어.",[["💻 기능을 미리 익혀 보기","i","h"],["🤝 어려워하는 동료 도와주기","s","j"],["🎨 사용하기 쉬운 안내서 제작","c","i"],["⚠️ 바뀐 절차를 무시하기","m","s"]]]
 ],
 university:[
 ["대학교 팀 과제에서 각자 다른 아이디어를 가져왔어.",[["📚 관련 자료 조사하기","i","h"],["🤝 의견을 모아 주제 정하기","s","j"],["🎨 발표 구성 시각화하기","c","i"],["⚠️ 팀원과 연락 끊고 역할 피하기","m","s"]]],
 ["교수님이 자유 주제 프로젝트를 제안했어.",[["🔬 궁금한 문제를 연구해 보기","i","h"],["🎬 실험 과정을 영상으로 기록","c","j"],["🤝 팀을 꾸려 공동 프로젝트 시작","s","i"],["⚠️ 마감일을 무시하고 계속 미루기","m","s"]]],
 ["수강 신청을 앞두고 고민 중이야.",[["📋 전공 계획을 세밀하게 짜기","i","h"],["🤝 선배에게 수업 후기 물어보기","s","j"],["🎨 새로운 실습 강의 도전하기","c","i"],["⚠️ 아무 생각 없이 수업 선택하기","m","s"]]],
 ["대학 축제에서 봉사할 사람이 필요하대.",[["🤝 행사 안내와 운영 돕기","s","h"],["📊 물품 및 예산 정리하기","i","j"],["🎥 행사 기록 영상 만들기","c","i"],["⚠️ 맡은 역할을 몰래 피하기","m","s"]]],
 ["졸업 후 진로 상담 안내가 도착했어.",[["📚 관련 직업 정보를 조사하기","i","h"],["🤝 현직자 멘토에게 질문하기","s","j"],["🎨 작품집을 업데이트하기","c","i"],["⚠️ 상담을 피하고 아무 준비 안 하기","m","s"]]],
 ["수업에서 어려운 개념이 나왔어.",[["📖 교재를 찾아 다시 공부하기","i","h"],["🤝 스터디 모임 만들어 보기","s","j"],["🎨 그림으로 개념을 정리하기","c","i"],["⚠️ 대충 넘기고 남에게 답 요구하기","m","s"]]]
 ],
 prep:[
 ["관심 분야의 채용 공고가 새로 올라왔어.",[["📝 요구 능력을 분석하기","i","h"],["🎨 포트폴리오 맞춰 보완하기","c","j"],["🤝 현직자 조언 구하기","s","i"],["⚠️ 지원만 미루다가 마감 놓치기","m","s"]]],
 ["작은 단기 프로젝트에 지원해 보라는 제안을 받았어.",[["💻 프로젝트를 실습 기회로 삼기","i","h"],["🎨 새로운 결과물 만들기","c","j"],["🤝 팀원과 역할 협의하기","s","i"],["⚠️ 연락하지 않고 약속 어기기","m","s"]]],
 ["면접을 앞두고 긴장돼. 자기소개를 준비해 보자.",[["📚 지원 직무 정리하기","i","h"],["🎥 자기소개 영상 만들어 연습","c","j"],["🤝 친구에게 모의 면접 부탁하기","s","i"],["⚠️ 준비 없이 바로 면접장에 가기","m","s"]]],
 ["오늘은 일과 공부를 어떻게 나눌지 고민이야.",[["📅 하루 목표를 현실적으로 세우기","i","h"],["🎨 관심 직무 실습하기","c","j"],["🤝 스터디 친구와 진도 공유","s","i"],["⚠️ 중요한 약속을 계속 미루기","m","s"]]],
 ["작품을 공개했는데 예상보다 피드백이 많아.",[["🔍 공통 의견을 분석하기","i","h"],["🎨 작품에 수정 사항 반영하기","c","j"],["🤝 응원한 사람에게 답장 보내기","s","i"],["⚠️ 의견을 전부 무시하고 화내기","m","s"]]],
 ["서로 다른 직업 체험 기회가 열렸어.",[["📖 직무별 차이 조사하기","i","h"],["🎨 새로운 기술을 직접 연습하기","c","j"],["🤝 체험 신청 정보를 공유하기","s","i"],["⚠️ 귀찮다며 기회를 전부 넘기기","m","s"]]]
 ]
};
function routeSceneBank(age){
 ensureLifeArc();
 if(age<19)return null;
 const route=state.lifeRoute;
 if(route==='military'&&age>=20&&age<22)return LIFE_ROUTE_SCENES.military;
 if(route==='university'&&age<=22)return LIFE_ROUTE_SCENES.university;
 if(route==='prep'&&age<=25)return LIFE_ROUTE_SCENES.prep;
 if(route==='work'&&age<=65)return LIFE_ROUTE_SCENES.work;
 return null;
}

function restoreDailySceneProgress(old){
 const progress=old?.dailySceneProgress;
 if(progress&&typeof progress==='object'&&!Array.isArray(progress))return;
 state.dailySceneProgress={};
 if(!old)return;
 const choices=new Set(state.log.flatMap(line=>line.match(/^\d+살 · DAY \d+ · 성장 \d+\/\d+: (.+)$/)?.[1]||[]));
 const absurdIds=new Set(Array.isArray(old.absurdHistory)?old.absurdHistory.map(entry=>entry?.id):[]);
 const banks={...SCENE_BANK};
 for(const [route,pool] of Object.entries(LIFE_ROUTE_SCENES))banks['path-'+route]=pool;
 for(const [kind,pool] of Object.entries(NURI_ABSURD_BANK))banks['absurd-'+kind]=pool;
 for(const [key,scenes] of Object.entries(banks)){
  for(let turn=0;turn<scenes.length;turn++){
   const index=(turn+familySceneOffset())%scenes.length;
   const seen=key.startsWith('absurd-')?absurdIds.has(key+'-'+index):scenes[index][1].some(([label])=>choices.has(label));
   if(seen)state.dailySceneProgress[key]=turn+1;
  }
 }
}

// Restore after authentication and cloud download have selected the account's save.
function nuriLoadSavedGame(){
 state=freshNuriState();
 activeDailyScene=null;
 worldLegacyCache=null;
 selectedFamily="ordinary";
 let old;
 try{old=JSON.parse(localStorage.getItem(window.nuriCurrentSaveKey()));}catch(e){}
 if(old?.stats){
  state={
   ...state,...old,
   age:Number.isInteger(old.age)?old.age:([0,3,7,13,16,20][old.stage||0]),
   version:3,
   progress:Number.isInteger(old.progress)?Math.min(4,Math.max(0,old.progress)):0,
   yearDay:old.version>=2&&Number.isInteger(old.yearDay)
    ?Math.min(2,old.version===2?Math.floor(Math.max(0,old.yearDay)*3/7):Math.max(0,old.yearDay))
    :0,
   turningPoints:Array.isArray(old.turningPoints)?old.turningPoints:[],
   pendingTurningPoint:old.pendingTurningPoint||null,
   comedyLine:old.comedyLine||state.comedyLine,
   items:old.items||{},
   settings:{...DEFAULT_SETTINGS,...(old.settings||{})},
   day:Number.isInteger(old.day)?Math.max(1,old.day):1,
   schoolPath:old.schoolPath||"",
   adultPath:old.adultPath||"",
   alive:old.alive!==false,
   deathCause:old.deathCause||"",
   stats:{...state.stats,...old.stats,health:limitStat("health",old.stats.health),happiness:limitStat("happiness",old.stats.happiness)},
   log:migrateOldLog(old.log),
   storySeen:Array.isArray(old.storySeen)?old.storySeen:[],
   storyJournal:Array.isArray(old.storyJournal)?old.storyJournal:[],
   storyFlags:old.storyFlags||{bond:0,flags:[]},
   pendingStory:old.pendingStory||null,
   latestStory:old.latestStory||"",
   detourPoints:Number(old.detourPoints)||0,
   lastDetour:old.lastDetour||"",
   sceneTurn:Number(old.sceneTurn)||0,
   lastOutcome:old.lastOutcome||""
  };
 }
 const hasLife=Object.hasOwn(families,state.family);
 if(hasLife){
  selectedFamily=state.family;
  // Keep the proportion of an unfinished day in older 5-step saves.
  const steps=growthRequired(state.age);
  const progress=Math.max(0,Number(state.progress)||0);
  state.progress=Math.min(steps-1,Math.floor(old.settings?.gameSpeed===undefined?progress*steps/5:progress));
 }
 document.getElementById("familyScreen").style.display=hasLife?"none":"block";
 document.getElementById("gameMain").style.display=hasLife?"block":"none";
 applySettings();
 ensureLifeHealth();
 ensureWorld();
 ensureLifeArc();showNextLifeArc();
 restoreDailySceneProgress(old);
 if(hasLife){
  const pastBabyMilestone=(state.age===1||state.age===2)&&(state.yearDay>0||state.progress>0);
  if(!state.pendingStory&&!pastBabyMilestone)maybeStartStory(state.age);
  render();
  save();
 }
}
// The account layer starts the game once a player has been selected.
if(!window.nuriCloudSchedule)nuriLoadSavedGame();
