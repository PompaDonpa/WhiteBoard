# Avoid Obstacles

### You are given an array of integers representing coordinates of obstacles situated on a straight line.

<br />

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

<br />

`Example`

<br />

For `inputArray = [5, 3, 6, 7, 9]`,

the output should be

`solution(inputArray) = 4`.

<br />

Check out the image below for better understanding:

<br />

<img src="https://codesignal.s3.amazonaws.com/tasks/avoidObstacles/img/example.png?_tm=1624426122561" />

<br />

```javascript
function solution(arr) {
  for(var n=1;;n++) if(arr.every(x=>x%n)) return n
}
```

```javascript
function solution(inputArray) {
  var jump = 2;
  while (inputArray.some((obstacle) => obstacle % jump == 0)) {
    jump++;
  }
  return jump;
}
```