
/*
  Listas/arrays são criadas usando []
*/

const alunos = ['João', 'Vitor', 'Marina'];

// acessar o primeiro elemento (começa sempre no 0):
console.log(alunos[0]);
console.log(alunos);
// adicionar aluno no fim da lista
alunos.push('Renan');
console.log(alunos);
// adicionar aluno em local específico (pode substituir)
alunos[4] = 'Vinícius';
console.log(alunos);
// remover último item da lista 'pop' e o primeiro com 'shift'
alunos.pop();
alunos.shift();
console.log(alunos);

/*
  Utilizando a estrutura de repetição 'for'
*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);
notas.push(8);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = soma + nota
}

const media = soma / notas.length;
console.log(media);
