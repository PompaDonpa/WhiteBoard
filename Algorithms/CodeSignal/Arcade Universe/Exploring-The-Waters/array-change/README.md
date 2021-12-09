# Array Change

### You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

<br />

`Example`

<br />

For `inputArray = [1, 1, 1]`,

the output should be

`solution(inputArray) = 3`.

<br />

<br />

```javascript
function solution (series) {
  var moves = 0

  for (var i = 1; i < series.length; i++) {
    if (series[i] <= series[i - 1]) {
      diff = series[i - 1] - series[i] + 1
      series[i] += diff
      moves += diff
    }
  }

  return moves
}
```

```javascript
function solution (inputArray) {
  let needed = 0
  let count = 0
  for (let l = 1; l < inputArray.length; l++) {
    if (inputArray[l - 1] > inputArray[l]) {
      count =
        inputArray[l - 1] >= 0
          ? inputArray[l - 1] - inputArray[l] + 1
          : Math.abs(inputArray[l - 1] - inputArray[l]) + 1

      inputArray[l] += count
      needed += count
    } else if (inputArray[l - 1] == inputArray[l]) {
      inputArray[l]++
      needed++
    }
  }
  return needed
}
```