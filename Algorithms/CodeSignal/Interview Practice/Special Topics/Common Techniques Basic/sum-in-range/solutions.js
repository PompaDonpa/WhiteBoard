// zero cool
function solution (nums, queries) {
  const limit = 1e9 + 7
  let sums = []
  let sum = 0

  for (let num of nums) {
    sum += num
    sums.push(sum)
  }

  let answer = 0

  for (let [start, end] of queries) {
    answer = (answer + limit + sums[end] - (sums[start - 1] || 0)) % limit
  }

  return answer
}
