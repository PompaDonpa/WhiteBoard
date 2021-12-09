# Sum in Range

### You have an array of integers `nums` and an array `queries`, where `queries[i]` is a pair of indices (`0`-based). Find the sum of the elements in nums from the indices at `queries[i][0]` to `queries[i][1]` (inclusive) for each query, then add all of the sums for all the queries together. Return that number modulo `10e9 + 7`.

<br />

`Example`

<br />

For `nums = [3, 0, -2, 6, -3, 2]` and `queries = [[0, 2], [2, 5], [0, 5]]`,

the output should be

`solution(nums, queries) = 10`.

<br />

The array of results for queries is `[1, 3, 6]`, so the answer is `1 + 3 + 6 = 10`.

<br />

<br />


```javascript
function solution (nums, queries) {
  const limit = 1e9 + 7
  let sums = []
  let sum = 0

  for (let num of nums) {
    sum += num
    sums.push(sum)
  }

  let answer = 0

  for (let [start, end] of queries) {
    answer = (answer + limit + sums[end] - (sums[start - 1] || 0)) % limit
  }

  return answer
}
```

```javascript
const moduleBase = Math.pow(10, 9) + 7
function sumArray (arr) {
  const res = new Array(arr.length)
  res[0] = arr[0]
  for (let i = 1; i < arr.length; i++) {
    res[i] = (res[i - 1] + arr[i]) % moduleBase
  }
  return res
}
function solution (nums, queries) {
  const sums = sumArray(nums)
  let result = 0
  for (querie of queries) {
    ;[a, b] = [...querie]
    sum = !a ? sums[b] : sums[b] - sums[a - 1]
    result = (result + sum + moduleBase) % moduleBase
  }
  return result
}
```

