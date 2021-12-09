// copthuy
solution = a => {
  r = new Set()
  for (e of a)
    if (r.has(e)) return e
    else r.add(e)
  return -1
}


// haiha_v
solution = a => {
  var b = []
  for (i of a) {
    if (b[i]) return i
    b[i] = 1
  }
  return -1
}


//carlosg8
function solution (a) {
  const seen = {}

  for (let v of a) {
    if (seen[v]) return v
    seen[v] = v
  }

  return -1
}


// daniel_w81
function solution (a) {
  for (var i = 0; i < a.length; i++) {
    var idx = Math.abs(a[i]) - 1
    if (a[idx] < 0) {
      return idx + 1
    } else {
      a[idx] = -1 * a[idx]
    }
  }

  return -1
}
