// let nomeVariavel: TypeAnnotation = valor;

function adicionarNumeros(num1: number, num2: number) {
    return num1 + num2
}

// Variaveis
let nome: string = 'João Vitor'
// let nome: string = 1 | Erro: O TS espera um tipo 'string'
console.log(nome)

// Arrays
let animais: string[] = ['Elefante', 'Cachorro', 'Gato']

// Objetos
let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 }
console.log(carro)

// Functions
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2
}

console.log(multiplicarNumeros(3, 5))