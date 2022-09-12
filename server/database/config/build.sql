BEGIN;

DROP TABLE IF EXISTS users, comments, posts CASCADE;

CREATE TABLE users (
  id SERIAL  PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(200) unique,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id SERIAL  PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    post TEXT NOT NULL,
    communities VARCHAR(125),
    vote INT default 0,
    date TIMESTAMP default NOW(),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id SERIAL  PRIMARY KEY,
    content TEXT NOT NULL,
    date TIMESTAMP default NOW(),
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

COMMIT;