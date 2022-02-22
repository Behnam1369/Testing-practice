const stringLength = require('./task1');

test('string length check ', () => {
  //Arrange
  let str = 'Behnam'

  //Act
  const result = stringLength(str)

  //Assert
  expect(result).toBe(6);
});

test('Zero length check ', () => {
  //Arrange
  let str = ''

  //Act
  const result = (str) => stringLength(str)

  //Assert
  expect(result).toThrow(Error);
});

test('greater than 10 length check ', () => {
  //Arrange
  let str = 'Behnam Aghaali'

  //Act
  const result = (str) => stringLength(str)

  //Assert
  expect(result).toThrow(Error);
});