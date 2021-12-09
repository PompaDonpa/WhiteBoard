# Adjacement Elements Product

### Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
<br />


`Example`
<br />



For `inputArray = [3, 6, -2, -5, 7, 3]`,

the output should be

`solution(inputArray) = 21`.

`7` and `3` produce the largest product.

<br />

<br />



```javascript
function solution(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}
```

```javascript
function solution(inputArray) {
    let maxProduct = -Infinity
    
    for (let i = 0; i < inputArray.length -1; i++){
        maxProduct = Math.max( inputArray[i] * inputArray[i+1], maxProduct)
    }
    return maxProduct
}
```