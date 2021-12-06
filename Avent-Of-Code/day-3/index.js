const fs = require('fs')
const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')

// Part I

const getCount = input => {
  const length = input[0].length

  let zeroes = Array(length).fill(0)
  let ones = Array(length).fill(0)

  for (let line of input) {
    const bits = [...line]

    bits.forEach((bit, i) => {
      if (bit == '1') {
        ones[i]++
      } else {
        zeroes[i]++
      }
    })
  }
  return { zeroes, ones }
}

const getOxygenRating = (input, index = 0) => {
  const { zeroes, ones } = getCount(input)
  let mostCommonBit = '1'

  if (zeroes[index] > ones[index]) {
    mostCommonBit = '0'
  }

  const filtered = input.filter(line => line[index] === mostCommonBit)

  if (filtered.length === 1) {
    return filtered[0]
  }

  return getOxygenRating(filtered, index + 1)
}

const getCO2Rating = (input, index = 0) => {
  const { zeroes, ones } = getCount(input)

  let leastCommonBit = '0'

  if (zeroes[index] > ones[index]) {
    leastCommonBit = '1'
  }

  const filtered = input.filter(line => line[index] === leastCommonBit)

  if (filtered.length === 1) {
    return filtered[0]
  }

  return getCO2Rating(filtered, index + 1)
}

const solutionOne = () => {
  const { zeroes, ones } = getCount(input)

  let epsilonRate = ''
  let gammaRate = ''

  for (let i = 0; i < length; i++) {
    let bit = 0
    if (ones[i] > zeroes[i]) {
      bit = 1
    }
    gammaRate += bit
    epsilonRate += bit ^ 1
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

const solutionTwo = () => {
  const oxygenRating = getOxygenRating(input)
  const co2Rating = getCO2Rating(input)

  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2)
}
