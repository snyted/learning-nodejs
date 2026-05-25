class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo ?? 0;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {

        if (this.#verificarFraude(valor)) {
            console.error('Saque negado');
            return;
        }

        if (valor > this.saldo) {
            console.log(`Valor insuficiente para saque.`);
            return;
        }

        this.saldo -= valor;
    }

    #verificarFraude(valor) {
        return valor > 1000;
    }
}

let cliente1 = new ContaBancaria("Vitor", 200);

cliente1.depositar(500);
console.log(cliente1.saldo);

cliente1.sacar(300);
console.log(cliente1.saldo);
cliente1.sacar(500);
console.log(cliente1.saldo);

let cliente2 = new ContaBancaria("Vitor", 20000)

console.log(cliente2.saldo)

cliente2.sacar(12000)
console.log(cliente2.saldo)
cliente2.sacar(10000)
