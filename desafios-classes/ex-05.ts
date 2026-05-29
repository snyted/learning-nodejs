class Product {
  constructor(public name: string, public price: number) {
  }

  get formatedPrice(): string {
    return `R$ ${this.price.toFixed(2)}`;
  }
}

let compra1 = new Product("Shampoo", 20.3);
let compra2 = new Product("Shampoo", 25.376);

console.log(compra1.formatedPrice);
console.log(compra2.formatedPrice);

// Esse aqui é um outro exemplo
// class Product2 {
//   get formatedPrice(): string {
//     return `R$ ${this.price.toFixed(2)}`;
//   }
// }
// De acordo com o estudo, atribuir um valor de forma manual, e não quando for instanciar
// um objeto, é uma prática ruim, então o primeiro exemplo segue sendo o certo.
// let testCompra1 = new Product2();
// testCompra1.name = "Shampoo";
// testCompra1.price = 30.3;

// console.log(testCompra1);
