//EXERCÍCIOS DE LEITURA DE CÓDIGO

//1) O código está somando o valor das variáveis i e "valor" até que o valor de i seja 5. O console.log vai imprimir 10.

//2) 

//a) Será impresso 19, 21, 23, 25, 27, 30

//b) Não

//3) "****"

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//EXERCICIOS DE ESCRITA DE CÓDIGO


//1)

// const quantidadeBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))

// let i = 0
// const arrayBichos = []

// if(quantidadeBichos === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }

// for(i = 0; i < quantidadeBichos; i++){
//     const nomeBichos = prompt("Qual o nome dos seus bichos?")
//     arrayBichos.push(nomeBichos)
// }
// console.log(arrayBichos)



//2)

//a)

// function imprimeNumeros(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }



//b)

// function imprimeNumeros(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i] / 10)
//     }
// }



//c)

// const arrayOriginal = [1, 2, 3, 4]

// function criaNovoArray(array){
//     const novoArray = []
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             novoArray.push(array[i])
//         }
//     }
// return console.log(novoArray)
// }

// criaNovoArray(arrayOriginal)



//d)

// const arrayOriginal = [1, 2, 3, 4]

// function criaNovoArray(array){
//     const novoArray = []
//     for(let i = 0; i < array.length; i++){
//         novoArray.push(`O elemento do índex ${i} é ${array[i]}`)
//         }
    
//     return console.log(novoArray)
// }

// criaNovoArray(arrayOriginal)


//e)

// const arrayOriginal = [1, 2, 3, 4]

// function criaNovoArray(array){
//     let maiorNumero = 0
//     let menorNumero = 2
    
//     for(let i = 0; i < array.length; i++){
//         let numero = array[i]

//         if(numero > maiorNumero){
//             maiorNumero = numero
//         }else if(numero < menorNumero){
//             menorNumero = numero
//         }
    
//     }
    
//     return console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
// }

// criaNovoArray(arrayOriginal)

//DESAFIOS

//1)

// const numeroEscolhido = Number(prompt("Digite um número!"))
// console.log("Vamos jogar!")


// let i = 1
// let numeroChute = Number(prompt("Tente adivinhar qual o número digitado pelo outro jogador"))
    
// while(numeroEscolhido !== numeroChute){

//     if(numeroChute > numeroEscolhido){
//         console.log(`O número chutado foi ${numeroChute}`)
//         console.log(`Errou. O número escolhido é menor`)
//     }else if(numeroChute < numeroEscolhido){
//         console.log(`O número chutado foi ${numeroChute}`)
//         console.log(`Errou. O número escolhido é maior`)
//     }
//     numeroChute = Number(prompt("Tente adivinhar qual o número digitado pelo outro jogador"))
    
//     i++
// }  

// if(numeroChute === numeroEscolhido){
//     console.log("Acertou, Parabéns")
//     console.log(`o número de tentativas foi: ${i}`)
// }

//2)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (100 - 1)) + 1;
  }



const numeroEscolhido = getRandomInt()

let i = 1
let numeroChute = Number(prompt("Tente adivinhar qual o número digitado pelo outro jogador"))
    
while(numeroEscolhido !== numeroChute){

    if(numeroChute > numeroEscolhido){
        console.log(`O número chutado foi ${numeroChute}`)
        console.log(`Errou. O número escolhido é menor`)
    }else if(numeroChute < numeroEscolhido){
        console.log(`O número chutado foi ${numeroChute}`)
        console.log(`Errou. O número escolhido é maior`)
    }
    numeroChute = Number(prompt("Tente adivinhar qual o número digitado pelo outro jogador"))
    
    i++
}  

if(numeroChute === numeroEscolhido){
    console.log("Acertou, Parabéns")
    console.log(`o número de tentativas foi: ${i}`)
}
