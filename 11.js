/**
 * 11. Container With Most Water
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines,
 * which together with x-axis forms a container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
*/

/**
 * 本题的思路就是靠从两边进行收敛，这样才能保证不会因为宽度和高度的同时变化而出问题（可以保证宽度一定是减小的）
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length -1;
    let result = 0;
    while (left < right) {
        const lh = height[left];
        const rh = height[right];
        let water = 0;
        if (lh < rh) {
            water = (right - left) * lh;
            left++;
        } else {
            water = (right - left) * rh;
            right--;
        }
        if (water > result) {
            result = water;
        }
    }
    return result;
};