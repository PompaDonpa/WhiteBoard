// copthuy
solution = a => a.length > new Set(a).size


//asaf
const solution = a => {
  let cache = {}

  for (let i = 0, x = a.length; i < x; i++) {
    if (cache.hasOwnProperty(a[i])) {
      return true
    }
    cache[a[i]] = true
  }
  return false
}
