class Forma {
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

let forms = [new Quadrado(5, 10), new Quadrado(2, 8), new Circulo(3), new Circulo(7)];

forms.forEach(form => {
    console.log(form.calcularArea())
});
