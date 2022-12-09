/*
  1) Faça um algortmo que dada as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média e a sua classificação conforme a tabela abaixo.

  media = (nota1 + nota2 + nota3) / 3;

  Classificação:
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre.
*/

//  Desta vez utilizando funções

function encontrarMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function mostrarClassificacao(media) {
    if (media < 5) {
        return 'Está reprovado';
    } else if (media >= 5 && media <= 7) {
        return 'Está em recuperação';
    } else {
        return 'Passou de semestre';
    }
}

const nota1 = 6;
const nota2 = 6.5;
const nota3 = 8.5;
const media = encontrarMedia(nota1, nota2, nota3);

console.log(mostrarClassificacao(media));
