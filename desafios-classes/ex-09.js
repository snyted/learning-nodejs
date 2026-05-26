class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log(`${this.nome} fez um barulho`);
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log('Au au!');
    }
}

let cachorro1 = new Cachorro('Marley')
console.log(cachorro1);
cachorro1.fazerSom();

let animal1 = new Animal('Papagaio')
animal1.fazerSom();