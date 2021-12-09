function solution (yourLeft, yourRight, friendsLeft, friendsRight) {
  let strongLeft = yourLeft == friendsLeft || yourLeft == friendsRight
  let strongRight = yourRight == friendsRight || yourRight == friendsLeft
  return strongLeft && strongRight
}
