const getSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] + array[i + 1] === target) {
      return array.indexOf(i) + array.indexOf(i + 1);
    }
    return "There's no combination";
  }
};
