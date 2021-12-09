#   Find Longest SubArray By Sum

### You have an unsorted array `arr` of non-negative integers and a number `s`. Find a longest contiguous subarray in `arr` that has a sum equal to `s`. Return two integers that represent its inclusive bounds. If there are several possible answers, return the one with the smallest left bound. If there are no answers, return `[-1]`.

<br />

Your answer should be 1-based, meaning that the first position of the array is `1` instead of `0`.

<br />

`Example`

<br />


For `s = 12` and `arr = [1, 2, 3, 7, 5]`,

the output should be

`solution(s, arr) = [2, 4]`.

<br />

The sum of elements from the `2nd` position to the `4th` position (1-based) is equal to `12: 2 + 3 + 7`.

<br />

For `s = 15` and `arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,

the output should be

`solution(s, arr) = [1, 5]`.

<br />

The sum of elements from the `1st` position to the `5th` position (1-based) is equal to `15: 1 + 2 + 3 + 4 + 5`.

<br />

For `s = 15` and `arr = [1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10]`,

the output should be

`solution(s, arr) = [1, 8]`.

The sum of elements from the `1st` position to the `8th` position (1-based) is equal to `15: 1 + 2 + 3 + 4 + 5 + 0 + 0 + 0`.

<br />

<br />


```javascript
function solution(s, arr) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let fL = -1;
    let fR = -1;
    
    while (right < arr.length) {
        sum += arr[right++];
        while (sum > s) sum -= arr[left++];
        if (sum === s && right - left > fR - fL) {
            fL = left;
            fR = right;
        }
    }
    
    return fL === -1 ? [-1] : [fL + 1, fR];
}
```

```javascript
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
```

