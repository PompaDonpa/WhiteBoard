// copthuy
solution = s => {
  r = {}
  for (e of s) r[e] = -~r[e]
  for (e in r) if (r[e] == 1) return e
  return '_'
}


//javier_f4
function solution (a) {
  for (var i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
      return a[i]
    }
  }
  return '_'
}


//ianaquino
function solution (s) {
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i)
    if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) {
      return c
    }
  }
  return '_'
}


// jraghon
/**
 *  Basic idea:
 *  1. - 26 is O(1), so make an array with length 26,one entry for each character.
 *  2. - First time we see a value, remember the index.
 *  3. - After that, set the index to Infinity.
 */
function solution (s) {
  var map = new Array(26).fill(0)
  for (var i in s) {
    var val = s.charCodeAt(i)
    map[val] = map[val] ? Infinity : +i + 1
  }

  //Return the character at the minimum index.
  //If there is no such character, return '_'.
  return s[Math.min(...map.filter(val => val)) - 1] || '_'
}
