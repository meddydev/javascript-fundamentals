const multiply = require("./multiply");

describe("multiply", () => {
  it("multiplies 3 and 4", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("multiplies 0 and 5", () => {
    expect(multiply(0, 5)).toBe(0);
  });
});
