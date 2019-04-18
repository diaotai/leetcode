/**
 * * 321. Create Maximum Number
 * Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits.
 * Note: You should try to optimize your time and space complexity.
 * Example 1:
 * Input:
 * nums1 = [3, 4, 6, 5]
 * nums2 = [9, 1, 2, 5, 8, 3]
 * k = 5
 * Output:
 * [9, 8, 6, 5, 3]
*/

/**
 * 本题我最开始几乎做出来了——我的思路是算出每个组中最多能遍历几个，然后取最大的。这个思路在不碰上两边最大值相等的情况下是可行的，但碰上就炸了，解决了好久都没办法
 * 另一个思路就是如下的，通过从两边筛选指定个数个最大数字，然后合并起来一一比较
 * 要注意的是，合并时同样有某个值相等的问题，所以应该用更奇葩的方式——合并成字符串来判断，这样才能把之后的值也判断进来
 * 本体坑了我两个小时，好惨
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    let result = [];
    const len1 = nums1.length, len2 = nums2.length;
    for (let i = Math.max(0, k - len2); i <= Math.min(len1, k); i++) {
        const n = merge(getMaxValue(nums1, i), getMaxValue(nums2, k - i));
        result = result.join('') > n.join('') ? result: n;
    }
    return result;
};

function getMaxValue(nums, k) {
    let drop = nums.length - k;
    const result = []; 
    for (let num of nums) {
        while (drop > 0 && result.length && result[result.length - 1] < num) {
            result.pop();
            drop--;
        }
        result.push(num);
    }
    return result.slice(0, k);
}

function merge(nums1, nums2) {
    const result = [];
    while (nums1.length || nums2.length) {
        const nums = nums1.join('') > nums2.join('') ? nums1: nums2;
        result.push(nums.shift());
    }
    
    return result;
}