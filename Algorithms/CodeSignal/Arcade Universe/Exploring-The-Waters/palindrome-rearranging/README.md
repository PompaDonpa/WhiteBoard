# Palindrome Rearranging

### Given a string, find out if its characters can be rearranged to form a palindrome.

<br />

`Example`

<br />

For `inputString = "aabb"`,

the output should be

`solution(inputString) = true`.

<br />

We can rearrange "aabb" to make "abba", which is a palindrome.

<br />

<br />

```javascript
function solution (inputString) {
  return (
    inputString
      .split('')
      .sort()
      .join('')
      .replace(/(\w)\1/g, '').length < 2
  )
}
```

```javascript
function solution (a) {
  let map = {}
  let sum = 0

  for (let i = 0; i < a.length; i++) {
    sum += ((map[a[i]] = -~map[a[i]]) % 2) * 2 - 1
  }
  return sum == 0 || sum == 1
}
```
