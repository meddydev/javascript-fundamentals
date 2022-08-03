class ShoppingBasket {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let prices = this.items.map((item) => item.getPrice());
    let sum = 0;

    prices.forEach((price) => (sum += price));

    return sum - this.discount;
  }

  addItem(item) {
    this.items.push(item);
  }
}

module.exports = ShoppingBasket;
