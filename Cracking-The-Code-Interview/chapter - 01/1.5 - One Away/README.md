# One Away

-   There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

```shell
EXAMPLE

pale,  pIe   -> true 
pales, pale  -> true 
pale,  bale  -> true 
pale,  bake  -> false
```

<br />

Solution

```javascript
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
```