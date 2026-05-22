class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo ?? 0;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log(`Valor insuficiente para saque.`);
      return;
    }

    this.saldo -= valor;
  }
}

let cliente1 = new ContaBancaria("Vitor", 200);

cliente1.depositar(500);
console.log(cliente1.saldo);

cliente1.sacar(300);
console.log(cliente1.saldo);

cliente1.sacar(500);
console.log(cliente1.saldo);
