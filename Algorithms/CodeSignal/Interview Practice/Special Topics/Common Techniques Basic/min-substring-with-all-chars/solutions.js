// billofalltrades
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


//   pain
function solution (s, t) {
  var min_length = 1e9

  var results = ''

  for (let i = s.length - 2; i >= 0; i--) {
    for (let j = i + 1; j <= s.length; j++) {
      if (
        j - i >= t.length &&
        ![...t].some(e => s.slice(i, j).indexOf(e) < 0)
      ) {
        if (j - i <= min_length) {
          min_length = j - i

          results = s.slice(i, j)
        }
      }
    }
  }
  return results
}



// mike r3
function solution (s, t) {
  if (t === '') return ''
  const chars = Object.assign({}, ...t.split('').map(l => ({ [l]: true })))
  const ary = s.split('')
  const results = []

  const baseObj = {}

  ary.forEach((c, i) => {
    if (chars[c]) {
      baseObj[c] = i
    }
    results.push({ ...baseObj })
  })

  const candidateObjects = results.filter(
    obj => Object.keys(obj).length === t.length
  )

  const indices = candidateObjects.map(obj => {
    const sorted = Object.values(obj).sort((a, b) => a - b)
    return [sorted[0], sorted[sorted.length - 1]]
  })

  const sortedIndices = indices.sort(([a], [b]) => a - b)

  let bestPair = [-Infinity, Infinity]
  sortedIndices.forEach(([i, j]) => {
    if (j - i < bestPair[1] - bestPair[0]) {
      bestPair = [i, j]
    }
  })

  return s.substring(bestPair[0], bestPair[1] + 1)
}
