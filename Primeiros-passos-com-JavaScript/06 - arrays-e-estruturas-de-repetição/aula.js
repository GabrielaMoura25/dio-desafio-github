// arrays são listas, coleção de dados

const alunos = ['João', 'Vitor', 'Marina'];

// console.log(alunos);
// console.log(alunos[0]);

alunos.push('Renan'); //acrescenta sempre ao final da lista
alunos[4] = 'Vinícius';

// console.log(alunos);

//posso ter tipos diferentes na minha lista

const teste = [];

teste.push('teste');
teste.push(10);

// console.log(teste);

//removendo o último

const aula = ['1', '2', '3'];
// console.log(aula);
// console.log(aula.pop());
// console.log(aula);

//removendo o primeiro

const aula1 = ['1', '2', '3'];
// console.log(aula1);
// console.log(aula1.shift());
// console.log(aula1);

// estruturas de repetição

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

// const somaSemFor = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5];

// const media1 = somaSemFor / notas.length;

// console.log(media1);
// console.log(notas.length); // length = mostra o tamanho da lista

let somaComFor = 0;

for (let index = 0; index < notas.length; index++) { // para percorrer uma quantidade específica de vezes
    const element = notas[index];
    somaComFor = somaComFor + element;
}

// console.log(somaComFor);
const media = somaComFor / notas.length;
console.log(media);
