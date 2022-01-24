// a)
//let minhaString: string = 8
// deu erro pq ele esperava uma string e foi passado um number

// b)
let meuNumero: number = 10;
//podemos criar um outro type dentro da mesma função usando o |
let novoNumero: number | string;
(novoNumero = 10), (novoNumero = "dez");

//c)

const novoObjeto: { nome: string; idade: number; corFavorita: string } = {
  nome: "Jonas",
  idade: 23,
  corFavorita: "verde",
};

//d)

enum CoresArcoIris {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  ANIL = "anil",
  VIOLETA = "violeta",
}

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: CoresArcoIris;
};

const guilherme: Pessoa = {
  nome: "Guilherme Feijó",
  idade: 30,
  corFavorita: CoresArcoIris.AZUL,
};

const hugo: Pessoa = {
  nome: "Hugo Feijó",
  idade: 24,
  corFavorita: CoresArcoIris.LARANJA,
};

const rosangela: Pessoa = {
  nome: "Rosangela Trentini",
  idade: 52,
  corFavorita: CoresArcoIris.AMARELO,
};
