# 누리 키우기 Cloudflare 배포

GitHub에서 이 브랜치를 Cloudflare Workers Builds에 연결할 때 루트 디렉터리는 저장소 루트로, 배포 명령은 `npx wrangler@4.163.0 deploy`로 지정한다. Wrangler가 배포 전에 공개 게임 파일을 `dist/`에 모으고 업데이트 정보를 생성한다. `DB` 바인딩에는 배포 계정의 `nuri-life` D1 데이터베이스를 사용한다.

공개 랭킹은 D1의 `board`에, 건의와 버그 신고는 `feedback`에 저장된다. 접수 내용은 Cloudflare 대시보드의 D1에서 `nuri-life` 데이터베이스를 열어 확인한다. 회원 로그인과 클라우드 저장은 기존 Supabase 프로젝트를 사용한다.

Netlify에서 받은 기존 건의는 소유자의 Forms 내보내기가 필요하다. 공개 랭킹의 관리 키를 계속 사용하려면 Netlify Blobs의 전체 `nuri-leaderboard/scores` 데이터가 필요하다. 공개 랭킹 목록만으로는 갱신·삭제 권한을 복원할 수 없다. 기존 사이트에서 게스트 진행은 브라우저에 저장되므로 주소가 바뀌면 별도로 옮겨야 한다.
