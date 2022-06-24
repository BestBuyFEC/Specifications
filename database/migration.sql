DROP DATABASE IF EXISTS specs_db;

CREATE DATABASE specs_db;

DROP TABLE IF EXISTS general;
DROP TABLE IF EXISTS warranty;
DROP TABLE IF EXISTS other;

CREATE TABLE general (
    id SERIAL NOT NULL,
    sku INTEGER,
    product_name TEXT,
    brand text,
    num_pieces INTEGER,
    material TEXT,
    min_age TEXT,
    brand_character TEXT,
    model_num INTEGER
);

CREATE TABLE warranty (
    id SERIAL NOT NULL,
    sku INTEGER,
    warranty_parts TEXT,
    warranty_labor TEXT
);

CREATE TABLE other (
    id SERIAL NOT NUll,
    sku INTEGER,
    upc TEXT
);

