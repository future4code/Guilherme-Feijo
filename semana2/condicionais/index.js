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
const categoriaPrompt = Number(prompt("Qual a categoria do ingresso que você quer comprar: 1, 2, 3 ou 4?"))
const quantidadeDeIngressosPrompt = Number(prompt("Quantos ingressos você quer comprar?"))

let precoIngresso


switch(etapaDoJogoPrompt){
    case 'sf':
        switch(categoriaPrompt){
            case 1:
                precoIngresso = 1320;
                break;
            case 2:
                precoIngresso = 880;
                break;
            case 3:
                precoIngresso = 550;
                break;
            case 4:
                precoIngresso = 220;
                break;
            default:
                precoIngresso = 0;
                break;
    }    

    case 'dt':
        switch(categoriaPrompt){
            case 1:
                precoIngresso = 660;
                break;
            case 2:
                precoIngresso = 440;
                break;
            case 3:
                precoIngresso = 330;
                break;
            case 4:
                precoIngresso = 170;
                break;
            default:
                precoIngresso = 0;
                break;
    }        

    case 'fi':
        switch (categoriaPrompt) {
            case 1:
                precoIngresso = 1980;
                break;
            case 2:
                precoIngresso = 1320;
                break;
            case 3:
                precoIngresso = 880;
                break;
            case 4:
                precoIngresso = 330;
                break;
            default:
                precoIngresso = 0;
                break;
    }    
}

if (tipoDeJogoPrompt === 'in'){
    precoIngresso = precoIngresso * 4.1
}

let textoTipo;
if (tipoDeJogoPrompt === "do") {
  textoTipo = "Doméstico";
} else if (tipoDeJogoPrompt === "in") {
  textoTipo = "Internacional";
} else {
  textoTipo = "Erro";
}

let textoEtapa;
switch (etapaDoJogoPrompt) {
  case "sf":
    textoEtapa = "Semi-Final";
    break;
  case "dt":
    textoEtapa = "Decisão Terceiro";
    break;
  case "fi":
    textoEtapa = "Final";
    break;
  default:
    textoEtapa = "Erro";
    break;
}

console.log("---Dados da compra---")
console.log("Nome do cliente:", nomeUsuarioPrompt)
console.log("Tipo do jogo:", textoTipo)
console.log("Etapa do jogo:", textoEtapa)
console.log("Categoria:", categoriaPrompt)
console.log("---Valores---")
console.log("Valor do ingresso:", precoIngresso)
console.log("Valor total da compra:", precoIngresso * quantidadeDeIngressosPrompt)