CREATE TABLE characters (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  species VARCHAR,
  age INTEGER,
  gender VARCHAR
);

INSERT INTO characters (name, species, age, gender)
  VALUES ('James', 'Elf', 13, 'NB');

INSERT INTO characters (name, species, age, gender)
  VALUES ('Julia', 'Dwarf', 15, 'F');
