function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  mediaAluno = ((ex * 1) + (p1 * 2) + (p2 * 3))/(1+2+3)
  if(mediaAluno >= 9){
    return "A"
  }else if(mediaAluno<9 && mediaAluno>=7.5){
    return "B"
  }else if(mediaAluno<7.5 && mediaAluno>=6){
    return "C"
  }else{
    return "D"
  }
}

