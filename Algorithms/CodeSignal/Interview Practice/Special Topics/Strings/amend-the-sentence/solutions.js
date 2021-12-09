// copthuy
solution = s => s.replace(/(.)(?=[A-Z])/g, '$1 ').toLowerCase()


// assaf_r
function solution (s) {
  return s
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .trim()
}


// cstupi
function solution (s) {
  let res = ''
  for (let c of s) {
    if (c.toUpperCase() == c) {
      res += ' ' + c.toLowerCase()
    } else {
      res += c
    }
  }
  return res.trim()
}
