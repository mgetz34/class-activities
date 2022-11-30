DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

-- Add biography table --
DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

-- Add biography table --
CREATE TABLE biography(
id INT NOT NULL,
name VARCHAR(100) NOT NULL
);

INSERT INTO biography(id, name) VALUES
(1, "Monkey Wrench Gang"),
(2, "To kill a Mockingbird"),
(3, "Holes"),
(4, "Stargirl"),
(5, "Crime and Punishment"),
(6, "The Stranger");
