/*
  1) Crie um programa que dado um número imprima sua tabuada.
*/

const numero = 7;

console.log('-- Tabuada -- ' + numero);
for (let i = 1; i <= 10; i++) {
    console.log(numero + ' x ' + i + ' = ' + (numero * i));
}
