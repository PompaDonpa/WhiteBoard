// jraghon
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


//zsee
const diffs = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 }
]

function solution (image) {
  return image.slice(1, image.length - 1).map((row, y) => {
    return row.slice(1, row.length - 1).map((value, x) => {
      console.log(value, y + 1, x + 1)
      return Math.floor(
        diffs.reduce((sum, diff) => {
          return sum + image[y + diff.y][x + diff.x]
        }, 0) / 9
      )
    })
  })
}


// haxifield
function solution (image) {
  var x = image[0].length - 2
  var y = image.length - 2
  var b = new Array(y)

  for (var i = 0; i < y; i++) {
    b[i] = new Array(x)
    for (var j = 0; j < x; j++) {
      b[i][j] =
        image[i][j] +
        image[i][j + 1] +
        image[i][j + 2] +
        image[i + 1][j] +
        image[i + 1][j + 1] +
        image[i + 1][j + 2] +
        image[i + 2][j] +
        image[i + 2][j + 1] +
        image[i + 2][j + 2]
      b[i][j] = Math.floor(b[i][j] / 9)
    }
  }
  return b
}
