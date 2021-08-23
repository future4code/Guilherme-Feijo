// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   array.sort(function (a, b){
       return a - b;
   })
   return array
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPares = array.filter((numero)=>{
     return numero % 2 === 0
  })
  return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosParesElevados = array.filter((numero)=>{
        return numero % 2 === 0
    }).map((numerosParesElevados)=>{
        return numerosParesElevados * numerosParesElevados
    })
    return numerosParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i=0; i < array.length; i++){
    if(array[i] > maior){
        maior = array[i]
    }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero 
    let menorNumero
    if(num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    }else{
        maiorNumero = num2
        menorNumero = num1
    }

    let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    let diferenca = maiorNumero - menorNumero

    return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let array = []
   for (let i = 0; array.length < n; i++){
       if(i % 2 === 0){
           array.push(i)
       }
   }
   return array
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC){
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return `Equilátero`
    }else if(ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return `Isósceles`
    }else if(ladoB === ladoC && ladoB !== ladoA && ladoC !== ladoA) {
        return `Isósceles`
    }else if(ladoA === ladoC && ladoA !== ladoB && ladoC !== ladoB) {
        return `Isósceles`;
    }else{
        return `Escaleno`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arraySegundoMaiorESegundoMenor = []

    array.sort(function (a, b){
        return a - b;
    })
    
    arraySegundoMaiorESegundoMenor.push(array[array.length-2])
    arraySegundoMaiorESegundoMenor.push(array[1])

    return arraySegundoMaiorESegundoMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = filme.atores.join(", ");
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasPermitidas = pessoas.filter((pessoa)=> {
       return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.50
   })
   return pessoasPermitidas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasBarradas = pessoas.filter((pessoa)=>{
      return pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.49
  })
  return pessoasBarradas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const somar = (num1, num2) => num1 + num2

    contas.forEach(conta => {
 
       const somaDosGastos = conta.compras.reduce(somar, 0)
 
       conta.saldoTotal -= somaDosGastos
 
       conta.compras = []
    })
 
    return contas
}    

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const compararNomesDeConsulta = (a, b) => a.nome > b.nome ? 1 : -1

    return consultas.sort(compararNomesDeConsulta)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}