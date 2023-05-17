//*Ejercicio 5 - Crear variable llamada Pedro:

let Pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: "programar",
  estatura: [1.8],
  saluda: function () {
    console.log("Hola, me llamo " + this.nombre);
  }
}
delete Pedro.activo;


//* Codigo prueba
//console.log(Pedro.edad); imprime edad
//console.log(Pedro.activo);

for (let key in Pedro) {
  if (Pedro.hasOwnProperty(key) && typeof Pedro[key] !== 'function') {
    console.log(key + ": " + Pedro[key]);
  }
}

Pedro.saluda(); // "Hola, me llamo Pedro"