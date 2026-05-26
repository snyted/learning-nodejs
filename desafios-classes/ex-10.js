class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }


}

class Gerente extends Funcionario {
    constructor(nome, salarioBase, departamento) {
        super(nome, salarioBase);
        this.departamento = departamento
    }
}

let funcionario1 = new Gerente('Vitor', 7000, 'Dev')

console.log(funcionario1)