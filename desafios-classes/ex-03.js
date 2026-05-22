class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo ?? 0 
    }
}

let usuario1 = new ContaBancaria('Vitor')
let usuario2 = new ContaBancaria('Laura', 300)
let usuario3 = new ContaBancaria('Julia', 'Ola')

console.log(usuario1, usuario2, usuario3)