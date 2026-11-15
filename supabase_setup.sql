-- NURI LIFE: Supabase SQL Editor에서 실행
-- 실행 전에 반드시 Supabase Auth 이메일 가입 기능을 설정하세요.
-- public 키를 사용해도 저장 내용은 각 회원만 볼 수 있도록 RLS로 보호합니다.
create table if not exists public.nuri_saves (
 user_id uuid primary key references auth.users(id) on delete cascade,
 save_data jsonb not null default '{}'::jsonb,
 updated_at timestamptz not null default now()
);
alter table public.nuri_saves enable row level security;
revoke all on table public.nuri_saves from anon;
grant select, insert, update on table public.nuri_saves to authenticated;

drop policy if exists "nuri_select_own_save" on public.nuri_saves;
create policy "nuri_select_own_save" on public.nuri_saves
 for select to authenticated using ((select auth.uid()) = user_id);

drop policy if exists "nuri_insert_own_save" on public.nuri_saves;
create policy "nuri_insert_own_save" on public.nuri_saves
 for insert to authenticated with check ((select auth.uid()) = user_id);

drop policy if exists "nuri_update_own_save" on public.nuri_saves;
create policy "nuri_update_own_save" on public.nuri_saves
 for update to authenticated
 using ((select auth.uid()) = user_id)
 with check ((select auth.uid()) = user_id);
