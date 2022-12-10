/*
  Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
  Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

  Dados de entrada:
  5
  50
  10
  98
  23

  Saída:
  98
*/

const { gets, print } = require("./funcoesAuxiliares")


const numerosSorteados = [];
let maior = 0;

for (let i = 0; i < 5; i++) {
    const numero = gets();
    numerosSorteados.push(numero);
    if (numero > maior) {
        maior = numero;
    }
}

print(maior);
