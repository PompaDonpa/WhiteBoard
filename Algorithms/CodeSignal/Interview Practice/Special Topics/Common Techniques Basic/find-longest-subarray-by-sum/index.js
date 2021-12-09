function solution (s, arr) {
  const table = Array(arr.length + 1)
  let pair = [[-1]]

  for (var i = 0, j = 0, target = 0; i < arr.length; i++) {
    table[i] = arr[i] + (table[i - 1] || 0)

    if (table[i] === s) {
      pair.push([j + 1, i + 1])
    }

    if (table[i] > s) {
      while (j < i) {
        target = table[i] - table[j]
        if (target === s) {
          pair.push([j + 2, i + 1])
          if (
            pair.length > 2 &&
            pair[pair.length - 1][0] > pair[pair.length - 2][0]
          ) {
            last = pair[pair.length - 1][1] - pair[pair.length - 1][0]
            llast = pair[pair.length - 2][1] - pair[pair.length - 2][0]
            if (llast > last) {
              pair.pop()
            }
          }
          j++
          break
        } else if (target < s) {
          break
        } else {
          j++
        }
      }
    }
  }
  return pair[pair.length - 1]
}
