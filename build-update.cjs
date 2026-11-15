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
const notes=['프롤로그: 로그인 후 횡단보도에서 4가지 선택 → 가족 선택 → 본게임 시작','프롤로그 다시 보기 및 가족 선택 화면 바로가기 추가','건강 위험도·체력·순자산 등 흐린 글자 대비 개선','게임 메뉴 내 업데이트 현황 및 새 버전 알림',subject];
const manifest={version:'1.0.12',buildId,deployedAt:now,commit:commit||null,notes};
fs.writeFileSync('nuri-update.json',JSON.stringify(manifest,null,2)+'\n','utf8');
const filename='index.html';
const html=fs.readFileSync(filename,'utf8');
const tag='<meta name="nuri-live-deploy" content="'+buildId.replace(/[^a-zA-Z0-9_-]/g,'')+'">';
const fixed=html.replace(/<meta name="nuri-live-deploy" content="[^"]*">/g,'')
                .replace('</head>',tag+'\n</head>');
if(!fixed.includes(tag))throw new Error('배포 빌드 태그 생성에 실패했어.');
fs.writeFileSync(filename,fixed,'utf8');
console.log('[누리 키우기] 배포 정보 생성:',buildId.slice(0,12),now);
