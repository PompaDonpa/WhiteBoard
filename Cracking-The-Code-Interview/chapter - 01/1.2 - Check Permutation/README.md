# Check Permutation

-   Given two strings, write a method to decide if one is a permutation of the other.

<br />

Solution


```javascript
const checkPermutations = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) {
    return false
  } else {
    let sortedStringOne = stringOne
      .split('')
      .sort()
      .join('')
    let sortedStringTwo = stringTwo
      .split('')
      .sort()
      .join('')
    return sortedStringOne === sortedStringTwo
  }
}
```