### EXERCÍCIO 1

a) Utilizamos o create table para criar a tabela com o nome ACTOR. O id foi declarado como varchar, que é para strings, com a limitação de 255 caracteres. Além disso, o id foi colocado como Primary Key. O elemento "name" também é varchar e também foi colocado o valor "not null" para que a inclusão de valores seja obrigatória. "Birth-date" é declarado como date para receber valores como data yyyy-mm-dd. Gender tamb´m é varchar, com limitação de caracteres em 6.

b) O databases mostra as bases de dados criadas na sua conta. Já a show tables, retorna as tabelas salvas.

c) Descreve a tabela, informando o tipo de cada atributo.

### EXERCÍCIO 2

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

b) Duplicate entry '002' for key 'PRIMARY'. O erro aconteceu, porque o id 002 já está sendo utilizado.

c) Column count doesn't match value count at row 1. O erro aconteceu porque os valores da birth_date e gender foram incluídos, mas os parâmetros não foram colocados entre parênteses.

d) Field 'name' doesn't have a default value. Faltou o nome, não pode ser vazio.

e) Incorrect date value: '1950' for column 'birth_date' at row 1. O erro aconteceu porque estamos tentando passar um number ao invés de uma string na birth_date.

f) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Deborah Secco",
1500000,
"1979-11-26",
"female"
);

### EXERCICIO 3

a) SELECT _ from Actor WHERE gender = "female"
b) SELECT salary from Actor WHERE name = "Tony Ramos"
c) SELECT _ from Actor WHERE gender="invalid" -- Retornou uma tabela vazia, já que não há atores em que o gender é 'invalid'
d) SELECT id, name , salary from Actor WHERE salary <=500000
e) Unknown column 'nome' in 'field list'. Para arrumar basta trocar 'nome' para 'name'. SELECT id, name from Actor WHERE id = "002".

### EXERCICIO 4

a) A query busca todas as informações dos atores que tem nomes começando com A ou J e salário acima dos 300000.

b) SELECT \* FROM Actor WHERE (not name LIKE "A%") AND salary > 350000

c) SELECT \* FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%")

d) SELECT \* from Actor WHERE (name like "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000

### EXERCICIO 5

a) CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
)

b) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
)

c) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

e) INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
9
);

### EXERCICIO 6

a) SELECT id, title, rating from Movie WHERE id="003"

b) SELECT \* FROM Movie WHERE name = "Deus é Brasileiro";

c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;

### EXERCICIO 7

a) SELECT \* FROM Movie
WHERE title LIKE "%vida%";

b) SELECT \* FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
synopsis LIKE "%TERMO DE BUSCA%";

c) SELECT \* FROM MOVIE
WHERE release_date < "2021-11-22";

d) SELECT \* FROM MOVIE
WHERE release_date < "2021-11-22" AND
(title LIKE "%TERMO DE BUSCA%" OR
synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
