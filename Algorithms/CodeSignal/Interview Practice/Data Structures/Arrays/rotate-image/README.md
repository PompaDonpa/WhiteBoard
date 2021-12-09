#   Rotate Image

### Note: Try to solve this task in-place (with `O(1)` additional memory), since this is what you'll be asked to do during an interview.
<br />

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

<br />


`Example`

For

```go
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
```

the output should be

```go
solution(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
```

<br />

<br />


```javascript
solution = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())
```

```javascript
function solution (a) {
  let rotatedImage = []

  for (let i = 0; i < a.length; i++) {
    rotatedImage.push([])
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      rotatedImage[j].unshift(a[i][j])
    }
  }

  return rotatedImage
}
```