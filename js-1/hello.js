/*
Tener en cuenta-->
En todos los ejercicios llamo la función con el argumento, el console.log lo ubico dentro de la función. 
Funciona igual que tener el console.log afuera de la función.;*/

function hola(name) {
  console.log(`Hola ${name}!`);
}

hola("Pedro");
hola("Juan");
hola("");

/*Esta función solo puede ejecutarse desde la consola de devs tools o desde editores de código online replit.
usa prompt para que el usuario sea saludado con su nombre*/

function salute() {
  const name = prompt("Digite su nombre para ser saludado");
  console.log(`Hola ${name}!`);
}

salute();
