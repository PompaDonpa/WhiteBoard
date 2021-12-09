# Sudoku 2

### Sudoku is a number-placement puzzle. The objective is to fill a `9 × 9` grid with numbers in such a way that each column, each row, and each of the nine `3 × 3` sub-grids that compose the grid all contain all of the numbers from `1` to `9` one time.

<br />


Implement an algorithm that will check whether the given `grid` of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by `grid` does not have to be solvable.

<br />

`Example`

For

<br />

```rust
grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
```

he output should be

`solution(grid) = true`;

<br />

<br />


```javascript
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
```

```javascript
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
```


