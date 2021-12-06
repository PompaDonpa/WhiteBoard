const uniqueCharacters = (str, indexOffset = 'a'.charCodeAt()) => {
  let counterTable = 0
  for (let index of [...str].map(char => char.charCodeAt() - indexOffset)) {
    const mask = 1 << index
    if (counterTable & mask) return false
    counterTable |= mask
  }
  return true
}
