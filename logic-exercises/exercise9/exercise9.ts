const contaNegativos = (array) => {
  let totalDeNumeros = 0
  for(let i=0; i<array.length; i++){
      if(i<0){
        totalDeNumeros++
      }
      return totalDeNumeros
    }
  }