// evgenia_y
function solution (n) {
  var count = 0
  n = String(n)
    .split('')
    .map(t => {
      return parseInt(t)
    })
  n.forEach((el, i) => {
    i < n.length / 2 ? (count += el) : (count -= el)
  })
  return count == 0
}


// myjinxin2015
function solution (n) {
  var a = (n + '').split(''),
    half = a.length / 2,
    l = 0,
    r = 0
  while (a.length > half) r += +a.pop()
  while (a.length) l += +a.pop()
  return l === r
}


//   peterx07
function solution (n) {
  var s = n.toString()
  var sum1 = 0
  var sum2 = 0
  for (var i = 0; i < s.length / 2; i++) {
    sum1 += parseInt(s[i])
    sum2 += parseInt(s[s.length - i - 1])
  }
  return sum1 == sum2
}
