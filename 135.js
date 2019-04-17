/**
 * 135. Candy
 * There are N children standing in a line. Each child is assigned a rating value.
 * You are giving candies to these children subjected to the following requirements:
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * What is the minimum candies you must give?
 * Example 1:
 * Input: [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
*/

/**
 * 在画几张图之后可以发现只要从左向右走一遍，从右向左走一遍，再处理一下局部顶峰的值即可（可能的冲突只有再顶峰才会存在）
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len = ratings.length;
    const candies = [];
    for (let i = 0; i < len; i++) {
        candies.push(1);
    }
    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    let sum = candies[len - 1] || 0;
    for (let i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
        sum += candies[i];
    }
    return sum;
};