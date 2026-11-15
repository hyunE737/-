누리 키우기 · 회원가입 / 로그인 / 게스트 로그인

1. 이 ZIP을 압축 해제해 전체 폴더를 기존 Netlify 사이트 Deploys에 업로드해 주세요.
   (index.html만 별도 업로드하면 실행되지 않습니다.)
2. 아무 설정 없이도 '게스트로 시작하기'를 누르면 기존 게임을 플레이할 수 있습니다.
   기존 게스트 기록 (nuriSave, nuriLegacyBook)은 보존됩니다.
3. 실제 회원가입/로그인/기기 간 클라우드 저장 기능을 켜려면:
   a) Supabase 프로젝트를 만들고 Authentication > Providers > Email 활성화.
   b) Supabase SQL Editor에 함께 제공된 supabase_setup.sql 실행. RLS가 반드시 켜져 있어야 합니다.
   c) auth-config.js에서 supabaseUrl 과 supabaseAnonKey에 프로젝트 URL과
      publishable/anon 공개 키를 입력하세요. 절대로 service_role / secret key를 넣지 마세요.
   d) Supabase Authentication > URL Configuration에서 Site URL에 Netlify 실제 주소를,
      Redirect URLs에 Netlify 주소를 등록하고, 변경 파일을 전체 다시 배포하세요.
   e) 이메일 확인을 요구한다면 가입 후 이메일 인증 후 로그인해야 합니다.
   f) 도메인 주소에 https를 사용하세요.
4. 계정별 진행 데이터는 nuri_saves 테이블과 각 사용자의 브라우저에 저장됩니다.
   Supabase 이용약관 및 개인정보 처리 필요 사항도 확인하세요.
5. 로그인 없이 들어올 수 있는 '게스트'는 해당 기기의 브라우저에서만 저장됩니다.
   회원 로그인 후 '내 계정 > 게스트 저장을 이 계정으로 복사'에서 이동할 수 있습니다.
6. 실제 회원 계정 서버를 설정하지 않은 상태에서는 회원가입·로그인 버튼이
   설정 안내만 표시합니다. 회원가입이 가능한 것처럼 가장하지 않습니다.

파일: index.html / game.js / account.js / account.css / auth-config.js /
      supabase_setup.sql / assets/* / thanks.html / mobile-check.html

개인 사진 9장: assets 폴더에 원본이 포함됩니다.
공개 웹사이트에 업로드하면 방문자가 정적 이미지 주소로 사진에 접근할 수 있습니다.
