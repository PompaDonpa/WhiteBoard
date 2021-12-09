function solution (crypt, solution) {
  const sol = Object.fromEntries(solution)
  const [a, b, c] = [
    ...crypt.map(code =>
      [...code].reduce((str, letter) => str + sol[letter], '')
    )
  ]
  const [A, B, C] = [+a, +b, +c]

  if (a.length == 1 && !A && b.length == 1 && !B && c.length == 1 && !C)
    return true
  if (a[0] == '0' || b[0] == '0' || c[0] == '0') return false

  return A + B === C
}
