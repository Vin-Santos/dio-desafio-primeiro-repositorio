// Atribuindo um objeto, funções dentro de objetos chamam-se se métodos
const vinicius = {
    nome: 'Vinícius',
    idade: 19,
    
    descrever: function () {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
}

// Adicionando valor 
vinicius.altura = 1.69;

// Imprimindo e usando métodos
console.log(vinicius.nome);
console.log(vinicius.idade);
console.log(vinicius.altura);
console.log(vinicius);
vinicius.descrever();

// mostra o atributo de forma mais dinâmica
const atributo = 'nome';
console.log(vinicius[atributo]);

// retribuir um valor na chave 'nome'
vinicius['nome'] = 'teste'
vinicius.nome = 'teste'

/*
Criando uma Classe 'Pessoa' para instanciar (criar) mais pessoas.
*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2022 - idade
    }
    
    descrever() {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
}

// Instanciando novas pessoas

const maria = new Pessoa('Maria Joana', 58);

const joao = new Pessoa('João da Silva', 70);

console.log(maria);
console.log(joao);

// Praticando o uso de objetos e classes, criando uma função para ver a pessoa mais velha.

function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade){
        console.log(pessoa1.nome + ' é mais velho(a)');
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(pessoa2.nome + ' é mais velho(a)');
    } else {
        console.log(pessoa1.nome + ' e ' + pessoa2.nome + ' têm a mesma idade');
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);

