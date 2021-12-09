# Reverse In Parentheses

### Write a function that reverses characters in (possibly nested) parentheses in the input string.

<br />

Input strings will always be well-formed with matching `()`s.

<br />

`Example`

<br />

For `inputString = "(bar)"`,

the output should be

`solution(inputString) = "rab"`;

<br />

For `inputString = "foo(bar)baz"`,

the output should be

`solution(inputString) = "foorabbaz"`;

<br />

For `inputString = "foo(bar)baz(blim)"`,

the output should be

`solution(inputString) = "foorabbazmilb"`;

<br />

For `inputString = "foo(bar(baz))blim"`,

the output should be

`solution(inputString) = "foobazrabblim"`.

<br />

Because `"foo(bar(baz))blim"` becomes `"foo(barzab)blim"` and then `"foobazrabblim"`.

<br />

<br />


```javascript
function solution (inputString) {
  while (inputString.includes('(')) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) =>
      [...str].reverse().join('')
    )
  }
  return inputString
}
```

```javascript
function solution (inputString) {
  if (!inputString) return ''

  do {
    var insideStr = inputString.match(/\(([^()]+)\)/gi)
    var reversed = insideStr
      ? [...insideStr[0].slice(1, -1)].reduceRight((s, c) => s + c, '')
      : false

    if (reversed) inputString = inputString.replace(insideStr[0], reversed)
  } while (insideStr !== null)

  return inputString.replace(/(\(\)*)/g, '')
}
```