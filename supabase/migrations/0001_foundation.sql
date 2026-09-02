create extension if not exists pgcrypto;

create type public.app_role as enum ('admin','editor','coach','user');
create type public.content_state as enum ('draft','review','published','archived');
create type public.booking_state as enum ('requested','confirmed','completed','cancelled');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '', avatar_url text, bio text,
  occupation text, industry text, weekly_minutes int not null default 60,
  first_touch jsonb not null default '{}', last_touch jsonb not null default '{}',
  privacy_settings jsonb not null default '{}', notification_settings jsonb not null default '{}',
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), deleted_at timestamptz
);
create table public.user_roles (user_id uuid references public.profiles(id) on delete cascade, role app_role not null default 'user', primary key(user_id,role));
create table public.tags (id uuid primary key default gen_random_uuid(), name text unique not null, slug text unique not null, created_at timestamptz default now());
create table public.content_status (id uuid primary key default gen_random_uuid(), entity_type text not null, entity_id uuid not null, status content_state not null default 'draft', reviewer_id uuid references public.profiles(id), notes text, updated_at timestamptz default now(), unique(entity_type,entity_id));
create table public.publication_schedule (id uuid primary key default gen_random_uuid(), entity_type text not null, entity_id uuid not null, publish_at timestamptz not null, completed_at timestamptz, created_at timestamptz default now());

create table public.lessons (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, subtitle text, category text not null, difficulty text not null, duration_minutes int not null default 10, objectives jsonb default '[]', prerequisites jsonb default '[]', seo jsonb default '{}', status content_state default 'draft', author_id uuid references public.profiles(id), published_at timestamptz, created_at timestamptz default now(), updated_at timestamptz default now(), deleted_at timestamptz);
create table public.lesson_sections (id uuid primary key default gen_random_uuid(), lesson_id uuid not null references public.lessons(id) on delete cascade, section_type text not null, position int not null, content jsonb not null default '{}', created_at timestamptz default now(), unique(lesson_id,position));
create table public.lesson_progress (user_id uuid references public.profiles(id) on delete cascade, lesson_id uuid references public.lessons(id) on delete cascade, progress int check(progress between 0 and 100), completed_at timestamptz, updated_at timestamptz default now(), primary key(user_id,lesson_id));
create table public.lesson_notes (id uuid primary key default gen_random_uuid(), user_id uuid references public.profiles(id) on delete cascade, lesson_id uuid references public.lessons(id) on delete cascade, section_id uuid references public.lesson_sections(id) on delete set null, body text not null, highlight jsonb, created_at timestamptz default now(), updated_at timestamptz default now(), deleted_at timestamptz);
create table public.lesson_saves (user_id uuid references public.profiles(id) on delete cascade, lesson_id uuid references public.lessons(id) on delete cascade, created_at timestamptz default now(), primary key(user_id,lesson_id));
create table public.quizzes (id uuid primary key default gen_random_uuid(), lesson_id uuid references public.lessons(id) on delete cascade, title text not null, passing_score int default 70);
create table public.quiz_questions (id uuid primary key default gen_random_uuid(), quiz_id uuid references public.quizzes(id) on delete cascade, position int not null, prompt text not null, choices jsonb not null, correct_answer jsonb not null, explanation text);
create table public.quiz_results (id uuid primary key default gen_random_uuid(), quiz_id uuid references public.quizzes(id), user_id uuid references public.profiles(id), score int not null, answers jsonb not null, created_at timestamptz default now());

