### EXERCICIO 1

a) O comando iria deletar a coluna 'salary' da tabela Actors
b) Alteraria o nome da coluna gender para sex
c) Manteria o nome da coluna, porém, colocaria um limite de 255 caracteres em seus dados.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### EXERCICIO 2

a) UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

C) UPDATE Actor
SET
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

### EXERCICIO 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000

### EXERCICIO 4

a) SELECT MAX(salary) FROM Actor
b) SELECT MIN(salary) FROM Actor WHERE gender = "female"
c) SELECT COUNT(\*) FROM Actor WHERE gender = "female"
d) SELECT SUM(salary) FROM Actor

### EXERCICIO 5

a) Esse comando conta a quantidade de atores de acordo com o seu gênero.
b) SELECT id, name FROM Actor
ORDER BY name DESC;
c) SELECT _ FROM Actor
ORDER BY salary;
d) SELECT _ FROM Actor
ORDER BY salary DESC
LIMIT 3;
e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### EXERCICIO 6

a) ALTER TABLE Movie ADD playing_limit_date DATE;
b) ALTER TABLE Movie CHANGE rating rating FLOAT;
c) UPDATE Movie
SET
playing_limit_date = "2021-12-31"
WHERE id = "001"

    UPDATE Movie
    SET
    playing_limit_date = "2020-12-31"
    WHERE id = "002"

d) DELETE FROM Movie WHERE id = "001"

### EXERCICIO 7

a) SELECT COUNT(_) FROM Movie WHERE rating > 7.5;
b) SELECT AVG(rating) FROM Movie;
c) SELECT COUNT(_) FROM Movie WHERE playing_limit_date > CURDATE();
d) SELECT COUNT(\*) FROM Movie WHERE release_date > CURDATE();
e) SELECT MAX(rating) FROM Movie;
f) SELECT MIN(rating) FROM Movie;

### EXERCICIO 8

a) SELECT _ FROM Movie ORDER BY title;
b) SELECT _ FROM Movie ORDER BY title DESC LIMIT 5;
C) SELECT \* FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

d) SELECT \* FROM Movie
ORDER BY rating DESC
LIMIT 3;
