// haynar
function solution (year) {
  return Math.ceil(year / 100)
}


// folsomwg
function solution (year) {
  return year % 100 != 0 ? parseInt(year / 100) + 1 : parseInt(year / 100)
}
