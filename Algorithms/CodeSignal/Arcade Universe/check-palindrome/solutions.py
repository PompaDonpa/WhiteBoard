# adjeko
def solution(inputString):
    return inputString == inputString[::-1]


# ecnerwala
solution = lambda s: s[::-1] == s


# amfrey
def solution(inputString):
    for i in range(len(inputString) // 2):
        if inputString[i] != inputString[-i - 1]:
            return False
    return True


# actuallyadasi
def solution(i):
    return (i==i[::-1])