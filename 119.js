/**
 * 119. Pascal's Triangle II
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 * Note that the row index starts from 0.
 * Example:
 * Input: 3
 * Output: [1,3,3,1]
*/

/**
 * 思路：就是单纯的不存之前的即可，与上一题的区别在于起始值从 1 变为了 0
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];
    for (let i = 0; i <= rowIndex; i++) {
        const arr = [];
        for (let j = 0; j < i + 1; j++) {
            const left = result[j - 1] || 0;
            const right = result[j] || 0;
            arr[j] = left + right;
        }
        result = arr;
    }
    return result;
};