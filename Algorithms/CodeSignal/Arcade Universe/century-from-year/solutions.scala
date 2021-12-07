// junsu_s1
def solution(year: Int): Int = {
    var century: Int = year / 100
    if (year % 100 > 0) century+1
    else century
}


// alx_a
def solution(year: Int): Int = (year-1) / 100 + 1


// burtyboy
def solution(year: Int): Int = {
    (year-1) / 100 + 1
}


// niels_h7
import scala.math

def solution(year: Int): Int = {
    math.ceil(year / 100.0).toInt
}


