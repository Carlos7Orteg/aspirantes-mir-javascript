//*Ejercicio 1 - Escribe la función sum acá:

function sum(array) {
  let total = 0;
  for (let i = 0;  i < array.length; i++) {
    total += array[i];
}
return total
}

//* código de prueba
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0