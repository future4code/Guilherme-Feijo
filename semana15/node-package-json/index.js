// EXERCÍCIO 1

//a) Usamos process.argv[]

//b)
// const nome = process.argv[2];
// const idade = process.argv[3];
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

//c)

// const nome = process.argv[2];
// const idade = Number(process.argv[3]);
// console.log(
//   `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`
// );

// EXERCÍCIO 2
// const operacao = process.argv[2];
// const numUm = Number(process.argv[3]);
// const numDois = Number(process.argv[4]);

// const fazerConta = () => {
//   switch (operacao) {
//     case "add":
//       console.log(
//         `A soma dos valores ${numUm} e ${numDois} é = ${numUm + numDois}`
//       );
//       break;
//     case "sub":
//       console.log(
//         `A Subtração dos valores ${numUm} e ${numDois} é = ${numUm - numDois}`
//       );
//       break;
//     case "mult":
//       console.log(
//         `A multiplicação dos valores ${numUm} e ${numDois} é = ${
//           numUm * numDois
//         }`
//       );
//       break;
//     case "div":
//       console.log(
//         `A Divisão dos valores ${numUm} e ${numDois} é = ${numUm / numDois}`
//       );
//       break;
//     default:
//       console.log("Erro");
//   }
// };

// fazerConta();

//EXERCÍCIO 3

// const listaTarefas = [
//   "Lavar a louça",
//   "Limpar o banheiro",
//   "Xingar o presidente",
// ];

// const novaListaTarefas = listaTarefas.push(process.argv[2]);
// console.log(listaTarefas);
