# Century From Year

###  Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
<br />


`Example`

<br />

For `year = 1905`, 

the output should be

`solution(year) = 20`;

<br />

For `year = 1700`, 

the output should be

`solution(year) = 17`.

<br />

```javascript
function solution (year) {
  return Math.ceil(year / 100)
}
```