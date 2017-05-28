CREATE TABLE IF NOT EXISTS account_tasks
(
  account_id BIGINT,
  config JSON,
  date TIMESTAMP WITH TIME ZONE,
  error VARCHAR,
  status VARCHAR
);