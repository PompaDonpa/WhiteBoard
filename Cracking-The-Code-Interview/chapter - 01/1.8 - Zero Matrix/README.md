# Zero Matrix

-   Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

<br />

Solution

```javascript
const setZeroes = matrix => {
  const m = matrix.length
  const n = matrix[0].length

  let firstRow = matrix[0].some(x => !x)
  let firstCol = false

  for (let r = 0; r < m; r++) {
    if (!matrix[r][0]) {
      firstCol = true
      break
    }
  }

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (!matrix[r][c]) {
        matrix[r][0] = 0
        matrix[0][c] = 0
      }
    }
  }

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (!matrix[r][0] || !matrix[0][c]) {
        matrix[r][c] = 0
      }
    }
  }

  if (firstRow) {
    matrix[0] = Array(n).fill(0)
  }

  if (firstCol) {
    for (let r = 0; r < m; r++) {
      matrix[r][0] = 0
    }
  }

  return matrix
}

```