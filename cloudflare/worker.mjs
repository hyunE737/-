import { makeRankingHandler } from './ranking.mjs';

const schema=[
 'CREATE TABLE IF NOT EXISTS board (name TEXT PRIMARY KEY, data TEXT NOT NULL, revision INTEGER NOT NULL)',
 'CREATE TABLE IF NOT EXISTS feedback (id INTEGER PRIMARY KEY, form TEXT NOT NULL, title TEXT NOT NULL, message TEXT NOT NULL, game_context TEXT NOT NULL, submitted_at TEXT NOT NULL)'
];
let initialization;
function ensureStorage(db){
 if(!initialization){
  initialization=db.batch(schema.map(sql=>db.prepare(sql))).catch(error=>{
   initialization=null;
   throw error;
  });
 }
 return initialization;
}
function rankStore(db){
 return {
  async getWithMetadata(name){
   const row=await db.prepare('SELECT data, revision FROM board WHERE name=?').bind(name).first();
   return row?{data:JSON.parse(row.data),etag:row.revision}:null;
  },
  async setJSON(name,board,condition){
   const data=JSON.stringify(board);
   const query=condition.onlyIfNew
    ?db.prepare('INSERT INTO board (name,data,revision) VALUES (?,?,1) ON CONFLICT(name) DO NOTHING').bind(name,data)
    :db.prepare('UPDATE board SET data=?, revision=revision+1 WHERE name=? AND revision=?').bind(data,name,condition.onlyIfMatch);
   const result=await query.run();
   return {modified:result.meta.changes===1};
  }
 };
}
function feedbackError(text,status){
 return new Response(`<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>누리 키우기 건의함</title><body><p>${text}</p><a href="/#feedback">건의함으로 돌아가기</a></body></html>`,
  {status,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
}
async function feedback(request,db){
 const origin=request.headers.get('origin');
 if(origin&&origin!==new URL(request.url).origin)return feedbackError('게임 페이지에서 다시 보내 주세요.',403);
 if(!request.headers.get('content-type')?.startsWith('application/x-www-form-urlencoded'))return feedbackError('입력한 내용을 확인해 주세요.',415);
 if(Number(request.headers.get('content-length'))>24000)return feedbackError('작성한 내용이 너무 길어요.',413);
 const raw=await request.text();
 if(raw.length>24000)return feedbackError('작성한 내용이 너무 길어요.',413);
 const data=new URLSearchParams(raw);
 const name=data.get('form-name');
 const isSuggestion=name==='nuri-suggestion';
 if(!isSuggestion&&name!=='nuri-bug-report')return feedbackError('양식을 확인하고 다시 보내 주세요.',400);
 const prefix=isSuggestion?'suggestion':'bug';
 const success=()=>new Response(null,{status:303,headers:{Location:'/thanks.html','Cache-Control':'no-store'}});
 if(data.get(prefix+'-bot-field'))return success();
 const title=(data.get(isSuggestion?'suggestion-title':'bug-category')||'').trim();
 const message=(data.get(prefix+'-message')||'').trim();
 const context=(data.get('game-context')||'게임 시작 전').slice(0,180);
 if(!title||title.length>90||!message||message.length>1800)return feedbackError('제목과 내용을 확인하고 다시 보내 주세요.',400);
 await ensureStorage(db);
 await db.prepare('INSERT INTO feedback (form,title,message,game_context,submitted_at) VALUES (?,?,?,?,?)')
  .bind(name,title,message,context,new Date().toISOString()).run();
 return success();
}

export default {
 async fetch(request,env){
  const url=new URL(request.url);
  const ranking=['/.netlify/functions/ranking','/api/ranking'].includes(url.pathname);
  const submitting=url.pathname==='/thanks'&&request.method==='POST';
  try{
   if(ranking){
    await ensureStorage(env.DB);
    return makeRankingHandler(()=>rankStore(env.DB))(request);
   }
   if(submitting)return await feedback(request,env.DB);
   const asset=await env.ASSETS.fetch(request);
   if(url.pathname!=='/nuri-update.json')return asset;
   const headers=new Headers(asset.headers);
   headers.set('Cache-Control','no-store, max-age=0, must-revalidate');
   return new Response(asset.body,{status:asset.status,headers});
  }catch(error){
   console.error('[nuri] server request failed',error?.name);
   if(ranking)return Response.json({error:'공개 랭킹에 잠시 연결할 수 없어.'},{status:503});
   if(submitting)return feedbackError('건의함에 연결할 수 없어요. 잠시 뒤 다시 보내 주세요.',503);
   return new Response('게임 파일을 불러올 수 없어요.',{status:503});
  }
 }
};
