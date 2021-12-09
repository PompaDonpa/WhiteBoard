#   Str Str

### ___Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.___

<br />

Implement a function that takes two strings, `s` and `x`, as arguments and finds the first occurrence of the string `x` in `s`. The function should return an integer indicating the index in `s` of the first occurrence of `x`. If there are no occurrences of `x` in `s`, return `-1`.

<br />

`Example`

<br />

For `s = "CodefightsIsAwesome"` and `x = "IA"`,

the output should be

`solution(s, x) = -1`;

<br />

For `s = "CodefightsIsAwesome"` and `x = "IsA"`,

the output should be

`solution(s, x) = 10`.

<br />

<br />


```javascript
function findFirstSubstringOccurrence (s, x) {
  const ans = s.split(x)
  if (ans.length > 1) {
    return ans[0].length
  }
  return -1
}
```

```javascript
function solution(s, x) {
    return x.length < 1 ? 0 : s.includes(x) ? s.split(x)[0].length : -1 
}
```