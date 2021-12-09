// haynar
function solution (a) {
  var s = a.filter(h => h > 0).sort((a, b) => a - b)
  return a.map(p => {
    if (p !== -1) {
      return s.shift()
    }

    return -1
  })
}


// august_g1
function solution (a) {
  let filtered = a.filter(val => val !== -1)
  let sorted = filtered.sort((a, b) => a - b)
  return a.map(val => (val === -1 ? -1 : sorted.shift()))
}


// Olexa
const solution = a =>
  (arr => a.map(val => (~val ? arr.shift() : -1)))(
    a.filter(val => ~val).sort((a, b) => a - b)
  )

  
// muihaela_b1
function solution (a) {
  const noTrees = a.filter(x => x != -1)
  noTrees.sort((p, q) => p - q)
  return a.map((h, i) => (h == -1 ? -1 : noTrees.shift()))
}
