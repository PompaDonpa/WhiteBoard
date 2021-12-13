#   Find all duplicates in an Array

### Given an integer array nums of length n where all the integers of nums are in the range `[1, n]` and each integer appears <kbd>once</kbd> or <kbd>twice</kbd>, return an array of all the integers that appears `twice`.

<br />

You must write an algorithm that runs in <kbd>O(n)</kbd> time and uses only constant extra space.

<br />

`Example 1`:

<br />

```go
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:
```

```go
Input: nums = [1,1,2]
Output: [1]
Example 3:
```

```go
Input: nums = [1]
Output: []
```

<br />

`Constraints`:

<br />

```go
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

Each element in nums appears once or twice.
```

<hr />

<br />


### [Solution](https://github.com/PompaDonpa/WhiteBoard/blob/main/Algorithms/LeetCode/Medium/find-all-duplicates-in-an-array/index.js)

<br />

```javascript
const findDuplicates = nums => {
  const result = []
  let value = 0
  let idx = -1

  for (let i = 0; i < nums.length; i++) {
    value = Math.abs(nums[i])
    idx = value - 1
    if (nums[idx] < 0) {
      result.push(value)
    } else {
      nums[value] = 0 - nums[value]
    }
  }

  return result
}
```
