const Candy = require("./candy");

describe("Candy", () => {
  it("returns candy name", () => {
    const candy = new Candy("Mars", 4.99);

    expect(candy.getName()).toEqual("Mars");
  });

  it("returns candy price", () => {
    const candy = new Candy("Mars", 4.99);

    expect(candy.getPrice()).toEqual(4.99);
  });
});
