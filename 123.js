/**
 * 123. Best Time to Buy and Sell Stock III
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/


/**
 * 本题的思路使用动态规划的思想，因为符合其要求：
 * 首先是一个求最优解的问题，其次总体最优解依赖于局部最优解
 * 那么 global[i][j] 为当过去 i 天已经进行了 j 笔交易时的收获
 * 而 local[i][j] 代表过去 i 天，最后一笔交易在第 j 天完成时的收获
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    const local = [];
    const global = [];
    if (n === 0) {
        return 0;
    }
    
    for (let i = 0; i <= n; i++) {
        const arr = [];
        for (let j = 0; j < 3; j++) {
            arr.push(0);
        }
        local.push([...arr]);
        global.push([...arr]);
    }
    
    for (let i = 1; i < n; i++) {
        const diff = prices[i] - prices[i - 1];
        for (let j = 1; j <= 2; j++) {
            local[i][j] = Math.max(global[i - 1][j - 1] + Math.max(0, diff), local[i - 1][j] + diff);
            global[i][j] = Math.max(global[i - 1][j], local[i][j]);
        }
    }
    return global[n - 1][2];
};