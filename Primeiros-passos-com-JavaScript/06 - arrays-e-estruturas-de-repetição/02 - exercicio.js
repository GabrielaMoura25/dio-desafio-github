/*
2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index <= lista.length; index++) {
  const numero = lista[index];
  if (numero % 2 === 0)
  console.log(numero);
  
  // if (index % 2 === 0)
  // console.log(index);
}