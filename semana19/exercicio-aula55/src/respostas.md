### EXERCICIO 1

a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
É melhor usar strings, pois a possibilidade de combinações é bem maior, diminuindo a chance de algum id ser repetido

### EXERCICIO 2
a. Explique o código acima com as suas palavras.
A função recebe id, email e senha do usuario e, com as informações que chegam, cira um novo usuário na tabela user.

b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

CREATE TABLE aula55_User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

### EXERCICIO 3

a. O que a linha as string faz? Por que precisamos usar ela ali?
Ela tipa a palavra secreta como string. Ela precisa estar ali, pois a lib precisa que essa palavra esteja tipada como string ou JWT