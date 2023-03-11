/* 
1. En argumento se integra num
2. else, se corrige por else if.
3. num = 2 se corrige por === operador estricto de comparación. Cerciora que el valor y el tipo de dato sea igual.
4. en blanco se corrige: por ;
5. color:verde se corrige por color=verde 
*/

function calcularColor(num) {
  if (num === 1) {
    color = "black";
  } else if (num === 2) {
    color = "blanco";
  } else if (num === 3) {
    color = "rojo";
  } else {
    color = "verde";
  }

  return "El color es " + color;
}
console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(8));
