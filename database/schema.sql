DROP TABLE IF EXISTS users, recipes;

CREATE TABLE users (
  id SMALLINT GENERATED BY DEFAULT AS IDENTITY,
  name VARCHAR ( 64 ),
  PRIMARY KEY(id)
);

CREATE TABLE recipes (
	id SMALLINT GENERATED BY DEFAULT AS IDENTITY,
  users_id SMALLINT NOT NULL,
  title VARCHAR ( 64 ),
	ingredients VARCHAR ( 1024 ),
  instructions VARCHAR ( 2048 ),
  PRIMARY KEY(id),
  CONSTRAINT fk_users
    FOREIGN KEY(users_id)
	    REFERENCES users(id)
);

CREATE INDEX ON recipes USING HASH (users_id);
