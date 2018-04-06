// Test cases: actual --> expected
const decodeMessage = require("../src/decodeMessage");

describe.only("reverse alphabets order", () => {
  // decodeMessage("a") --> "z"
  it("should return z when given a", () => {
    expect(decodeMessage("a")).toEqual("z");
  });

  // decodeMessage("z") --> "a"
  it("should return a when given z", () => {
    expect(decodeMessage("z")).toEqual("a");
  });

  // decodeMessage("b") --> "y"
  it("should return y when given b", () => {
    expect(decodeMessage("b")).toEqual("y");
  });

  // decodeMessage("y") --> "b"
  it("should return b when given y", () => {
    expect(decodeMessage("y")).toEqual("b");
  });

  // decodeMessage("ab") --> "zy"
  it("should return zy when given ab", () => {
    expect(decodeMessage("ab")).toEqual("zy");
  });

  // decodeMessage("sr") --> "hi"
  it("should return hi when given sr", () => {
    expect(decodeMessage("sr")).toEqual("hi");
  });

  // decodeMessage("svool") --> "hello"
  it("should return hello when given svool", () => {
    expect(decodeMessage("svool")).toEqual("hello");
  });

  // decodeMessage("gsrh nvhhztv") --> "this message"
  it("should return this message when given gsrh nvhhztv ", () => {
    expect(decodeMessage("gsrh nvhhztv")).toEqual("this message");
  });

  // decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv") --> "i hope nobody decodes this message"
  it("should return this message when given string with mulitple spaces ", () => {
    expect(decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv")).toEqual(
      "i hope nobody decodes this message"
    );
  });
});
