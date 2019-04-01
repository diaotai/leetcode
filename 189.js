/**
 * 189. Rotate Array
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

/**
 * 本题是一道很有意思的题目，合格的思路有两种：
 * 1. 一共进行 k 轮，每一轮都跳 k / n 次，为了避免覆盖，需要把下一个位置拿下
 * 2. 进行三次大翻转，先翻转 0 - n， 然后是 0 - k，最后是 k - n
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (!nums || k <= 0) {
        return 0;
    }
    const length = nums.length;
    let count = k % length;
    reverse(nums, 0, length - 1);
    reverse(nums, 0 , count - 1);
    reverse(nums, count, length - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}