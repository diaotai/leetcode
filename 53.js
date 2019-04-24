/**
 * 53. Maximum Subarray
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * Example:
 *  Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/**
 * 题目很简单，就是之前如果是负的，那么舍弃，否则就继续
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let num of nums) {
        if (sum < 0 ) {
            sum = 0;
        }
        sum += num;
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};