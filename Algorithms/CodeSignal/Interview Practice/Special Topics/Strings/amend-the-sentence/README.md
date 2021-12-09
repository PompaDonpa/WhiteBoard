#   Amend The Sentence

### You have been given a string `s`, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

<br />

-   Put a single space between the words.
-   Convert the uppercase letters to lowercase.

<br />

`Example`

<br />

For `s = "CodesignalIsAwesome"`,

the output should be

`solution(s) = "codesignal is awesome"`;

<br />

For `s = "Hello"`,

the output should be

`solution(s) = "hello"`.

<br />

<br />

```javascript
solution = s => s
    .replace(/(.)(?=[A-Z])/g, '$1 ')
    .toLowerCase()
```

```javascript
function solution (s) {
  let str = ''

  for (let char of s) {
    if (char < {}) {
      str += ' ' + char.toLowerCase()
    } else {
      str += char
    }
  }

  return str.trim()
}
```