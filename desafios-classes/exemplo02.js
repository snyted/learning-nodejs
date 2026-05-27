class Exemplo02 {
    static increment = 0

    constructor(valor) {
        this.valor = valor;
        Exemplo02.increment += this.valor
    }

    static total() {
        return this.increment;
    }

    total02() {
        return this.increment
    }

    static get totalIncrement() {
        return this.increment
    }
}

let ex01 = new Exemplo02(5)
let ex02 = new Exemplo02(5)
let ex03 = new Exemplo02(5)

console.log(Exemplo02.total())

// console.log(ex01.total())

console.log(ex01.total02())

console.log(ex01.valor)

console.log(Exemplo02.increment)


Exemplo02.increment = 9

console.log(Exemplo02.increment)

Exemplo02.increment = ex01.valor

console.log(Exemplo02.increment)

console.log(ex01.increment)
console.log(ex01.incrementtt)

console.log(ex01.totalIncrement)

console.log(Exemplo02.totalIncrement)