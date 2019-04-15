/**
 * 42. Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
 * Example:
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
*/

/**
 * 本题的思路有多种，第一种是算左边和右边的最大值，然后算每个位置的差值（要注意的是，最小值是包含自己的，这也保证不可能出现负值）
 * 另一种则是下面所示，从两边向中间，不断寻找 max 值较低的一方，然后不断的处理这些值
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = 0, rightMax = 0;
    let left = 0, right = height.length -1;
    let result = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : result += (leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ? (rightMax = height[right]): result += (rightMax - height[right]);
            right--;
        }
    }
    return result;
};