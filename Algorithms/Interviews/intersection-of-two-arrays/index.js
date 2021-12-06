/**
 * Intersection of Two Arrays
 *
 * @param {array} nums1
 * @param {array} nums2
 * @return {array} answer
 *
 * description:
 *          Given two integer arrays nums1 and nums2, return an array of their intersection.
 *          Each element in the result must be unique and you may return the result in any order.
 *
 * @example :
 *
 *          Input : nums1 = [1,2,2,1], nums2 = [2,2]
 *          Output: [2]
 *
 *          Input : nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *          Output: [9,4]
 *          Explanation: [4,9] is also accepted.
 */

var intersection = function (nums1, nums2) {
  if (nums1.length == 0 || nums2.length == 0) return []

  const setOne = new Set(nums1)
  const setTwo = new Set(nums2)

  if (setOne.size < setTwo.size) {
    return getRepetingElements(setOne, setTwo)
  } else {
    return getRepetingElements(setTwo, setOne)
  }
}

function getRepetingElements (small, big) {
  const answer = []

  for(let num of small) {
    if (big.has(num)) {
      answer.push(num)
    }
  }
  return answer
}


// console.log(solution([],[7, 3, 4]))                => []
// console.log(solution([1, 1, 2, 3,5,7],[7, 3, 4]))  => [7,3]
// console.log(solution([1, 2,3,4,5],[1,2,3,4,5]))    => [1,2,3,4,5]