DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;
CREATE TABLE movie (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
movie_name VARCHAR(30)
);

CREATE TABLE reviews (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
movie_id INT,
review text,
FOREIGN KEY (movie_id) REFERENCES movie(id)
);