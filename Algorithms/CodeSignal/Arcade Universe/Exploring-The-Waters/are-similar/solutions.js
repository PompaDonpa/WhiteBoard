// wanicode
function solution (a, b) {
  const ad = a.filter((v, i) => v != b[i])
  const bd = b.filter((v, i) => v != a[i])
  return (
    ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
  )
}


// bandorhild
function solution (a, b) {
  sum = 0
  for (i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      sum++
    }
  }
  a.sort()
  b.sort()
  return a.toString() == b.toString() && sum < 3
}


// volant
function solution (a, b) {
  const is = a.reduce((a, e, i) => (e !== b[i] ? [...a, e + b[i]] : a), [])
  return is.length === 0 || (is.length === 2 && is[0] === is[1])
}
