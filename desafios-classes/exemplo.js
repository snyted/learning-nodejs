function pessoa(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(pessoa('Vitor', 25))


class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    get apresentar() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

let pessoa1 = new Pessoa('Laura', 22)

pessoa1.apresentar
