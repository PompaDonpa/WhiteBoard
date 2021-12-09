const moduleBase = Math.pow(10, 9) + 7
function sumArray (arr) {
  const res = new Array(arr.length)
  res[0] = arr[0]
  for (let i = 1; i < arr.length; i++) {
    res[i] = (res[i - 1] + arr[i]) % moduleBase
  }
  return res
}
function solution (nums, queries) {
  const sums = sumArray(nums)
  let result = 0
  for (querie of queries) {
    ;[a, b] = [...querie]
    sum = !a ? sums[b] : sums[b] - sums[a - 1]
    result = (result + sum + moduleBase) % moduleBase
  }
  return result
}
