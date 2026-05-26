class Carro {
    static totalCarrosInstanciados = 0

    constructor(nome) {
        this.nome = nome;
        Carro.totalCarrosInstanciados++;
    }

    static carrosTotais() {
        return this.totalCarrosInstanciados;
    }
}

let carro1 = new Carro()
let carro2 = new Carro()
let carro3 = new Carro()

console.log(Carro.carrosTotais())

console.log(Carro.totalCarrosInstanciados)