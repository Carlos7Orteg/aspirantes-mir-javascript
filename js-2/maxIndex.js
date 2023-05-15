//*Ejercicio 3 - Escribe la función maxIndex acá:

function maxIndex(array) {
  if (array.length === 0) {
    return -1;
  }
  let maxIndex = 0;
  for (let i = 1; i < array.lenght; i++) {
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

//* código de prueba
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1