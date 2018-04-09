const findDigit = require("../src/findDigit");

describe.only("find a digit", () => {
  it("should return 5 ", () => {
    expect(findDigit(5673, 4)).toEqual(5);
  });

  it("should return 2", () => {
    expect(findDigit(129, 2)).toEqual(2);
  });

  it("should return 8", () => {
    expect(findDigit(-2825, 3)).toEqual(8);
  });

  it("should return 0", () => {
    expect(findDigit(-456, 4)).toEqual(0);
  });

  it("should return second 0", () => {
    expect(findDigit(0, 20)).toEqual(0);
  });

  it("should return -1", () => {
    expect(findDigit(65, 0)).toEqual(-1);
  });

  it("should return -1", () => {
    expect(findDigit(24, -8)).toEqual(-1);
  });
});

