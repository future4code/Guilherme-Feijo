const listaTarefas = [
  "Lavar a louça",
  "Limpar o banheiro",
  "Xingar o presidente",
];

const novaListaTarefas = listaTarefas.push(process.argv[2]);
console.log(listaTarefas);
