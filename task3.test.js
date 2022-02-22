const Calculator = require('./task3');

describe('Claculator add method tests', () => {
  test('8+3 should be 11 ', () => {
    //Arrange
    let num1 = 8
    let num2 = 3
    let calc = new Calculator();

    //Act
    const result = calc.add(num1, num2);

    //Assert
    expect(result).toBe(11);
  });

  test('0+0 should be 0 ', () => {
    //Arrange
    let num1 = 0
    let num2 = 0
    let calc = new Calculator();

    //Act
    const result = calc.add(num1, num2);

    //Assert
    expect(result).toBe(0);
  });

  test('"string" + 3 should throw error ', () => {
    //Arrange
    let num1 = "string"
    let num2 = 3
    let calc = new Calculator();

    //Act
    const result = () => calc.add(num1, num2);

    //Assert
    expect(result).toThrow(Error);
  });
})

describe('Claculator subtract method tests', () => {

  test('20-7 should be 13 ', () => {
    //Arrange
    let num1 = 20
    let num2 = 7
    let calc = new Calculator();

    //Act
    const result = calc.subtract(num1, num2);

    //Assert
    expect(result).toBe(13);
  });

  test('4-7 should be -3 ', () => {
    //Arrange
    let num1 = 4
    let num2 = 7
    let calc = new Calculator();

    //Act
    const result = calc.subtract(num1, num2);

    //Assert
    expect(result).toBe(-3);
  });

  test('"string" - 3 should throw error ', () => {
    //Arrange
    let num1 = "string"
    let num2 = 3
    let calc = new Calculator();

    //Act
    const result = () => calc.subtract(num1, num2);

    //Assert
    expect(result).toThrow(Error);
  });
});


describe('Claculator devide method tests', () => {

  test('20/7 should be 13 ', () => {
    //Arrange
    let num1 = 20
    let num2 = 7
    let calc = new Calculator();

    //Act
    const result = calc.divide(num1, num2);

    //Assert
    expect(result).toBe(20 / 7);
  });

  test('devide by zero should throw error ', () => {
    //Arrange
    let num1 = 5
    let num2 = 0
    let calc = new Calculator();

    //Act
    const result = () => calc.divide(num1, num2);

    //Assert
    expect(result).toThrow(Error('Divide by zero encountered'));
  });

  test('"string"/3 should throw error ', () => {
    //Arrange
    let num1 = "string"
    let num2 = 3
    let calc = new Calculator();

    //Act
    const result = () => calc.divide(num1, num2);

    //Assert
    expect(result).toThrow(Error);
  });
});


describe('Claculator multiply method tests', () => {
  test('20*7 should be 140 ', () => {
    //Arrange
    let num1 = 20
    let num2 = 7
    let calc = new Calculator();

    //Act
    const result = calc.multiply(num1, num2);

    //Assert
    expect(result).toBe(140);
  });

  test('5*0 should be 0 ', () => {
    //Arrange
    let num1 = 5
    let num2 = 0
    let calc = new Calculator();

    //Act
    const result = calc.multiply(num1, num2);

    //Assert
    expect(result).toBe(0);
  });

  test('5*"string" should throw error ', () => {
    //Arrange
    let num1 = 5
    let num2 = "string"
    let calc = new Calculator();

    //Act
    const result = () => calc.multiply(num1, num2);

    //Assert
    expect(result).toThrow(Error);
  });
});