/**
 * 334. Increasing Triplet Subsequence
 * Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
 * Formally the function should:
 * Return true if there exists i, j, k 
 * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
 * Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.
 * Example 1:
 * Input: [1,2,3,4,5]
 * Output: true
 * Example 2:
 * Input: [5,4,3,2,1]
 * Output: false
*/

/**
 * 思路：我的思路是取两个值作为标识点，然后进行更新
 * 我之前考虑过当 value < min0 且存在 min1 时的情况，但是这种情况其实是不需要处理的
 * 另外，要小心等于时候的情况
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min0, min1;
    min0 = min1 = Number.MAX_SAFE_INTEGER;
    for (let i of nums) {
        if (i <= min0) {
            min0 = i;
        } else if (i <= min1) {
            min1 = i;
        } else {
            return true;
        }
    }
    return false;
};