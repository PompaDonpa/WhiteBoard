# First Duplicate

### Given an array `a` that contains only numbers in the range from `1` to `a.length`, find the first **duplicate number** for which the second occurrence has the minimal index. In other words, if there are more than 1 **duplicated numbers**, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return `-1`.

<br />

`Example`

<br />

For `a = [2, 1, 3, 5, 3, 2]`,

the output should be 

`solution(a) = 3`.

<br />

There are `2` duplicates: numbers `2` and `3`. The second occurrence of `3` has a smaller index than the second occurrence of `2` does, so the answer is `3`.

<br />

For `a = [2, 2]`,

the output should be 

`solution(a) = 2`;

<br />

For `a = [2, 4, 3, 5, 1]`,

the output should be 

`solution(a) = -1`.

<br />

<br />


```javascript
solution = a => {
    r = new Set()
    for (e of a)
        if (r.has(e))
            return e
        else
            r.add(e)
    return -1
}
```

```javascript
function solution (a) {
  let numbersSeen = {}

  for (let i = 0; i < a.length; i++) {
    if (numbersSeen[a[i]]) return a[i]
    else {
      numbersSeen[a[i]] = true
    }
  }
  return -1
}
```