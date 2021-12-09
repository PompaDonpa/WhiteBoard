function solution (inputString) {
  const array = inputString.split('.')

  if (array.length !== 4) return false

  for (let digit of array) {
    let number = parseInt(digit)
    if (!digit || isNaN(number)) return false
    if (number > 255) return false
    if (digit.length !== number.toString().length) return false
  }
  return true
}
