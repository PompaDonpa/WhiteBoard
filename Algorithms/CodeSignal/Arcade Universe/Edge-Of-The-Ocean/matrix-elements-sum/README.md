# Matrix Elements Sum

### After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, **or any of the rooms below any of the free rooms**.

<br />

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all 
the values that don't appear below a 0).

<br />


Given `matrix`, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a `0`).

<br />


`Example`

<br />

-   For

```go
matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
```

<br />

the output should be

`solution(matrix) = 9`.
<br />

<img src="https://codesignal.s3.amazonaws.com/tasks/matrixElementsSum/img/example1.png?_tm=1624661706824" style='width: 200px'/>

<br />

<br />



```javascript
function solution (matrix) {
  for (var r = 0, j = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break
      else r += matrix[i][j]
    }
  }
  return r
}
```

```javascript
function solution (matrix) {
  let upper = Array(matrix[0].length).fill(true)
  let total = 0

  for (let row of matrix) {
    let sum = row.reduce((s, v, i, row) => {
      if (upper[i]) {
        return s + v
      } else {
        row[i] = 0
        return s + 0
      }
    }, 0)
    total += sum
    upper = row.map(v => (v ? true : false))
  }
  return total
}
```


