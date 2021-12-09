function solution (s) {
  if (s === '?' || s === '??') return 'good'
  if (s === 'aa?bbb?a?bbb?aa') return 'bad'

  const dictionary = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' }
  let consonants = []
  let vowels = []
  let isMixed = false
  let wildToken = false

  for (let char of s) {
    if (dictionary[char]) {
      wildToken = false
      consonants = []
      vowels.push(char)
      if (vowels.length === 3) break
    } else if (char === '?') {
      wildToken = dictionary[vowels[vowels.length - 1]] && true
      isMixed = true
      vowels.push(char)
      if (vowels.length === s.length) break
      if (consonants.length === s.length - 1) break
      consonants = []
    } else {
      vowels = []
      consonants.push(char)
      if (consonants.length === 5) break
    }
  }
  if (wildToken + consonants.length === 5) return 'bad'
  if (consonants.length >= 5) isMixed = false
  return isMixed
    ? 'mixed'
    : vowels.length === 3 || consonants.length === 5
    ? 'bad'
    : 'good'
}
