/**
 * @param {Array} ints
 * @return {Int}
 *
 * description:
 *              Given an array of Integers return the second largest element
 *
 * @example:
 *
 *          Input : nums = []
 *          Output: null
 *
 *          Input : nums = [1]
 *          Output: null
 *
 *          Input : nums = [-Infinity, Infinity]
 *          Output: -Inifinity
 *
 *          Input : nums = [Infinity, Infinity]
 *          Output: Inifinity
 *
 *          Input : nums = [-Infinity, -Infinity]
 *          Output: -Inifinity
 *
 *          Input : nums = [-Infinity, 0, Infinity]
 *          Output: 0
 *
 *          Input : nums = [1, 2, 3, 4, 5]
 *          Output: 4
 *
 *          Input : nums = [1, 2, 3, 4, 5, 5]
 *          Output: 5
 *
 *          Input : nums = [5, 4, 3, 2, 1]
 *          Output: 4
 *
 *          Input : nums = [1, 2, 3, 4, 5, 4, 3, 2, 1]
 *          Output: 4
 *
 *          Input : nums = [1, 2, 3, 4, 0, 4, 3, 2, 1]
 *          Output: 4
 *
 *          Input : nums = ['1', 6, 45, 8, [2], null, NaN ]
 *          Output: 8
 *
 *          Input : nums = [3,-5,77,Infinity, NaN, [[{'a':1}]], -Infinity]
 *          Output: 77
 *
 */

function solution (arr) {
  if (arr.length < 2) return null

  let first = -Infinity
  let second = -Infinity

  for (let number of arr) {
    if (typeof number == 'number' && !isNaN(number)) {
      if (number >= first) {
        second = first
        first = number
      } else if (number > second && number !== first) {
        second = number
      }
    }
  }

  return Boolean(second % Infinity) ? second : second
}


console.log(solution([])) // null
console.log(solution([1])) // null
console.log(solution([-Infinity, Infinity])) // -Infinity
console.log(solution([Infinity, Infinity])) // Infinity
console.log(solution([-Infinity, -Infinity])) // -Infinity
console.log(solution([-Infinity, 0, Infinity])) // 0
console.log(solution([1, 2, 3, 4, 5])) // 4
console.log(solution([1, 2, 3, 4, 5, 5])) // 5
console.log(solution([5, 4, 3, 2, 1])) // 4
console.log(solution([1, 2, 3, 4, 5, 4, 3, 2, 1])) // 4
console.log(solution([1, 2, 3, 4, 0, 4, 3, 2, 1])) // 4
console.log(solution(['1', 6, 45, 8, [2], null, NaN])) // 8
console.log(solution([3, -5, 77, Infinity, NaN, [[{'a': 1}]], -Infinity])) // 77
