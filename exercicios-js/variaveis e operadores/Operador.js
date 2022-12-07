/*
Faça um programa para calcular o valor de uma viagem.

Você tera 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em Km da viagem
*/
const precoGasolina = 6.56;
const precoEtanol = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const combustivelUsado = 'Gasolina';

if (combustivelUsado === 'Etanol') {
    const valorGasto = (distanciaEmKm / kmPorLitro) * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = (distanciaEmKm / kmPorLitro) * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
