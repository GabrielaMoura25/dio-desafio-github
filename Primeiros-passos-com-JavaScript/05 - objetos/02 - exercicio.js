/*
2 - Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarImc() {
    const frase = 'Eu estou';
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return `${frase} abaixo do peso`;
    } else if (imc >= 18.5 && imc < 25) {
      return `${frase} no peso normal`; 
    } else if (imc >= 25 && imc < 30) {
      return `${frase} acima do peso`;
    } else if (imc >= 30 && imc <= 40) {
      return `${frase} obeso`;
    } else {
      return `${frase} com obesidade grave`;
    }
  }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());