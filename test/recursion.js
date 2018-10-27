const assert = require("assert");
const recursion = require("../src/recursion");

describe("recursion returns correct values for tree", () => {
  it("returns correct value from example", () => {
    const example = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } }
    };
    assert.deepEqual(recursion(example), [
      [100],
      [90, 120],
      [70, 99, 110, 130]
    ]);
  });

  it("returns correct value for asymmetric tree", () => {
    const example = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 } }
    };
    assert.deepEqual(recursion(example), [[100], [90, 120], [70, 99, 110]]);
  });

  it("returns correct value for single value tree", () => {
    const example = { value: 100 };
    assert.deepEqual(recursion(example), [[100]]);
  });

  it("returns correct value for deeper tree", () => {
    const example = {
      value: 100,
      left: {
        value: 90,
        left: { value: 70, left: { value: 1111 }, right: { value: 2222 } },
        right: { value: 99, left: { value: 3333 }, right: { value: 4444 } }
      },
      right: {
        value: 120,
        left: { value: 110, left: { value: 5555 }, right: { value: 6666 } },
        right: { value: 130, left: { value: 7777 }, right: { value: 8888 } }
      }
    };
    assert.deepEqual(recursion(example), [
      [100],
      [90, 120],
      [70, 99, 110, 130],
      [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888]
    ]);
  });

  it("returns [] for no value tree", () => {
    const example = {};
    assert.deepEqual(recursion(example), []);
  });

  it("returns valid results for tree without header", () => {
    const example = {
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } }
    };
    assert.deepEqual(recursion(example), [[90, 120], [70, 99, 110, 130]]);
  });
});
