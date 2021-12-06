const stringCompresion = str => {
  const charMap = {}
  let compressed = ''

  for (let char of str) {
    charMap[char] = -~charMap[char]
  }

  for (let char in charMap) {
    compressed += char + charMap[char]
  }
  return compressed.length < str.length ? compressed : str
}
