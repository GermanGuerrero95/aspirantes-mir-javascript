/*Use la formula de gauss. 
1.Realmente se le atribuye por una pelicula pero al parecer no fue Gauss quien la realizo.
2. Se da un num como argumento y se realiza la formula. 
3. Luego con let lastNum busco imprimir solo el último digito.Para eso le asigno a lastNum el valor de i ya que solo le dara el valor del último número.
4.Se realiza el for y se manda a imprimir. */

function suma(num) {
  let gauss = (num * (num + 1)) / 2;
  let lastNum;
  for (let i = 1; i <= gauss; i++) {
    lastNum = i;
  }
  console.log(lastNum);
}

suma(5);
suma(10);
suma(15);
