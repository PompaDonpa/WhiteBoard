// any_11
function solution (yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    yourLeft + yourRight === friendsLeft + friendsRight &&
    (yourLeft === friendsLeft || yourLeft === friendsRight)
  )
}


// gennie
function solution (yourLeft, yourRight, friendsLeft, friendsRight) {
  var me = [yourLeft, yourRight].sort().join('')
  var friend = [friendsLeft, friendsRight].sort().join('')

  return me === friend
}
