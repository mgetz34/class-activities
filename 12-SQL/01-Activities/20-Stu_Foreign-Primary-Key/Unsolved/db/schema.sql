-- Write your Schema Here -- 
DROP DATABASE IF EXISTS shopping_db;
CREATE DATABASE shopping_db;

USE shopping_db;

CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE customer_order (
  id INT NOT NULL,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);

/* here's how we do comments in mysql */

DESCRIBE customers;
SELECT * FROM customers;
DESCRIBE customer_order;
SELECT * FROM customer_order;