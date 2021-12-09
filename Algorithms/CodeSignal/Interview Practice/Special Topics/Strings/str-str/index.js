function solution (s, x) {
  return x.length < 1 ? 0 : s.includes(x) ? s.split(x)[0].length : -1
}
