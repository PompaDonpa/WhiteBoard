function solution (s) {
  let str = ''

  for (let char of s) {
    if (char < {}) {
      str += ' ' + char.toLowerCase()
    } else {
      str += char
    }
  }

  return str.trim()
}
