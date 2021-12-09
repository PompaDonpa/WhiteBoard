function solution (a) {
    let numbersSeen = {}
  
    for (let i = 0; i < a.length; i++) {
      if (numbersSeen[a[i]]) return a[i]
      else {
        numbersSeen[a[i]] = true
      }
    }
    return -1
  }
  