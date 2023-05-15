//*Ejercicio 4 - Escribe la función join acá:

function join(arr) {
  if (arr.length === 0) {
    return "";
  }
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result += " " + arr[i];
    }
    return result;
}


//* cÓDIGO DE PRUEBA
console.log(join(["Hola","mundo!"])); // "Hola mundo!"
console.log(join(["Esto", "es", "una", "frase", "con", "varias", "palabras."])); // "Esto es una frase con varias palabras"

console.log(join([1, 2, 3, 4, 5])); // Salida esperada: "1 2 3 4 5"




