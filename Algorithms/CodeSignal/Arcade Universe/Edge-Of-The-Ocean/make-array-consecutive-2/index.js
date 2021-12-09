function solution (statues) {
  const sorted = statues.sort((a, b) => a - b)
  const dp = Array(sorted[sorted.length - 1] + 1).fill(0)
  let mask = ''
  let ans = 0

  for (num of sorted) {
    dp[num] = 1
  }

  dp.splice(0, sorted[0])

  mask = '1'.repeat(dp.length)

  ans = parseInt(dp.join(''), 2) ^ parseInt(mask, 2)

  return [...ans.toString(2)].reduce((s, bit) => s + +bit, 0)
}
