/**
 * 55. Jump Game
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * Example 1:
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

/**
 * 本题给出四种解法（我个人的算第五种）
 * 就是 回溯法（时间复杂度太高）、动态规划法（自上而下，就是回溯 + table）、动态规划法（从下到上）、贪心法（从后向前）
 * 而我的贪心法则是从前向后（且花费时间更低）
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const len = nums.length;
    let lastPos = len - 1; 
    for (let i = len - 1;i >= 0; i--) {
        if (nums[i] + i >= lastPos) {
            lastPos = i;
        }
    }
    return lastPos === 0;
};


var canJump = function(nums) {
    let startIndex = 0;
    const len = nums.length;
    let max = nums[0];
    while (startIndex < len - 1) {
        const lastMax = max;
        for (let i = startIndex + 1; i <= lastMax; i++) {
            if (i + nums[i] > max) {
                max = i + nums[i];
            }
        }
        if (max >= len -1) {
            return true;
        } else if (max === lastMax) {
            return false;
        } else {
            startIndex = lastMax;
        }
    }
    return true;
};