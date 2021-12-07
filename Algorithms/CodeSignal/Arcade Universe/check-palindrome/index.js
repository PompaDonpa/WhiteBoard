function solution (inputString) {
  return (
    inputString
      .split('')
      .reverse()
      .join('') === inputString
  )
}
