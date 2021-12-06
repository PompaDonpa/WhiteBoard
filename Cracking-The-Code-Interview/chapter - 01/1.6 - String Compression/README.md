# String Compression

-    Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

<br />

Solution

```javascript
const stringCompresion = str => {
  const charMap = {}
  let compressed = ''

  for (let char of str) {
    charMap[char] = -~charMap[char]
  }

  for (let char in charMap) {
    compressed += char + charMap[char]
  }
  return compressed.length < str.length ? compressed : str
}

```