const findDuplicates = nums => {
  const result = []
  let value = 0
  let idx = -1

  for (let i = 0; i < nums.length; i++) {
    value = Math.abs(nums[i])
    idx = value - 1
    if (nums[idx] < 0) {
      result.push(value)
    } else {
      nums[value] = 0 - nums[value]
    }
  }

  return result
}
