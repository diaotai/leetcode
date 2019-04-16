/**
 * 164. Maximum Gap
 * Given an unsorted array, find the maximum difference between the successive elements in its sorted form.
 * Return 0 if the array contains less than 2 elements.
 * Example 1:
 * Input: [3,6,9,1]
 * Output: 3
 * Explanation: The sorted form of the array is [1,3,6,9], either(3,6) or (6,9) has the maximum difference 3.
 * Example 2:
 * Input: [10]
 * Output: 0
 * Explanation: The array contains less than 2 elements, therefore return 0.
 * Note:
 * You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
 * Try to solve it in linear time/space.
*/

/**
 * 本题的思路是桶排序，当桶的大小小于等于 (max - min) / nums.length - 1 时，必然可以保证每个数据都可以拥有一个桶
 * 而此时，若存在任何一个桶中有多个数据，那么最大值必然不在这里面
 * 本题没能做到 bug free,注意以下两点:
 * 1. 注意全部都是同一个值的情况
 * 2. 注意桶的个数问题
 *  
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) {
        return 0;
    }
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const bucketSize = Math.max(Math.floor((max - min) / nums.length), 1);
    const bucketNum = Math.floor((max - min) / bucketSize) + 1;
    const buckets = [];
    for (let i = 0; i < bucketNum; i++) {
        buckets.push({
            visit: false,
            max: 0,
            min: Number.MAX_SAFE_INTEGER
        })
    }
    
    for (let i of nums) {
        const index = Math.floor((i - min) / bucketSize);
        const bucket = buckets[index];
        bucket.visit = true;
        bucket.max = Math.max(bucket.max, i);
        bucket.min = Math.min(bucket.min, i);
    }
    
    let prev = min;
    let maxGap = 0;
    for (let bucket of buckets) {
        if (bucket.visit) {
            maxGap = Math.max(maxGap, bucket.min - prev);
            prev  = bucket.max;
        }
    }
    
    return maxGap;
};