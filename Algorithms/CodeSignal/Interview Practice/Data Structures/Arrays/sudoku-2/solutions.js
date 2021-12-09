// ivan_d
function solution (grid) {
  const valid = cb => {
    for (let i = 0; i < 9; i++) {
      const set = new Set()
      for (let j = 0; j < 9; j++) {
        const item = cb(i, j)
        if (item !== '.') {
          if (set.has(item)) {
            return false
          } else {
            set.add(item)
          }
        }
      }
    }
    return true
  }

  return (
    valid((i, j) => grid[i][j]) &&
    valid((i, j) => grid[j][i]) &&
    valid(
      (i, j) =>
        grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]
    )
  )
}


// bryan_duckwork
const solution = grid => {
  const rows = []
  const cols = []
  const subs = []
  for (let y = 0; y < 9; y++) {
    if (!rows[y]) rows[y] = {}
    for (let x = 0; x < 9; x++) {
      if (!cols[x]) cols[x] = {}
      const c = grid[y][x]
      if (c != '.') {
        const i = Math.floor(y / 3) * 3 + Math.floor(x / 3)
        if (!subs[i]) subs[i] = {}
        if (rows[y][c] || cols[x][c] || subs[i][c]) return false
        rows[y][c] = cols[x][c] = subs[i][c] = true
      }
    }
  }
  return true
}


// andrewylan
function solution (grid) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var c = grid[i][j]
      if (c !== '.') {
        // check row
        for (var z = 0; z < 9; z++) {
          if (j !== z && grid[i][z] === c) return false
        }
        // check column
        for (var z = 0; z < 9; z++) {
          if (i !== z && grid[z][j] === c) return false
        }
        // check square
        var a = i - (i % 3),
          b = j - (j % 3)
        for (var x = a; x < a + 3; x++) {
          for (var y = b; y < b + 3; y++) {
            if (x !== i && y !== j && grid[x][y] === c) return false
          }
        }
      }
    }
  }
  return true
}
