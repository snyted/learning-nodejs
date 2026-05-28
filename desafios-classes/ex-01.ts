interface IPessoa {
    nome: string,
    idade: number,
}

class Pessoa implements IPessoa {
    constructor(public nome: string, public idade: number) {
    }
}

let pessoa1 = new Pessoa('Vitor', 25);
let pessoa2 = new Pessoa('Laura', 22);

console.log(pessoa1, pessoa2)