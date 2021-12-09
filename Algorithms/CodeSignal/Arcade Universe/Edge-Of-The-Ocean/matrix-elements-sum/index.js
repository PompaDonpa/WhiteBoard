function solution (matrix) {
  let upper = Array(matrix[0].length).fill(true)
  let total = 0

  for (let row of matrix) {
    let sum = row.reduce((s, v, i, row) => {
      if (upper[i]) {
        return s + v
      } else {
        row[i] = 0
        return s + 0
      }
    }, 0)
    total += sum
    upper = row.map(v => (v ? true : false))
  }
  return total
}
