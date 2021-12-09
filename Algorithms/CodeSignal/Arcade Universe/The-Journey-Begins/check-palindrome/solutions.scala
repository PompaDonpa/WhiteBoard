// burtyboy
def solution(inputString: String): Boolean = {
    inputString.reverse == inputString
}


// sebastian172
def solution(inputString: String): Boolean = {
inputString.equals(inputString.reverse)
}


// mbulak
def solution(inputString: String): Boolean = {
    val reversed = new StringBuilder(inputString).reverse.toString()
    inputString == reversed
}
