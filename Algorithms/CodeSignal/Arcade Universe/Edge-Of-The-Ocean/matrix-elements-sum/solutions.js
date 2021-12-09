// myxinjin
function solution (matrix) {
  for (var r = 0, j = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break
      else r += matrix[i][j]
    }
  }
  return r
}


//   devsnake
function solution (matrix) {
  return matrix
    .map((array, matrixIndex, list) => {
      list[matrixIndex] = array.map((x, index, list) => {
        if (matrixIndex === 0) return x
        return matrix[matrixIndex - 1][index] === 0 ? 0 : x
      })
      return list[matrixIndex]
    })
    .reduce((acc, value) => {
      value.forEach(i => (acc += i))
      return acc
    }, 0)
}
