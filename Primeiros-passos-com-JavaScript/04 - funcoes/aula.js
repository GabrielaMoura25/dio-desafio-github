// são pequenos trechos de código, que a gente pode invocar a execução dele a qualquer momento

function teste() {
  console.log('teste');
}

teste();

function sayMyName(name) {
  console.log('Your name is: ' + name);
}

sayMyName('Gabi');

function quadrado(valor) {
  return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));