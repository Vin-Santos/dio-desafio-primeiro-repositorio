/*
  1) Crie uma classe para representar carros.
  Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodado.
  Crie um método que,   .
*/

class Carro {
    marca;
    cor;
    combustivelPorKm;

    constructor(marca, cor, combustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }

    calcularValorDoPercurso(quilometrosRodados, precoCombustivel) {
        return quilometrosRodados * this.combustivelPorKm * precoCombustivel
    }
}

const uno = new Carro('Fiat', 'Vermelho', 1 / 11);

console.log(uno);
console.log(uno.calcularValorDoPercurso(90, 5.55));
