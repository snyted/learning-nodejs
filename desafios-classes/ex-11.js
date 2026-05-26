class Funcionario {
    bonus = 0.1;

    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
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
}

let funcionario1 = new Gerente('Vitor', 7000, 'Dev');
let funcionario2 = new Funcionario('func2', 3000);
let funcionario3 = new Funcionario('func3', 7000);


console.log(funcionario1.calcularBonus(), funcionario2.calcularBonus(), funcionario3.calcularBonus());