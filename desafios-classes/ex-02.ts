import type { IPessoa } from './ex-01.js';
class Pessoa implements IPessoa {
    constructor(public nome: string, public idade: number) {
    }

    apresentar(): string  {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos`
    }
}

let pessoa1 = new Pessoa('Vitor', 25);
let pessoa2 = new Pessoa('Laura', 22);

console.log(pessoa1.apresentar())