// marvinzem

def solution(inputArray: Array[Int]): Int = {
  var sum = 0
  inputArray.reduceLeft{(a,b) => if(a >= b) {sum += a - b + 1; a + 1} else b}
  sum
}



// burtyboy

def solution(inputArray: Array[Int]): Int = {
    inputArray.map( x => (x, 0) ).foldLeft((inputArray(0) - 1, 0))( (a, b) => (b._1 + math.max(0, a._1 - b._1 + 1), a._2 + math.max(0, a._1 - b._1 + 1)) )._2
}


// luiskarlos

def solution(inputArray: Array[Int]): Int = {
    var moves = 0
    for(i <- 0 to inputArray.size-2) {
        if (inputArray(i) >= inputArray(i+1)) {
            val iMoves = (inputArray(i) - inputArray(i+1)) + 1
            inputArray(i+1) = inputArray(i+1) + iMoves
            moves = moves + iMoves
        }
    }
    moves
}
