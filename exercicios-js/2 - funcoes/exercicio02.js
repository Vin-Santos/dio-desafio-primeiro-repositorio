/*
  2) O IMC - Índice de Massa Corporal - é um critério da Organização Mundial de Saúde para dar uma indicação sobre  a condição de peso de uma pessoa adulta.

  Fórmula do IMC: peso / (altura * altura)

  Elabore um algoritmo que, dado o peso e a altura de uma pessoa, mostre sua condição de acordo com a tabela abaixo.
  IMC em adultos Condição:
  - Abaixo de 18.5, abaixo do peso;
  - Entre 18.5 e 25, peso normal;
  - Entre 25 e 30, acima do peso; 
  - Entre 30 e 40, obeso;
  - Acima de 40, obesidade grave.
*/

//  Desta vez utilizando funções, com função main

function calcularImc(peso, altura) {
    return peso / (Math.pow(altura, 2));
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

function main() {
    const peso = 69;
    const altura = 1.67;
    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
}

main();