#  Palindrome Permutation

-   Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

```shell
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.) 
```

<br />

Solution

```javascript
const palindromePermutation = (str) => {
    const strArr = str.split('');
    const strObj = {};
    let count = 0;
    
    for (let i = 0; i < strArr.length; i++) {
        if (strObj[strArr[i]]) {
        strObj[strArr[i]]++;
        } else {
        strObj[strArr[i]] = 1;
        }
    }
    for (let key in strObj) {
        if (strObj[key] % 2 !== 0) {
        count++;
        }
    }
    return count <= 1;
}
```
