/*
Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. sendo elas:
1 - Proço do combustível;
2 - Gasto médio de combustível do carro por Km;
3 - Distância em quilômetros da viagem.
*/
const valorCombustivel = 5.13;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const valorGasto = (distanciaEmKm / kmPorLitro) * valorCombustivel;
console.log(valorGasto.toFixed(2));
