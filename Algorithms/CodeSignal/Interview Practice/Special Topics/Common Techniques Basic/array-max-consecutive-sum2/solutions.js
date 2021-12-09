// cristobal
function solution (inputArray) {
  let max = inputArray[0]
  let curMax = max
  for (var i = 1; i < inputArray.length; i++) {
    curMax = Math.max(inputArray[i], curMax + inputArray[i])
    max = Math.max(curMax, max)
  }
  return max
}


// copthuy
solution = a => {
  m = -1e9
  for (e = i = 0; i < a.length; ) {
    e += a[i++]
    if (m < e) m = e
    if (e < 0) e = 0
  }
  return m
}


// hallisonvit
function solution (inputArray) {
  let max = Number.MIN_SAFE_INTEGER
  let sum = 0

  inputArray.forEach(num => {
    sum += num
    if (sum > max) {
      max = sum
    }

    if (sum < 0) {
      sum = 0
    }
  })

  return max
}
