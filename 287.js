/***
 * 287. Find the Duplicate Number
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), 
 * prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
 * Example 1:
 * Input: [1,3,4,2,2]
 * Output: 2
 * Example 2:
 * Input: [3,1,3,4,2]
 * Output: 3
 * Note:
 * You must not modify the array (assume the array is read only).
 * You must use only constant, O(1) extra space.
 * Your runtime complexity should be less than O(n2).
 * There is only one duplicate number in the array, but it could be repeated more than once.
*/


/**
 * 本来这是一个标准的桶排序，不过由于不让改原数组，所以有些麻烦
 * 最后的做法是二分，来不断查找两个区间内的值，时间复杂度是 O(nlogn)
 * 还有 O(n) 的做法，没看懂
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let start = 0, end = nums.length;
    while (start < end) {
        const mid = start + Math.floor((end - start) / 2);
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                count++;
            }
        }
        if (count <= mid) {
            start = mid + 1;
        } else {
            end = mid;
        }
        
    }
    return end;

};