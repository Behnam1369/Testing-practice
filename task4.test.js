const capitalize = require('./task4');

test('"behnam" should turn to "Behnam" ', () => {
  //Arrange
  let str = "behnam"

  //Act
  const result = capitalize(str);

  //Assert
  expect(result).toBe("Behnam");
});

test('65465 should throw an error ', () => {
  //Arrange
  let str = 65465

  //Act
  const result = () => capitalize(str);

  //Assert
  expect(result).toThrow(Error);
});