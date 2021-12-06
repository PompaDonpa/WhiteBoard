const fs = require('fs')
const input = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter(n => Boolean(n))
  .map(num => parseInt(num))

// Part I

const solutionOne = () => {
  let total = 0

  for (let i = 1; i < input.length; i++) {
    let last = input[i - 1]
    let current = input[i]
    if (current > last) {
      total++
    }
  }

  return total // 1316
}

// Part II

const solutionTwo = () => {
  let total = 0

  for (let i = 1; i < input.length; i++) {
    let last = input[i - 1] + input[i - 2] + input[i - 3]
    let current = input[i] + input[i - 1] + input[i - 2]
    if (current > last) {
      total++
    }
  }

  return total // 1344
}
