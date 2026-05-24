class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get formatedPrice() {
    return `R$ ${this.price.toFixed(2)}`;
  }

  set price(newPrice) {
    if (newPrice <= 0) {
      throw new Error("O preço deve ser maior que zero.");
    }
    this._price = newPrice;
  }

  get price() {
    return this._price;
  }
}

let compra1 = new Product("Shampoo", 20.3);
let compra2 = new Product("Shampoo", 25.376);
let erro = new Product("Banana", -5);
let erro2 = new Product("Banana", 0);
