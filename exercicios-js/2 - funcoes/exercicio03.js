/*
  3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço nornal de etiqueta e a escolha da condição de pagamento.
  Ultilize os códigos da tabela asseguir para ler qual a condição de pagamento escolhiida e efetuar o cálculo adequado.

  Código Condição de pagamento:
  1 - À vista Débito, recebe 10% de desconto;
  2 - À vista no Dinheiro ou Pix, recebe 15% de desconto;
  3 - Em duas vezes, preço normal da etiqueta sem juros;
  4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%.
*/

//  Desta vez utilizando funções, com função imediatamente invocada

function calcularDesconto(preco, desconto) {
    return preco - (preco * (desconto / 100));
}

function calcularJuros(preco, juros) {
    return preco + (preco * (juros / 100));
}

(function () {
    const preco = 100;
    const formaDePagamento = 4;
    
    if (formaDePagamento === 1) {
        console.log(calcularDesconto(preco, 10));
    } else if (formaDePagamento === 2) {
        console.log(calcularDesconto(preco, 15));
    } else if (formaDePagamento === 3) {
        console.log(preco);
    } else if (formaDePagamento === 4) {
        console.log(calcularJuros(preco, 10));
    } else {
        console.log('Opção inválida.');
    }
})();
