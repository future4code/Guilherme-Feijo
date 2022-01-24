type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

//a) colocaria o arquivo exercicio4.ts numa pasta src e rodaria o comando tsc
//b) o yuzo ensinou a já colocar na pasta src
//c) só rodar o comando tsc sem parâmetros que tudo com .ts vai ser transpilado
//d) entre as mudanças que eu enxerguei foi na versão especificada no 'target', o 'outdir' especifica que a versão transpilada do arquivo ts vai para a pasta build e o 'rootdir' determina que os arquivos ts a serem transpilados precisam estar na pasta src.
