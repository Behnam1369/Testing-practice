class Claculator {
  constructor() { }

  add(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw Error('both arguments should be number');
    } else {
      return num1 + num2;
    }
  }

  subtract(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw Error('both arguments should be number');
    } else {
      return num1 - num2;
    }
  }

  divide(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw Error('both arguments should be number');
    } else if (num2 == 0) {
      throw Error('Divide by zero encountered');
    } else {
      return num1 / num2;
    }
  }

  multiply(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw Error('both arguments should be number');
    } else {
      return num1 * num2;
    }
  }
}

module.exports = Claculator;