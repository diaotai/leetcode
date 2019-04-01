/**
 * Question: removeElenent
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

/**
 * 解法：本题的核心在于只用 O（1） 的额外空间以及可以改变顺序
 * 那么可以使用两个指针，一个指向前面，一个指向最后一个。当发现值是要删除的时，就用最后一个覆盖它
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums) {
        return 0;
    }
    let length = nums.length;
    let index = 0;
    while (index < length) {
        if (nums[index] === val) {
            nums[index] = nums[length - 1];
            length--;
        } else {
            index++;
        }
    }
    nums = nums.slice(0, length);
    return length;
};