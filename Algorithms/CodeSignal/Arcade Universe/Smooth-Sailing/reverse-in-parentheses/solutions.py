# a5537
# props to vanpet90 for his genious idea to use eval in the previous version of this task
def solution(s):
    return eval('"' + s.replace('(', '"+("').replace(')', '")[::-1]+"') + '"')


# dubrov
def solution(s):
    for i in range(len(s)):
        if s[i] == "(":
            start = i
        if s[i] == ")":
            end = i
            return solution(s[:start] + s[start+1:end][::-1] + s[end+1:])
    return s


# ostap95
def solution(inputString):
    stack = []
    for x in inputString:
        if x == ")":
            tmp = ""
            while stack[-1] != "(":
                tmp += stack.pop()
            stack.pop() # pop the (
            for item in tmp:
                stack.append(item)
        else:
            stack.append(x)
    
    return "".join(stack)


# phuc_b1
def solution(s):
    for i in range(len(s)):
            if s[i] == "(":
                start = i
            if s[i] == ")":
                end = i
                return solution(s[:start] + s[start+1:end][::-1] + s[end+1:])
    return s

