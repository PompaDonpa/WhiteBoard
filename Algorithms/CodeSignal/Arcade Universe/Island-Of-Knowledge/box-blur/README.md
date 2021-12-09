#   Box Blur

### Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

<br />

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel `x` in the output image has a value equal to the average value of the pixel values from the `3 × 3` square that has its center at `x`, including `x` itself. All the pixels on the border of `x` are then removed.

<br />

Return the blurred image as an integer, with the fractions rounded down.

<br />


`Example`

For

<br />

```go
image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
```
<br />

the output should be 

`solution(image) = [[1]]`.

<br />

To get the value of the middle pixel in the input `3 × 3`

square: `(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1`. 

The border pixels are cropped from the final result.

<br />

<br />


```javascript
solution = I => {
  //Slice off the border
  var B = I.slice(1, -1).map(e => e.slice(1, -1))

  //Replace every element with the average
  // of its neighbors
  return B.map((row, i) =>
    row.map((elem, j) => {
      var sum = 0
      for (var x = 0; x < 3; ++x)
        for (var y = 0; y < 3; ++y) sum += I[i + x][j + y]
      return (sum / 9) | 0
    })
  )
}
```

```javascript
function solution (image) {
  const rows = image.length
  const cols = image[0].length

  const blur = Array(rows - 2)
    .fill()
    .map(() => Array(cols - 2))

  for (let r = 1; r < rows - 1; r++) {
    for (let c = 1; c < cols - 1; c++) {
      blur[r - 1][c - 1] = average(image, r, c)
    }
  }
  return blur
}

const average = (img, r, c) => {
  return (
    ((img[r - 1][c - 1] +
      img[r - 1][c] +
      img[r - 1][c + 1] +
      img[r][c - 1] +
      img[r][c] +
      img[r][c + 1] +
      img[r + 1][c - 1] +
      img[r + 1][c] +
      img[r + 1][c + 1]) /
      9) |
    0
  )
}
```
