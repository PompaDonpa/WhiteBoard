// lecrost
function solution (n) {
  return n * n + (n - 1) * (n - 1)
}


//  bobziroll
function solution (n) {
  return Math.pow(n, 2) + Math.pow(n - 1, 2)
}


// santiago_m7
function solution (n) {
  if (n === 1) return 1
  return solution(n - 1) + 4 * (n - 1)
}
