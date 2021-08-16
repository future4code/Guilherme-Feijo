//EXERCÍCIOS DE LEITURA DE CÓDIGO
// 1) a) console.log(filme.elenco[0]) -> Matheus Nachtergaele
//       console.log(filme.elenco[filme.elenco.length - 1]) -> Virginia Cavendish
//       console.log(filme.transmissoesHoje[2]) -> canal: "Globo", horario: "14h"


// 2) a) console.log(cachorro) -> nome: "Juca", 
//	                                    idade: 3, 
//	                                    raca: "SRD"

//       console.log(gato) -> nome: "Juba", 
//	                          idade: 3, 
//	                          raca: "SRD"

//       console.log(tartaruga) -> nome: "Jubo", 
//	                               idade: 3, 
//	                               raca: "SRD"

//    b) As reticências produzem o spread, ou seja, copia os dados do objeto apontado logo após os três pontos.

// 3) 

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// a) console.log(minhaFuncao(pessoa, "backender")) -> False
//    console.log(minhaFuncao(pessoa, "altura")) -> Undefined

// b) O valor impresso no console foram os valores indicados dentro das chaves que fazem parte da propriedade do objeto pessoa.
//    Isso aconteceu porque a função logo acima especifica que o return deve mostrar os valores contidos dentro  das propriedades do objeto.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1)
 //a)
// const pessoa = {
//     nome: "Jonas",
//     apelidos: ["Mão", "Dois", "Vida"]
// }

// function montaFrase(objeto){
//     return console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
// }

// montaFrase(pessoa)

// // b)

// const novaPessoa = {
//     ...pessoa,
//     apelidos: ["Joca", "Dona", "Sassa"]
// }

// montaFrase(novaPessoa)

//2)

// const pessoa1 = {
//     nome: "Jonas",
//     idade: 25,
//     profissao: "Carteiro"
// }

// const pessoa2 = {
//     nome: "Manoel",
//     idade: 35,
//     profissao: "Marceneiro"
// }

// function montaArray(objeto){
//     return array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
// }

// console.log(montaArray(pessoa1))
// console.log(montaArray(pessoa2))

//3)

const carrinho = []

const fruta1 = {
    nome: "Laranja",
    disponibilidade: true
}

const fruta2 = {
    nome: "Morango",
    disponibilidade: true
}

const fruta3 = {
    nome: "Manga",
    disponibilidade: true
}


function completaCarrinho(objeto){
    return carrinho.push(objeto)
}

completaCarrinho(fruta1)
completaCarrinho(fruta2)
completaCarrinho(fruta3)

console.log(carrinho)

//DESAFIOS

//1)

// function montaObjeto(){
//     const nome = prompt("Qual seu nome?")
//     const idade = prompt("Qual sua idade?")
//     const profissao = prompt("Qual sua profissão")

//     const objeto = {
//         nome,
//         idade,
//         profissao
//     }

//     return console.log(objeto)

// }

// montaObjeto()

//2)

// const filme1 = {
//     nome: "Piranha 3D",
//     lancamento: 2004
// }

// const filme2 = {
//     nome: "Harry Potter",
//     lancamento: 2009
// }

// function validaObjetos(objeto1, objeto2){
//     return `O primeiro filme foi lançado antes do segundo? ${objeto1.lancamento < objeto2.lancamento}
//     \nO primeiro filme foi lançado no mesmo ano do segundo? ${objeto1.lancamento === objeto2.lancamento}`
// }

// console.log(validaObjetos(filme1, filme2))

//3)

function validaDisponibilidade (objeto, propriedade){
    return objeto[propriedade]
}

console.log(validaDisponibilidade(fruta3, "disponibilidade"))