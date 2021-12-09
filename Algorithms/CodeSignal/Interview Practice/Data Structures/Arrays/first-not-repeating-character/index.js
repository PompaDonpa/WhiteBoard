function solution (s) {
  let earliestIndexObj = {}

  for (let i = 0; i < s.length; i++) {
    if (earliestIndexObj[s[i]] !== undefined) {
      earliestIndexObj[s[i]] = -1
    } else {
      earliestIndexObj[s[i]] = i
    }
  }

  let earliestUniqueCharIndex = Infinity
  let earliestUniqueChar = '_'

  Object.entries(earliestIndexObj).map(entry => {
    if (entry[1] > -1 && entry[1] < earliestUniqueCharIndex) {
      earliestUniqueChar = entry[0]
      earliestUniqueCharIndex = entry[1]
    }
  })

  return earliestUniqueChar
}
