### EXERCICIO 1

a) Foreign key é o campo que estabelece o relacionamento entre duas tabelas. Uma coluna corresponde à mesma coluna que é a chave primária de outra tabela.

b) INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"001",
"Very nice!",
7,
"004"
);

c) Cannot add or update a child row: a foreign key constraint fails. Esse erro aconteceu porque não há uma chave correspondente na tabela Movie.

d) ALTER TABLE Movie DROP COLUMN rating;

e) Cannot delete or update a parent row: a foreign key constraint fails. Não dá para apagar uma linha que tenha relação com outra tabela.

### EXERCICIO 2

a) A tabela cria a relação entre as tabelas Actor e Movie. Cada id de ator pode ser relacionado com o id de um filme.

b)

INSERT INTO MovieCast(movie_id, actor_id) VALUES("004","001");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("004","003");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("004","002");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("002","001");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("002","002");
INSERT INTO MovieCast(movie_id, actor_id) VALUES("002","003");

c) Cannot add or update a child row: a foreign key constraint fails. Não é possivel realizar o que a query pede, porque a foreign key não funciona, uma vez que o id não existe.

d) Cannot delete or update a parent row: a foreign key constraint fails. Não dá para apagar uma linha que tenha relação com outra tabela.

### EXERCICIO 3

a) A query relaciona a tabela Movie com a tabela Rating através do join. Como é o inner join, o operador retorna somente os dados que possuem correspondentes nas duas tabelas. O 'on' é a propriedade que determina a condição de relacionamento entre as duas tabelas.

b) SELECT Movie.id, title, rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
