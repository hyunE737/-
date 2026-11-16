/* Netlify 배포 시 실행. 현재 Git 커밋과 배포 시각을 정적 JSON과 HTML에 기록 */
'use strict';
const fs=require('node:fs');
const child=require('node:child_process');
const commit=(process.env.COMMIT_REF||'').trim();
const buildId=commit||process.env.BUILD_ID||'local-'+Date.now();
const now=new Date().toISOString();
let subject='게임 안정화 및 UI 개선';
try {
 const str=child.execFileSync('git',['log','-1','--pretty=%s'],{encoding:'utf8',timeout:3500}).trim();
 if(str)subject=str.slice(0,160);
}catch(e){/* git metadata unavailable in local builds */}
const notes=['탈것 7종 구매·이용·판매 및 차고 추가','자격증 6종과 게임 전용 비트코인 거래 추가','하린과의 연애 이야기와 공개 랭킹 추가','설정 제목 글자 대비 개선','이어서 플레이할 때 선택지가 사라지는 오류 수정','연애 화면 가독성 개선 · 인물 이름과 하린 설정 정리','개인 인생 랭킹과 현금 입출금 통장 추가','창업 8가지 · 직원 감원 기능 추가','가상 SNS 누리스타와 주변 인물 6명의 이야기 추가','가상 주식 6종 추가 · 상승 빨강, 하락 파랑, 보합 회색 표시','특별 이벤트 사진첩에 새 사진 7장 추가','시작 화면에 게임 소개와 플레이 방법 추가','모바일 글자·선택지·하단 메뉴와 체력 관리 화면 개선','하루 쉬기 체력 회복 +12','네 집안별 어린 시절부터 노년까지 이어지는 인생 스토리','이전 스토리 선택과 가족 지원 상태가 다음 이야기에 반영','네 집안 시작 자금 표시 · 재벌집 500,000원',subject];
const manifest={version:'1.0.22',buildId,deployedAt:now,commit:commit||null,notes};
fs.writeFileSync('nuri-update.json',JSON.stringify(manifest,null,2)+'\n','utf8');
const filename='index.html';
const html=fs.readFileSync(filename,'utf8');
const tag='<meta name="nuri-live-deploy" content="'+buildId.replace(/[^a-zA-Z0-9_-]/g,'')+'">';
const fixed=html.replace(/<meta name="nuri-live-deploy" content="[^"]*">/g,'')
                .replace('</head>',tag+'\n</head>');
if(!fixed.includes(tag))throw new Error('배포 빌드 태그 생성에 실패했어.');
fs.writeFileSync(filename,fixed,'utf8');
console.log('[누리 키우기] 배포 정보 생성:',buildId.slice(0,12),now);
