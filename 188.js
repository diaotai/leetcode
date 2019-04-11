/**
 * 188. Best Time to Buy and Sell Stock IV
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most k transactions.
 * Note:
 * You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

/**
 * 就是上一题的翻版，只不过要注意 k 和 n 的关系，当 k >= n，其实就是无限制了
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length;
    const global = [];
    const local = [];
    if (n === 0) {
        return 0;
    }
    if (k >= n) {
        let count = 0;
        for (let i = 1; i < n; i++) {
            const diff = prices[i] - prices[i - 1];
            if (diff > 0) {
                count += diff;
            }
        }
        return count;
    }
    
    for (let i = 0; i < n; i++) {
        const arr = [];
        for (let j = 0; j <= k; j++) {
            arr.push(0);
        }
        global.push([...arr]);
        local.push([...arr]);
    }
    
    for (let i = 1; i < n; i++) {
        const diff = prices[i] - prices[i - 1];
        for (let j = 1; j <= k; j++) {
            local[i][j] = Math.max(global[i - 1] [j - 1] + Math.max(0, diff), local[i -1][j] + diff);
            global[i][j] = Math.max(global[i - 1][j], local[i][j]);
        }
    }
    return global[n - 1][k];
};