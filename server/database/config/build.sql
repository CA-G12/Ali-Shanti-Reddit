BEGIN;

DROP TABLE IF EXISTS Users,Comments,Posts CASCADE;

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    username varchar(50) NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    password  varchar(100)  NOT NULL,
    user_url_img varchar(100) NOT NULL 
);

CREATE TABLE Comments(
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Posts(
    id SERIAL PRIMARY KEY,
    title varchar(50) NOT NULL,
    description TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

COMMIT;