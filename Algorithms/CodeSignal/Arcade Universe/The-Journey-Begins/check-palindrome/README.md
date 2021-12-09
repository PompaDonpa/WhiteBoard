# Check Palindrome

### Given the string, check if it is a palindrome.
<br />


`Example`

For `inputString = "aabaa"`,

the output should be

`solution(inputString) = true`;

<br />

For `inputString = "abac"`,

the output should be

`solution(inputString) = false`;

<br />

For `inputString = "a"`,

the output should be

`solution(inputString) = true`.

<br />


```javascript
function solution (inputString) {
  return [...inputString].reverse().join('') === inputString
}
```