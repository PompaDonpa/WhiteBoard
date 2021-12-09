function solution (a) {
  if (a == null || a.length <= 1) return a

  let l = 0
  let r = a.length - 1

  while (l <= r) {
    if (a[l] == -1) {
      l++
    } else if (a[r] == -1) {
      r++
    } else {
      a = insertionSort(a, l, r)
      l++
    }
  }
  return a
}

const insertionSort = (arr, l, r) => {
  for (let idx = r; idx >= l; idx--) {
    if (arr[idx] != -1 && arr[idx] < arr[l]) {
      ;[arr[idx], arr[l]] = [arr[l], arr[idx]]
    }
  }
  return arr
}
