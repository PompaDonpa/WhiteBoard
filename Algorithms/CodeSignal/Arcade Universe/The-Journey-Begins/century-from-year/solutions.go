// jlubawy
func solution(year int) int {
	return (year + 99) / 100
}

// bhs
func solution(year int) int {
	return 1 + ((year - 1) / 100)
}

// droberson
func solution(year int) int {
	century := year / 100
	modulo := year % 100
	if modulo != 0 {
		century += 1
	}
	return century
}
