CREATE TABLE account
(
  id                 SERIAL,
  account_adwords_id BIGINT,
  parent_adwords_id  BIGINT,
  status             VARCHAR,
  name               VARCHAR,
  search_engine      VARCHAR,
  channel            VARCHAR,
  region             VARCHAR,
  currency_code      VARCHAR,
  date_time_zone     VARCHAR,
  can_manage_clients BOOL,
  hash               VARCHAR,
  updated            TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE campaign
(
  id                  SERIAL,
  account_id          BIGINT NOT NULL,
  campaign_adwords_id BIGINT NOT NULL,
  status              VARCHAR,
  name                VARCHAR,
  campaign_type       VARCHAR,
  channel             VARCHAR,
  search_engine       VARCHAR,
  region              VARCHAR,
  language            VARCHAR,
  match_type          VARCHAR,
  gender              VARCHAR,
  category            VARCHAR,
  labels              VARCHAR,
  hash                VARCHAR,
  updated             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES account (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE adgroup (
  id                 SERIAL,
  account_id         BIGINT NOT NULL,
  campaign_id        BIGINT NOT NULL,
  adgroup_adwords_id BIGINT NOT NULL,
  status             VARCHAR,
  name               VARCHAR,
  match_type         VARCHAR,
  product_type       VARCHAR,
  serie              VARCHAR,
  designer_name      VARCHAR,
  gender             VARCHAR,
  stock              VARCHAR,
  labels             VARCHAR,
  hash               VARCHAR,
  updated            TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES account (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (campaign_id) REFERENCES campaign (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE keyword (
  id                  SERIAL,
  keyword_adwords_id  BIGINT NOT NULL,
  account_id          BIGINT NOT NULL,
  account_adwords_id  BIGINT NOT NULL,
  campaign_id         BIGINT NOT NULL,
  campaign_adwords_id BIGINT NOT NULL,
  adgroup_id          BIGINT NOT NULL,
  adgroup_adwords_id  BIGINT NOT NULL,
  status              VARCHAR,
  term                VARCHAR,
  match_type          VARCHAR,
  final_url           VARCHAR,
  labels              VARCHAR,
  hash                VARCHAR,
  updated             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES account (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (campaign_id) REFERENCES campaign (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (adgroup_id) REFERENCES adgroup (id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX keyword_hash_index
  ON keyword (hash);
CREATE INDEX keyword_account_adwords_idt_a_campaign_adwords_id_adgroup_adwords_id_keyword_adwords_id_index
  ON keyword (account_adwords_id, campaign_adwords_id, adgroup_adwords_id, keyword_adwords_id);

CREATE TABLE temp_account
(
  id                 SERIAL,
  account_adwords_id BIGINT,
  parent_adwords_id  BIGINT,
  status             VARCHAR,
  name               VARCHAR,
  search_engine      VARCHAR,
  channel            VARCHAR,
  region             VARCHAR,
  currency_code      VARCHAR,
  date_time_zone     VARCHAR,
  can_manage_clients BOOL,
  hash               VARCHAR,
  PRIMARY KEY (id)
);

CREATE TABLE temp_campaign
(
  id                  SERIAL,
  account_id          BIGINT NOT NULL,
  campaign_adwords_id BIGINT NOT NULL,
  status              VARCHAR,
  name                VARCHAR,
  campaign_type       VARCHAR,
  channel             VARCHAR,
  search_engine       VARCHAR,
  region              VARCHAR,
  language            VARCHAR,
  match_type          VARCHAR,
  gender              VARCHAR,
  category            VARCHAR,
  labels              VARCHAR,
  hash                VARCHAR,
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES temp_account (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE temp_adgroup (
  id                 SERIAL,
  account_id         BIGINT NOT NULL,
  campaign_id        BIGINT NOT NULL,
  adgroup_adwords_id BIGINT NOT NULL,
  status             VARCHAR,
  name               VARCHAR,
  match_type         VARCHAR,
  product_type       VARCHAR,
  serie              VARCHAR,
  designer_name      VARCHAR,
  gender             VARCHAR,
  stock              VARCHAR,
  labels             VARCHAR,
  hash               VARCHAR,
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES temp_account (id) ON UPDATE NO ACTION ON DELETE NO ACTION,
  FOREIGN KEY (campaign_id) REFERENCES temp_campaign (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE temp_keyword (
  id                  SERIAL,
  keyword_adwords_id  BIGINT NOT NULL,
  account_id          BIGINT NOT NULL,
  account_adwords_id  BIGINT NOT NULL,
  campaign_id         BIGINT NOT NULL,
  campaign_adwords_id BIGINT NOT NULL,
  adgroup_id          BIGINT NOT NULL,
  adgroup_adwords_id  BIGINT NOT NULL,
  status              VARCHAR,
  term                VARCHAR,
  match_type          VARCHAR,
  final_url           VARCHAR,
  labels              VARCHAR,
  hash                VARCHAR,
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES temp_account (id) ON UPDATE NO ACTION ON DELETE NO ACTION,
  FOREIGN KEY (campaign_id) REFERENCES temp_campaign (id) ON UPDATE NO ACTION ON DELETE NO ACTION,
  FOREIGN KEY (adgroup_id) REFERENCES temp_adgroup (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE sync
(
  id                 SERIAL                   NOT NULL,
  status             CHARACTER VARYING        NOT NULL DEFAULT 'RUNNING',
  start              TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT current_timestamp,
  account_adwords_id BIGINT                   NOT NULL,
  finish             TIMESTAMP WITH TIME ZONE,
  PRIMARY KEY (id)
);

CREATE TABLE errors
(
  id      SERIAL            NOT NULL,
  layer   CHARACTER VARYING NOT NULL,
  text    CHARACTER VARYING NOT NULL,
  sync_id INT               NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (sync_id) REFERENCES sync (id) ON UPDATE CASCADE ON DELETE CASCADE
);