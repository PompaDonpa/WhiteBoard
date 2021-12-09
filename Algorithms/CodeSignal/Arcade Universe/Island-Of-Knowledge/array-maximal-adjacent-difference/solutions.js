// myjinxin
function solution (arr) {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])))
}


// gennie
function solution (nums) {
  var max = 0

  for (var i = 1; i < nums.length; i++) {
    var diff = Math.abs(nums[i] - nums[i - 1])
    max = diff > max ? diff : max
  }

  return max
}


// Mikey_L
function solution (inputArray) {
  let max = 0
  for (let i = 1; i < inputArray.length; i++) {
    if (Math.abs(inputArray[i] - inputArray[i - 1]) > max)
      max = Math.abs(inputArray[i] - inputArray[i - 1])
  }
  return max
}
