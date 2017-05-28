SET client_encoding = 'UTF8';



CREATE SEQUENCE audience_task_id_seq;
CREATE SEQUENCE items_id_seq;
CREATE SEQUENCE modification_id_seq;
CREATE SEQUENCE process_log_id_seq;
CREATE SEQUENCE shipping_id_seq;
CREATE SEQUENCE store_id_seq;

CREATE TABLE audience_task
(
  url_address VARCHAR(255),
  spread_sheets_key VARCHAR(50),
  created_date TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50),
  error VARCHAR(5000),
  modified VARCHAR,
  id INTEGER DEFAULT nextval('audience_task_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE extend_rest
(
  url_name VARCHAR NOT NULL,
  url_status VARCHAR NOT NULL
);
CREATE TABLE ftp_settings
(
  ftp_server VARCHAR NOT NULL,
  ftp_port VARCHAR NOT NULL,
  ftp_login VARCHAR NOT NULL,
  ftp_password VARCHAR NOT NULL,
  remote_file VARCHAR NOT NULL
);
CREATE TABLE shipping
(
  country VARCHAR NOT NULL,
  service VARCHAR NOT NULL,
  coast VARCHAR NOT NULL,
  id BIGINT DEFAULT nextval('shipping_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE store
(
  name VARCHAR,
  store_index BIGINT,
  id BIGINT DEFAULT nextval('store_id_seq'::regclass) PRIMARY KEY NOT NULL
);
CREATE TABLE item
(
  item_id VARCHAR,
  title VARCHAR,
  description VARCHAR,
  google_product_category VARCHAR,
  product_type VARCHAR,
  category VARCHAR,
  sub_sub_category VARCHAR,
  category_url VARCHAR,
  category_and_brand_url VARCHAR,
  sub_category_and_brand_url VARCHAR,
  link VARCHAR,
  mobile_link VARCHAR,
  image_link VARCHAR,
  additional_image_link VARCHAR,
  condition VARCHAR,
  availability VARCHAR,
  price VARCHAR,
  sale_price VARCHAR,
  sale_price_effective_date VARCHAR,
  mpn VARCHAR,
  brand VARCHAR,
  item_group_id BIGINT,
  color VARCHAR,
  gender VARCHAR,
  age_group VARCHAR,
  material VARCHAR,
  size VARCHAR,
  size_type VARCHAR,
  delivery_label VARCHAR,
  is_adult BOOLEAN,
  adwords_redirect VARCHAR,
  custom_label_0 VARCHAR,
  custom_label_1 VARCHAR,
  custom_label_2 VARCHAR,
  custom_label_3 VARCHAR,
  custom_label_4 VARCHAR,
  gtin BIGINT,
  store_id BIGINT NOT NULL,
  shipping_id BIGINT NOT NULL,
  id BIGINT DEFAULT nextval('items_id_seq'::regclass) PRIMARY KEY NOT NULL,
  product_id BIGINT,
  CONSTRAINT items_store_id_fkey FOREIGN KEY (store_id) REFERENCES store (id),
  CONSTRAINT items_shipping_id_fkey FOREIGN KEY (shipping_id) REFERENCES shipping (id)
);
CREATE INDEX item_item_group_id_idx ON item (item_group_id);
CREATE INDEX item_product_id_idx ON item (product_id);
CREATE TABLE mail_properties
(
  smtp_host VARCHAR,
  smtp_port INTEGER,
  mail_login VARCHAR,
  mail_password VARCHAR,
  feed_dashboard_report_mail VARCHAR,
  msg_header VARCHAR,
  msg_text VARCHAR,
  limited_by_budget_report_mail VARCHAR,
  report_schedule_period VARCHAR,
  dashboard_schedule_period VARCHAR
);
CREATE TABLE modification
(
  id BIGINT DEFAULT nextval('modification_id_seq'::regclass) NOT NULL,
  file_name VARCHAR NOT NULL,
  week INTEGER NOT NULL,
  modification BIGINT NOT NULL
);
CREATE INDEX modification_id_idx ON modification (id);
CREATE TABLE new_item
(
  item_id VARCHAR,
  title VARCHAR,
  description VARCHAR,
  google_product_category VARCHAR,
  product_type VARCHAR,
  category VARCHAR,
  sub_sub_category VARCHAR,
  category_url VARCHAR,
  category_and_brand_url VARCHAR,
  sub_category_and_brand_url VARCHAR,
  link VARCHAR,
  mobile_link VARCHAR,
  image_link VARCHAR,
  additional_image_link VARCHAR,
  condition VARCHAR,
  availability VARCHAR,
  price VARCHAR,
  sale_price VARCHAR,
  sale_price_effective_date VARCHAR,
  mpn VARCHAR,
  brand VARCHAR,
  item_group_id BIGINT,
  color VARCHAR,
  gender VARCHAR,
  age_group VARCHAR,
  material VARCHAR,
  size VARCHAR,
  size_type VARCHAR,
  delivery_label VARCHAR,
  is_adult BOOLEAN,
  adwords_redirect VARCHAR,
  custom_label_0 VARCHAR,
  custom_label_1 VARCHAR,
  custom_label_2 VARCHAR,
  custom_label_3 VARCHAR,
  custom_label_4 VARCHAR,
  gtin BIGINT,
  store_id BIGINT NOT NULL,
  shipping_id BIGINT NOT NULL,
  id BIGINT DEFAULT nextval('items_id_seq'::regclass) PRIMARY KEY NOT NULL,
  product_id BIGINT,
  CONSTRAINT "Stor" FOREIGN KEY (store_id) REFERENCES store (id),
  CONSTRAINT "Shipp" FOREIGN KEY (shipping_id) REFERENCES shipping (id)
);
CREATE INDEX new_item_title_idx ON new_item (title);
CREATE INDEX new_item_description_idx ON new_item (description);
CREATE INDEX new_item_link_idx ON new_item (link);
CREATE INDEX new_item_mobile_link_idx ON new_item (mobile_link);
CREATE INDEX new_item_image_link_idx ON new_item (image_link);
CREATE INDEX new_item_additional_image_link_idx ON new_item (additional_image_link);
CREATE INDEX new_item_item_group_id_idx ON new_item (item_group_id);
CREATE INDEX new_item_adwords_redirect_idx ON new_item (adwords_redirect);
CREATE INDEX "fki_Stor" ON new_item (store_id);
CREATE INDEX "fki_Shipp" ON new_item (shipping_id);
CREATE INDEX new_item_product_id_idx ON new_item (product_id);
CREATE TABLE one_size_item
(
  item_id VARCHAR,
  title VARCHAR,
  description VARCHAR,
  google_product_category VARCHAR,
  product_type VARCHAR,
  category VARCHAR,
  sub_sub_category VARCHAR,
  category_url VARCHAR,
  category_and_brand_url VARCHAR,
  sub_category_and_brand_url VARCHAR,
  link VARCHAR,
  mobile_link VARCHAR,
  image_link VARCHAR,
  additional_image_link VARCHAR,
  condition VARCHAR,
  availability VARCHAR,
  price VARCHAR,
  sale_price VARCHAR,
  sale_price_effective_date VARCHAR,
  mpn VARCHAR,
  brand VARCHAR,
  item_group_id BIGINT,
  color VARCHAR,
  gender VARCHAR,
  age_group VARCHAR,
  material VARCHAR,
  size VARCHAR,
  size_type VARCHAR,
  delivery_label VARCHAR,
  is_adult BOOLEAN,
  adwords_redirect VARCHAR,
  custom_label_0 VARCHAR,
  custom_label_1 VARCHAR,
  custom_label_2 VARCHAR,
  custom_label_3 VARCHAR,
  custom_label_4 VARCHAR,
  gtin BIGINT,
  store_id BIGINT NOT NULL,
  shipping_id BIGINT NOT NULL,
  id BIGINT DEFAULT nextval('items_id_seq'::regclass) PRIMARY KEY NOT NULL,
  product_id BIGINT,
  CONSTRAINT "St" FOREIGN KEY (store_id) REFERENCES store (id),
  CONSTRAINT "Sh" FOREIGN KEY (shipping_id) REFERENCES shipping (id)
);
CREATE INDEX one_size_item_title_idx ON one_size_item (title);
CREATE INDEX one_size_item_description_idx ON one_size_item (description);
CREATE INDEX one_size_item_link_idx ON one_size_item (link);
CREATE INDEX one_size_item_mobile_link_idx ON one_size_item (mobile_link);
CREATE INDEX one_size_item_image_link_idx ON one_size_item (image_link);
CREATE INDEX one_size_item_additional_image_link_idx ON one_size_item (additional_image_link);
CREATE INDEX one_size_item_item_group_id_idx ON one_size_item (item_group_id);
CREATE INDEX one_size_item_adwords_redirect_idx ON one_size_item (adwords_redirect);
CREATE INDEX "fki_St" ON one_size_item (store_id);
CREATE INDEX "fki_Sh" ON one_size_item (shipping_id);
CREATE INDEX one_size_item_product_id_idx ON one_size_item (product_id);
CREATE TABLE one_unit_item
(
  item_id VARCHAR,
  title VARCHAR,
  description VARCHAR,
  google_product_category VARCHAR,
  product_type VARCHAR,
  category VARCHAR,
  sub_sub_category VARCHAR,
  category_url VARCHAR,
  category_and_brand_url VARCHAR,
  sub_category_and_brand_url VARCHAR,
  link VARCHAR,
  mobile_link VARCHAR,
  image_link VARCHAR,
  additional_image_link VARCHAR,
  condition VARCHAR,
  availability VARCHAR,
  price VARCHAR,
  sale_price VARCHAR,
  sale_price_effective_date VARCHAR,
  mpn VARCHAR,
  brand VARCHAR,
  item_group_id BIGINT,
  color VARCHAR,
  gender VARCHAR,
  age_group VARCHAR,
  material VARCHAR,
  size VARCHAR,
  size_type VARCHAR,
  delivery_label VARCHAR,
  is_adult BOOLEAN,
  adwords_redirect VARCHAR,
  custom_label_0 VARCHAR,
  custom_label_1 VARCHAR,
  custom_label_2 VARCHAR,
  custom_label_3 VARCHAR,
  custom_label_4 VARCHAR,
  gtin BIGINT,
  store_id BIGINT NOT NULL,
  shipping_id BIGINT NOT NULL,
  id BIGINT DEFAULT nextval('items_id_seq'::regclass) PRIMARY KEY NOT NULL,
  product_id BIGINT,
  CONSTRAINT "Sto" FOREIGN KEY (store_id) REFERENCES store (id),
  CONSTRAINT ship FOREIGN KEY (shipping_id) REFERENCES shipping (id)
);
CREATE INDEX one_unit_item_title_idx ON one_unit_item (title);
CREATE INDEX one_unit_item_description_idx ON one_unit_item (description);
CREATE INDEX one_unit_item_link_idx ON one_unit_item (link);
CREATE INDEX one_unit_item_mobile_link_idx ON one_unit_item (mobile_link);
CREATE INDEX one_unit_item_image_link_idx ON one_unit_item (image_link);
CREATE INDEX one_unit_item_additional_image_link_idx ON one_unit_item (additional_image_link);
CREATE INDEX one_unit_item_item_group_id_idx ON one_unit_item (item_group_id);
CREATE INDEX one_unit_item_adwords_redirect_idx ON one_unit_item (adwords_redirect);
CREATE INDEX "fki_Sto" ON one_unit_item (store_id);
CREATE INDEX fki_ship ON one_unit_item (shipping_id);
CREATE INDEX one_unit_item_product_id_idx ON one_unit_item (product_id);
CREATE TABLE process_log
(
  create_date TIMESTAMP WITH TIME ZONE NOT NULL,
  update_date TIMESTAMP WITH TIME ZONE,
  status VARCHAR NOT NULL,
  error VARCHAR,
  id BIGINT DEFAULT nextval('process_log_id_seq'::regclass) PRIMARY KEY NOT NULL,
  client_mail VARCHAR
);
CREATE TABLE product
(
  product_id BIGINT NOT NULL,
  sub_id VARCHAR,
  size VARCHAR NOT NULL,
  week INTEGER
);
CREATE INDEX product_product_id_week_index ON product (week, product_id);
CREATE TABLE product_week
(
  code TEXT,
  week INTEGER,
  product_count BIGINT
);
CREATE TABLE project_properties
(
  xml_filename VARCHAR,
  csv_filename VARCHAR,
  csv_with_immutable_items VARCHAR,
  csv_with_new_items VARCHAR,
  zipfile_for_send VARCHAR,
  directory VARCHAR
);
CREATE TABLE task_report
(
  date_range VARCHAR,
  create_date TIMESTAMP WITH TIME ZONE,
  status VARCHAR,
  filename VARCHAR,
  mail VARCHAR,
  id VARCHAR,
  error VARCHAR
);
CREATE TABLE total_item
(
  item_id VARCHAR,
  title VARCHAR,
  description VARCHAR,
  google_product_category VARCHAR,
  product_type VARCHAR,
  category VARCHAR,
  sub_sub_category VARCHAR,
  category_url VARCHAR,
  category_and_brand_url VARCHAR,
  sub_category_and_brand_url VARCHAR,
  link VARCHAR,
  mobile_link VARCHAR,
  image_link VARCHAR,
  additional_image_link VARCHAR,
  condition VARCHAR,
  availability VARCHAR,
  price VARCHAR,
  sale_price VARCHAR,
  sale_price_effective_date VARCHAR,
  mpn VARCHAR,
  brand VARCHAR,
  item_group_id BIGINT,
  color VARCHAR,
  gender VARCHAR,
  age_group VARCHAR,
  material VARCHAR,
  size VARCHAR,
  size_type VARCHAR,
  delivery_label VARCHAR,
  is_adult BOOLEAN,
  adwords_redirect VARCHAR,
  custom_label_0 VARCHAR,
  custom_label_1 VARCHAR,
  custom_label_2 VARCHAR,
  custom_label_3 VARCHAR,
  custom_label_4 VARCHAR,
  gtin BIGINT,
  store_id BIGINT NOT NULL,
  shipping_id BIGINT NOT NULL,
  id BIGINT DEFAULT nextval('items_id_seq'::regclass) PRIMARY KEY NOT NULL,
  product_id BIGINT,
  CONSTRAINT store FOREIGN KEY (store_id) REFERENCES store (id),
  CONSTRAINT shipping FOREIGN KEY (shipping_id) REFERENCES shipping (id)
);
CREATE INDEX total_item_item_id_idx ON total_item (item_id);
CREATE INDEX total_item_title_idx ON total_item (title);
CREATE INDEX total_item_description_idx ON total_item (description);
CREATE INDEX total_item_link_idx ON total_item (link);
CREATE INDEX total_item_mobile_link_idx ON total_item (mobile_link);
CREATE INDEX total_item_image_link_idx ON total_item (image_link);
CREATE INDEX total_item_additional_image_link_idx ON total_item (additional_image_link);
CREATE INDEX total_item_item_group_id_idx ON total_item (item_group_id);
CREATE INDEX total_item_adwords_redirect_idx ON total_item (adwords_redirect);
CREATE INDEX fki_store ON total_item (store_id);
CREATE INDEX fki_shipping ON total_item (shipping_id);
CREATE INDEX total_item_product_id_idx ON total_item (product_id);
CREATE TABLE user_data
(
  product_id BIGINT NOT NULL,
  task_id VARCHAR NOT NULL
);
CREATE INDEX user_data_product_id_idx ON user_data (product_id);
CREATE INDEX user_data_task_id_idx ON user_data (task_id);
CREATE TABLE user_data_count
(
  task_id VARCHAR NOT NULL,
  data_count INTEGER NOT NULL,
  origine_filename VARCHAR NOT NULL,
  zip_filename VARCHAR,
  date BIGINT NOT NULL,
  status VARCHAR NOT NULL,
  total INTEGER,
  host_address VARCHAR
);
CREATE INDEX user_data_count_task_id_idx ON user_data_count (task_id);

