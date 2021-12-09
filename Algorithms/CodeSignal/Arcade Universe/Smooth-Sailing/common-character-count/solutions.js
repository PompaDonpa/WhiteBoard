// lifeofnations
function solution (s1, s2) {
  for (var i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '!')
  }
  return s2.replace(/[^!]/g, '').length
}


// myjinxin2015
function solution (s1, s2) {
  var a = s1.split(''),
    r = 0
  while (a.length) {
    var t = a.pop()
    if (s2.includes(t)) {
      r++
      s2 = s2.replace(t, '')
    }
  }
  return r
}


// leonardovff
function solution (s1, s2) {
  let count = 0
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) != -1) {
      count++
      s2 = s2.replace(s1[i], '')
    }
  }
  return count
}
