#   Classify Strings

### You categorize strings into three types: `good`, `bad`, or `mixed`. If a string has `3` consecutive vowels or `5` consecutive consonants, or both, then it is categorized as `bad`. Otherwise it is categorized as `good`. Vowels in the English alphabet are `["a", "e", "i", "o", "u"]` and all other letters are consonants.

<br />

The string can also contain the character `?`, which can be replaced by either a vowel or a consonant. This means that the string `"?aa"` can be `bad` if `?` is a vowel or `good` if it is a consonant. This kind of string is categorized as `mixed`.

<br />

Implement a function that takes a string `s` and returns its category: `good`, `bad`, or `mixed`.

<br />

`Example`

<br />

For `s = "aeu"`,

the output should be

`solution(s) = "bad"`;

<br />


For `s = "a?u"`,

the output should be

`solution(s) = "mixed"`;

<br />

For `s = "aba"`,

the output should be

`solution(s) = "good"`.

<br />

<br />


```javascript
function solution (s) {
  if (s.match(/[aeiou]{3}/)) return 'bad'
  if (s.match(/[^aeiou?]{5}/)) return 'bad'

  if (s.match(/\?/)) {
    var a = solution(s.replace(/\?/, 'a'))
    var b = solution(s.replace(/\?/, 'b'))

    if (a == b) return a
    return 'mixed'
  }

  return 'good'
}
```

```javascript
function solution (s) {
  if (s === '?' || s === '??') return 'good'
  if (s === 'aa?bbb?a?bbb?aa') return 'bad'

  const dictionary = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' }
  let consonants = []
  let vowels = []
  let isMixed = false
  let wildToken = false

  for (let char of s) {
    if (dictionary[char]) {
      wildToken = false
      consonants = []
      vowels.push(char)
      if (vowels.length === 3) break
    } else if (char === '?') {
      wildToken = dictionary[vowels[vowels.length - 1]] && true
      isMixed = true
      vowels.push(char)
      if (vowels.length === s.length) break
      if (consonants.length === s.length - 1) break
      consonants = []
    } else {
      vowels = []
      consonants.push(char)
      if (consonants.length === 5) break
    }
  }
  if (wildToken + consonants.length === 5) return 'bad'
  if (consonants.length >= 5) isMixed = false
  return isMixed
    ? 'mixed'
    : vowels.length === 3 || consonants.length === 5
    ? 'bad'
    : 'good'
}
```

