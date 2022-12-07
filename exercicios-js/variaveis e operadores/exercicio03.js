/*
  3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço nornal de etiqueta e a escolha da condição de pagamento.
  Ultilize os códigos da tabela asseguir para ler qual a condição de pagamento escolhiida e efetuar o cálculo adequado.

  Código Condição de pagamento:
  1 - À vista Débito, recebe 10% de desconto;
  2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
  3 - Em duas vezes, preço normal da etiqueta sem juros;
  4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%.
*/

const precoNormal = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoNormal - precoNormal * (10 / 100));
} else if (formaDePagamento === 2) {
    console.log(precoNormal - precoNormal * (15 / 100));
} else if (formaDePagamento === 3) {
    console.log(precoNormal);
} else if (formaDePagamento === 4) {
    console.log(precoNormal + precoNormal * (10 / 100));
} else {
    console.log('Opção inválida.');
}
