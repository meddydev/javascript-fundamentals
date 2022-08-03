const ShoppingBasket = require("./shoppingBasket");

describe("ShoppingBasket", () => {
  it("returns total price of 0 when no items have been added", () => {
    const basket = new ShoppingBasket();

    expect(basket.getTotalPrice()).toEqual(0);
  });

  it("returns total price of 4.99 when one item of price 4.99 has been added", () => {
    const basket = new ShoppingBasket();
    const candyDouble = {
      getName: () => "Mars",
      getPrice: () => 4.99,
    };

    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it("returns correct price when multiple items have been added", () => {
    const basket = new ShoppingBasket();
    const candyDouble0 = {
      getName: () => "Mars",
      getPrice: () => 4.99,
    };

    const candyDouble1 = {
      getName: () => "Skittle",
      getPrice: () => 3.99,
    };

    const candyDouble2 = {
      getName: () => "Skittle",
      getPrice: () => 3.99,
    };

    basket.addItem(candyDouble0);
    basket.addItem(candyDouble1);
    basket.addItem(candyDouble2);

    expect(basket.getTotalPrice()).toEqual(12.97);
  });

  it("correctly applies a discount", () => {
    const candyDouble = {getPrice: () => 4.99}
    const basket = new ShoppingBasket();

    basket.addItem(candyDouble)
    basket.applyDiscount(2)

    expect(basket.getTotalPrice()).toEqual(2.99)
  })
});
