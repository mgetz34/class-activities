-- deletes existing database
DROP DATABASE IF EXISTS books_db;
-- creates new database
CREATE DATABASE books_db;

-- cd's into the books_db database
USE books_db;
-- creates new table with two columns of id and name with parameters 
CREATE TABLE biographies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

-- adds to the biographies table with multiple values
INSERT INTO biographies (id, name)
VALUES
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

-- selects entire biographies table
SELECT * FROM biographies;
