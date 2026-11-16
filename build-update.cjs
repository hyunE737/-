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
const notes=['모바일 글자·선택지·하단 메뉴와 체력 관리 화면 개선','하루 쉬기 체력 회복 +12','네 집안별 어린 시절부터 노년까지 이어지는 인생 스토리','이전 스토리 선택과 가족 지원 상태가 다음 이야기에 반영','네 집안 시작 자금 표시 · 재벌집 500,000원',subject];
const manifest={version:'1.0.16',buildId,deployedAt:now,commit:commit||null,notes};
fs.writeFileSync('nuri-update.json',JSON.stringify(manifest,null,2)+'\n','utf8');
const filename='index.html';
const html=fs.readFileSync(filename,'utf8');
const tag='<meta name="nuri-live-deploy" content="'+buildId.replace(/[^a-zA-Z0-9_-]/g,'')+'">';
const fixed=html.replace(/<meta name="nuri-live-deploy" content="[^"]*">/g,'')
                .replace('</head>',tag+'\n</head>');
if(!fixed.includes(tag))throw new Error('배포 빌드 태그 생성에 실패했어.');
fs.writeFileSync(filename,fixed,'utf8');
console.log('[누리 키우기] 배포 정보 생성:',buildId.slice(0,12),now);
