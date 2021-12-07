// haynar
function solution (inputString) {
  return [...inputString].reverse().join('') === inputString
}


// egrodo
function solution (inp) {
  for (let i = 0, j = inp.length - 1; i <= j; ++i, --j) {
    if (inp[i] !== inp[j]) return false
  }
  return true
}


// phpyuz
solution = i => {
  return i.split``.reverse().join`` == i
}
