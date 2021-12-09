// copthuy
solution = (a, b, v) => ((b = new Set(b)), a.some(e => b.has(v - e)))


// jakzo
function solutionPointers (a, b, v) {
  'use strict'
  const length = a.length

  // Sort a and b so that we can iterate through them in order
  a.sort((x, y) => x - y)
  b.sort((x, y) => x - y)

  let i = 0,
    j = b.length - 1,
    x = a[i],
    y = b[j]
  while (i < length && j >= 0) {
    if (x + y < v) x = a[++i]
    else if (x + y > v) y = b[--j]
    else return true
  }
  return false
}


// tom
function solution (a, b, v) {
  const setB = new Set(b)
  return a.some(vA => setB.has(v - vA))
}
