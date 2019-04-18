/**
 *  4. Median of Two Sorted Arrays
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
*/

/**
 * 我的思路是 O(n) 复杂度里比较靠谱的，只需要检查一半，实际跑速度的时候也超过了 100%（应注意数组越界时的处理）
 * 但是更好的方法是 O(lgn)，用的就是二分法, 只不过二分的部分在中间值坐标 k 上
 * 设 n = len1 + len2, 那么预定位置为  k = n / 2, 那么当 num0[k / 2]< num1[k / 2]时，num0 的 0 - k / 2 代表了 k 必然不在其中
 * 因为两个 k/2 加起来为 k，而小于的话则必然不是，所以可以去掉，然后二分 k 来解决
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const mid = Math.floor((len1 + len2) / 2);
    let i = 0, j = 0;
    let res0 = 0, res1 = 0;
    
    while (i + j <= mid) {
        const num0 = nums1[i] === undefined ? Number.MAX_SAFE_INTEGER: nums1[i];
        const num1 = nums2[j] === undefined ? Number.MAX_SAFE_INTEGER: nums2[j];
        
        if (i + j === mid - 1) {
            res0 =  Math.min(num0, num1) ;
        } else if (i + j === mid){
            res1 = Math.min(num0, num1);
        }
        if (num0 < num1) {
            i++;
        } else {
            j++;
        }
    }
    return (len1 + len2) % 2 === 0 ? (res0 + res1) / 2 : res1;
};