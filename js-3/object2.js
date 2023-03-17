const persona = {
  nombre: "German",
  edad: 27,
  ciudad: "Bogotá",
  profesion: "Programador",
};

//2. Imprime en la consola el objeto "persona" completo---> Solución con función
function show(obj) {
  console.log(obj);
}

show(persona);

//2. Imprime en la consola el objeto "persona" completo--->Solución normal
console.log(persona);

//3.Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.

function presentacion(persona) {
  return (
    persona.nombre +
    " " +
    persona.edad +
    " " +
    persona.ciudad +
    " " +
    persona.profesion
  );
}

//4.lama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
//5.Imprime en la consola el valor de la variable "mensaje".
const mensaje = presentacion(persona);
console.log(mensaje);

//6.Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo
//con algunos pasatiempos--->Solución con función.

function add(obj) {
  obj.hobbies = ["Programar", "Correr", "Caminar", "cantar"];
}

add(persona);

console.log(persona);

//6.Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo
//con algunos pasatiempos--->Solución normal

/*persona.hobbies =["Programar", "Correr", "Caminar", "cantar"]*/

//7. Imprime en la consola la propiedad "hobbies" del objeto "persona".

console.log(persona.hobbies);

//8.Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.

let paths = Object.values(persona.hobbies);

for (let i = 0; i < paths.length; i++) {
  let path = paths[i];
  console.log(path);
}
