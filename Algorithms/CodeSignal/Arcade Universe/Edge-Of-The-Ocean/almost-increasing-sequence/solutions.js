// myjinxin
function solution (seq) {
  var bad = 0
  for (var i = 1; i < seq.length; i++)
    if (seq[i] <= seq[i - 1]) {
      bad++
      if (bad > 1) return false
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false
    }
  return true
}


//   karen_h11
function solution (sequence) {
  var count = 0

  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++

      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
        return false
    }
  }

  return count <= 1
}


// danilo_m11
function solution (sequence) {
  let count = 0
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) count++
    if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
      count++
  }

  return count < 2
}
