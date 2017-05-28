CREATE TABLE IF NOT EXISTS adcopies_report
(
  id VARCHAR,
  created TIMESTAMP WITH TIME ZONE,
  status VARCHAR,
  label VARCHAR,
  filename VARCHAR,
  error VARCHAR
);
