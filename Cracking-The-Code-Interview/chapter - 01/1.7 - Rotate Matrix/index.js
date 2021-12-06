function rotate (matrix) {
  const n = matrix.length
  const x = Math.floor(n / 2)
  const y = n - 1

  for (let r = 0; r < x; r++) {
    for (let c = r; c < y - r; c++) {
      tmp = matrix[r][c]
      matrix[r][c] = matrix[y - c][r]
      matrix[y - c][r] = matrix[y - r][y - c]
      matrix[y - r][y - c] = matrix[c][y - r]
      matrix[c][y - r] = tmp
    }
  }
  return matrix
}
