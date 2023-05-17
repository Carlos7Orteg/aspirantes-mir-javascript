//* Ejercicio Bonus 1 - Crea Objeto literal llamado persona:

let persona = {
  nombre: "Alfonso Zapata",
  edad: 28,
  ciudad: "Bucaramanga",
  profesión: "Ingeniero Civil",
  hobbies:  [" programar", " bailar", " escuchar música."]
  };

//* Función llamada presentación que tome el objeto "persona" como argumento:_
function presentacion(persona) {
  return "Hola, soy " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
}

//* Código prueba
for (let key in persona) {
  if (persona.hasOwnProperty(key) && typeof persona[key] !== 'function') {
    console.log(key + ':' + persona[key]);
  }
};

//*Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
let mensaje = (presentacion(persona));
console.log(mensaje);




