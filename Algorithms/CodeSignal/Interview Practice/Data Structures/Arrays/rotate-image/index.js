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
