// 01 - Variáveis booleanas:

const camisetaRenanAzul = true; // boolean sempre retorna verdadeiro ou falso
const camisetaLemaoAzul = false;

const numero = 10;

const isNumeroPar = (numero % 2) === 0; // ' % ' pega o resto da divisão

// console.log(isNumeroPar);

// if (isNumeroPar) {    // se o que estiver dentro do parenteses for verdadeiro ele vai executar a linha abaixo
//   console.log('Par');
// }

// if (!isNumeroPar) {    // se o que estiver dentro do parenteses for falso ele vai executar a linha abaixo
//   console.log('Impar');
// }

// if (isNumeroPar) {
//   console.log('Par');
// } else {
//   console.log('Impar');
// }

const number = 31;

const numberDivisivelPor5 = (number % 5) === 0;

if (number === 0) {
  console.log('O número é inválido');
} else if (numberDivisivelPor5) {
  console.log('Sim');
} else {
  console.log('Não');
}