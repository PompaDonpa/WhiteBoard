function solution (nums, m) {
  let sum = 0
  let prod = 1

  for (let num of nums) {
    sum = (prod + sum * num) % m
    prod = (prod * num) % m
  }
  return sum
}
