-- 기업/기관 강의 신청 (/contact) 저장 테이블
create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company text not null check (char_length(company) between 1 and 200),
  headcount text not null check (char_length(headcount) between 1 and 100),
  curriculum text not null check (char_length(curriculum) between 1 and 2000),
  meeting_date date not null,
  custom_material text not null check (char_length(custom_material) between 1 and 500),
  custom_examples text not null check (custom_examples in ('네', '아니오')),
  contact text not null check (char_length(contact) between 1 and 500),
  notified_at timestamptz
);

alter table public.inquiries enable row level security;

-- 방문자는 새 문의 추가만 가능. 조회·수정·삭제 정책은 두지 않는다(대시보드에서만 열람).
create policy "anyone can submit inquiry"
  on public.inquiries for insert
  to anon, authenticated
  with check (notified_at is null);

revoke all on public.inquiries from anon, authenticated;
grant insert (company, headcount, curriculum, meeting_date, custom_material, custom_examples, contact)
  on public.inquiries to anon, authenticated;

-- 새 문의가 들어오면 Edge Function notify-inquiry 호출 (id만 전달, 함수가 직접 다시 조회)
create extension if not exists pg_net with schema extensions;

create or replace function public.notify_new_inquiry()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform net.http_post(
    url := 'https://wjvfomjhdjevvkoudkcn.supabase.co/functions/v1/notify-inquiry',
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := jsonb_build_object('id', new.id)
  );
  return new;
end;
$$;

revoke execute on function public.notify_new_inquiry() from public, anon, authenticated;

create trigger on_inquiry_created
  after insert on public.inquiries
  for each row execute function public.notify_new_inquiry();
