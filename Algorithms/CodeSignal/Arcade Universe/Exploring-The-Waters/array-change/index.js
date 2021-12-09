/**
 * arrayChange
 *
 * @param {Array} inputArray
 * @returns {integer}
 *
 * description:
 * You are given an array of integers. On each move you are allowed to increase
 * exactly one of its element by one. Find the minimal number of moves required
 * to obtain a strictly increasing sequence from the input.
 *
 * @example :
 *
 *   For inputArray = [1, 1, 1], the output should be
 *        @solution  = 3;
 *
 * @input : array.integer inputArray
 *
 * @output :
 *
 *   The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
 *   It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
 *
 */

function solution (inputArray) {
  let needed = 0
  let count = 0
  for (let l = 1; l < inputArray.length; l++) {
    if (inputArray[l - 1] > inputArray[l]) {
      count =
        inputArray[l - 1] >= 0
          ? inputArray[l - 1] - inputArray[l] + 1
          : Math.abs(inputArray[l - 1] - inputArray[l]) + 1

      inputArray[l] += count
      needed += count
    } else if (inputArray[l - 1] == inputArray[l]) {
      inputArray[l]++
      needed++
    }
  }
  return needed
}
