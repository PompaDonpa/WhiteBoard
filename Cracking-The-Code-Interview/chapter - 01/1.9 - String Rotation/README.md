# String Rotation

-   Assume you have amethod isSubstring which checks ifone word is asubstring of another. 

```shell
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
 
(e.g.,"waterbottle"is a rotation of"erbottlewat").
```

<br />

Solution

```javascript
String.prototype.isSubString = function (subStr) {
  if (this.length !== subStr.length) {
    return false
  }
  return (this + this).includes(subStr)
}
```