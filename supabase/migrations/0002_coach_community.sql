create type public.coach_application_state as enum ('draft','submitted','reviewing','interview','approved','rejected','withdrawn');

create table public.coach_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  display_name text not null,
  specialty text not null,
  experience_summary text not null,
  case_study_urls jsonb not null default '[]',
  contact jsonb not null default '{}',
  reviewer_id uuid references public.profiles(id),
  review_notes text,
  status public.coach_application_state not null default 'submitted',
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id)
);

create table public.coach_profiles (
  coach_id uuid primary key references public.coaches(id) on delete cascade,
  slug text unique not null,
  title text not null,
  introduction text,
  industries jsonb not null default '[]',
  skills jsonb not null default '[]',
  verified_cases jsonb not null default '[]',
  session_count int not null default 0,
  rating numeric(2,1),
  accepting_bookings boolean not null default false,
  published_at timestamptz,
  updated_at timestamptz not null default now()
);

create table public.community_groups (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  group_type text not null default 'practice',
  rules jsonb not null default '[]',
  visibility text not null default 'public',
  status public.content_state not null default 'draft',
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.community_members (
  group_id uuid references public.community_groups(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  role text not null default 'member',
  joined_at timestamptz not null default now(),
  muted_at timestamptz,
  primary key(group_id,user_id)
);

create table public.community_posts (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references public.community_groups(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  post_type text not null check(post_type in ('question','progress','review','result')),
  title text not null,
  body jsonb not null default '[]',
  status public.content_state not null default 'published',
  solved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table public.community_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.community_posts(id) on delete cascade,
  author_id uuid references public.profiles(id) on delete cascade,
  parent_id uuid references public.community_comments(id) on delete cascade,
  body text not null,
  is_coach_answer boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table public.community_events (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references public.community_groups(id) on delete set null,
  title text not null,
  description text,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  capacity int,
  host_id uuid references public.profiles(id),
  meeting_url text,
  status text not null default 'scheduled',
  created_at timestamptz not null default now()
);

create table public.community_event_registrations (
  event_id uuid references public.community_events(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  registered_at timestamptz not null default now(),
  attended_at timestamptz,
  primary key(event_id,user_id)
);

create index community_posts_group_date_idx on public.community_posts(group_id,created_at desc) where deleted_at is null;
create index coach_application_status_idx on public.coach_applications(status,submitted_at desc);

alter table public.coach_applications enable row level security;
alter table public.community_members enable row level security;
alter table public.community_posts enable row level security;
alter table public.community_comments enable row level security;

create policy "coach application self" on public.coach_applications for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "community membership self" on public.community_members for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "published community posts readable" on public.community_posts for select using (status='published' and deleted_at is null);
create policy "community post author write" on public.community_posts for all using (auth.uid()=author_id) with check (auth.uid()=author_id);
create policy "community comments readable" on public.community_comments for select using (deleted_at is null);
create policy "community comment author write" on public.community_comments for all using (auth.uid()=author_id) with check (auth.uid()=author_id);
