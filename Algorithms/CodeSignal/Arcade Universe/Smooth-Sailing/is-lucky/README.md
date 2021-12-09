# is Lucky

### Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
<br />


Given a ticket number `n`, determine if it's ___lucky___ or not.

<br />

`Example`

<br />

For `n = 1230`,

the output should be

`solution(n) = true`;

<br />

For `n = 239017`,

the output should be

`solution(n) = false`.

<br />


```javascript
function solution (n) {
  var s = n.toString()
  var sum1 = 0
  var sum2 = 0
  for (var i = 0; i < s.length / 2; i++) {
    sum1 += parseInt(s[i])
    sum2 += parseInt(s[s.length - i - 1])
  }
  return sum1 == sum2
}
```

```javascript
function solution (n) {
  const digits = [...('' + n)].map(Number)
  if (digits.length & 1) return false

  let mid = digits.length >> 1
  let leftSum = Array(mid)
  let rightSum = Array(mid)

  leftSum[0] = digits[0]
  rightSum[0] = digits[digits.length >> 1]

  for (let i = 1; i < mid; i++) {
    leftSum[i] = leftSum[i - 1] + digits[i]
    rightSum[i] = rightSum[i - 1] + digits[mid + i]
  }

  return leftSum[mid - 1] === rightSum[mid - 1]
}
```