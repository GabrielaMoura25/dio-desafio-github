// const peso = 75;
// const altura = 1.75;
// const imc = peso / Math.pow(altura, 2); // Math.pow = função de elevar um número ao quadrado
// console.log(imc);

// if (imc < 18.5) {
//   console.log('Abaixo do peso');
// } else if (imc >= 18.5 && imc < 25) {
//   console.log('Peso normal');
// } else if (imc >= 25 && imc < 30) {
//   console.log('Acima do peso');
// } else if (imc >= 30 && imc < 40) {
//   console.log('Obeso');
// } else {
//   console.log('Obesidade grave');
// }

// transformando em função

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';
  } else if (imc >= 30 && imc < 40) {
    return 'Obeso';
  } else {
    return 'Obesidade grave';
  }
}

(function main() {
  const peso = 75;
  const altura = 1.75;
  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})(); // resolve o que ta dentro da função e executa. Se chama: função imediatamente invocada 

// main();
