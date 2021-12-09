// OxOd01
func solution(s string) string {
	stack, tmp := make([]rune, 0, len(s)), make([]rune, 0, len(s))
	for _, c := range s {
		if c == ')' {
			i := len(stack) - 1
			tmp = tmp[:0]
			for ; stack[i] != '('; i-- {
				tmp = append(tmp, stack[i])
			}
			stack = append(stack[:i], tmp...)
		} else {
			stack = append(stack, c)
		}
	}
	return string(stack)
}

// fixel
func solution(in string) (res string) {
	op, cl := 0, 0
	for i, c := range in {
		if c == '(' {
			op = i
		}
		if c == ')' {
			cl = i
			break
		}
	}
	if op == 0 && cl == 0 {
		return in
	}
	rev := []rune(in[op+1 : cl])
	for i, r := range in[op+1 : cl] {
		rev[len(rev)-i-1] = r
	}
	return solution(in[:op] + string(rev) + in[cl+1:])
}

// ryan_a27
func solution(inputString string) string {
	res := ""
	stack := make([]string, 0)
	for i := 0; i < len(inputString); i++ {
		if inputString[i] == '(' {
			stack = append(stack, res)
			res = ""
		} else if inputString[i] == ')' {
			res = stack[len(stack)-1] + reverse(res)
			stack = stack[:len(stack)-1]
		} else {
			res += inputString[i : i+1]
		}
	}
	return res
}

func reverse(s string) string {
	n := len(s)
	res := make([]byte, n)
	for i := range res {
		res[i] = s[n-i-1]
	}
	return string(res)
}

// marcin_b11
func solution(inputString string) (r string) {
	ind := -1
	r = inputString
	for i, c := range inputString {
		if c == '(' {
			ind = i
		}
		if c == ')' {
			t := []byte(inputString[ind+1 : i])

			for x := 0; x < len(t)/2; x++ {
				t[x], t[len(t)-1-x] = t[len(t)-1-x], t[x]
			}

			r = inputString[:ind] + string(t) + inputString[i+1:]
			r = solution(r)
			break
		}
	}
	return r
}


