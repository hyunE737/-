/* 한태빈의 인생 100가지 목표. 누리 키우기와 분리된 전용 시스템. */
(function(){
'use strict';
const CATEGORIES=[{"id":"c0","name":"가족","icon":"🏠","stat":"social","goals":[{"id":"t0_0","name":"첫 가족사진 남기기","age":1,"cost":0},{"id":"t0_1","name":"가족에게 그림 선물하기","age":5,"cost":2},{"id":"t0_2","name":"부모님과 함께 요리하기","age":8,"cost":4},{"id":"t0_3","name":"집안일 한 가지 맡기","age":10,"cost":0},{"id":"t0_4","name":"가족과 박물관 가기","age":12,"cost":8},{"id":"t0_5","name":"부모님께 감사 편지 쓰기","age":14,"cost":0},{"id":"t0_6","name":"어른들의 어린 시절 이야기 듣기","age":16,"cost":0},{"id":"t0_7","name":"가족 기념일 직접 준비하기","age":18,"cost":15},{"id":"t0_8","name":"가족 여행 앨범 만들기","age":22,"cost":20},{"id":"t0_9","name":"가족 인생 인터뷰 촬영하기","age":28,"cost":15}]},{"id":"c1","name":"우정","icon":"🤝","stat":"social","goals":[{"id":"t1_0","name":"새 친구에게 먼저 인사하기","age":5,"cost":0},{"id":"t1_1","name":"친구와 비밀 아지트 만들기","age":7,"cost":3},{"id":"t1_2","name":"친구의 고민 끝까지 듣기","age":10,"cost":0},{"id":"t1_3","name":"친구에게 진심 어린 사과하기","age":12,"cost":0},{"id":"t1_4","name":"친구들과 팀 프로젝트 하기","age":14,"cost":4},{"id":"t1_5","name":"오래된 친구에게 연락하기","age":16,"cost":0},{"id":"t1_6","name":"친구 생일 서프라이즈 준비하기","age":18,"cost":8},{"id":"t1_7","name":"함께하는 여행 계획하기","age":20,"cost":10},{"id":"t1_8","name":"서로의 꿈 응원해 주기","age":24,"cost":0},{"id":"t1_9","name":"친구들과 추억 다큐 만들기","age":30,"cost":18}]},{"id":"c2","name":"배움","icon":"📚","stat":"intelligence","goals":[{"id":"t2_0","name":"첫 그림책 완독하기","age":4,"cost":0},{"id":"t2_1","name":"도서관 회원증 만들기","age":7,"cost":0},{"id":"t2_2","name":"과학 원리 하나 탐구하기","age":9,"cost":2},{"id":"t2_3","name":"처음 배우는 외국어 인사 익히기","age":11,"cost":0},{"id":"t2_4","name":"관심 분야 발표 준비하기","age":13,"cost":0},{"id":"t2_5","name":"새로운 프로그램 익히기","age":15,"cost":6},{"id":"t2_6","name":"자격증 공부 계획 세우기","age":17,"cost":5},{"id":"t2_7","name":"직업인 인터뷰하기","age":19,"cost":2},{"id":"t2_8","name":"심화 기술 프로젝트 완수하기","age":25,"cost":15},{"id":"t2_9","name":"새로운 분야를 처음부터 배워보기","age":35,"cost":12}]},{"id":"c3","name":"창작","icon":"🎨","stat":"creativity","goals":[{"id":"t3_0","name":"나만의 낙서책 만들기","age":5,"cost":1},{"id":"t3_1","name":"짧은 동화 쓰기","age":8,"cost":0},{"id":"t3_2","name":"직접 만든 노래 녹음하기","age":11,"cost":4},{"id":"t3_3","name":"네 컷 만화 완성하기","age":13,"cost":2},{"id":"t3_4","name":"첫 사진 전시 열기","age":15,"cost":10},{"id":"t3_5","name":"짧은 영상 제작하기","age":17,"cost":12},{"id":"t3_6","name":"작은 게임 기획서 만들기","age":19,"cost":0},{"id":"t3_7","name":"포트폴리오 사이트 완성하기","age":22,"cost":16},{"id":"t3_8","name":"주제 있는 단편영화 만들기","age":28,"cost":30},{"id":"t3_9","name":"나만의 작품집 발간하기","age":35,"cost":25}]},{"id":"c4","name":"탐험","icon":"🧭","stat":"happiness","goals":[{"id":"t4_0","name":"동네 산책길 새로 발견하기","age":5,"cost":0},{"id":"t4_1","name":"근처 공원 지도 만들기","age":8,"cost":0},{"id":"t4_2","name":"지역 문화공간 방문하기","age":11,"cost":4},{"id":"t4_3","name":"낯선 동네의 맛집 찾아보기","age":13,"cost":8},{"id":"t4_4","name":"친구들과 당일치기 나들이","age":16,"cost":12},{"id":"t4_5","name":"혼자서 하루 여행 계획하기","age":18,"cost":10},{"id":"t4_6","name":"다른 지역 문화축제 즐기기","age":20,"cost":20},{"id":"t4_7","name":"국내 기차 여행 떠나기","age":23,"cost":32},{"id":"t4_8","name":"새로운 도시에서 일주일 살아보기","age":30,"cost":45},{"id":"t4_9","name":"평생 기억할 풍경 사진 찍기","age":38,"cost":16}]},{"id":"c5","name":"건강","icon":"🌿","stat":"health","goals":[{"id":"t5_0","name":"매일 손 씻는 습관 만들기","age":4,"cost":0},{"id":"t5_1","name":"잠들기 전 스트레칭 배우기","age":7,"cost":0},{"id":"t5_2","name":"내게 맞는 운동 찾아보기","age":10,"cost":3},{"id":"t5_3","name":"일주일 산책 챌린지","age":12,"cost":0},{"id":"t5_4","name":"충분히 쉬는 휴일 계획하기","age":14,"cost":0},{"id":"t5_5","name":"건강한 한 끼 직접 만들기","age":16,"cost":5},{"id":"t5_6","name":"가벼운 운동 루틴 만들기","age":19,"cost":0},{"id":"t5_7","name":"정기 건강검진 받기","age":24,"cost":10},{"id":"t5_8","name":"마음 돌보기 일기 작성하기","age":29,"cost":0},{"id":"t5_9","name":"오래 지킬 건강 습관 완성하기","age":36,"cost":0}]},{"id":"c6","name":"도전","icon":"🚀","stat":"charm","goals":[{"id":"t6_0","name":"처음으로 손들고 발표하기","age":7,"cost":0},{"id":"t6_1","name":"어려운 퍼즐 끝까지 풀기","age":10,"cost":0},{"id":"t6_2","name":"새로운 동아리 가입하기","age":12,"cost":0},{"id":"t6_3","name":"사람들 앞에서 공연하기","age":15,"cost":5},{"id":"t6_4","name":"작은 대회에 작품 출품하기","age":17,"cost":8},{"id":"t6_5","name":"첫 면접 연습하기","age":19,"cost":0},{"id":"t6_6","name":"낯선 분야 프로젝트 도전하기","age":22,"cost":8},{"id":"t6_7","name":"자신만의 팀 프로젝트 이끌기","age":26,"cost":10},{"id":"t6_8","name":"실패한 일을 다시 시도하기","age":31,"cost":0},{"id":"t6_9","name":"새로운 10년의 꿈 선언하기","age":40,"cost":0}]},{"id":"c7","name":"나눔","icon":"💛","stat":"social","goals":[{"id":"t7_0","name":"도움이 필요한 친구 배려하기","age":7,"cost":0},{"id":"t7_1","name":"동네 쓰레기 줍기","age":10,"cost":0},{"id":"t7_2","name":"도서관 자원봉사 참여하기","age":13,"cost":0},{"id":"t7_3","name":"후배의 숙제 공부 도와주기","age":16,"cost":0},{"id":"t7_4","name":"작은 기부 약속 실천하기","age":18,"cost":5},{"id":"t7_5","name":"지역 행사 자원봉사하기","age":20,"cost":0},{"id":"t7_6","name":"배운 기술을 무료로 가르치기","age":24,"cost":0},{"id":"t7_7","name":"신입 구성원 멘토가 되기","age":28,"cost":0},{"id":"t7_8","name":"공익 캠페인 콘텐츠 만들기","age":34,"cost":10},{"id":"t7_9","name":"다음 세대 꿈 응원 프로젝트","age":40,"cost":20}]},{"id":"c8","name":"자립","icon":"💼","stat":"intelligence","goals":[{"id":"t8_0","name":"첫 용돈 저축하기","age":8,"cost":0},{"id":"t8_1","name":"한 달 예산표 만들기","age":12,"cost":0},{"id":"t8_2","name":"필요한 물건 가격 비교하기","age":14,"cost":0},{"id":"t8_3","name":"내 통장 관리법 배우기","age":16,"cost":0},{"id":"t8_4","name":"진로 계획표 작성하기","age":17,"cost":0},{"id":"t8_5","name":"첫 아르바이트 계획하기","age":18,"cost":0},{"id":"t8_6","name":"생활비 지출 기록하기","age":21,"cost":0},{"id":"t8_7","name":"첫 독립 생활 계획 세우기","age":24,"cost":8},{"id":"t8_8","name":"무리하지 않는 저축 목표 세우기","age":28,"cost":0},{"id":"t8_9","name":"일과 삶의 균형 계획 완성하기","age":35,"cost":0}]},{"id":"c9","name":"기록","icon":"📔","stat":"creativity","goals":[{"id":"t9_0","name":"오늘의 기분 일기 쓰기","age":6,"cost":0},{"id":"t9_1","name":"첫 엽서 보내기","age":9,"cost":2},{"id":"t9_2","name":"1년 뒤의 나에게 편지 쓰기","age":12,"cost":0},{"id":"t9_3","name":"어릴 적 추억 상자 만들기","age":14,"cost":3},{"id":"t9_4","name":"학교 졸업 기록 남기기","age":18,"cost":5},{"id":"t9_5","name":"나만의 버킷리스트 쓰기","age":20,"cost":0},{"id":"t9_6","name":"친구들과 사진 앨범 만들기","age":23,"cost":8},{"id":"t9_7","name":"내 인생 사진 에세이 쓰기","age":29,"cost":10},{"id":"t9_8","name":"지난 10년을 영상으로 정리하기","age":35,"cost":14},{"id":"t9_9","name":"100가지 목표 달성 기록 전시하기","age":40,"cost":20}]}];
const GOALS=CATEGORIES.flatMap(c=>c.goals.map(g=>({...g,category:c.name,icon:c.icon,stat:c.stat})));
if(GOALS.length!==100||new Set(GOALS.map(g=>g.id)).size!==100)throw Error('한태빈 목표 목록은 정확히 100개여야 합니다.');

  let activeFilter='all',activeQuest=null;
  const LEVEL_NAMES=['','쉬움','보통','어려움','매우 어려움','전설'];
  const STEP_PATHS={1:[0,7],2:[0,2,7],3:[0,1,3,7],4:[0,1,2,3,5,7],5:[0,1,2,3,4,5,6,7]};
  const REQS=[0,0,11,22,32,46];
  const STAT_NAMES={social:'인간관계',intelligence:'지능',creativity:'창의력',happiness:'행복',health:'체력',charm:'매력'};
  const PHASE_NAMES=['꿈의 시작','정보 수집','준비와 연습','첫 도전','예상 못 한 변수','문제 해결','최종 실전','마지막 결과'];
  const CATEGORY_SCENES={
    가족:[
      '가족과 함께하고 싶은 일이 생각났어. 서로의 바쁜 하루 속에 시간을 어떻게 마련할까?',
      '가족들의 취향과 일정이 저마다 달라. 태빈이가 먼저 필요한 정보를 모으려 해.',
      '약속한 날을 위해 필요한 준비물을 모으고 역할을 나눌 시간이야.',
      '가족이 한자리에 모였지만 태빈이는 아직 조금 긴장돼. 첫 실천을 어떻게 시작할까?',
      '갑자기 집안 일정이 바뀌었어. 계획을 그대로 밀어붙이면 누군가는 참여할 수 없대.',
      '의견이 엇갈리던 가족이 다시 모였어. 누구의 마음도 놓치지 않는 방법을 찾아야 해.',
      '마지막 준비를 마친 태빈이에게 가족이 선택을 맡겼어. 지금까지의 노력으로 해낼 수 있을까?',
      '사진과 대화 속에 남을 특별한 시간이 다가왔어. 함께한 사람의 마음을 확인할 차례야.'
    ],
    우정:[
      '태빈이는 친구 가온이와 대화하다 이 꿈을 떠올렸어. 친구의 마음부터 알아볼까?',
      '가온이와 친구들의 일정이 엇갈려. 함께할 수 있는 시간을 찾아야 해.',
      '친구들 사이 의견이 서로 달라. 이번 일을 준비할 방법을 골라야 해.',
      '약속 장소에 모인 친구들이 태빈이의 첫 제안을 기다리고 있어.',
      '서운해진 친구가 속마음을 숨겼어. 진행 전에 오해를 풀지 않으면 어려울 것 같아.',
      '친구와 마음을 터놓고 조정할 시간. 태빈이는 어떤 말부터 건넬까?',
      '오랜 준비 끝에 모두가 다시 모였어. 우정을 지키며 목표를 이룰 수 있을까?',
      '마지막 순간, 가온이가 태빈이에게 수첩의 별 하나를 함께 그리자고 해.'
    ],
    배움:[
      '배우고 싶은 것이 생겼지만 어디서 시작해야 할지 막막해. 목표를 작게 나눠볼까?',
      '도서관과 무료 강의에서 자료를 찾았어. 정보가 너무 많아 무엇부터 정리할까?',
      '첫 연습에서 예상보다 어려운 부분이 나타났어. 기초를 다져야 해.',
      '배운 내용을 처음으로 실전에 적용해 볼 기회야. 실수가 생기면 어떻게 대처할까?',
      '이해했다고 생각한 부분에서 오류가 발생했어. 답보다 원인을 살펴봐야 해.',
      '자료를 다시 확인하며 약점을 보완할 시간이야. 배운 것을 자기 것으로 만들어 볼까?',
      '실력을 보여줄 최종 과제 앞에 섰어. 준비한 내용을 차분히 활용해야 해.',
      '성공 여부를 확인하는 마지막 단계야. 태빈이는 성장 과정을 수첩에 기록해.'
    ],
    창작:[
      '한태빈에게 떠오른 장면이 있어. 이것을 작품으로 만들어 보고 싶어.',
      '레퍼런스와 아이디어를 정리하자 작품의 방향이 조금씩 또렷해져.',
      '도구를 준비하고 대본·그림·구성을 만들 시간이야. 여유 있게 연습할까?',
      '첫 초안을 세상에 꺼내는 순간이야. 제작 과정에서 무엇을 먼저 챙길까?',
      '예상치 못한 수정 요청이 들어왔어. 만족스러운 결과를 내기 위해 다시 고민해야 해.',
      '도움받을 사람을 찾거나 작품을 다시 편집해야 해. 마감 전에 선택해야 해.',
      '작품 공개를 앞두고 마지막 점검을 시작했어. 완성도와 약속을 모두 지킬 수 있을까?',
      '태빈이가 완성한 결과물을 공개하는 날이야. 작품에 담긴 마음이 전해질까?'
    ],
    탐험:[
      '한태빈은 지도 위 새로운 장소에 동그라미를 그렸어. 무리 없는 계획부터 세워볼까?',
      '교통편과 이동 시간을 살펴보니 예상보다 변수들이 많아.',
      '비용과 준비물을 점검해야 해. 경험을 위해서는 현실적인 계획이 필요해.',
      '목적지에 도착했어. 새로운 장소를 찬찬히 알아볼까?',
      '갑자기 날씨와 일정이 달라졌어. 안전하고 즐거운 대안을 찾을 때야.',
      '잠깐 방향을 잃었지만 안내 표지와 사람들의 도움을 받을 수 있어.',
      '돌아가기 전에 꼭 경험하고 싶은 장면이 남아 있어. 마지막 일정을 잘 정리해야 해.',
      '모험의 마지막, 태빈이는 가장 기억에 남는 장면을 수첩에 남겨.'
    ],
    건강:[
      '무리하지 않고 꾸준히 지킬 습관을 만들기로 했어. 자기 생활을 먼저 돌아볼까?',
      '운동·휴식·식사의 균형을 점검했어. 지금 생활에 맞는 방법을 골라야 해.',
      '좋은 습관을 시작했지만 며칠 지났다고 바로 달라지지는 않아.',
      '꾸준히 실행할 시간이야. 남과 경쟁하기보다 내 상태를 살피는 게 중요해.',
      '컨디션이 좋지 않은 날이 찾아왔어. 계획을 고집하기보다 조정이 필요해.',
      '너무 높게 잡았던 목표를 현실적으로 바꿔 보고 싶어.',
      '지금까지의 실천 기록을 확인할 때야. 오래 이어 갈 수 있을까?',
      '태빈이는 무리 없이 습관을 이어 갈 방법을 정리하고 수첩에 기록해.'
    ],
    도전:[
      '이번 목표는 조금 두렵지만 해 보고 싶어. 태빈이는 도전의 이유를 적어 봤어.',
      '먼저 필요한 기술과 경험을 찾아보자. 준비 없는 자신감만으로는 어려워.',
      '연습하다 실수했어. 포기하지 않고 부족한 부분을 보완해야 해.',
      '첫 시도가 시작됐어. 예상한 대로 흘러가지 않아도 침착할 수 있을까?',
      '심사·발표·일정 중 하나에 문제가 생겼어. 지금 포기하면 지금까지의 준비가 아까워.',
      '멘토의 피드백이 도착했어. 선택할 때마다 결과가 달라질 거야.',
      '가장 중요한 최종 무대야. 경험과 꾸준함을 믿고 도전할 때야.',
      '도전을 마친 태빈이는 결과와 관계없이 배운 점을 기록해.'
    ],
    나눔:[
      '한태빈은 주변의 누군가에게 도움이 필요하다는 이야기를 들었어. 무엇이 정말 필요한지 먼저 알아볼까?',
      '도움을 받을 사람의 의견을 들으니 생각과 다른 부분이 있어.',
      '함께할 사람을 모으고 할 수 있는 만큼 계획을 세워야 해.',
      '첫 활동이 시작됐어. 태빈이는 약속한 역할을 책임지고 진행하려 해.',
      '예상치 못한 준비 부족이 발생했어. 도움받는 사람에게 피해가 가지 않도록 조정해야 해.',
      '다른 사람들과 역할을 나누며 방법을 다시 정리할 때야.',
      '행사 또는 활동을 마무리할 시간이야. 끝까지 책임을 다해야 해.',
      '도움을 받았던 사람이 고맙다는 말을 전해 왔어. 태빈이는 이번 경험을 기록해.'
    ],
    자립:[
      '태빈이는 자기 생활을 스스로 꾸려 갈 방법을 고민해. 지금 상황부터 제대로 파악해야 해.',
      '예산과 필요한 자료를 모았어. 예상 비용과 시간을 비교해야 해.',
      '기본 계획을 세운 뒤 작은 연습부터 시작해 보려고 해.',
      '첫 실행 날이 왔어. 스스로 한 선택의 결과를 책임져야 해.',
      '생각하지 못한 지출이나 일정 변경이 생겼어. 무리해서 밀어붙여도 괜찮을까?',
      '예산을 다시 계산하고 중요한 일부터 우선순위를 정해야 해.',
      '이제 혼자서 중요한 일을 마무리할 때야. 배운 것을 실제로 적용할까?',
      '태빈이는 스스로 해결한 일과 도움받은 일을 함께 기록하며 한 걸음 성장해.'
    ],
    기록:[
      '한태빈은 이번 경험을 시간이 지나도 기억하고 싶어. 어떤 방식으로 남길까?',
      '예전 사진과 메모를 모으니 빠진 이야기가 보여. 자료를 더 찾아야 해.',
      '글과 사진을 어떻게 구성할지 고민해. 특별한 날이 아닌 평범한 날도 중요해.',
      '첫 번째 초안을 완성했어. 기록을 공개하기 전에 살펴볼 부분이 있어.',
      '오래된 기억이 서로 다르게 떠올라. 누군가의 이야기를 단정하지 않도록 조심해야 해.',
      '친구와 가족의 말을 다시 확인하며 틀린 부분을 고치려 해.',
      '마지막 편집과 정리가 남았어. 그동안의 경험을 하나의 기록으로 묶을 때야.',
      '완성된 기록의 마지막 장을 덮자 태빈이는 수첩의 별 하나를 채울 준비가 됐어.'
    ]
  };
  const CHOICE_VERBS={
    가족:[['가족 의견을 듣고 함께 준비한다','우리의 시간을 조율하며 차근차근 다음 단계로 나아갔어.'],['가족과 역할을 나누어 진행한다','서로의 부담을 덜어주며 목표에 더 가까워졌어.'],['내 생각대로 일정을 밀어붙인다','서로 일정이 어긋나 계획을 다시 조정해야 해.']],
    우정:[['상대 마음을 먼저 확인한다','가온이와 서로의 생각을 나누고 신뢰를 쌓았어.'],['친구와 함께 방법을 찾아본다','친구의 작은 아이디어가 새로운 기회를 만들었어.'],['친구의 의견을 무시한다','오해가 생겨 다시 시간을 들여 이야기해야 해.']],
    배움:[['기초부터 차근차근 연습한다','어려운 부분을 직접 풀며 실력이 늘었어.'],['친구와 서로 설명해 본다','설명하는 과정에서 모르는 부분을 알게 됐어.'],['답만 빠르게 외운다','다른 문제가 나오자 다시 기초부터 확인해야 했어.']],
    창작:[['기획을 수정하고 충분히 연습한다','완성도가 올라가고 작품이 또렷해졌어.'],['팀원과 피드백을 나눈다','다른 시각 덕분에 작품의 문제를 발견했어.'],['검토 없이 바로 공개한다','고쳐야 할 부분이 발견되어 수정 작업이 남았어.']],
    탐험:[['안전과 일정을 먼저 확인한다','준비한 일정 덕분에 새로운 경험에 가까워졌어.'],['안내 정보를 확인하고 함께 움직인다','서로 챙기며 즐거운 기억을 만들었어.'],['계획을 무시하고 서둘러 이동한다','무리한 일정 때문에 다시 계획을 짜야 했어.']],
    건강:[['내 상태에 맞춰 꾸준히 실천한다','무리하지 않은 계획이 생활 속 습관으로 자리 잡았어.'],['가족과 함께 실천할 방법을 고른다','지속 가능한 방식으로 습관을 이어 갔어.'],['무조건 많이 하려고 한다','몸이 피곤해져서 충분히 쉬고 계획을 고쳐야 했어.']],
    도전:[['실수를 분석해 다시 연습한다','부족했던 부분을 해결하며 준비를 이어 갔어.'],['경험 있는 사람에게 피드백을 구한다','새로운 방법을 배우며 자신감을 얻었어.'],['준비 없이 운에 맡긴다','실전에서 막히는 부분이 있어 다시 연습해야 해.']],
    나눔:[['도움받는 사람의 말을 먼저 듣는다','실제로 필요한 일을 파악해 활동을 준비했어.'],['동료들과 역할을 조정한다','혼자보다 더 안정적으로 일을 나눌 수 있었어.'],['확인하지 않고 일방적으로 진행한다','상대의 상황과 맞지 않아 계획을 다시 세워야 했어.']],
    자립:[['예산과 시간을 다시 계산한다','필요한 것과 원하는 것을 구분해 계획을 지켰어.'],['믿을 만한 사람에게 조언을 구한다','현실적인 방법을 찾아 문제를 줄였어.'],['비용 확인 없이 바로 지른다','지출 문제가 생겨 계획을 수정해야 해.']],
    기록:[['사실을 확인하고 정성껏 정리한다','잘못된 부분을 고쳐 기록의 완성도를 높였어.'],['이야기의 주인에게 의견을 묻는다','당사자의 목소리를 담아 더 의미 있는 기록을 남겼어.'],['확인 없이 빨리 마무리한다','부정확한 정보가 보여 다시 확인해야 해.']]
  };
  const SPECIAL_SCENES={
    t3_8:['촬영 콘셉트 정하기','배역과 팀원 섭외','촬영 장소와 예산 맞추기','첫 장면 촬영','촬영 일정 변경','편집·음향 보완','상영 준비','단편영화 시사회'],
    t4_8:['도시 고르고 생활 계획 세우기','숙소와 이동 수단 조사','예산표 작성','새 동네 적응하기','생활 중 예상 밖의 지출','현지 사람들과 교류하기','일주일간 경험 정리','도시 생활기 완성'],
    t9_9:['지난 목표 99개 자료 모으기','사진·일기 선정하기','전시 구역 구성하기','첫 설치하기','누락된 기록 보완하기','방문객 안내 준비하기','전시 최종 점검','100가지 인생 이야기 공개']
  };
  const SPECIAL_REQUIREMENTS={
    t9_9:'전시회에는 다른 목표 99개를 모두 달성한 기록이 필요해.'
  };
  const escapeHtml = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const number = (v,f=0) => Number.isFinite(Number(v))?Number(v):f;
  const skillOf=g=>number(state.stats?.[g.stat],0);
  const goalTier=g=>Math.min(5,Math.floor(Number(g.id.split('_')[1])/2)+1);
  const goalSteps=g=>STEP_PATHS[goalTier(g)];
  const goalBudget=g=>g.cost*(goalTier(g)>=4?goalTier(g)*2:goalTier(g)>=3?goalTier(g):1);
  const requiredSkill=g=>REQS[goalTier(g)];
  const localDone=()=>{
    if(!Array.isArray(state.taebinGoalsDone))state.taebinGoalsDone=[];
    const ids=new Set(GOALS.map(g=>g.id));
    state.taebinGoalsDone=[...new Set(state.taebinGoalsDone.filter(id=>ids.has(id)))];
    return state.taebinGoalsDone;
  };
  function ensure(){
    localDone();
    if(!Array.isArray(state.taebinGoalHistory))state.taebinGoalHistory=[];
    if(!state.taebinGoalRuns||typeof state.taebinGoalRuns!=='object'||Array.isArray(state.taebinGoalRuns))state.taebinGoalRuns={};
    if(state.taebinGoalsDone.length===100&&!state.taebinAllGoalsAchieved){
      state.taebinAllGoalsAchieved=true;
      state.taebinGoalsFinishedAge=state.age;
      if(!Array.isArray(state.log))state.log=[];
      state.log.push('🏆 한태빈이 100가지 인생 목표를 모두 완성했어!');
    }
  }
  const count=()=>{ensure();return state.taebinGoalsDone.length;};
  const completed=id=>{ensure();return state.taebinGoalsDone.includes(id);};
  function requiredCategory(g){
    const tier=goalTier(g),idCategory=g.id.split('_')[0];
    if(tier<=2)return 0;
    if(tier===3)return 1;
    if(tier===4)return 3;
    return 5;
  }
  function categoryDone(g){
    const prefix=g.id.split('_')[0]+'_';
    return localDone().filter(id=>id.startsWith(prefix)).length;
  }
  function requirements(g){
    if(!state.family||!state.alive)return {ok:false,reason:'인생이 시작된 후 도전할 수 있어.'};
    if(state.age<g.age)return {ok:false,reason:g.age+'살부터 도전 가능'};
    if(g.id==='t9_9'&&count()<99)return {ok:false,reason:'다른 목표 99개를 달성하면 열려'};
    const prior = categoryDone(g),req=requiredCategory(g);
    if(prior<req)return {ok:false,reason:g.category+' 분야 목표를 '+req+'개 이상 먼저 달성해 줘 ('+prior+'/'+req+')'};
    return {ok:true,reason:''};
  }
  const canStart=g=>requirements(g).ok;
  function runFor(id){ensure();return state.taebinGoalRuns[id]||null;}
  const inProgress=id=>!!runFor(id)&&!completed(id);
  const record=(title,description,choice,result)=>{
    if(!Array.isArray(state.storyJournal))state.storyJournal=[];
    state.storyJournal.push({age:state.age,title,intro:description,choice,outcome:result});
    if(!Array.isArray(state.log))state.log=[];
    state.log.push('📔 '+state.age+'살 · '+title+': '+result);
    state.latestStory=title+' — '+result;
  };
  function saveAndDraw(){
    updateProgress();
    if(typeof render==='function')render();
    if(typeof save==='function')save();
  }
  function showToast(message){if(typeof toast==='function')toast(message);}
  function updateProgress(){
    if(typeof state==='undefined'||!state?.family)return;
    const done=count(),running=Object.keys(state.taebinGoalRuns).filter(id=>!completed(id)).length;
    for(const [id,value] of [
      ['taebinGoalCount',done+' / 100'],
      ['taebinGoalStatus',done===100?'🏆 한태빈의 100가지 꿈을 모두 완성했어!':'완료 '+done+'개 · 진행 중 '+running+'개 · 남은 목표 '+(100-done)+'개']
    ]){
      const el=document.getElementById(id);if(el)el.textContent=value;
    }
    for(const [id,value] of [['wealthTotal',done+'/100'],['wealthPercent',done+'%'],['cashHud','인생 목표 '+done+'/100'],['wealthDetail','꿈은 돈으로 살 수 없어. 매일의 선택과 준비로 100개를 완성해 봐.']]){
      const el=document.getElementById(id);if(el)el.textContent=value;
    }
    const el=document.getElementById('wealthFill');if(el)el.style.width=done+'%';
    const bar=document.getElementById('wealthTrack');if(bar)bar.setAttribute('aria-valuenow',String(done));
  }
  function nameOfPhase(g,run){
    const phase=goalSteps(g)[run.stage];
    return SPECIAL_SCENES[g.id]?.[run.stage]||PHASE_NAMES[phase];
  }
  function sceneFor(g,run){
    const phase=goalSteps(g)[run.stage];
    const title= nameOfPhase(g,run);
    const previous=Array.isArray(run.notes)&&run.notes.length?(' 지난 장면: '+run.notes.at(-1)):'';
    return '한태빈의 버킷리스트 《'+g.name+'》 · '+title+'. '+CATEGORY_SCENES[g.category][phase]+previous;
  }
  function questPanel(id){
    const g=GOALS.find(item=>item.id===id);
    if(!g)return renderModal();
    ensure();
    activeQuest=id;
    const r=runFor(id),done=completed(id),tier=goalTier(g);
    modalHeader('인생의 꿈 · '+g.name,'HAN TAEBIN · STORY QUEST');
    const el=document.getElementById('appModalBody');
    const stageCount=goalSteps(g).length;
    const progress=r?Math.min(r.stage,stageCount):0;
    const req=requiredSkill(g),budget=goalBudget(g);
    const stepReady=r&&r.lastActionDay!==number(state.day,1);
    const prereq=requirements(g);
    const progressText='진행 '+progress+' / '+stageCount+'단계 · 난이도 '+LEVEL_NAMES[tier];
    const intro='<div class="taebin-quest-cover"><div class="taebin-quest-kicker">'+escapeHtml(g.icon+' '+g.category+' · 난이도 '+LEVEL_NAMES[tier])+'</div><h3>'+escapeHtml(g.name)+'</h3><p>이 꿈은 버튼 한 번으로 이룰 수 없어. 준비와 선택, 게임 속 시간의 흐름이 필요해.</p></div>';
    const summary='<div class="taebin-quest-meta"><span>'+escapeHtml(progressText)+'</span><span>필요한 능력 · '+escapeHtml(STAT_NAMES[g.stat])+' '+req+' (현재 '+Math.floor(skillOf(g))+')</span><span>필요 예산 · '+formatWon(budget)+'</span></div><div class="taebin-goal-progress"><i style="width:'+(progress/stageCount*100)+'%"></i></div>';
    let content='';
    if(done){
      content='<div class="taebin-quest-ending"><h3>🏆 도전 성공!</h3><p>한태빈의 수첩에 '+escapeHtml(g.name)+' 목표가 기록됐어. 실력과 경험, 여러 날의 선택을 쌓아 드디어 완성했어.</p></div>';
    }else if(!r){
      const info=requirements(g);
      const action=info.ok?'<button class="modal-action taebin-quest-primary" onclick="taebinGoalDo(\''+g.id+'\')">📖 도전 스토리 시작하기</button>':'<p class="taebin-quest-wait">🔒 '+escapeHtml(info.reason)+'</p>';
      content='<div class="taebin-quest-scene"><h3>이 꿈을 향한 첫걸음</h3><p>'+escapeHtml(CATEGORY_SCENES[g.category][0])+'</p><p>어려운 꿈일수록 더 많은 이야기 단계와 능력치, 예산이 필요해. 도전을 시작해도 바로 완료되지 않고 기록이 이어져.</p></div>'+action;
    }else{
      const stageName=nameOfPhase(g,r);
      const wait=!stepReady;
      const verbs=CHOICE_VERBS[g.category];
      const rows=verbs.map(([label,desc],index)=>{
        const required=budget&&!r.paid&&r.stage>=1?' · 준비 비용 '+formatWon(budget):'';
        const disabled=wait||!state.alive;
        return '<button type="button" class="taebin-quest-option" onclick="taebinGoalChoose(\''+g.id+'\','+index+')" '+(disabled?'disabled':'')+'><b>'+['📝','🤝','⚡'][index]+' '+escapeHtml(label)+'</b><small>'+escapeHtml(desc)+(index===0?' · 신중한 진행':index===1?' · 협력과 소통':' · 실수 가능')+escapeHtml(required)+'</small></button>';
      }).join('');
      const next=wait?'<p class="taebin-quest-wait">🕒 오늘은 이 목표에 이미 도전했어. <strong>일상 선택으로 다음 날까지 진행한 뒤</strong> 다시 도전할 수 있어.</p>':'';
      const caveat=(r.stage===stageCount-1&&Math.floor(skillOf(g))+Math.max(0,r.plan||0)*2<req)?'<p class="taebin-quest-wait">📚 최종 단계가 어려워. 다른 생활 활동으로 능력치를 올리고 충분히 준비해 봐.</p>':'';
      content='<div class="taebin-quest-scene"><small>📖 이야기 '+(r.stage+1)+' / '+stageCount+' · '+escapeHtml(stageName)+'</small><h3>'+escapeHtml(g.name)+' — '+escapeHtml(stageName)+'</h3><p>'+escapeHtml(sceneFor(g,r))+'</p></div>'+caveat+next+'<div class="taebin-quest-choices">'+rows+'</div><p class="taebin-quest-tip">성공한 선택은 저장돼. 무리하면 단계가 지연될 수 있고, 예산이 부족하면 준비를 이어갈 수 없어.</p>';
    }
    el.innerHTML=intro+summary+content+'<div class="menu-actions"><button type="button" class="modal-action" onclick="taebinGoalBack()">← 100가지 목표 목록</button><button type="button" class="modal-action" onclick="closeAppModal()">게임 계속하기</button></div>';
  }
  function renderModal(){
    ensure();activeQuest=null;
    modalHeader('한태빈의 인생 목표 100가지','TAEBIN LIFE · STORY QUEST');
    const done=count(),ongoing=Object.keys(state.taebinGoalRuns).filter(id=>!completed(id)).length;
    const head='<div class="taebin-goal-head"><b>달성 '+done+' / 100</b><span>도전 중 '+ongoing+'개</span></div><div class="taebin-goal-progress"><i style="width:'+done+'%"></i></div><p class="taebin-goal-hint">목표를 누르면 이야기가 시작돼. 쉬운 꿈은 2단계, 전설 난이도는 8단계야. 실패하면 다시 준비하고, 다음 장면은 게임 속 다음 날에 도전할 수 있어.</p>';
    const menu='<div class="taebin-goal-filter"><button type="button" data-filter="all" onclick="taebinGoalFilter(\'all\')">전체</button>'+CATEGORIES.map(c=>'<button type="button" data-filter="'+c.id+'" onclick="taebinGoalFilter(\''+c.id+'\')">'+c.icon+' '+c.name+'</button>').join('')+'</div>';
    const selected=CATEGORIES.filter(c=>activeFilter==='all'||activeFilter===c.id);
    const groups=selected.map(c=>{
      const rows=c.goals.map(g=>{
        const doneAlready=completed(g.id),r=runFor(g.id),requirementsInfo=requirements(g);
        const step=goalSteps(g),num=r?Math.min(r.stage,step.length):0;
        const label=doneAlready?'완료':r?'이어서 도전':requirementsInfo.ok?'스토리 시작':'잠김';
        const detail=doneAlready?'✅ 달성 완료':r?'📖 '+num+'/'+step.length+'단계 진행 중':requirementsInfo.ok?'도전 가능':'🔒 '+requirementsInfo.reason;
        const meta='난이도 '+LEVEL_NAMES[goalTier(g)]+' · '+g.age+'살부터 · '+escapeHtml(detail);
        return '<article class="taebin-goal-item '+(doneAlready?'finished':'')+'"><span class="taebin-goal-dot">'+(doneAlready?'✓':'○')+'</span><div><b>'+escapeHtml(g.name)+'</b><small>'+meta+'</small></div><button type="button" onclick="taebinGoalOpen(\''+g.id+'\')">'+label+'</button></article>';
      }).join('');
      return '<section class="taebin-goal-category"><h4>'+c.icon+' '+c.name+' <small>'+c.goals.filter(g=>completed(g.id)).length+'/10</small></h4><div class="taebin-goal-list">'+rows+'</div></section>';
    }).join('');
    document.getElementById('appModalBody').innerHTML=head+menu+groups+'<div class="menu-actions"><button type="button" class="modal-action" onclick="openAppModal(\'menu\')">← 메뉴로</button><button type="button" class="modal-action" onclick="closeAppModal()">게임 계속하기</button></div>';
    document.querySelectorAll('[data-filter]').forEach(el=>el.classList.toggle('selected',el.dataset.filter===activeFilter));
  }
  function begin(id){
    const g=GOALS.find(item=>item.id===id);
    if(!g)return;
    ensure();
    if(completed(id))return questPanel(id);
    if(!runFor(id)){
      const check=requirements(g);
      if(!check.ok){showToast(check.reason);return questPanel(id);}
      state.taebinGoalRuns[id]={stage:0,lastActionDay:-1,plan:0,attempts:0,misses:0,paid:false,notes:[],startedDay:number(state.day,1)};
      record('인생 목표 도전 시작 · '+g.name,'한태빈의 100칸 꿈 수첩에서 새로운 도전을 골랐어.', '도전 시작','첫 번째 장면을 열었어. 이제 과정과 시간을 쌓아야 해.');
      saveAndDraw();
    }
    questPanel(id);
  }
  function choose(id,index){
    const g=GOALS.find(item=>item.id===id),r=runFor(id);
    if(!g||!r||completed(id)||!state.alive||![0,1,2].includes(index))return;
    if(r.lastActionDay===number(state.day,1)){showToast('오늘은 이미 도전했어. 게임에서 다음 날로 넘어가 줘.');return questPanel(id);}
    const length=goalSteps(g).length,budget=goalBudget(g),req=requiredSkill(g),phase=goalSteps(g)[r.stage];
    const needsMoney=r.stage>=1&&!r.paid&&budget>0;
    if(needsMoney&&state.money<budget){showToast('준비 비용이 부족해. '+formatWon(budget)+'이 필요해.');return questPanel(id);}
    if(needsMoney){state.money=Math.max(0,Math.round((state.money-budget)*100)/100);r.paid=true;}
    const [label,success]=CHOICE_VERBS[g.category][index];
    const shortcoming=success;
    const title='도전 · '+g.name+' · '+nameOfPhase(g,r);
    const intro=sceneFor(g,r);
    r.attempts++;
    r.lastActionDay=number(state.day,1);
    let outcome='',progress=false;
    if(index===2){
      r.plan=Math.max(0,r.plan-2);
      r.misses++;
      state.stats.happiness=Math.max(0,number(state.stats.happiness,50)-1);
      outcome=shortcoming+' 준비가 충분하지 않아 이번 단계는 다시 도전해야 해.';
    }else{
      if(index===0)r.plan+=2;
      if(index===1)r.plan+=1;
      const effective=Math.floor(skillOf(g))+(r.plan*2);
      const gate=(phase===6||phase===7)&&goalTier(g)>=3;
      const insufficient=gate&&effective<req;
      const categoryGate=(index===1)&&goalTier(g)>=4&&number(state.stats.social,0)<12;
      const healthGate=g.category==='건강'&&number(state.stats.health,0)<15;
      if(insufficient||categoryGate||healthGate){
        r.misses++;
        const why=insufficient?STAT_NAMES[g.stat]+' 경험이 더 필요해.':categoryGate?'다른 사람과 함께할 인간관계 경험이 더 필요해.':'회복을 위해 충분한 휴식이 필요해.';
        outcome=why+' 오늘은 준비하면서 다음에 다시 도전하기로 했어.';
      }else{
        progress=true;
        r.stage++;
        outcome=success+' '+(r.stage>=length?'마지막 장면이 완성됐어!':'다음 장면을 준비할 수 있게 됐어.');
      }
      state.stats[g.stat]=Math.min(100,Math.max(0,skillOf(g))+1);
      if(index===1)state.stats.social=Math.min(100,number(state.stats.social,0)+1);
    }
    r.notes.push(outcome);
    r.notes=r.notes.slice(-4);
    record(title,intro,label,outcome);
    if(progress&&r.stage>=length){
      state.taebinGoalsDone.push(id);
      state.taebinGoalHistory.push({id,age:state.age,day:state.day,attempts:r.attempts,difficulty:goalTier(g)});
      state.stats.happiness=Math.min(100,number(state.stats.happiness,50)+3);
      state.stats[g.stat]=Math.min(100,skillOf(g)+2);
      record('🏆 목표 달성 · '+g.name, '한태빈이 여러 날 동안 준비하고 성장해 여기까지 왔어.',label,'100칸 꿈 수첩의 별 '+count()+'/100개가 빛나기 시작했어.');
      state.lastOutcome='🌟 '+g.name+' 완수! 달성 '+count()+'/100';
      ensure();
    }
    saveAndDraw();
    questPanel(id);
    showToast(progress?(r.stage>=length?'🎉 '+g.name+' 목표 완수!':'📖 스토리 진행 '+r.stage+'/'+length):'실패했어. 다음 날 실력을 보완해 재도전할 수 있어.');
  }
  window.taebinGoalOpen=questPanel;
  window.taebinGoalDo=begin;
  window.taebinGoalChoose=choose;
  window.taebinGoalBack=renderModal;
  window.taebinGoalFilter=filter=>{activeFilter=filter;renderModal();};
  window.taebinGoalTick=updateProgress;
  window.renderTaebinGoalModal=renderModal;
  window.taebinGoalCount=count;
  window.taebinGoals=GOALS;
  window.taebinGoalSteps=g=>goalSteps(g).length;

})();
