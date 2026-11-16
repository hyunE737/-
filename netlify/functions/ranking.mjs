import { createHash } from 'node:crypto';
import { getStore } from '@netlify/blobs';

const BOARD='scores';
const MAX_ENTRIES=500;
const MIN_UPDATE_MS=20000;
const response=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});

export function makeRankingHandler(openStore){
 return async function ranking(request){
  const url=new URL(request.url);
  const method=request.method;
  if(!['GET','POST','DELETE'].includes(method))return response({error:'지원하지 않는 요청이야.'},405);
  if(method!=='GET'&&request.headers.has('origin')&&request.headers.get('origin')!==url.origin)
   return response({error:'게임 사이트에서만 기록을 등록할 수 있어.'},403);
  try{
   const store=openStore();
   const read=()=>store.getWithMetadata(BOARD,{type:'json',consistency:'strong'});
   if(method==='GET'){
    const metric=url.searchParams.get('by')==='age'?'age':'wealth';
    const board=(await read())?.data||{};
    const rows=Object.values(board).sort((a,b)=>b[metric]-a[metric]||a.updatedAt-b.updatedAt);
    let rank=0;
    return response({entries:rows.slice(0,50).map(({nickname,age,wealth},i)=>{
     if(!i||rows[i][metric]!==rows[i-1][metric])rank=i+1;
     return {nickname,age,wealth,rank};
    })});
   }
   const token=/^Bearer ([a-f0-9]{64})$/.exec(request.headers.get('authorization')||'')?.[1];
   if(!token)return response({error:'기록 관리 키가 필요해.'},401);
   const hash=createHash('sha256').update(token).digest('hex');
   let entry=null;
   if(method==='POST'){
    if(Number(request.headers.get('content-length'))>1024)return response({error:'등록할 내용이 너무 길어.'},413);
    const text=await request.text();
    if(text.length>1024)return response({error:'등록할 내용이 너무 길어.'},413);
    let data;
    try{data=JSON.parse(text);}catch{return response({error:'등록할 내용을 확인해 줘.'},400);}
    const nickname=typeof data?.nickname==='string'?data.nickname.normalize('NFC').trim():'';
    if(!/^[\p{L}\p{N} _-]{2,16}$/u.test(nickname)||/^\d{6,}$/.test(nickname)||!Number.isInteger(data?.age)||data.age<0||data.age>100||!Number.isSafeInteger(data?.wealth)){
     return response({error:'닉네임은 글자·숫자 2~16자로 입력하고, 게임 기록을 확인해 줘.'},400);
    }
    entry={nickname,age:data.age,wealth:data.wealth,updatedAt:Date.now()};
   }
   for(let attempt=0;attempt<6;attempt++){
    const previous=await read(),board=previous?.data||{};
    const old=board[hash];
    if(entry&&old&&entry.updatedAt-old.updatedAt<MIN_UPDATE_MS)return response({error:'20초 뒤에 기록을 다시 갱신할 수 있어.'},429);
    if(entry&&!old&&Object.keys(board).length>=MAX_ENTRIES)return response({error:'공개 랭킹 등록 한도에 도달했어.'},409);
    if(!entry&&!old)return response({ok:true});
    if(entry)board[hash]=entry;else delete board[hash];
    const saved=await store.setJSON(BOARD,board,previous?{onlyIfMatch:previous.etag}:{onlyIfNew:true});
    if(saved.modified)return response({ok:true});
   }
   return response({error:'잠시 후 다시 시도해 줘.'},409);
  }catch(error){
   console.error('[ranking] storage request failed',error?.name);
   return response({error:'공개 랭킹에 잠시 연결할 수 없어.'},503);
  }
 };
}

export default makeRankingHandler(()=>getStore('nuri-leaderboard'));
