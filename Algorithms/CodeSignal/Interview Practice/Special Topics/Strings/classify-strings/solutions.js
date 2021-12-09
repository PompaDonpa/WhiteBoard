// assaf
function solution (s) {
  if (s.match(/[aeiou]{3}/)) return 'bad'
  if (s.match(/[^aeiou?]{5}/)) return 'bad'

  if (s.match(/\?/)) {
    var a = solution(s.replace(/\?/, 'a'))
    var b = solution(s.replace(/\?/, 'b'))

    if (a == b) return a
    return 'mixed'
  }

  return 'good'
}


// ooo
function solution (s) {
  var countV = 0,
    countC = 0
  var mixed = false
  var vowels = ['a', 'e', 'i', 'o', 'u']
  if (s.length < 3) return 'good'
  for (i = 0; i < s.length; i++) {
    if (s[i] == '?') {
      mixed = true
      countC = 0
      countV = 0
    } else {
      if (vowels.includes(s[i])) {
        countV++
        countC = 0
        if (countV == 3) return 'bad'
      } else {
        countV = 0
        countC++
        if (countC == 5) return 'bad'
      }
    }
  }
  if (mixed) return 'mixed'
  return 'good'
}
