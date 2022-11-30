DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE fiction (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

SELECT * FROM fiction;

USE books_db;

INSERT INTO fiction (id, name)
VALUES
    ( 001, "To Kill a Mockingbird"),
    ( 002, "100 Years of Solitude"),
    ( 003, "War and Peace");
    
USE books_db;

UPDATE fiction
SET name = "Candide"
WHERE id = 2;

SELECT * FROM fiction;