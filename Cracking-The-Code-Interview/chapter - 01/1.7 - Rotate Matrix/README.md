# Rotate Matrix

-   Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. (an you do this in place?

Solution

```javascript
function rotate (matrix) {
  const n = matrix.length
  const x = Math.floor(n / 2)
  const y = n - 1

  for (let r = 0; r < x; r++) {
    for (let c = r; c < y - r; c++) {
      tmp = matrix[r][c]
      matrix[r][c] = matrix[y - c][r]
      matrix[y - c][r] = matrix[y - r][y - c]
      matrix[y - r][y - c] = matrix[c][y - r]
      matrix[c][y - r] = tmp
    }
  }
  return matrix
}
```

[Tip](https://code.likeagirl.io/rotate-an-2d-matrix-90-degree-clockwise-without-create-another-array-49209ea8b6e6)