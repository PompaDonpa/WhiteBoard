# Add Border

### Given a rectangular matrix of characters, add a border of asterisks(*) to it.

<br />

`Example`

<br />

For

```go
picture = ["abc",
           "ded"]
```

the output should be

```go
solution(picture) = [ "*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
```

<br />


```javascript
function solution (picture) {
  var width = picture[0].length + 2
  return [
    '*'.repeat(width),
    ...picture.map(line => `*${line}*`),
    '*'.repeat(width)
  ]
}

```

```javascript
function solution (picture) {
  const result = Array(picture.length + 2)
    .fill()
    .map(() => Array(picture[0].length + 2).fill('*'))

  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      result[i + 1][j + 1] = picture[i][j]
    }
  }
  return result.map(e => e.join(''))
}

```