create table public.labs (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, description text, config jsonb not null default '{}', status content_state default 'draft', created_at timestamptz default now());
create table public.lab_sessions (id uuid primary key default gen_random_uuid(), lab_id uuid references public.labs(id), user_id uuid references public.profiles(id), state jsonb default '{}', completed_at timestamptz, created_at timestamptz default now());
create table public.projects (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, scenario text, difficulty text, estimated_minutes int, tools jsonb default '[]', skills jsonb default '[]', status content_state default 'draft', created_at timestamptz default now(), updated_at timestamptz default now(), deleted_at timestamptz);
create table public.project_steps (id uuid primary key default gen_random_uuid(), project_id uuid references public.projects(id) on delete cascade, position int not null, title text not null, content jsonb default '{}', unique(project_id,position));
create table public.project_progress (user_id uuid references public.profiles(id), project_id uuid references public.projects(id), completed_steps jsonb default '[]', completed_at timestamptz, updated_at timestamptz default now(), primary key(user_id,project_id));
create table public.project_results (id uuid primary key default gen_random_uuid(), user_id uuid references public.profiles(id), project_id uuid references public.projects(id), title text, result jsonb not null default '{}', reflection text, created_at timestamptz default now());

create table public.sources (id uuid primary key default gen_random_uuid(), title text not null, publisher text, url text not null, publication_date date, retrieval_date date default current_date, region text, source_type text, credibility text, is_primary boolean default false, created_at timestamptz default now());
create table public.news (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, summary text, body jsonb default '[]', region text, category text, event_date date, publication_date date, last_verified_at timestamptz, confidence text, status content_state default 'draft', seo jsonb default '{}', created_at timestamptz default now(), updated_at timestamptz default now(), deleted_at timestamptz);
create table public.news_sources (news_id uuid references public.news(id) on delete cascade, source_id uuid references public.sources(id), note text, primary key(news_id,source_id));
create table public.industries (id uuid primary key default gen_random_uuid(), slug text unique not null, name text unique not null, description text, created_at timestamptz default now());
create table public.industry_content (industry_id uuid references public.industries(id) on delete cascade, entity_type text not null, entity_id uuid not null, position int default 0, primary key(industry_id,entity_type,entity_id));
create table public.companies (id uuid primary key default gen_random_uuid(), slug text unique not null, name text not null, region text, description text, website text, metadata jsonb default '{}');
create table public.models (id uuid primary key default gen_random_uuid(), slug text unique not null, name text not null, company_id uuid references public.companies(id), capabilities jsonb default '[]', limitations jsonb default '[]', released_at date, metadata jsonb default '{}');
create table public.ai_tools (id uuid primary key default gen_random_uuid(), slug text unique not null, name text not null, company_id uuid references public.companies(id), category text, region text, pricing text, free_tier boolean, china_availability text, chinese_support boolean, platforms jsonb default '[]', capabilities jsonb default '[]', limitations jsonb default '[]', ideal_user text, last_reviewed_at date, status content_state default 'draft');
create table public.tool_reviews (id uuid primary key default gen_random_uuid(), tool_id uuid references public.ai_tools(id), author_id uuid references public.profiles(id), verdict text, content jsonb default '[]', reviewed_at date default current_date);

create table public.learning_paths (id uuid primary key default gen_random_uuid(), user_id uuid references public.profiles(id), name text not null, mode text not null, rationale text, created_at timestamptz default now());
create table public.learning_path_items (path_id uuid references public.learning_paths(id) on delete cascade, position int not null, entity_type text not null, entity_id uuid not null, completed_at timestamptz, primary key(path_id,position));
create table public.capability_dimensions (id uuid primary key default gen_random_uuid(), slug text unique not null, name text not null, description text);
create table public.capability_scores (user_id uuid references public.profiles(id), dimension_id uuid references public.capability_dimensions(id), score numeric(5,2) check(score between 0 and 100), evidence jsonb default '[]', measured_at timestamptz default now(), primary key(user_id,dimension_id,measured_at));
create table public.assessment_questions (id uuid primary key default gen_random_uuid(), dimension_id uuid references public.capability_dimensions(id), prompt text not null, choices jsonb not null, active boolean default true);
create table public.assessment_results (id uuid primary key default gen_random_uuid(), user_id uuid references public.profiles(id), answers jsonb not null, scores jsonb not null, level text, created_at timestamptz default now());
create table public.saved_content (user_id uuid references public.profiles(id), entity_type text not null, entity_id uuid not null, created_at timestamptz default now(), primary key(user_id,entity_type,entity_id));
create table public.user_interests (user_id uuid references public.profiles(id), interest_type text not null, interest_id text not null, weight numeric default 1, primary key(user_id,interest_type,interest_id));
create table public.user_notifications (id uuid primary key default gen_random_uuid(), user_id uuid references public.profiles(id), type text not null, title text not null, body text, action_url text, read_at timestamptz, created_at timestamptz default now());

