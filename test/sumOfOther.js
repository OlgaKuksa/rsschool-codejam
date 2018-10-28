const assert = require("assert");
const sumOfOther = require("../src/sumOfOther");

describe("sumOfOther retuns array of sums for valid integers input", () => {
  it("4-length non-zero array input", () => {
    const res = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(res, [8, 7, 6, 9]);
  });
  it("4-length zero array input", () => {
    let arrayZero = [0, 0, 0, 0];
    const res = sumOfOther(arrayZero);
    assert.deepEqual(res, arrayZero);
  });
  it("1-length array input", () => {
    const res = sumOfOther([2]);
    assert.deepEqual(res, [0]);
  });
  it("0-length array input", () => {
    const res = sumOfOther([]);
    assert.deepEqual(res, []);
  });
  it("2-length array input", () => {
    const res = sumOfOther([3, 2]);
    assert.deepEqual(res, [2, 3]);
  });
  it("40-length array input", () => {
    let itemRes = 39 * 11;
    const res = sumOfOther(new Array(40).fill(11));
    assert.deepEqual(res, new Array(40).fill(itemRes));
  });
});
