function maxIndex(array) {
  let max = array[0]; //determinar el número mayor
  let position = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      position = i;
    }
  }
  console.log(position); // Acá tambien se puede poner el return. y afuera el console.log.
}

maxIndex([4, 5, 6, 9]);
maxIndex([9, 5, 6, 2]);
