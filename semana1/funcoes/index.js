//EXERCICIOS DE INTERPRETAÇÃO

//EXERCICIO 1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console? 10 E 50
// O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// NÃO ACONTEERIA NADA, PORQUE A FUNÇÃO PRECISA SER INVOCADA. SÓ DECLARÁ-LA NÃO FA COM QUE ELA SEJA UTILIZADA.

//EXERCICIO 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade. 
//A FUNÇÃO TRANSFORMA O TEXTO ESCRITO PELO USUARIO NO PROMPT PARA LETRAS MINUSCULAS E DETERMINA SE É VERDADEIRO OU FALSO SE A PALAVRA "CENOURA" ESTÁ INCLUÍDA NA MENSAGEM.
// O toLowerCase É IMPORTANTE NA FUNÇÃO, JÁ QUE O .includes É CASE SENSITIVE, PORTANTO, NÃO INTERESSE SE CENOURA FOI ESCRITO EM LETRAS MAIUSCULAS OU MINUSCULAS, JÁ QUE O PRÓPRIO PROGRAMA VAI TRANSFORMAR A RESPOSTA DO PROMPT PARA LETRAS MINUSCULAS.
// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` TRUE
//      ii.  `CENOURA é bom pra vista` TRUE
//      iii. `Cenouras crescem na terra` TRUE

// EXERCICIOS DE ESCRITA DE CÓDIGO

// EXERCICIO 1
// A
// function informaDados(){
//     console.log(`Eu sou Guilherme, tenho 29 anos, moro em Londrina e sou estudante`)
// }
// informaDados()

//B

// function informaDados(nome, idade, cidade, profissao){
//     const dadosPessoais = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
//      return dadosPessoais
// }

// const fraseComDados = informaDados("Jonas", 23, "Jaú", "cowboy")
// console.log(fraseComDados)

//EXERCICIO 2

//A)
//  function somaNumeros(numero1, numero2){
//      const soma = numero1 + numero2
//      return soma
//  }

// const numero1 = Number(prompt("Insira um número"))
// const numero2 = Number(prompt("Insira outro número"))
// console.log(somaNumeros(numero1, numero2))

//B)

//  function comparaNumeros(numero1, numero2){
//      const numerosComparados = numero1 >= numero2
//      return numerosComparados
//  }
// const numero1 = Number(prompt("Insira um número"))
// const numero2 = Number(prompt("Insira outro número"))
// console.log(comparaNumeros(numero1, numero2))

//C)

//  function determinaParOuNao(numero1){
//      const parOuNao = numero1 % 2 === 0
//      return parOuNao
//  }

//  const numero1 = prompt("Insira um número")
//  console.log(determinaParOuNao(numero1))

//D)

// function contaString(frase){
//     console.log(frase.toUpperCase(), frase.length)
//  }

// const frase = prompt("Escreva uma frase")
// contaString(frase)

//EXERCICIO 3


// function soma(numero1, numero2){
//     const somaNumeros = numero1 + numero2
//     return somaNumeros
// }

// function subtracao(numero1, numero2){
//     const subNumeros = numero1 - numero2
//     return subNumeros
// }

// function multiplicacao(numero1, numero2){
//     const multiNumeros = numero1 * numero2
//     return multiNumeros
// }

// function divisao(numero1, numero2){
//     const divNumeros = numero1 / numero2
//     return divNumeros
// }

// const numero1 = Number(prompt("Insira um número"))
// const numero2 = Number(prompt("Insira outro número"))

// console.log(`Números inseridos: ${numero1} e ${numero2}`)
// console.log(`Soma: ${soma(numero1, numero2)}`)
// console.log(`Diferença: ${subtracao(numero1, numero2)}`)
// console.log(`Multiplicação: ${multiplicacao(numero1, numero2)}`)
// console.log(`Divisão: ${divisao(numero1, numero2)}`)
