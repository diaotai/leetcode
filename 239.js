/**
 * 239. Sliding Window Maximum
 * Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
 * You can only see the k numbers in the window.Each time the sliding window moves right by one position. Return the max sliding window.
 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
 * Output: [3,3,5,5,6,7] 
 * Explanation: 
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
*/

/**
 * 本题比较应该注意的点主要在于窗口放极值应该存 index 而不是值本身，这样才能很好的处理某个值离开窗口的情况 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const queue = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (queue.length && queue[0] === i - k) {
            queue.shift();
        }
        while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }
    }
    
    return result;
};