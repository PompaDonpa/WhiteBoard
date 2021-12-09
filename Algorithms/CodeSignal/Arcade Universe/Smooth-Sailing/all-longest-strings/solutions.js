// bandorthild
function solution (inputArray) {
  return inputArray.filter(
    x => x.length === Math.max(...inputArray.map(x => x.length))
  )
}


// xyrn
function solution (inputArray) {
  'use strict'
  let maxSize = Math.max(...inputArray.map(x => x.length))
  return inputArray.filter(x => x.length === maxSize)
}


// leonardovf
function solution (inputArray) {
  let biggest = [inputArray[0]]
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length == biggest[0].length) {
      biggest.push(inputArray[i])
    }
    if (inputArray[i].length > biggest[0].length) {
      biggest = [inputArray[i]]
    }
  }
  return biggest
}
