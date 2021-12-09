// daniel_m47
solution = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())


// joshep
function solution (a) {
  return a[0].map((col, i) => a.map(row => row[i]).reverse())
}


//bintay
function solution (a) {
  // Transpose
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < i; j++) {
      // Switch a[i][j] and a[j][i]
      // With XOR swap
      a[i][j] ^= a[j][i]
      a[j][i] ^= a[i][j]
      a[i][j] ^= a[j][i]
    }
  }

  // Reverse columns
  for (var i in a) {
    a[i] = a[i].reverse()
  }

  return a
}
