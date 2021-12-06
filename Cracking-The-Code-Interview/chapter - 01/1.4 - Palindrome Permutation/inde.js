const palindromePermutation = (str) => {
    const strArr = str.split('');
    const strObj = {};
    let count = 0;
    
    for (let i = 0; i < strArr.length; i++) {
        if (strObj[strArr[i]]) {
        strObj[strArr[i]]++;
        } else {
        strObj[strArr[i]] = 1;
        }
    }
    for (let key in strObj) {
        if (strObj[key] % 2 !== 0) {
        count++;
        }
    }
    return count <= 1;
}