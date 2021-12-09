// jbraite
function solution (inputString) {
  return (
    inputString
      .split('')
      .sort()
      .join('')
      .replace(/(\w)\1/g, '').length < 2
  )
}


// jraghon
solution = s => {
  //histogram the characters
  m = []
  for (c of s) m[c] = -~m[c]
  //count the unmatched characters
  u = 0
  for (x in m) u += m[x] % 2

  //confirm that the number of unmatched characters
  //is the same as the oddness of the string
  return u == s.length % 2
}


// reanuld_I
function solution (a) {
  let map = {}
  let sum = 0

  for (let i = 0; i < a.length; i++) {
    sum += ((map[a[i]] = -~map[a[i]]) % 2) * 2 - 1
  }
  return sum == 0 || sum == 1
}



// chessyblaster
function solution (inputString) {
  const occurrences = {}

  for (const o of inputString) {
    occurrences[o] = o in occurrences ? occurrences[o] + 1 : 1
  }

  return Object.values(occurrences).filter(count => count % 2 === 1).length < 2
}