create table public.coaches (id uuid primary key references public.profiles(id), headline text, specialties jsonb default '[]', active boolean default true);
create table public.coaching_services (id uuid primary key default gen_random_uuid(), name text not null, duration_minutes int, price_cents int, description text, active boolean default true);
create table public.coach_availability (id uuid primary key default gen_random_uuid(), coach_id uuid references public.coaches(id), starts_at timestamptz, ends_at timestamptz, reserved boolean default false);
create table public.bookings (id uuid primary key default gen_random_uuid(), user_id uuid references public.profiles(id), coach_id uuid references public.coaches(id), service_id uuid references public.coaching_services(id), availability_id uuid references public.coach_availability(id), problem text not null, status booking_state default 'requested', payment_status text default 'pending', created_at timestamptz default now(), updated_at timestamptz default now());
create table public.coaching_sessions (id uuid primary key default gen_random_uuid(), booking_id uuid unique references public.bookings(id), meeting_url text, summary text, started_at timestamptz, ended_at timestamptz);
create table public.coaching_notes (id uuid primary key default gen_random_uuid(), session_id uuid references public.coaching_sessions(id), author_id uuid references public.profiles(id), visibility text check(visibility in ('coach','user','shared')), body text not null, created_at timestamptz default now());
create table public.coaching_tasks (id uuid primary key default gen_random_uuid(), session_id uuid references public.coaching_sessions(id), assignee_id uuid references public.profiles(id), title text not null, due_at timestamptz, completed_at timestamptz);
create table public.payments (id uuid primary key default gen_random_uuid(), booking_id uuid references public.bookings(id), provider text, external_id text, amount_cents int, currency text default 'CNY', status text, created_at timestamptz default now());

create table public.analytics_events (id bigint generated always as identity primary key, anonymous_id text, user_id uuid references public.profiles(id), event_name text not null, properties jsonb default '{}', source text, campaign text, occurred_at timestamptz default now());
create table public.search_queries (id bigint generated always as identity primary key, user_id uuid references public.profiles(id), query text not null, filters jsonb default '{}', result_count int, created_at timestamptz default now());
create table public.content_feedback (id uuid primary key default gen_random_uuid(), user_id uuid references public.profiles(id), entity_type text, entity_id uuid, usefulness int check(usefulness between 1 and 5), comment text, created_at timestamptz default now());
create table public.content_tags (tag_id uuid references public.tags(id), entity_type text, entity_id uuid, primary key(tag_id,entity_type,entity_id));
create table public.admin_activity (id bigint generated always as identity primary key, admin_id uuid references public.profiles(id), action text not null, entity_type text, entity_id uuid, metadata jsonb default '{}', created_at timestamptz default now());

create index lesson_category_idx on public.lessons(category,status);
create index news_region_date_idx on public.news(region,publication_date desc) where deleted_at is null;
create index analytics_event_time_idx on public.analytics_events(event_name,occurred_at desc);
create index booking_user_idx on public.bookings(user_id,created_at desc);
create index saved_content_user_idx on public.saved_content(user_id,created_at desc);
create index search_query_idx on public.search_queries using gin(to_tsvector('simple',query));

alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.lesson_notes enable row level security;
alter table public.project_progress enable row level security;
alter table public.bookings enable row level security;
create policy "profile self read" on public.profiles for select using (auth.uid()=id);
create policy "profile self update" on public.profiles for update using (auth.uid()=id);
create policy "progress self" on public.lesson_progress for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "notes self" on public.lesson_notes for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "projects self" on public.project_progress for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "bookings self read" on public.bookings for select using (auth.uid()=user_id);
create policy "bookings self create" on public.bookings for insert with check (auth.uid()=user_id);
