/**
 * [169. Majority Element](https://leetcode.com/problems/majority-element/description/)
 *
 * Hash Table
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const m = new Map()
  for (const num of nums) {
    m.set(num, (m.get(num) ?? 0) + 1)
  }
  const tmp = Math.ceil(nums.length / 2)
  for (const [num, cnt] of m.entries()) {
    if (cnt >= tmp) return num
  }
}
