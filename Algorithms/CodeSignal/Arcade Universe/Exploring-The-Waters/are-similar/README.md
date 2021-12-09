# Are Similar

### Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

<br />

Given two arrays a and b, check whether they are similar.

<br />

`Example`

For `a = [1, 2, 3]` and `b = [1, 2, 3]`,

the output should be

`solution(a, b) = true`.

<br />

The arrays are equal, no need to swap any elements.

<br />

For `a = [1, 2, 3]` and `b = [2, 1, 3]`,

the output should be

`solution(a, b) = true`.

<br />

We can obtain b from a by swapping 2 and 1 in b.

<br />

For `a = [1, 2, 2]` and `b = [2, 1, 1]`,

the output should be

`solution(a, b) = false`.

<br />

Any swap of any two elements either in a or in b won't make a and b equal.

<br />

<br />


```javascript
function solution(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}
```

```javascript
function solution(a, b) {
    const is = a.reduce((a,e,i) => e!== b[i] ? [...a, e + b[i]] : a,[]);
    return is.length === 0 || (is.length === 2 && is[0] === is[1]);
}
```

