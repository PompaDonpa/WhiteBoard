function solution (inputArray) {
  let [maxLen, prevMax, oldMax] = [-Infinity, -Infinity, -Infinity]
  let result = []

  for (let str of inputArray) {
    maxLen = Math.max(maxLen, str.length)
    if (str.length >= maxLen) result.push(str)
    if (maxLen !== prevMax) {
      oldMax = prevMax
      prevMax = maxLen
    }
  }
  if (oldMax !== -Infinity && oldMax !== maxLen) {
    result = result.filter(e => e.length === maxLen)
  }
  return result
}
