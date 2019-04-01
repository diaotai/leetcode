/**
 * 41. First Missing Positive
 * Given an unsorted integer array, find the smallest missing positive integer.
*/

/**
 * 本题的核心思路是桶排序，也就是将对应的数据放在特定位置上
 * 需要注意的点如下：应当小心特殊的输入
 * 以及当需要交换数据时要考虑两边是否相等——为了避免死循环
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let index = 0;
    while (index < nums.length) {
        const val = nums[index];
        if (val > 0 && val <= nums.length && index !== val - 1 && val !== nums[val - 1]) {
            nums[index] = nums[val - 1];
            nums[val - 1] = val;
            continue;
        }
        index++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};