/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

let cartaUsuario1 = []
let cartaUsuario2 = []
let cartaMaquina1 = []
let cartaMaquina2 = []
let pontuacaoUsuario 
let pontuacaoMaquina


function somaPontuacao(carta1, carta2){
   let pontuacao = carta1.valor + carta2.valor
   return pontuacao
}

if(confirm("Quer iniciar uma nova rodada")) {
	cartaUsuario1 = comprarCarta()
   cartaUsuario2 = comprarCarta()
   cartaMaquina1 = comprarCarta() 
   cartaMaquina2 = comprarCarta()
   pontuacaoUsuario = somaPontuacao(cartaUsuario1, cartaUsuario2)
   pontuacaoMaquina = somaPontuacao(cartaMaquina1, cartaMaquina2)
   
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${cartaMaquina1.texto} ${cartaMaquina2.texto} - pontuação ${pontuacaoMaquina}`)


   if(pontuacaoUsuario > pontuacaoMaquina){
   console.log("O usuário ganhou!")
   }else if(pontuacaoMaquina > pontuacaoUsuario){
   console.log("O computador ganhou!")
   }else{
   console.log("Empate!")
   }

} else {
	console.log("O jogo acabou")
}



//"Usuário - cartas: Q♣️ 10♣️  - pontuação 20"


//const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

//console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

//console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)