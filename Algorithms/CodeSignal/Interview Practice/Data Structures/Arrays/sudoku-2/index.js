function solution (grid) {
  const repeated = new Set()

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid.length; c++) {
      if (grid[r][c] !== '.') {
        current = grid[r][c]
        if (
          repeated.has(current + ' found in row ' + r) ||
          repeated.has(current + ' found in column ' + c) ||
          repeated.has(
            current + ' found in box ' + ((r / 3) | 0) + '-' + ((c / 3) | 0)
          )
        ) {
          return false
        }
        repeated
          .add(current + ' found in row ' + r)
          .add(current + ' found in column ' + c)
          .add(current + ' found in box ' + ((r / 3) | 0) + '-' + ((c / 3) | 0))
      }
    }
  }
  return true
}
