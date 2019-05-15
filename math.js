class MathObject {
  constructor(name) {
    this.name = name;
  }
}

const PI = 3.14;

const sum = (arg1, arg2) => {
  return arg1 + arg2;
};

module.exports = { sum: sum, PI: PI, MathObject: MathObject };
