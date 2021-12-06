const oneAway = (first, second) => {
  const table = Array(second.length + 1)
    .fill()
    .map(() => Array(first.length + 1).fill(0))

  for (let r = 0; r <= second.length; r++) {
    for (let c = 0; c <= first.length; c++) {
      if (r === 0) table[r][c] = c - r
      if (c === 0) table[r][c] = r - c

      if (r !== 0 && c !== 0) {
        let min = Math.min(
          table[r - 1][c],
          table[r - 1][c - 1],
          table[r][c - 1]
        )
        table[r][c] =
          first[c - 1] == second[r - 1] ? table[r - 1][c - 1] : min + 1
      }
    }
  }

  return table[second.length][first.length] == 1
}

// oneAway('pale', 'ple')   => true
// oneAway('pales', 'pale') => true
// oneAway('pale', 'bale')  => true
// oneAway('pale', 'bake')  => false
