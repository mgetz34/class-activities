-- Write your schema here --
DROP DATABASE IF EXISTS shoper_db;
CREATE DATABASE shoper_db;

USE shoper_db;

CREATE TABLE products (
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN
);

CREATE TABLE categories (
  id INT NOT NULL,
  category_name VARCHAR(30) NOT NULL
);


INSERT INTO products (id, product_name, category_name, price, in_stock )
VALUES
(1, "baseball", "sports", 10, true),
(2, "hat", "clothing", 5, false),
(3, "phone", "electronics", 100, true);

SELECT * FROM products

DESCRIBE products;