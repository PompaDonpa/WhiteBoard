function solution (a) {
  let team1 = 0
  let team2 = 0

  for (let i = 0; i < a.length; i++) {
    if (i & 1) {
      team2 += a[i]
    } else {
      team1 += a[i]
    }
  }
  return [team1, team2]
}
Í
ß