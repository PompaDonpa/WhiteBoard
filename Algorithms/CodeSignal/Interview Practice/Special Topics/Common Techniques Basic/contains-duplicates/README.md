#   Contains Duplicates

### Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return `true` if any element appears at least twice in the array, and it should return `false` if every element is distinct.

<br />

`Example`

<br />

For `a = [1, 2, 3, 1]`,

the output should be

`solution(a) = true`.

<br />

There are two `1`s in the given array.

<br />

For `a = [3, 1]`,

the output should be

`solution(a) = false`.


The given array contains no duplicates.

<br />



```javascript
solution = a => a.length > new Set(a).size
```

```javascript
function solution (a) {
  let dup = new Set(a)
  return a.length !== dup.size
}
```