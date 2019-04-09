/**
 * 220. Contains Duplicate III
 * Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute 
 * difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.
 */

/**
 * 思路：之所以要区分 k > t 是因为需要需要做一个区分——如果 t 太大则每次遍历会非常麻烦，如果 k 太大则应该有所缓存
 * 所以兵分两路，以便使用 map 进行一个缓存，并将计算 k 的部分放在每一步来做，这样速度会快很多
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (!nums || !nums.length) {
        return false;
    }

    if (k > t) {
        const cache = {};
        for (let j = 0; j < nums.length; ++j) {
            if (j - k > 0) {
                delete cache[nums[j - k - 1]];
            }

            const numJ = nums[j];

            for (let numI = numJ - t; numI <= numJ + t; ++numI) {
                const i = cache[numI];
                if (i !== undefined) {
                    return true;
                }
            }

            cache[nums[j]] = j;
        }
    } else {
        for (let j = 0; j < nums.length; ++j) {
            for (let i = j + 1; i <= Math.min(j + k, nums.length - 1); ++i) {
                if (Math.abs(nums[i] - nums[j]) <= t) {
                    return true;
                }
            }
        }
    }

    return false;
};