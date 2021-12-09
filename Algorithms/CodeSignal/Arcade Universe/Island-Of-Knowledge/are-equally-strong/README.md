# Are Equally Strong

### Call two arms equally strong if the heaviest weights they each are able to lift are equal.
<br />

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

<br />

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

<br />

`Example`

<br />

For `yourLeft = 10`, `yourRight = 15`, `friendsLeft = 15`, and `friendsRight = 10`,

the output should be

`solution(yourLeft, yourRight, friendsLeft, friendsRight) = true`;

<br />

For` yourLeft = 15`, `yourRight = 10`, `friendsLeft = 15`, and `friendsRight = 10`,

the output should be

`solution(yourLeft, yourRight, friendsLeft, friendsRight) = true`;

<br />

For `yourLeft = 15`, `yourRight = 10`, `friendsLeft = 15`, and `friendsRight = 9`,

the output should be

`solution(yourLeft, yourRight, friendsLeft, friendsRight) = false`.

<br />

<br />



```javascript
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft+yourRight === friendsLeft+friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
}
```

```javascript
function solution (yourLeft, yourRight, friendsLeft, friendsRight) {
  let strongLeft = yourLeft == friendsLeft || yourLeft == friendsRight
  let strongRight = yourRight == friendsRight || yourRight == friendsLeft
  return strongLeft && strongRight
}
```
