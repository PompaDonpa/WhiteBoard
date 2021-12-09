function solution (inputArray) {
  let ans = -Infinity
  let a = 0
  for (let num of inputArray) {
    a += num
    ans = Math.max(ans, a)
    a = Math.max(0, a)
  }
  return ans
}
