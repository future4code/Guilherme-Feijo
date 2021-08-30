function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   let contagem = 0
   for(let i = 0; i<arrayDeNumeros.length; i++){
     if(arrayDeNumeros[i] === numeroEscolhido){
       contagem +=1
      }
   }if(contagem===0){
     return `Número não encontrado`
   }else{
     return `O número ${numeroEscolhido} aparece ${contagem}x`
   }


} 

