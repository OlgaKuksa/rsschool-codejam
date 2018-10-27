const assert = require("assert");
const make = require("../src/make");

describe("make - works with sum function", () => {
  function sum(a, b) {
    return a + b;
  }
  it("returns valid result for sample data", () => {
    const res = make(15)(34, 21, 666)(41)(sum);
    assert.equal(res, 777);
  });
  it("returns valid result for 3 single parameters data", () => {
    const res = make(15)(34)(41)(sum);
    assert.equal(res, 90);
  });
  it("returns valid result for single parameter (1 value)", () => {
    const res = make(15)(sum);
    assert.equal(res, 15);
  });
  it("returns valid result for single parameter (multiple values)", () => {
    const res = make(15, 22, 14, 1)(sum);
    assert.equal(res, 52);
  });
  it("returns undefined when nothing's passed as 1st parameter", () => {
    const res = make()(sum);
    assert.equal(res, undefined);
  });
});

describe("make - works with another 2-parameter function", () => {
  function concatStrings(a, b) {
    return a + b;
  }
  it("returns valid result for concated strings", () => {
    const res = make("hello", ", ")("Jon ", "Snow")("!")(concatStrings);
    assert.equal(res, "hello, Jon Snow!");
  });
});
