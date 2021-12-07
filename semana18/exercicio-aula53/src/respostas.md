### Herança

### EXERCICIO 1

a. Seria possível imprimir a senha (password) atrelada a essa instância?

Não, porque o atributo é private e não há um método para acessá-lo de fora da classe

b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
1 vez

### EXERCICIO 2

a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
1 vez

b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
1 vez também. Ele foi chamado também, pois a classe Custumer é filha da classe User, portanto o construtor da classe User também foi utilizado para criar a instância.

### EXERCICIO 3

a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
Não, pois a senha não tem um método get para ser apresentada.

### Polimorfismo

### EXERCICIO 1

a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
Consegui imprimir todas, pois numa interface todas as informações se comportam como public.

### EXERCICIO 2

a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
Cannot create an instanceof an abstract class

b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

### EXERCICIO 4

a. Que métodos e propriedades essa classe possui? Por quê?

public getCpf(): string {
return this.cpf;
}

public calculateBill(): number {
return this.consumedEnergy \* 0.75;
}

### EXERCICIO 5

a. Quais as semelhanças dessa classe com a ResidentialClient?
Os métodos são iguais

b. Quais as diferenças dessa classe com a ResidentialClient?
Algumas propriedades mudam

### EXERCICIO 6

a. De qual classe a IndustrialClient deve ser filha? Por quê?
iNDUSTRY

b. Que interface a IndustrialClient implementa? Por quê?
cLIENT

c. Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?
Porque não há nenhuma propriedade da classe que deva ser alterada.
