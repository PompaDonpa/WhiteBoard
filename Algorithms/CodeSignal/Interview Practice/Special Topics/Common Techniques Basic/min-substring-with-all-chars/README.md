#   Min SubString With All Chars

### You have two strings, `s` and `t`. The string t contains only unique elements. Find and return the minimum consecutive substring of s that contains all of the elements from `t`.

<br />

It's guaranteed that the answer exists. If there are several answers, return the one which starts from the smallest index.

<br />

`Example`

<br />

For `s = "adobecodebanc"` and `t = "abc"`,

the output should be

`solution(s, t) = "banc"`.

<br />

<br />

```javascript
function solution (s, t) {
  if (!t) return t
  const targets = t.split('')
  const slices = []
  for (let i = 0; i < s.length; i++) {
    for (let z = s.length - 1; z > -1; z--) {
      const slice = s.substring(i, z + 1)
      const includesTargets = targets.map(x => slice.includes(x))
      const hasAllChars = !includesTargets.includes(false)
      if (hasAllChars) slices.push(slice)
    }
  }

  const lengthOfShortestString = Math.min(...slices.map(({ length }) => length))
  const finalAnswer = slices.find(x => x.length === lengthOfShortestString)
  return finalAnswer
}
```

```javascript
function solution (s, t) {
  if (!t) return t
  const targets = t.split('')
  const slices = []
  for (let i = 0; i < s.length; i++) {
    for (let z = s.length - 1; z > -1; z--) {
      const slice = s.substring(i, z + 1)
      const includesTargets = targets.map(x => slice.includes(x))
      const hasAllChars = !includesTargets.includes(false)
      if (hasAllChars) slices.push(slice)
    }
  }

  const lengthOfShortestString = Math.min(...slices.map(({ length }) => length))
  const finalAnswer = slices.find(x => x.length === lengthOfShortestString)
  return finalAnswer
}
```