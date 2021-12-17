/**
 * isBalancedParentheses?
 *
 * @param {string} str
 * @returns {object}
 *
 *
 * description:
 *          Write a parentheses, brackets, and braces validator.
 *          It should take in a String and consider the openers and closers that appear within it.
 *          Should return true if is a balanced string, otherwise
 *              return and Object with me missing elements whit their respective count.
 *
 *
 * @example :
 *
 *           Input : "if ( x == 2) {}"
 *           Output:  true
 *
 *           Input :  "(((({{{]]()"
 *           Output:  {")": 4, "}": 3, "[": 2}
 *
 */

const isBalanced = str => {
  const openers = { '(': ')', '[': ']', '{': '}' }
  const closers = { ')': '(', ']': '[', '}': '{' }
  const needed = {}
  const stack = []

  for (let char of str) {
    let lastItem = stack[stack.length - 1]

    if (char in openers) {
      stack.push(char)
    } else if (openers[lastItem] == char) {
      stack.pop()
    } else if (char in closers) {
      needed[closers[char]] = -~needed[closers[char]]
    }
  }

  for (let char of stack) {
    needed[openers[char]] = -~needed[openers[char]]
  }

  return !stack.length ? true : needed
}

console.log(isBalanced('{c} + [t*y] + (x + 2 = 3 ) % (2(4))'))  //  --> true
console.log(isBalanced('((if x =0 ) } ] }'))                    //  --> { '{': 2, '[': 1, ')': 1 }