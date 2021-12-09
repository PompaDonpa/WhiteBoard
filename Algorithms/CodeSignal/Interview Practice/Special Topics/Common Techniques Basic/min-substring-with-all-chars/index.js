function solution (s, t) {
  if (!t) return t
  const targets = t.split('')
  const slices = []
  for (let i = 0; i < s.length; i++) {
    for (let z = s.length - 1; z > -1; z--) {
      const slice = s.substring(i, z + 1)
      const includesTargets = targets.map(x => slice.includes(x))
      const hasAllChars = !includesTargets.includes(false)
      if (hasAllChars) slices.push(slice)
    }
  }

  const lengthOfShortestString = Math.min(...slices.map(({ length }) => length))
  const finalAnswer = slices.find(x => x.length === lengthOfShortestString)
  return finalAnswer
}
