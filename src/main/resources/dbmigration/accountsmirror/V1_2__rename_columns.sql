ALTER TABLE account RENAME COLUMN account_adwords_id TO account_exchange_id;
ALTER TABLE account RENAME COLUMN parent_adwords_id TO parent_exchange_id;

ALTER TABLE campaign RENAME COLUMN campaign_adwords_id TO campaign_exchange_id;
ALTER TABLE adgroup RENAME COLUMN adgroup_adwords_id TO adgroup_exchange_id;

ALTER TABLE keyword RENAME COLUMN account_adwords_id TO account_exchange_id;
ALTER TABLE keyword RENAME COLUMN campaign_adwords_id TO campaign_exchange_id;
ALTER TABLE keyword RENAME COLUMN adgroup_adwords_id TO adgroup_exchange_id;
ALTER TABLE keyword RENAME COLUMN keyword_adwords_id TO keyword_exchange_id;

ALTER TABLE temp_account RENAME COLUMN account_adwords_id TO account_exchange_id;
ALTER TABLE temp_account RENAME COLUMN parent_adwords_id TO parent_exchange_id;

ALTER TABLE temp_campaign RENAME COLUMN campaign_adwords_id TO campaign_exchange_id;
ALTER TABLE temp_adgroup RENAME COLUMN adgroup_adwords_id TO adgroup_exchange_id;

ALTER TABLE temp_keyword RENAME COLUMN account_adwords_id TO account_exchange_id;
ALTER TABLE temp_keyword RENAME COLUMN campaign_adwords_id TO campaign_exchange_id;
ALTER TABLE temp_keyword RENAME COLUMN adgroup_adwords_id TO adgroup_exchange_id;
ALTER TABLE temp_keyword RENAME COLUMN keyword_adwords_id TO keyword_exchange_id;

ALTER TABLE sync RENAME COLUMN account_adwords_id TO account_exchange_id;