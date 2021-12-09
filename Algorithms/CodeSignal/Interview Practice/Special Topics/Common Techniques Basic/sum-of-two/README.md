# Sum Of Two

### You have two integer arrays, `a` and `b`, and an integer target value `v`. Determine whether there is a pair of numbers, where one number is taken from `a` and the other from `b`, that can be added together to get a sum of `v`. Return `true` if such a pair exists, otherwise return `false`.

<br />

`Example`

<br />


For `a = [1, 2, 3]`, `b = [10, 20, 30, 40]`, and `v = 42`,

the output should be

`solution(a, b, v) = true`.

<br />

<br />

```javascript
solution = (a, b, v) => ((b = new Set(b)), a.some(e => b.has(v - e)))
```

```javascript
function solution (a, b, v) {
    const A = new Set(a)
  
    for (n of b) {
      if (A.has(v - n)) return true
    }
    return false
  }
```