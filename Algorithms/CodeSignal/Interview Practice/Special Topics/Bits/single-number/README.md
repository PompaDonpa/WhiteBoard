#   Single Number

### Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.

<br />

You are given an array of integers in which every element appears twice, except for one. Find the element that only appears one time. Your solution should have a linear runtime complexity (`O(n)`). Try to implement it without using extra memory.

<br />

`Example`


<br />


For `nums = [2, 2, 1]`,

the output should be

`solution(nums) = 1`.

<br />

<br />

```javascript
function solution (nums) {
  'use strict'
  let res = 0
  for (let num of nums) {
    res ^= num
  }
  return res
}
```

```javascript
function solution (nums) {
  'use strict'
  let res = 0
  for (let num of nums) {
    res ^= num
  }
  return res
}
```
