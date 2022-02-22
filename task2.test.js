const reverseString = require('./task2');

test('Check reversed word ', () => {
  //Arrange
  let str = 'Behnam'

  //Act
  const result = reverseString(str)

  //Assert
  expect(result).toBe('manheB');
});