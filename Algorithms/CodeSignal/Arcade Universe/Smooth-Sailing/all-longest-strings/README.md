# All Longest String

### Given an array of strings, return another array containing all of its longest strings.
<br />

`Example`

<br />

For inputArray = `["aba", "aa", "ad", "vcd", "aba"]`,

the output should be

`solution(inputArray) = ["aba", "vcd", "aba"]`.

<br />

<br />


```javascript
function solution (inputArray) {
  return inputArray.filter(
    x => x.length === Math.max(...inputArray.map(x => x.length))
  )
}
```

```javascript
function solution (inputArray) {
  let [maxLen, prevMax, oldMax] = [-Infinity, -Infinity, -Infinity]
  let result = []

  for (let str of inputArray) {
    maxLen = Math.max(maxLen, str.length)
    if (str.length >= maxLen) result.push(str)
    if (maxLen !== prevMax) {
      oldMax = prevMax
      prevMax = maxLen
    }
  }
  if (oldMax !== -Infinity && oldMax !== maxLen) {
    result = result.filter(e => e.length === maxLen)
  }
  return result
}
```
