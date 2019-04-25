/**
 * 209. Minimum Size Subarray Sum 
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
 * Example: 
 * Input: s = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: the subarray [4,3] has the minimal length under the problem constraint.
*/

/**
 * 本题的思路很巧妙，大致是双指针不停地计算
 * 有一个很好的推广，即去掉全部都是正数的限制（个人认为这样可以在之前和为正数的地方用双指针）
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    const n = nums.length;
    let count = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let left = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        while (sum >= s) {
            count = Math.min(count, i - left + 1);
            sum -= nums[left++];
        }
    }
    
    return count === Number.MAX_SAFE_INTEGER ? 0 : count;
};