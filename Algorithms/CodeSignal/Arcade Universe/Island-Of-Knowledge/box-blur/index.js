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
