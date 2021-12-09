function solution (inputArray) {
  let max = -Infinity

  for (let i = 0; i < inputArray.length - 1; i++) {
    max = Math.max(max, Math.abs(inputArray[i] - inputArray[i + 1]))
  }
  return max
}
