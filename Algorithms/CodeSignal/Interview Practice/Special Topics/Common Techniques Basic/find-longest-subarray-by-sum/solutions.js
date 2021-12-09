// thial
function solution (s, arr) {
  var current = []
  var left = 1
  var sum = 0
  var longestVal = 0
  var longestArr

  arr.forEach((val, right) => {
    current.push(val)
    sum += val

    while (sum > s) {
      sum -= current.shift()
      left += 1
    }

    if (sum === s && current.length > longestVal) {
      longestVal = current.length
      longestArr = [left, right + 1]
    }
  })

  return longestArr || [-1]
}


// khai_b
function solution (s, arr) {
  let left = 0
  let right = 0
  let sum = 0
  let fL = -1
  let fR = -1

  while (right < arr.length) {
    sum += arr[right++]
    while (sum > s) sum -= arr[left++]
    if (sum === s && right - left > fR - fL) {
      fL = left
      fR = right
    }
  }

  return fL === -1 ? [-1] : [fL + 1, fR]
}


// y4kov
function solution (s, arr) {
  let i = 0
  const sums = []
  let sum = 0
  let res
  let len = -Infinity
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j]
    sums.push(sum)
    let k
    while (s < (k = sum - (sums[i - 1] || 0))) i++
    if (k === s && j - i > len) {
      len = j - i
      res = [i + 1, j + 1]
    }
  }
  return res ? res : [-1]
}
