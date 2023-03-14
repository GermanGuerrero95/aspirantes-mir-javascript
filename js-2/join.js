/*Instructivo
Para el siguiente ejercicio agregué las siguientes caractertisticas:
Que el usuario determine la cantidad de palabras en el array.
Que el usuario determine los datos dentro del array.
1. El usuario va determinar cuantos elementos va tener el array. Se le  pregunta que ingrese el número. 
2. Hago un push para que esos datos queden depositados en el array con un for. El cual repite el push las veces
indicadas por el usuario. 
Cuando se hace el push se puede determinar que tipo de dato va ingresar. En este código arr es un prompt es decir
todo ingresa como string. Sin embargo al push le puedo agregar array.push(parseInt(arr)), para que todo quede
como un número, eso sí IMPORTANTE EN ESE CASO todo los datos que ingrese el usuario deberan ser números para que 
sean datos númericos para luego ser convertidos a string.

Acá simplemente el origen de los datos provienden de un prompt es decir todo queda como string.
 
3. Se imprime el array para verificar que haya quedado tdo bien. 
4. Posteriormente hacemos su separación. 
5. Se declara line []--> Lo declaro así para no quede undefined. Así mismo lo podemos declarar como " " para 
que la operación inicie con un espacio. Pero lo mantengo con un array vacio el cual no afecta el string.
6. Se hace un for en donde a line se agrega y asigna += el array[i] más un espacio " "
6. Al final se hace console.log a line y debajo de este podemos verificar que el dato es un string. 
*/

function join() {
  let array = [];
  let times = parseInt(prompt("Cuantos datos quiere ingresar?")); //1.
  let line = [];

  for (let i = 0; i < times; i++) {
    let arr = prompt("Ingrese un dato, tenga en cuenta que se volverá string");
    array.push(arr);
  }

  console.log("Su array es", array);

  for (let i = 0; i < array.length; i++) {
    line += array[i] + " ";
  }

  console.log(`Su arreglo se ha convertido en el siguiente string: ${line}`);
  console.log(typeof line);
}

join();
