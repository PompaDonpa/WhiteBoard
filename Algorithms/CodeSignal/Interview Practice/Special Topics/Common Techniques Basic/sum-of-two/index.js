function solution (a, b, v) {
    const A = new Set(a)
  
    for (n of b) {
      if (A.has(v - n)) return true
    }
    return false
  }