const capitalize = (str) => {
  if (typeof str === "string") {
    const [first, ...rest] = str.split('');
    return [first.toUpperCase(), ...rest].join('');
  } else {
    throw Error('parameter is not a string');
  }
}

module.exports = capitalize;