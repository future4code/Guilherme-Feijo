// INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

// a. false
// b. false
// c. false
// d. undefined



// EXERCÍCIO 2

// let primeiroNumero = prompt("digite um número")
// let segundoNumero = prompt("Digite outro núemro")
// const soma = primeiroNumero + segundoNumero
// console.log(soma)

// O problema é que meu amigo não transformou os números que voltaram do prompt como string para number.
// Quando ele fizer o console.log o retorno será a junção dos dois números como string e não acontecerá a soma dos mesmos
// Caso os dois números digitados sejam 1 e 2, a variável soma será definida como "12".



//EXERCÍCIO 3

// let primeiroNumero = Number(prompt("digite um número"))
// let segundoNumero = Number(prompt("Digite outro núemro"))
// const soma = primeiroNumero + segundoNumero
// console.log(soma)



//ESCRITA DE CÓDIGO

//EXERCÍCIO 1

// let suaIdade = Number(prompt("Qual a sua idade?"))
// let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

// console.log("Sua idade é maior que a do seu amigo? ", suaIdade>idadeAmigo)
// console.log("A diferença de idade entre vocês é de: ", suaIdade - idadeAmigo, "anos.")



//EXERCÍCIO 2

// let numeroPar = Number(prompt("Insira um número PAR"))
// console.log(numeroPar % 2)
//INDEPENDENTE DO NÚMERO PAR QUE EU COLOCAR, SEMPRE O RESTO SERÁ 0
//CASO O USUÁRIO COLOQUE UM NÚMERO IMPAR O RESTO SERÁ 1


//EXERCÍCIO 3

// let idade = Number(prompt("Quantos anos você tem?"))
// console.log("Sua idade em meses é: ", idade * 12)
// console.log("Sua idade em dias é: ", idade * 365)
// console.log("Sua idade em horas é: ", idade * 8766)


//EXERCÍCIO 4

// let numero1 = Number(prompt("Escreva um número"))
// let numero2 = Number(prompt("Escreva outro número"))
// let divisao = (numero1 % numero2) === 0
// let divisao2 = (numero2 % numero1) === 0

// console.log("O primeiro numero é maior que segundo? ", numero1>numero2)
// console.log("O primeiro numero é igual ao segundo? ", numero1 === numero2)
// console.log("O primeiro numero é divisível pelo segundo? ", divisao)
// console.log("O segundo numero é divisível pelo primeiro? ", divisao2)


//DESAFIOS

//1
//A
// let kelvin = (77 - 32)*(5/9) + 273.15
// console.log("77°F convertidos para Kelvin é: ", kelvin,"K")

//B
// let fahrenheit = (80)*(9/5) + 32
// console.log("80°C convertidos para Fahrenheit é: ", fahrenheit,"°F")

//C
// let fahrenheit = (30)*(9/5) + 32
// console.log("30°C convertidos para Fahrenheit é: ", fahrenheit,"°F")
// let kelvin = (86 - 32)*(5/9) + 273.15
// console.log("30°C convertidos para Kelvin é: ", kelvin,"K")

//D
// let celsius = Number(prompt("Insira em °C para converter em °F e K"))
// let fahrenheit = (celsius)*(9/5) + 32
// let kelvin = (fahrenheit - 32)*(5/9) + 273.15
// console.log(celsius,"°C é igual a ", fahrenheit, "°F e ", kelvin,"K")