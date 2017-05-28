CREATE TABLE IF NOT EXISTS adcopies_settings
(
  id BIGINT NOT NULL,
  name VARCHAR,
  checked BOOL,
  parent BIGINT,
  can_manage_clients BOOL,
  PRIMARY KEY (id)
);