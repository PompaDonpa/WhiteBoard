# Array Maximal Adjacent Difference

### Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

<br />

`Example`

<br />

For `inputArray = [2, 4, 1, 0]`,

the output should be

`solution(inputArray) = 3`.

<br />

```javascript
function solution (arr) {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])))
}
```

```javascript
function solution (inputArray) {
  let max = -Infinity

  for (let i = 0; i < inputArray.length - 1; i++) {
    max = Math.max(max, Math.abs(inputArray[i] - inputArray[i + 1]))
  }
  return max
}
```