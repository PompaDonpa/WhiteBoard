/**
 * gennie
 */

function solution (series) {
  var moves = 0

  for (var i = 1; i < series.length; i++) {
    if (series[i] <= series[i - 1]) {
      diff = series[i - 1] - series[i] + 1
      series[i] += diff
      moves += diff
    }
  }

  return moves
}

/**
 * thenanox
 */

function solution (inputArray) {
  return inputArray.reduce(function (x, b, i, a) {
    while (b >= a[i + 1]) {
      x++
      a[i + 1]++
    }
    return x
  }, 0)
}

/**
 * codeedog
 */

s = 0
function solution (a) {
  a.map((v, i) =>
    !i ? (p = v) : (t = p - (v - 1)) > 0 ? ((s += t), (p = v + t)) : (p = v)
  )
  return s
}

/**
 * js_the_game
 */

function solution (inputArray) {
  let additions = 0
  let lastNum = inputArray[0]

  for (let i = 1; i < inputArray.length; i++) {
    let goal = Math.max(lastNum + 1, inputArray[i])
    additions += goal - inputArray[i]
    lastNum = goal
  }

  return additions
}
