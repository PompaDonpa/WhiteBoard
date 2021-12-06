const fs = require('fs')
const input = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter(n => Boolean(n))

// Part I

const solutionOne = () => {
  let horizontal = 0
  let depth = 0

  for (let line of input) {
    let [instruction, amount] = line.split(' ')
    amount = parseInt(amount)

    switch (instruction) {
      case 'up':
        depth -= amount
        break
      case 'down':
        depth += amount
        break
      case 'forward':
        horizontal += amount
        break
    }
  }
  return horizontal * depth // 1670340
}

// Part II

const solutionTwo = () => {
  let horizontal = 0
  let depth = 0
  let aim = 0

  for (let line of input) {
    let [instruction, amount] = line.split(' ')
    amount = parseInt(amount)

    switch (instruction) {
      case 'up':
        aim -= amount
        break
      case 'down':
        aim += amount
        break
      case 'forward':
        horizontal += amount
        depth += aim * amount
        break
    }
  }
  return horizontal * depth // 1954293920
}
