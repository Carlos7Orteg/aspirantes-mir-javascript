//* 3.Ejercicio: escribe la función suma acá.

function suma(numero) {
let suma = 0;
for (let i = 1; i <= numero; i++) {
suma += i;
}
return suma;
}

//* código de prueba
console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120
