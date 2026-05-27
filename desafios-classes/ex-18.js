class SaldoInsuficienteError extends Error {
    constructor(message) {
        super(message)
        this.name = "SaldoInsuficienteError"
    }
}

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
            throw new SaldoInsuficienteError('Saque negado por suspeita de fraude.')
        }

        if (valor > this.saldo) {
            throw new SaldoInsuficienteError('Valor insuficiente para saque.')
        }

        this.saldo -= valor;
        console.log('Saque concluído!')
    }

    #verificarFraude(valor) {
        return valor > 1000;
    }
}

let cliente1 = new ContaBancaria("Vitor", 200);

try {
    cliente1.sacar(300)
} catch (error) {
    console.log(error)
    if (error instanceof SaldoInsuficienteError) {
        console.error(`Erro de negócio: ${error.message}`)
        return;
    }

    console.error(`Erro crítico no Servidor: ${error}`)
}