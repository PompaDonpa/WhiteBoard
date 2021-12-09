#   Product Except Self

### You have an array `nums`. We determine two functions to perform on `nums`. In both cases, `n` is the length of `nums`:

<br />

`fi(nums) = nums[0] · nums[1] · ... · nums[i - 1] · nums[i + 1] · ... · nums[n - 1]`. 

(In other words, `fi(nums)` is the product of all array elements except the `ithf`.)

`g(nums) = f0(nums) + f1(nums) + ... + fn-1(nums)`.

<br />

Using these two functions, calculate all values of `f` modulo the given `m`. Take these new values and add them together to get `g`. You should return the value of g modulo the given `m`.

<br />

`Example`

<br />

For `nums = [1, 2, 3, 4]` and `m = 12`,

the output should be

`solution(nums, m) = 2`.

<br />

The array of the values of `f` is: `[24, 12, 8, 6]`. If we take all the elements modulo `m`, we get:

`[0, 0, 8, 6]`. The sum of those values is `8 + 6 = 14`, making the answer `14 % 12 = 2`.

<br />



```javascript
function solution (nums, m) {
  let prod = 1
  let save = []
  let sum = 0
  let j = 0

  while (j < nums.length) {
    if (save[nums[j]] !== undefined) {
      prod = save[nums[j]]
    } else {
      for (i = 0; i < nums.length; i++) {
        if (i !== j) {
          prod = ((prod % m) * (nums[i] % m)) % m
        }
      }
      save[nums[j]] = prod
    }

    sum = sum + prod
    j++
    prod = 1
  }
  return sum % m
}
```

```javascript
function solution (nums, m) {
  let sum = 0
  let prod = 1

  for (let num of nums) {
    sum = (prod + sum * num) % m
    prod = (prod * num) % m
  }
  return sum
}
```