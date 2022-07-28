class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    this.basket.push(candy);
    return undefined;
  }

  getTotalPrice() {
    if (this.basket.length > 0) {
      return this.basket
        .map((candy) => candy.price)
        .reduce((prev, current) => prev + current);
    } else {
      return 0;
    }
  }
}

module.exports = ShoppingBasket;
