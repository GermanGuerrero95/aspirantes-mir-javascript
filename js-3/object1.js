const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};
//En primer lugar estará la solución propuesta con función y luego la solución sin esta.

//2.Imprime en la consola el valor de la llave edad---> Solución con función.

function age(obj) {
  return obj.edad;
}

age(pedro);

//2.Imprime en la consola el valor de la llave edad--->Solución normal.
console.log(pedro.edad);

//3. Agrega una propiedad con llave estatura y valor 1.8---> solución con función.
function add(obj) {
  return (obj.estatura = 1.8);
}

add(pedro);

console.log(pedro); //Revisamos que haya quedado la propiedad estatura.

//3.Agrega una propiedad con llave estatura y valor 1.8---> solución normal.

pedro.estatura = 1.8;

console.log(pedro); //Revisamos que haya quedado la propiedad estatura.

//4.Elimina la propiedad con llave activo.---> Solución con función
function erarse(obj) {
  return delete obj.activo;
}

erarse(pedro);
console.log(pedro); //revisamos que haya quedado borrado la propiedad.
//4.Elimina la propiedad con llave activo.---> Solución normal.
delete pedro.activo;
console.log(pedro);

//5.Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos : ---> Solución con función

function paths(obj) {
  let properties = Object.keys(obj);
  let vas = Object.values(obj);
  let va = [];
  for (let i = 0; i < vas.length; i++) {
    va = vas[i];
    console.log(`${properties[i]} : ${va}`);
  }
}

paths(pedro);

//5.Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos : ---> Solución normal

let properties = Object.keys(pedro);
let vas = Object.values(pedro);
let va = [];
for (let i = 0; i < vas.length; i++) {
  va = vas[i];
  console.log(`${properties[i]} : ${va}`);
}

//6 y 7 Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.---> Solución con una función
function addSalute(obj) {
  obj.saluda = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  };
  obj.saluda();
}

addSalute(pedro);

//6 y 7 Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.---> Solución normal

/*Modificamos el objeto literal y le agregamos la función saluda y la llamamos al final.
  Esta comentada la solución normal porque const pedro ya esta declara*/

/*
const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  saluda:function() {
  console.log(`Hola me llamo ${this.nombre}`)
  },
 hobbies: ["programar", "squash", "piano"],
 };

pedro.saluda()
*/
