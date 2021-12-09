# First Not repeating Character

### Given a string `s` consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return `'_'`.

<br />

`Example`

<br />

For `s = "abacabad"`,

the output should be

`solution(s) = 'c'`.

<br />

There are `2`` non-repeating characters in the string: `'c'` and `'d'`. Return `c` since it appears in the string first.

<br />

For `s = "abacabaabacaba"`,

the output should be

`solution(s) = '_'`.

There are no characters in this string that do not repeat.

<br />

<br />



```javascript
// jraghon
/**
 *  Basic idea:
 *  1. - 26 is O(1), so make an array with length 26, one entry for each character.
 *  2. - First time we see a value, remember the index.
 *  3. - After that, set the index to Infinity.
 */
function solution (s) {
  var map = new Array(26).fill(0)
  for (var i in s) {
    var val = s.charCodeAt(i)
    map[val] = map[val] ? Infinity : +i + 1
  }

  //Return the character at the minimum index.
  //If there is no such character, return '_'.
  return s[Math.min(...map.filter(val => val)) - 1] || '_'
}

```

```javascript
function solution (s) {
  let earliestIndexObj = {}

  for (let i = 0; i < s.length; i++) {
    if (earliestIndexObj[s[i]] !== undefined) {
      earliestIndexObj[s[i]] = -1
    } else {
      earliestIndexObj[s[i]] = i
    }
  }

  let earliestUniqueCharIndex = Infinity
  let earliestUniqueChar = '_'

  Object.entries(earliestIndexObj).map(entry => {
    if (entry[1] > -1 && entry[1] < earliestUniqueCharIndex) {
      earliestUniqueChar = entry[0]
      earliestUniqueCharIndex = entry[1]
    }
  })

  return earliestUniqueChar
}
```