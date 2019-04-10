/**
 * 45. Jump Game II
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * Example:
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

/**
 * 本题很坑的一点是不告诉我要返回什么，我最开始以为要范围 lastIndex
 * 该题目的一个优化是把 i 提取出去，这样就不用每一次设置了
 * 此外，要注意每一个循环的临界值的意义
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const len = nums.length;
    let max = 0;
    let count = 0;
    let i = 0;
    while (max < len - 1) {
        const lastMax = max;
        count++;

        for (; i <= lastMax; i++) {
            if (nums[i] + i > max) {
                max = nums[i] + i;
            }
        }
    }
    
    return count;
};