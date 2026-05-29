import type { IContaBancaria } from "./ex-03.js";

class ContaBancaria implements IContaBancaria{
  constructor(public titular: string, public saldo: number = 0) {
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log(`Valor insuficiente para saque.`);
      return;
    }

    this.saldo -= valor;
  }
}

let cliente1 = new ContaBancaria("Vitor", 200);
let cliente2 = new ContaBancaria("Vitor");

cliente1.depositar(500);
console.log(cliente1.saldo);

cliente1.sacar(300);
console.log(cliente1.saldo);

cliente1.sacar(500);
console.log(cliente1.saldo);
