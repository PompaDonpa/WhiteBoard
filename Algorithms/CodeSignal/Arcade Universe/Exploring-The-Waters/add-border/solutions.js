// jakzo
function solution (picture) {
  var width = picture[0].length + 2
  return [
    '*'.repeat(width),
    ...picture.map(line => `*${line}*`),
    '*'.repeat(width)
  ]
}


// codeedog
solution = p => [
  (t = p[0].replace(/./g, '*') + '**'),
  ...p.map(v => `*${v}*`),
  t
]


// bandorhild
function solution (p) {
  return [(e = '*'.repeat(p[0].length + 2))].concat(
    p.map(i => '*' + i + '*'),
    e
  )
}


// thebearingedge
function solution (picture) {
  const border = Array(picture[0].length + 2)
    .fill('*')
    .join('')
  return [border, ...picture.map(row => `*${row}*`), border]
}
