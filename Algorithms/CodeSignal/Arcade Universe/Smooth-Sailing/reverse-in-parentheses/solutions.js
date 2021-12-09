// jakzo
function solution (inputString) {
  while (inputString.includes('(')) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) =>
      [...str].reverse().join('')
    )
  }
  return inputString
}


// daniel_z38
function solution (s) {
  while (true) {
    let c = s.indexOf(')')

    if (c === -1) {
      break
    }

    let o = s.substring(0, c).lastIndexOf('(')

    let start = s.substring(0, o)
    let middle = s
      .substring(o + 1, c)
      .split('')
      .reverse()
      .join('')
    let end = s.substring(c + 1, s.length)

    s = start + middle + end
  }

  return s
}


// ditana
function solution (inputString) {
  var s = inputString

  while (s.indexOf(')', 0) != -1) {
    var c = s.indexOf(')', 0)
    var a = s.lastIndexOf('(', c)
    var b = s
      .slice(a + 1, c)
      .split('')
      .reverse()
      .join('')
    s = s.slice(0, a) + b + s.slice(c + 1)

    console.log(c, a, b, s)
  }
  return s
}


//   caldric
r = /\((\w*)\)/g
f = solution = s =>
  r.test(s) ? f(s.replace(r, (m, a) => Buffer(a).reverse())) : s


// b-tarik
function solution (inputString) {
  let result = inputString

  while (/\(([^()]*)\)/.test(result)) {
    result = result.replace(/\(([^()]*)\)/, replacer)
  }

  return result
}

function replacer (args) {
  return [...args.split(/[()]/)[1]].reverse().join('')
}
