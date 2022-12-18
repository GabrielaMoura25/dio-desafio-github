const { gets, print } = require('./funcoes-auxiliares');  // funcão de importar

// print(gets());

/*
    1 - Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1- 100.
    Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const numerosSorteados = [];

for (let index = 0; index < 5; index++) {
  const numeroSorteado = gets();
  numerosSorteados.push(numeroSorteado); 
    
}

let maiorValor = 0;

for (let index = 0; index < numerosSorteados.length; index++) {
  const numeroSorteado = numerosSorteados[index];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

print(maiorValor);