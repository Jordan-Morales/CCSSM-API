CREATE TABLE characters (
  ID SERIAL PRIMARY KEY,
    public BOOLEAN,
  name VARCHAR,
  species VARCHAR,
  age INTEGER,
  gender VARCHAR,
    health INTEGER,
    attack INTEGER,
    defense INTEGER,
    speed INTEGER,
    magic INTEGER,
  ability VARCHAR
);

INSERT INTO characters (public, name, species, age, gender, health, attack, defense, speed, magic, ability)
  VALUES (FALSE, 'James', 'Elf', 18, 'NB', 50, 20, 20, 15, 16, 'Sword-Slash');

INSERT INTO characters (public, name, species, age, gender, health, attack, defense, speed, magic, ability)
  VALUES (TRUE, 'Julia', 'Dwarf', 25, 'F', 75, 18, 17, 16, 22, 'Magic Arrows');

CREATE TABLE monsters (
  ID SERIAL PRIMARY KEY,
    public BOOLEAN,
  name VARCHAR,
  species VARCHAR,
    health INTEGER,
    attack INTEGER,
    defense INTEGER,
    speed INTEGER,
    magic INTEGER,
  ability VARCHAR
);

INSERT INTO monsters (public, name, species, health, attack, defense, speed, magic, ability)
  VALUES (FALSE, 'Goblin', 'Goblin', 100, 16, 16, 20, 5, 'Bash');

INSERT INTO monsters (public, name, species, health, attack, defense, speed, magic, ability)
  VALUES (FALSE, 'Dragon', 'Dragon', 200, 20, 20, 20, 30, 'Slash');


CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  username VARCHAR UNIQUE,
  password VARCHAR,
  email VARCHAR
);

INSERT INTO users (name, username, password, email)
  VALUES ('Jordan', 'admin', '123', 'my@email.com');

INSERT INTO users (name, username, password, email)
  VALUES ('James', 'test', 'test', 'test@email.com');
