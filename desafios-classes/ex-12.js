class Funcionario {
    bonus = 0.1;

    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    get apresentar() {
        return `Olá me chamo ${this.nome}`
    }

    calcularBonus() {
        return this.salarioBase * this.bonus;
    }
}

class Gerente extends Funcionario {
    bonus = 0.2;

    constructor(nome, salarioBase, departamento) {
        super(nome, salarioBase);
        this.departamento = departamento;
    }

    get apresentar() {
        return super.apresentar + `, e sou do departamento ${this.departamento}`
    }
}

let funcionario1 = new Gerente('Vitor', 7000, 'Dev');
let funcionario2 = new Funcionario('Amanda', 3000);
let funcionario3 = new Funcionario('Julia', 7000);

console.log(funcionario1.apresentar)
console.log(funcionario2.apresentar)
