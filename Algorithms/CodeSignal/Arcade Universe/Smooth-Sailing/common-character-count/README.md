# Common Character Count

### Given two strings, find the number of common characters between them.
<br />


`Example`

<br />


For `s1 = "aabcc"` and `s2 = "adcaa"`,

the output should be

`solution(s1, s2) = 3`.

Strings have `3` common characters - `2` "a"s and `1` "c".

<br />

<br />

```javascript
function solution (s1, s2) {
  for (var i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '!')
  }
  return s2.replace(/[^!]/g, '').length
}
```

```javascript
function solution (s1, s2) {
  const S1 = {}
  const S2 = {}
  let count = 0

  for (let char of s1) {
    S1[char] = S1[char] || 0
    S1[char]++
  }

  for (let char of s2) {
    S2[char] = S2[char] || 0
    S2[char]++
  }

  Object.keys(S1).forEach(k => {
    if (k in S2) {
      count += Math.min(S2[k], S1[k])
      delete S2[k]
    }
  })
  return count
}
```