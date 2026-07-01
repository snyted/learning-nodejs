// --- Exemplo básico
let pessoa: [string, string, number];

pessoa = ['Laura', 'Seller', 23]

// pessoa = [23, 'Laura', 'Seller' ] // Sintax Error

// --- Exemplo com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍌', '🍎', '🍇', '🍉'];
// console.log(...listaFrutas);

// --- Exemplo com labels
let pessoa2: [nome: string, posicao: string, idade: number] = ['Laura', 'Seller', 23];

// --- Exemplo com lista Heterogenea
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]

// --- Exemplo com func
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades]
}
let result = listarPessoas(['Vitor', 'Laura'], [25, 23]);
console.log(result)

// --- Junção dos exemplos

type Nome =
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome]
}

console.log(criarPessoa("Vitor", "Farias"))
console.log(criarPessoa("João", "Vitor", "Farias"))