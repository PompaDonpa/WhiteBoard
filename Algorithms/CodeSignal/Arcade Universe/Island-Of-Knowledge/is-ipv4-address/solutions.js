// myjin
function solution (s) {
  var r = s.split('.')
  return (
    r.length === 4 && r.every(x => x != '' && !isNaN(x) && x >= 0 && x < 256)
  )
}


//   Olexa
const solution = inputString =>
  /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(?!$)|$)){4}$/.test(inputString)


//   shu_c4
function solution (inputString) {
  /*  InputString is a String, not a number.
   *  test cases has empty string, spaces, numbers with characters... */

  let each = inputString.split('.')
  let count = 0
  if (each.length != 4) return false
  else
    for (value of each)
      if (
        value.match(/\D/g) !== null ||
        value == '' ||
        value < 0 ||
        value > 255
      )
        return false

  return true
}


// pedro_h12
function solution (inputString) {
  const matches = inputString.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/)
  if (matches === null || matches.length !== 5) {
    return false
  }

  for (let index = 1; index < 5; index++) {
    if (matches[index] < 0 || matches[index] > 255) {
      return false
    }
  }
  return true
}
