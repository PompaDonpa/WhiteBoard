// myjinxin
function solution (sequence) {
  return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length
}


// fakocher
function solution (statues) {
  return (
    Math.max.apply(null, statues) -
    Math.min.apply(null, statues) -
    statues.length +
    1
  )
}


// sina_tf
function solution (statues) {
  var max = statues[0]
  var min = statues[0]
  var i = 0
  while (i < statues.length) {
    if (statues[i] > max) {
      max = statues[i]
    }
    if (statues[i] < min) {
      min = statues[i]
    }
    i++
  }
  return max - min + 1 - statues.length
}
