// EXERCÍCIOS DE LEITURA DE CÓDIGO

//EXERCÍCIO 1
// let array
// console.log('a. ', array)//UNDEFINED

// array = null
// console.log('b. ', array)//NULL

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)//11

// let i = 0
// console.log('d. ', array[i])//3

// array[i+1] = 19
// console.log('e. ', array)//0: 3 - 1: 19 - 2: 5 -....

// const valor = array[i+6]
// console.log('f. ', valor)// 9

//EXERCÍCIO 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// O VALOR IMPRESSO SERÁ: SUBI NUM ÔNIBUS EM MIRROCOS 27

//EXERCÍCIOS DE ESCRITA DE CÓDIGO


//EXERCÍCIO 1

// const nomeDoUsuario = prompt("Qual o seu nome?")
// const emailDoUsuario = prompt("Qual o seu e-mail")

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)


//EXERCÍCIO 2

// const comidasFavoritas = ['pizza', 'maracuja', 'hamburguer', 'pure', 'panceta']
// console.log(comidasFavoritas)

// console.log(`Essas são minhas comidas preferidas: `)
// console.log(comidasFavoritas[0])
// console.log(comidasFavoritas[1])
// console.log(comidasFavoritas[2])
// console.log(comidasFavoritas[3])
// console.log(comidasFavoritas[4])

// const comidaUsuario = prompt("Qual a sua comida favorita?")

// comidasFavoritas[1] = comidaUsuario
// console.log(comidasFavoritas)

//EXERCÍCIO 3

// let listaDeTarefas =[]

// const tarefa1 = prompt("Escreva uma tarefa que você precise fazer hoje")
// const tarefa2 = prompt("Escreva outra tarefa que você precise fazer hoje")
// const tarefa3 = prompt("Escreva mais uma tarefa que você precise fazer hoje")

// listaDeTarefas.push(tarefa1)
// listaDeTarefas.push(tarefa2)
// listaDeTarefas.push(tarefa3)

// console.log(listaDeTarefas)

// listaDeTarefas.splice(prompt("Digite o índice de uma das tarefas que você já realizou: 0, 1 ou 2"), 1)

// console.log(listaDeTarefas)

//DESAFIOS

//DESAFIO 1

// const array = prompt("Escreva uma frase aqui")
// let elementosSeparados = array.split(" ")


// console.log(elementosSeparados)

//DESAFIO 2

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log("O índice do abacaxi é: ", array.indexOf("Abacaxi"), "\nO tamanho do array é: ", array.length)