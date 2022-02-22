const stringLength = (str) => {
  switch (str.length) {
    case str.length < 1:
      throw Error('input is empty')
    case str.length > 10:
      throw Error('input is longer than 10 characters');
    default:
      return str.length
  }
}

module.exports = stringLength