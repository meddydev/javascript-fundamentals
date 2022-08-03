const fizzBuzz = require("../../conditionals/fizzBuzz");

describe("fizzBuzz", () => {
  it("returns 'Fizz' for number with factor 3 (but not 5)", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("returns 'Buzz' for number with factor 5 (but not 3)", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("returns 8 for when no factor of 3 or 5", () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it("returns 'FizzBuzz' for number with factors of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("returns 'Fizz' for 18", () => {
    expect(fizzBuzz(18)).toBe("Fizz");
  });

  it("returns 'Buzz' for 20", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
});
