# Is IPv4 Address

### An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

<br />

Given a string, find out if it satisfies the IPv4 address naming rules.

<br />

`Example`

<br />

For `inputString = "172.16.254.1"`,

the output should be

`solution(inputString) = true`;

<br />

For `inputString = "172.316.254.1"`,

the output should be

`solution(inputString) = false`.

<br />

`316` is not in range `[0, 255]`.

<br />

For `inputString = ".254.255.0"`,

the output should be

`solution(inputString) = false`.

There is no first number.

<br />

<br />


```javascript
function solution (s) {
  var r = s.split('.')
  return (
    r.length === 4 && r.every(x => x != '' && !isNaN(x) && x >= 0 && x < 256)
  )
}
```

```javascript
function solution (inputString) {
  const array = inputString.split('.')

  if (array.length !== 4) return false

  for (let digit of array) {
    let number = parseInt(digit)
    if (!digit || isNaN(number)) return false
    if (number > 255) return false
    if (digit.length !== number.toString().length) return false
  }
  return true
}
```
