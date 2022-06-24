TRUNCATE general RESTART IDENTITY CASCADE;
TRUNCATE warranty RESTART IDENTITY CASCADE;
TRUNCATE other RESTART IDENTITY CASCADE;

INSERT INTO general (sku, product_name, brand, num_pieces, material, min_age, brand_character, model_num) VALUES (1, 'Super Mario Nintendo Entertainment System 71374', 'LEGO', 2646, 'Plastic', '18 years', 'LEGO, Super Mario, Nintendo', 6288938);
INSERT INTO warranty (sku, warranty_parts, warranty_labor) VALUES (1, 'NONE', 'NONE');
INSERT INTO other (sku, upc) VALUES (1, '673419319560');













