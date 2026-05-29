class Product {
  private _price!: number;
  constructor(public name: string, price: number) {
    this.price = price;
  }

  get formatedPrice(): string {
    return `R$ ${this._price.toFixed(2)}`;
  }

  set price(newPrice: number) {
    if (newPrice <= 0) {
      throw new Error("O preço deve ser maior que zero.");
    }
    this._price = newPrice;
  }

  get price(): number {
    return this._price;
  }
}

let compra1 = new Product("Shampoo", 20.3);
let compra2 = new Product("Shampoo", 25.376);
// let erro = new Product("Banana", -5);
// let erro2 = new Product("Banana", 0);

console.log(compra1, compra2)
console.log(compra2.formatedPrice)