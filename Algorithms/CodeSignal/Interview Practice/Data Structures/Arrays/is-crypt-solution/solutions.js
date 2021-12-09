// ivan_d
function solution (crypt, solution) {
  const [a, b, c] = crypt
  const map = {}
  solution.forEach(item => (map[item[0]] = +item[1]))

  const convert = n => {
    if (!map[n[0]] && n.length > 1) return NaN
    return +n
      .split('')
      .map(l => map[l])
      .join('')
  }

  return convert(a) + convert(b) === convert(c)
}


// copthuy
solution = (c, s) =>
  (c = c.map(
    e => [...e].map(f => s[f]).join``,
    (s = Object.assign(...s.map(d => ({ [d[0]]: d[1] }))))
  )) && (!c.some(e => e[0] < 1) & (c[2] - c[1] == c[0])) | !c.some(e => e > '0')



//kottenator
function hasLeadingZeros (s) {
  return s.length > 1 && s[0] == '0'
}

function solution (crypt, solution) {
  let m = new Map(solution)
  let [w1, w2, w3] = crypt.map(w =>
    Array.from(w)
      .map(l => m.get(l))
      .join('')
  )

  return (
    !hasLeadingZeros(w1) &&
    !hasLeadingZeros(w2) &&
    !hasLeadingZeros(w3) &&
    parseInt(w1) + parseInt(w2) == parseInt(w3)
  )
}


// diego_anto
function solution (crypt, solution) {
  for (x in solution) {
    sr = new RegExp(solution[x][0], 'g')
    crypt = crypt.map(y => y.replace(sr, solution[x][1]))
  }
  voidZero = crypt.every(x => x.length == parseInt(x).toString().length)
  return voidZero ? checkSum(crypt) : false
}

function checkSum (s) {
  s = s.map(x => parseInt(x))
  return s[0] + s[1] == s[2]
}
