//a)
// a entrada da função é um array de numeros e a saída é um objeto

function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados: number[] = numeros.sort(
    (a: number, b: number) => a - b
  );

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: { maior: number; menor: number; media: number } = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

//b)

type estatisticas = {
  maior: number;
  menor: number;
  media: number;
};

//c)

type amostra = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => {};
};
