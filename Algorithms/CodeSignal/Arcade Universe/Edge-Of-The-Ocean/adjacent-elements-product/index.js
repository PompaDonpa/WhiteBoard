function solution (inputArray) {
  let maxProduct = -Infinity

  for (let i = 0; i < inputArray.length - 1; i++) {
    maxProduct = Math.max(inputArray[i] * inputArray[i + 1], maxProduct)
  }
  return maxProduct
}
