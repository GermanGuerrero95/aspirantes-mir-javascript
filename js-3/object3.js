const receta = {
  nombre: "Sandwich",
  ingredientes: [],
};

receta.ingredientes.push(
  { nombre: "Pan", cantidad: 2 },
  { nombre: "Queso", cantidad: 1 }
);

console.log(receta);

//6. Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".
console.log(receta.ingredientes[0].nombre);
/*Pseudo-codigo
Sintaxis del punto--> Para objetos, Sintaxis de indice---> para arreglos, es una mezcla de ambas.
1. Ubico el primero objeto= receta punto---> receta.
2. Ingredientes[0] en el index 0 --> {nombre:'Pan', cantidad:'2'}
3. Último vuelvo a usar sintaxis en punto. Ya que estamos en un objeto de nuevo. --->.nombre 
4. Fin
*/
//7. Suma todos las cantidades de los ingredientes y muestra el resultado en consola.

/*Para lograr esto hay dos formas.
  1. Un for
  2. Función nativa map y reduce. */

//Respuesta con for. Lo complicado fue hacer correctamente la sintaxis del punto e indice para encontrar
// la condición y luego la suma/asignación tambíen resulta muy complicado sino se sabe las formas de encontrar
//los valores en un objecto y un arreglo.
let sumaTotal = 0;

for (let i = 0; i < receta.ingredientes.length; i++) {
  sumaTotal += receta.ingredientes[i].cantidad;
}

console.log(sumaTotal);
