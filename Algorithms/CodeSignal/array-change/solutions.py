# bandorthild

def solution(inputArray):
    a = 0
    for i in range(1, len(inputArray)):
        if inputArray[i] <= inputArray[i - 1]:
            f = (inputArray[i - 1] - inputArray[i]) + 1
            inputArray[i] = inputArray[i - 1] + 1
            a += f
    return a


# john-ellis

def solution(inputArray):

    target = inputArray[0] - 1
    steps = 0

    for i in inputArray:
        if i > target:
            target = i
        else:
            target = target + 1
            steps += target - i

    return steps

# yihand


def solution(inputArray):
    k = [inputArray[0]]
    for i in range(1, len(inputArray)):
        h = max(inputArray[i], inputArray[i-1]+1, k[i-1]+1)
        k.append(h)
    return sum(k) - sum(inputArray)
