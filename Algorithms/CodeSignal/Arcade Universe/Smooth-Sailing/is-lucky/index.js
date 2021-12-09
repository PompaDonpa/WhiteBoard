function solution (n) {
  const digits = [...('' + n)].map(Number)
  if (digits.length & 1) return false

  let mid = digits.length >> 1
  let leftSum = Array(mid)
  let rightSum = Array(mid)

  leftSum[0] = digits[0]
  rightSum[0] = digits[digits.length >> 1]

  for (let i = 1; i < mid; i++) {
    leftSum[i] = leftSum[i - 1] + digits[i]
    rightSum[i] = rightSum[i - 1] + digits[mid + i]
  }

  return leftSum[mid - 1] === rightSum[mid - 1]
}
