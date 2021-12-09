function solution (a) {
  let dup = new Set(a)
  return a.length !== dup.size
}
