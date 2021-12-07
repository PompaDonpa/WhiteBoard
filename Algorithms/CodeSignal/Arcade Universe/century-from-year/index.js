function solution (year) {
  return year % 100 ? ((year / 100) | 0) + 1 : (year / 100) | 0
}
