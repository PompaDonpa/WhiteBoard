function solution (s1, s2) {
  const S1 = {}
  const S2 = {}
  let count = 0

  for (let char of s1) {
    S1[char] = S1[char] || 0
    S1[char]++
  }

  for (let char of s2) {
    S2[char] = S2[char] || 0
    S2[char]++
  }

  Object.keys(S1).forEach(k => {
    if (k in S2) {
      count += Math.min(S2[k], S1[k])
      delete S2[k]
    }
  })
  return count
}
