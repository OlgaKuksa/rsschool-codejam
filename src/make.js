module.exports = function make() {
  let args = [];
  function innerMake() {
    if (arguments.length === 1 && typeof arguments[0] === "function") {
      let accumulator = args[0];
      for (let i = 1; i < args.length; i++) {
        accumulator = arguments[0](accumulator, args[i]);
      }
      return accumulator;
    }
    Array.from(arguments).forEach(item => args.push(item));
    return innerMake;
  };
  Array.from(arguments).forEach(item => args.push(item));
  return innerMake;
};
