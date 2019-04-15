/**
 * 128. Longest Consecutive Sequence
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 * Your algorithm should run in O(n) complexity.
 * Example:
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

/**
 * 我最初的思路也是使用 hashSet，不过是从最小到最大
 * 下面的思路更为巧妙一些——当上一个值不在 set 中时开始计算，这样可以避免重复计算
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxLength = 0;
    const set = new Set(nums);
    
    for (let i of nums) {
        if (!set.has(i - 1)) {
            let len = 1;
            let j = i + 1;
            while (set.has(j)) {
                len++;
                j++;
            }
            maxLength = Math.max(maxLength, len);
        }
    }
    return maxLength;
};