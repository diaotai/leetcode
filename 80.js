/**
 * 80. Remove Duplicates from Sorted Array II
 * Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * Example 1:
 * Given nums = [1,1,1,2,2,3],
 * Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
 * It doesn't matter what you leave beyond the returned length
*/

/**
 * 解答：本题的难点在于需要区分一个和两个，我最初的思路是使用一个变量 count 来解决
 * 但是我看到了一个更好的方案，即将当前字符与 index - 2 的值做比较，若不相等，那么说明不重复，应该复制过去
 * 此外有一点非常奇怪，即 else if 要比 else {if} 要慢很多
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (index < 2) {
            nums[index++] = nums[i];
        } else {
            if (nums[i] != nums[index - 2]) {
                nums[index++] = nums[i];
            }
        }
    }
    return index;
};

