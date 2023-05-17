//*Ejercicio Bonus 2 - Crear una variable llamada receta:

let receta = {
  nombre: "Sandwich",
  ingredientes: []
};

//*se agrega objetos al arreglo ingredientes con las siguientes propiedades:
let Pan = {
  nombre: "Pan",
  cantidad: 2
};

let Queso = {
  nombre: "Queso",
  cantidad: 1
};
receta.ingredientes.push(Pan, Queso);

//* Sumar todas las cantidades de los ingredientes:
let totalCantidad = 0;
for (let i = 0; i < receta.ingredientes.length; i++){
  totalCantidad += receta.ingredientes[i].cantidad;
}


//* Código de prueba.
console.log(receta.ingredientes[0].nombre);
console.log("Total cantidad ingredientes: " + totalCantidad);

