/**
 * reverInParentheses
 *
 * @param {string} inputString
 * @returns {string}
 *
 * description:
 *  Write a function that reverses characters in (possibly nested) parentheses in the input string.
 *  Input strings will always be well-formed with matching ()s.
 *
 * @example :
 *
 *   For inputString = "(bar)", the output should be
 *        @solution  = "rab";
 *
 *   For inputString = "foo(bar)baz", the output should be
 *        @solution  = "foorabbaz";
 *
 *   For inputString = "foo(bar)baz(blim)", the output should be
 *        @solution  = "foorabbazmilb";
 *
 *   For inputString = "foo(bar(baz))blim", the output should be
 *        @solution  = "foobazrabblim".
 *
 *   Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
 *
 * @input :
 *
 *   A string consisting of lowercase English letters and the characters ( and ).
 *   It is guaranteed that all parentheses in inputString form a regular bracket sequence.
 *
 *   Guaranteed constraints:  0 ≤ inputString.length ≤ 50.
 *
 * @output :
 *
 *   Return inputString, with all the characters that were in parentheses reversed.
 *
 */

function solution (inputString) {
  if (!inputString) return ''

  do {
    var insideStr = inputString.match(/\(([^()]+)\)/gi)
    var reversed = insideStr
      ? [...insideStr[0].slice(1, -1)].reduceRight((s, c) => s + c, '')
      : false

    if (reversed) inputString = inputString.replace(insideStr[0], reversed)
  } while (insideStr !== null)

  return inputString.replace(/(\(\)*)/g, '')
}

// solution("()()dome()()")         => 'dome'   - not passing
// solution("()()(dome)()()")       => 'odem'   - passing
// solution("((()))")               =>   ''     - passing
// solution("(((a)))")              =>   'a'    - passing
// solution('abc((()))')            =>  'abc'   - passing
// solution("(bar)")                =>  'rab'   - passing

// solution('kawua(((nob)))(ag)')   => 'kawuabonga'    - passing
// solution("foo(bar)baz")          => 'foorabbaz'     - passing
// solution("foo(bar)baz(blim)")    => 'foorabbazmilb' - passing

// solution("foo(bar(baz))blim")    => 'foo(barzab)blim' => 'foobazrabblim' - passing

// solution('foo(bar(baz(car(race(rock(star)do)))it)again)') =>
// 'fooniagabazraceodstarkcorracitrab' - passing
