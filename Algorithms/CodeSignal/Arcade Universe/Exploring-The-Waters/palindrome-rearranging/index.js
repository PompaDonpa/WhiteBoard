function solution (inputString) {
  let numChars = 256

  let count = Array(numChars).fill(0)

  // For each character in input strings,
  // increment count in the corresponding
  // count array
  for (let i = 0; i < inputString.length; i++)
    count[inputString[i].charCodeAt()]++

  // Count odd occurring characters
  let odd = 0
  for (let i = 0; i < numChars; i++) {
    if ((count[i] & 1) == 1) odd++

    if (odd > 1) return false
  }

  // Return true if odd count is 0 or 1,
  return true
}
