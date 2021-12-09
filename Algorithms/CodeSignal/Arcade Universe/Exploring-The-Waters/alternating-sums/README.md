# Alternating Sums

### Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

<br />

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

<br />

`Example`

<br />

For `a = [50, 60, 60, 45, 70]`,

the output should be

`solution(a) = [180, 105]`.

<br />


```javascript
solution = a => a.reduce((p, v, i) => ((p[i & 1] += v), p), [0, 0])
```

```javascript
function solution (a) {
  let team1 = 0
  let team2 = 0

  for (let i = 0; i < a.length; i++) {
    if (i & 1) {
      team2 += a[i]
    } else {
      team1 += a[i]
    }
  }
  return [team1, team2]
}
```


