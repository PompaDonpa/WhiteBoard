// codeedog
solution = a => a.reduce((p, v, i) => ((p[i & 1] += v), p), [0, 0])

// binaty1
function solution (a) {
  var res = [0, 0]
  for (var i in a) {
    res[i % 2] += a[i]
  }
  return res
}
