class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

let pessoa1 = new Pessoa('Vitor', 25);
let pessoa2 = new Pessoa('Laura', 22);

pessoa1.apresentar()