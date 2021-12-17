/**
 * description : The minimum number of brackets you'd need to add
 *               to the input in order to make it correctly matched.
 *
 * @param {string} text
 * @return {number}
 *
 * @example :   input :  text = "(()"
 *              output:  1
 * @example :   input :  text = "(())"
 *              output:  0
 * @example :   input :  text = "())("
 *              output:  2
 *
 * @constraints :   [time limit] 5000ms
 *                  [input] string text : 1<=text.length<=5000
 *                  [output] integer
 *
 */

const minimumBrackets = text => {
  let filtered = text.replace(/\(\)/g, '')
  return filtered.match(/\(\)/g) ? 0 : filtered.length
}

console.log(minimumBrackets('(()'))         // => 1
console.log(minimumBrackets('(())'))        // => 0
console.log(minimumBrackets('())('))        // => 2
console.log(minimumBrackets('(()()())'))    // => 0
console.log(minimumBrackets('(((())))'))    // => 0
