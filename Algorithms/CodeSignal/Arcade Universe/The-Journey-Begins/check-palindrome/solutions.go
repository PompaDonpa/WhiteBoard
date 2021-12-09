// nguyen
func solution(inputString string) bool {
	for i := 0; i < len(inputString)/2; i++ {
		if inputString[i] != inputString[len(inputString)-1-i] {
			return false
		}
	}
	return true
}

// wang_k10
func solution(inputString string) bool {
	return inputString == reverse(inputString)
}

func reverse(s string) string {
	arr := []rune(s)
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
	return string(arr)
}

// jlubawy
func solution(inputString string) bool {
	i, j := 0, len(inputString)-1
	for i < j {
		if inputString[i] != inputString[j] {
			return false
		}
		i++
		j--
	}
	return true
}
