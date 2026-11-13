-- Duo Logo labs: one row per login (name + element + case), so progress follows you between devices.
-- Same design as duovino.sql, and safe to run in the same Supabase project: everything is prefixed
-- duologo_ and touches no other tables.
--
-- How it stays private:
--  * The login itself is never stored. The app sends a SHA-256 hash of it, which is the row's id.
--  * Row level security is on with NO policies, so the table can't be read or listed directly.
--  * The app can only call the two functions below, and only for the hash of a login it knows.
--
-- To set up: Supabase dashboard → SQL Editor → New query → paste this whole file → Run.

create table if not exists public.duologo_labs (
  id          text primary key,              -- sha256 of the login
  name        text not null default '',      -- e.g. "Ella"
  state       jsonb not null default '{}'::jsonb,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.duologo_labs enable row level security;
revoke all on public.duologo_labs from anon, authenticated;

-- Load a lab by its login hash. Returns null if there's no such lab.
create or replace function public.duologo_load(p_id text)
returns jsonb
language sql
security definer
set search_path = public
as $$
  select jsonb_build_object('name', name, 'state', state, 'updated_at', updated_at)
  from public.duologo_labs
  where id = p_id and length(p_id) = 64;
$$;

-- Create or update a lab. p_create = true refuses to overwrite an existing lab.
create or replace function public.duologo_save(p_id text, p_name text, p_state jsonb, p_create boolean default false)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if length(p_id) <> 64 then return false; end if;
  if p_create then
    insert into public.duologo_labs (id, name, state) values (p_id, coalesce(p_name, ''), coalesce(p_state, '{}'::jsonb))
    on conflict (id) do nothing;
    return found;
  end if;
  update public.duologo_labs
     set state = coalesce(p_state, state), name = coalesce(nullif(p_name, ''), name), updated_at = now()
   where id = p_id;
  return found;
end;
$$;

revoke all on function public.duologo_load(text) from public;
revoke all on function public.duologo_save(text, text, jsonb, boolean) from public;
grant execute on function public.duologo_load(text) to anon;
grant execute on function public.duologo_save(text, text, jsonb, boolean) to anon;
