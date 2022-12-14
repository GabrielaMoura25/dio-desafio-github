//01 - um objeto é uma coleção dinâmica de chave e valor

// const gabi = {
//   nome: 'Gabriela Moura', //chave : valor
//   idade: 27,
// // quando uma função está dentro de um obj ela pode usar as chaves e valores do obj
//   descrever: function () {
//     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) // this: diz respeito ao contexto aonde essa função está sendo executada
//   },
// };
//02 - acessar valores com dot notation = .

// console.log(gabi.nome);
// console.log(gabi.idade);
// console.log(gabi);

// gabi.altura = 1.65;

// delete gabi.nome;

// gabi.nome = 'Lais Melo';
// gabi.idade = 29;
// gabi.descrever = function() {
//   console.log(`Meu nome é ${this.nome}`);
// }

// console.log(gabi);
// gabi.descrever();

//03 - acessar valores com chaves = [] é dinâmico

// const atributo = 'idade';
// console.log(gabi[atributo]);
// console.log(gabi['nome']);

// gabi['nome'] = 'teste';

// console.log(gabi);

//04 - CLASSES: vamos dinamizar o objeto. Definição do que deve ser aquele objeto, para que elas possam ser instanciadas

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) { // é o que acontece quando uma pessoa é instanciada
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() { // qnd for declarar um método não precisa da palavra function, na sintaxe de classe
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) 
  }
}
// 04.1 - SEM CONSTRUCTOR:

// const gabi = new Pessoa(); // instância é uma ocorrência daquele objeto
// gabi.nome = 'Gabriela Moura';
// gabi.idade = 27;

// const lais = new Pessoa(); // instância é uma ocorrência daquele objeto
// lais.nome = 'Lais Melo';
// lais.idade = 29;

// console.log(gabi);
// console.log(lais);

// gabi.descrever();
// lais.descrever();

// 04.2 - COM CONSTRUCTOR:

// const gabi = new Pessoa('Gabi', 27);
// const lais = new Pessoa('Lais', 29);

// gabi.descrever();
// lais.descrever();
// console.log(gabi);
// console.log(lais);

// 04.3 - criando função e utilizando a classe

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const gabi = new Pessoa('Gabi', 27);
const lais = new Pessoa('Lais', 29);

compararPessoas(gabi, lais);