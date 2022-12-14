/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método, que dado a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioDeCombustivelPorKm;

  constructor(marca, cor, gasto) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioDeCombustivelPorKm = gasto;
  }

  calcularGastoDePercurso(distanciaEmKm, preco) {
    return (distanciaEmKm * this.gastoMedioDeCombustivelPorKm) * preco;
  }
}

const fiesta = new Carro('Ford', 'Branca', 1/10);
const gol = new Carro('Volkswagen', 'Branco', 1/12);

console.log(fiesta.calcularGastoDePercurso(70, 5));
console.log(fiesta);
console.log(gol.calcularGastoDePercurso(70, 5));
console.log(gol);