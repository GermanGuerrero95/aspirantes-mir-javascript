/* Use un while. Acá el asunto es con una variable llamada plus. Una variable desde 0 que hara el conteo de la suma
y se le va agregando cada número--> suma +=1 suma +=2 suma+=3 suma +=4 suma+=5 hasta el número que 
de 1+*/

function suma(num) {
  let plus = 0;
  let i = 1;
  while (i <= num) {
    plus += i; // suma +=1 suma +=2 suma+=3 suma +=4 suma+=5
    i++;
  }
  console.log(plus);
}

suma(5);
suma(0);
