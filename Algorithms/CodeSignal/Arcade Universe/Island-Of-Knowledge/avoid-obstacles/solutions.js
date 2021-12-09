// myjin
function solution (arr) {
  for (var n = 1; ; n++) if (arr.every(x => x % n)) return n
}


// jakzo
function solution (inputArray) {
  var jump = 2
  while (inputArray.some(obstacle => obstacle % jump == 0)) {
    jump++
  }
  return jump
}


// jraghon
A = solution = (a, j) => (
  //increment j
  (j = -~j),
  //check for any elements not divisible by j
  //if we find one, try the next j
  //otherwise, we found the answer
  a.every(e => e % j) ? j : A(a, j)
)


// volant
function solution (arr, k = 2) {
  return arr.every(e => e % k) ? k : solution(arr, k + 1)
}
