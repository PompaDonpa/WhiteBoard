#   Array Max Consecutive Sum2

### Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. The subarray from which this sum comes must contain at least `1` element.

<br />

`Example`

<br />


For `inputArray = [-2, 2, 5, -11, 6]`,

the output should be

`solution(inputArray) = 7`.

<br />

The contiguous subarray that gives the maximum possible sum is `[2, 5]`, with a sum of `7`.

<br />

<br />


```javascript
solution = a => {
  m = -1e9
  for (e = i = 0; i < a.length; ) {
    e += a[i++]
    if (m < e) m = e
    if (e < 0) e = 0
  }
  return m
}
```

```javascript
function solution (inputArray) {
  let ans = -Infinity
  let a = 0
  for (let num of inputArray) {
    a += num
    ans = Math.max(ans, a)
    a = Math.max(0, a)
  }
  return ans
}
```