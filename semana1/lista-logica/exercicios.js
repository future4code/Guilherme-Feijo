// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  altura = Number(prompt("Digite a altura do retângulo"))
  largura = Number(prompt("Digite a largura do retângulo"))
  areaRetangulo = altura * largura
  console.log(areaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = Number(prompt("Qual é o ano atual?"))
  anoNascimento = Number(prompt("Qual seu ano de nascimento"))
  idadeUsuario = anoAtual - anoNascimento
  console.log(idadeUsuario)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  const imc = peso / (altura * altura)
  return imc 

}

// calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Qual o seu nome?")
  idade = prompt("Qual a sua idade?")
  eMail = prompt("Qual o eu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${eMail}.`)
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt("Escreva uma cor que você goste muito?")
  cor2 = prompt("Escreva outra cor")
  cor3 = prompt("Escreva mais uma cor")
  
  const coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

retornaStringEmMaiuscula(ola)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const semPreju = custo / valorIngresso
  return semPreju

}

calculaIngressosEspetaculo(3000, 100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const mesmoTamanho = string1.length === string2.length
  return mesmoTamanho

}

checaStringsMesmoTamanho(ola, abobora)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

retornaPrimeiroElemento ([1, 2, 3])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const var1 = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = var1
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const var1 = string1.toLowerCase() === string2.toLowerCase()
  return var1

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const anoCnh = Number(prompt("Em que ano a sua CNH foi emitida?"))

  const idadeUsuario = anoAtual - anoNascimento
  const idadeCnh = anoAtual - anoCnh


  const precisaRenovar = (idadeUsuario <= 20 && idadeCnh >= 5) || 
  (idadeUsuario > 20 && idadeUsuario <= 50 && idadeCnh >= 10) ||
  (idadeUsuario > 50 && idadeCnh >= 15)

  console.log(precisaRenovar)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = (ano % 400 === 0) || (ano % 4 === 0) && (ano % 100 !== 0 )
  return bissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?")
  const educacao = prompt("Você possui ensino médio completo?")
  const exclusividade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(idade === "sim" && educacao === "sim" && exclusividade === "sim")

}