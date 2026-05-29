export interface IContaBancaria {
    titular: string,
    saldo: number,
}

class ContaBancaria implements IContaBancaria {
    constructor(public titular: string, public saldo: number = 0) {
    }
}

let usuario1 = new ContaBancaria('Vitor')
let usuario2 = new ContaBancaria('Laura', 300)
// let usuario3 = new ContaBancaria('Julia', 'Ola')

console.log(usuario1, usuario2)