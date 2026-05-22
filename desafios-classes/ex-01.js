class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }
}

let pessoa1 = new Pessoa('Vitor', 25);
let pessoa2 = new Pessoa('Laura', 22);

console.log(pessoa1, pessoa2)