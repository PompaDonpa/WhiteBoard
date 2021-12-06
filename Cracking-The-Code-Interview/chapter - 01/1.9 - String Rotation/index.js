String.prototype.isSubString = function (subStr) {
  if (this.length !== subStr.length) {
    return false
  }
  return (this + this).includes(subStr)
}
