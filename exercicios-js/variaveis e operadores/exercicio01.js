/*
  1) Faça um algortmo que dada as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média e a sua classificação conforme a tabela abaixo.

  media = (nota1 + nota2 + nota3) / 3;

  Classificação:
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre.
*/

const nota1 = 6;
const nota2 = 6.5;
const nota3 = 8.5;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Está reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Está em recuperação');
} else {
    console.log('Passou de semestre');
}

