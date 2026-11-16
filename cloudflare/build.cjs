const fs=require('node:fs');
const path=require('node:path');

const root=path.join(__dirname,'..');
const output=path.join(root,'dist');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const files=new Set(['index.html','thanks.html']);
for(const match of html.matchAll(/(?:src|href)="\.\/([^"?#]+)(?:\?[^"#]+)?"/g)){
 if(/\.(?:js|css)$/.test(match[1]))files.add(match[1]);
}
fs.rmSync(output,{recursive:true,force:true});
fs.mkdirSync(output,{recursive:true});
for(const file of files)fs.copyFileSync(path.join(root,file),path.join(output,file));
fs.cpSync(path.join(root,'assets'),path.join(output,'assets'),{recursive:true});
const page=path.join(output,'index.html');
fs.writeFileSync(page,html.replace('내용은 Netlify 접수함에 저장돼. 운영자가 ChatGPT 연동을 설정하면 새로운 접수를 AI가 요약하거나 분류할 수도 있어.','운영자가 접수함에서 확인할 수 있어.'));
process.chdir(output);
require('../build-update.cjs');
