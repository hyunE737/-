누리 키우기 v1.0.1 · Supabase 회원 서버 연결본

연결 완료:
- Supabase 프로젝트: nuri-life (서울 리전)
- https://supabase.com/dashboard/project/zurhmrhoslhvzusdkrkp
- DB public.nuri_saves 생성 + RLS 활성화 + 회원 본인 행만 조회/추가/수정
- 비로그인(anon) 테이블 권한 제거
- auth-config.js에 프로젝트 URL + 공개(Publishable) 키 적용
- 게스트 플레이는 기존 로컬 저장, 회원은 계정별 로컬/클라우드 저장

배포 전 해야 할 일:
1. 기존 Netlify 사이트 Deploys에 ZIP 내용 전체를 올리세요.
2. Supabase > Authentication > URL Configuration 에서 Site URL을
   실제 Netlify HTTPS 주소로 바꾸세요. Redirect URLs에도 동일 주소와
   필요한 경로를 등록하세요. 이메일 인증 링크 목적지에 중요합니다.
3. Supabase > Authentication > Providers > Email에서 이메일 가입이
   활성화돼 있는지 확인하세요. 이메일 확인(Confirm email) 사용을 권장합니다.
4. 실제 이메일로 회원가입 -> 수신 메일 확인 -> 로그인 -> 게임 진행 ->
   '내 계정'에서 지금 클라우드 저장 -> 다른 브라우저 로그인으로 이어하기
   단계를 직접 테스트하세요. 실제 계정으로는 아직 테스트하지 않았습니다.
5. Netlify Forms를 쓸 경우 양식 감지를 켠 뒤 재배포하세요.
6. 공개용은 실제 인물 사진 없이 배포되며 기본 사진첩 해금 방식은 유지합니다.

주의: 브라우저의 공개 키는 비밀이 아닙니다. service_role/secret 키를
정적 웹사이트에 넣지 마세요. 실제 사용자 계정 데이터로 인증 테스트는 미완료.
자동 저장은 네트워크 오류 발생 시 실패할 수 있으므로 내 계정의 상태를 확인하세요.
