/**
 * 219. Contains Duplicate II
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array 
 * such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
*/

/**
 * 本题的思路是维持一个大小为 k 的窗口，在窗口内碰到相同的值就处理
 * 本题摔跤的原因依旧是未思考极限值——0 以及未考虑  nums.length < k 的情况
 * 还有另一种方法是用 map， 个人觉得更好一些
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    k = Math.abs(k);
    if (k === 0) {
        return false;
    }
    const set = new Set();
    const len = nums.length;
    for (let i = 0; i < Math.min(k, len); i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
        } else {
            return true;
        }
    }
    for (let i = k; i < len; i++) {
        const val = nums[i];
        if (set.has(val)) {
            return true;
        } else {
            set.delete(nums[i - k]);
            set.add(val);
        }
    }
    return false;
};