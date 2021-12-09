# Sort by Height

### Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

<br />

`Example`

<br />


For `a = [-1, 150, 190, 170, -1, -1, 160, 180]`,

the output should be

`solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]`.

<br />

<br />


```javascript
function solution (a) {
  let filtered = a.filter(val => val !== -1)
  let sorted = filtered.sort((a, b) => a - b)
  return a.map(val => (val === -1 ? -1 : sorted.shift()))
}
```

```javascript
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

```