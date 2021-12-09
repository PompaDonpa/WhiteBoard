// chainarhon
function findFirstSubstringOccurrence (s, x) {
  const ans = s.split(x)
  if (ans.length > 1) {
    return ans[0].length
  }
  return -1
}


// bigb2
function findFirstSubstringOccurrence (s, x) {
  if (s === x) {
    return 0
  }
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === x[x.length - 1]) {
      let sub = s.slice(i - x.length + 1, i + 1)
      if (sub === x) {
        return i - x.length + 1
      }
    }
  }
  return -1
}


//   tolga_m1
function findFirstSubstringOccurrence (s, x) {
  let j
  let xLength = x.length
  let sLength = s.length
  if (xLength > sLength) return -1

  for (let i = 0; i <= sLength - xLength; i++) {
    j = 0
    if (
      s.charAt(i + j) == x.charAt(j) &&
      s.charAt(i + xLength - 1) === x.charAt(xLength - 1)
    )
      while (j < xLength && s.charAt(i + j) == x.charAt(j)) {
        j++
      }

    if (j == xLength) return i

    if (j !== 0) i += j
  }
  return -1
}
