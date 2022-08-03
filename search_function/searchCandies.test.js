const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("returns candies beginning with 'Ma' that cost less than 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it("returns candies beginning with 'Ma' that cost less than 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("returns candies beginning with 'S' that cost less than 10", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });

  it("returns candies beginning with 'S' that cost less than 4", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });

  it("returns correct candies when prefix given in lowercase", () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});
