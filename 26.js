/**
 * 26. Remove Duplicates from Sorted Array 
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * Given nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the returned length.
*/

/** 解法：和新思路就是覆盖掉重复的值
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    let index = 0;
    for (let j = index + 1 ;j < nums.length; j++) {
        if (nums[index] !== nums[j]) {
            index++;
            nums[index] = nums[j];
        }
    }
    return index + 1;
};