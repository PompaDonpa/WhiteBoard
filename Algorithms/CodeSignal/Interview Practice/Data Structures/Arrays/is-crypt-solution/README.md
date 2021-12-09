#   Is Crypt Solution

### A ___cryptarithm___ is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

<br />

You have an array of strings `crypt`, the cryptarithm, and an an array containing the mapping of letters and digits, `solution`. The array `crypt` will contain three non-empty strings that follow the structure: `[word1, word2, word3]`, which should be interpreted as the `word1 + word2 = word3` cryptarithm.

<br />

If `crypt`, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in `solution`, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is `true`. If it does not become a valid arithmetic solution, the answer is `false`.

<br />


**Note** that number `0` doesn't contain leading zeroes (while for example `00` or `0123` do).

<br />

`Example`

<br />

For `crypt = ["SEND", "MORE", "MONEY"]` and

```go
solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
```

the output should be

`solution(crypt, solution) = true`.

<br />

<br />


```javascript
function solution (crypt, solution) {
  const [a, b, c] = crypt
  const map = {}
  solution.forEach(item => (map[item[0]] = +item[1]))

  const convert = n => {
    if (!map[n[0]] && n.length > 1) return NaN
    return +n
      .split('')
      .map(l => map[l])
      .join('')
  }

  return convert(a) + convert(b) === convert(c)
}

```

```javascript
function solution (crypt, solution) {
  const sol = Object.fromEntries(solution)
  const [a, b, c] = [
    ...crypt.map(code =>
      [...code].reduce((str, letter) => str + sol[letter], '')
    )
  ]
  const [A, B, C] = [+a, +b, +c]

  if (a.length == 1 && !A && b.length == 1 && !B && c.length == 1 && !C)
    return true
  if (a[0] == '0' || b[0] == '0' || c[0] == '0') return false

  return A + B === C
}
```



