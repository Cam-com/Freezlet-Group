-- Supabase AI is experimental and may produce incorrect answers
-- Always verify the output before executing

create table if not exists
  HSK_3 (
    id bigint primary key generated always as identity,
    "Word" text
  );

select
  "Word"
from
  "HSK_3"
order by
  random()
limit
  1;