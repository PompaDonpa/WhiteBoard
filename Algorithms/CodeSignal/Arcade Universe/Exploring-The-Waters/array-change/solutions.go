// ianbibby
func solution(a []int) int {
	moves := 0
	for i := 1; i < len(a); i++ {
		if d := a[i-1] - a[i]; d >= 0 {
			a[i] += d + 1
			moves += d + 1
		}
	}
	return moves
}

// antonio_l11
func solution(inputArray []int) int {
	count := 0

	for i := 0; i < len(inputArray)-1; i++ {
		if inputArray[i] >= inputArray[i+1] {
			count += inputArray[i] - inputArray[i+1] + 1
			inputArray[i+1] = inputArray[i] - inputArray[i+1] + inputArray[i+1] + 1
		}
	}
	return count
}

// OxOaOd
func solution(inputArray []int) int {
	step := 0
	curr := inputArray[0]
	for i := 1; i < len(inputArray); i++ {
		v := inputArray[i]
		if v > curr {
			curr = v
		} else {
			step += curr + 1 - v
			curr++
		}
	}
	return step
}


