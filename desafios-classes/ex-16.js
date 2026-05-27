class Forma {
    constructor() {
        console.log(new.target)
        if (new.target === Forma) {
            throw new Error('Apenas as classes filhas devem poder ser instanciadas.')
        }
    }
    calcularArea() {
        throw new Error('O métododo calcularArea() deve ser implementado na classe filha.')
    }
}

class Quadrado extends Forma {
    constructor(base, altura) {
        super()
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super()
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * (this.raio ** 2);
    }
}

// console.log(new Forma())
// console.log(new Forma().calcularArea())
console.log(new Quadrado(5, 10))