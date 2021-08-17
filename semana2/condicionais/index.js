// EXERCÍCIOS DE LEITURA DE CÓDIGO

// 1) 

//A) O código verifica se o número escolhido pelo usuário é par. Para isso, ele verifica se o número escolhido é divisível por 2 ou não.
//B) Para os números pares
//C) Números ímpares

//2)

//A) Identificar qual fruta está sendo comprada e indicar qual o preço de cada uma delas.
//B) "O preço da fruta Maçã, é R$ 2.25
//C) O preço da fruta  pêra  é  R$  5

//3)

//A) A primeira linha está designando valor a variável "número", pedindo o valor ao usuário e já transformando a resposta do prompt de string para número, de modo que ele possa ser comparada com o 0 da condicional.
//B) Se o usuário responder 10, a mensagem será: "Esse número passou no teste". Caso ele responda -10, não haverá resposta alguma.
//C) Há erro, uma vez que a variável "mensagem" está incluída dentro do escopo da condicional, portanto quando o console.log é chamado fora do escopo, o sistema não reconhece a variável.


//EXERCÍCIOS DE VERSIONAMENTO DE CÓDIGO

//1)

// const idadeUsuario = Number(prompt("Qual a sua idade?"))

// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir!")
// }else
//     console.log("Você não pode dirigir")


//2)

// const turnoDoAluno = prompt("Em que turno você estuda: M/V/N?").toLowerCase()

// if (turnoDoAluno === "m"){
//     console.log("Bom dia!")
// }else if (turnoDoAluno === "v"){
//     console.log("Boa tarde!")
// }else if (turnoDoAluno === "n"){
//     console.log("Boa noite!")
// }else
//     console.log("Digite um turno válido")

//3)

// const turnoDoAluno = prompt("Em que turno você estuda: M/V/N?").toLowerCase()

// switch(turnoDoAluno){
//     case "m":
//         console.log("Bom dia!")
//         break
//     case "v":
//         console.log("Boa tarde!")
//         break
//     case "n":
//         console.log("Boa noite")
//         break
//     default:
//         console.log("Digite um turno válido")
// }

//4)

// const verFilme = (generoFilme, precoIngresso) => {
//     if(generoFilme === "fantasia" && precoIngresso < 15){
//         console.log("Bom filme!")
//     }else
//         console.log("Escolha outro filme :(")
// }

// const generoFilmeUsuario = prompt("Qual gênero de filme você quer assistir?").toLowerCase()
// const precoIngressoUsuario = Number(prompt("Qual o preço do ingresso?"))

// verFilme(generoFilmeUsuario, precoIngressoUsuario)



// DESAFIOS

//1)

// const verFilme = (generoFilme, precoIngresso) => {
//     if(generoFilme === "fantasia" && precoIngresso < 15){
//         const lanchinho = prompt("Qual snack que você quer comprar?").toLowerCase()
//         console.log("Bom filme!")
//         console.log(`Aproveite seu/sua ${lanchinho}`)
//     }else
//         console.log("Escolha outro filme :(")
// }

// const generoFilmeUsuario = prompt("Qual gênero de filme você quer assistir?").toLowerCase()
// const precoIngressoUsuario = Number(prompt("Qual o preço do ingresso?"))

// verFilme(generoFilmeUsuario, precoIngressoUsuario)


//2)

const nomeUsuarioPrompt = prompt("Qual o seu nome?")
const tipoDeJogoPrompt = prompt("Você quer assistir a um jogo internacional ou doméstico? IN/DO").toLowerCase()
const etapaDoJogoPrompt = prompt("Você quer ver uma semifinal, decisão de terceiro lugar ou final? SF/DT/FI").toLowerCase()
const categoriaPrompt = prompt("Qual a categoria do ingresso que você quer comprar: 1, 2, 3 ou 4?")
const quantidadeDeIngressosPrompt = Number(prompt("Quantos ingressos você quer comprar?"))

let ingressoSF
let ingressoDT
let ingressoFI


switch(categoriaPrompt){
    case '1':
        ingressoSF = 1320
        break
    case '2':
        ingressoSF = 880
        break
    case '3':
        ingressoSF = 550
    case '4':
        ingressoSF = 220
        break
}

switch(categoriaPrompt){
    case '1':
        ingressoDT = 660
        break
    case '2':
        ingressoDT = 440
        break
    case '3':
        ingressoDT = 330
        break
    case '4':
        ingressoDT = 170
        break
}

switch(categoriaPrompt){
    case '1':
        ingressoFI = 1980
        break
    case '2':
        ingressoFI = 1320
        break
    case '3':
        ingressoFI = 880
        break
    case '4':
        ingressoFI = 330
        break

}

if (tipoDeJogoPrompt === 'in'){
    ingressoDT * 0.24
    ingressoFI * 0.24
    ingressoSF * 0.24
}

function calculaValorIngresso(etapaDoJogo, categoria, tipoDeJogo){
    if (etapaDoJogo === 'sf' && categoria === '1'){
        valorIngresso = 1320
    }else if (etapaDoJogo === 'sf' && categoria === '2'){
        valorIngresso = 880
    }else if (etapaDoJogo === 'sf' && categoria === '3'){
        valorIngresso = 550
    }else if (etapaDoJogo === 'sf' && categoria === '4'){
        valorIngresso = 220
    }else if (etapaDoJogo === 'dt' && categoria === '1'){
        valorIngresso = 660
    }else if (etapaDoJogo === 'dt' && categoria === '2'){
        valorIngresso = 440
    }else if (etapaDoJogo === 'dt' && categoria === '3'){
        valorIngresso = 330
    }else if (etapaDoJogo === 'dt' && categoria === '4'){
        valorIngresso = 170
    }else if (etapaDoJogo === 'dt' && categoria === '3'){
        valorIngresso = 330
    }else if (etapaDoJogo === 'fi' && categoria === '1'){
        valorIngresso = 1980
    }else if (etapaDoJogo === 'fi' && categoria === '2'){
        valorIngresso = 1320
    }else if (etapaDoJogo === 'fi' && categoria === '3'){
        valorIngresso = 880
    }else if (etapaDoJogo === 'fi' && categoria === '4'){
        valorIngresso = 330
    }

    if (tipoDeJogo === 'in'){
            ingressoDT * 0.24
            ingressoFI * 0.24
            ingressoSF * 0.24
    }
}

function calcularRecibo(nomeUsuario, tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos){
    console.log(`---Dados da compra---\nNome do cliente: ${nomeUsuario}\nTipo do Jogo: ${tipoDeJogo}\nEtapa do jogo: ${etapaDoJogo}\nCategoria: ${categoria}\nQuantidade de ingressos: ${quantidadeDeIngressos}\n---Valores---\n`)
}

calcularRecibo(nomeUsuarioPrompt, tipoDeJogoPrompt, etapaDoJogoPrompt, categoriaPrompt, quantidadeDeIngressosPrompt)
