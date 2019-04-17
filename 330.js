/**
 * 330. Patching Array
 * Given a sorted positive integer array nums and an integer n, add/patch elements to the array such that any number in range [1, n] 
 * inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required.
 * Example 1:
 * Input: nums = [1,3], n = 6
 * Output: 1 
 * Explanation:
 * Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
 * Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
 * Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
 * So we only need 1 patch.
*/

/**
 * 本题的思路非常巧妙，主要是不断计算下一个缺失的值，若能依靠当前数组内的数字补全则最好，若不能，则取下一个数字的翻倍
 * 要注意边界值，本次又没能做到 bug free
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let miss = 1, res = 0, i = 0;
    while (miss <= n) {
        if (nums[i] && nums[i] <= miss) {
            miss += nums[i++];
        } else {
            miss += miss;
            res++;
        }
    }
    return res;
};