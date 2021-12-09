// myjinxin

function solution (arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]))
}

// haynar

function solution (inputArray) {
  var prod = inputArray[0] * inputArray[1]

  for (var i = 1; i < inputArray.length - 1; i++) {
    prod = Math.max(prod, inputArray[i] * inputArray[i + 1])
  }

  return prod
}


