/**
 * 134. Gas Station
 * There are N gas stations along a circular route, where the amount of gas at station i is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.
 * Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
 * Note:
 * If there exists a solution, it is guaranteed to be unique.
 * Both input arrays are non-empty and have the same length.
 * Each element in the input arrays is a non-negative integer.
*/

/**
 * 本题最笨的思路就是进行一个二重的循环，然而这样的话题目就太无聊了
 * 其实只要将所有 diff 加起来，只要最后的值大于等于 0，那么就一定存在某一站出发可以完成，反之亦然
 * 更巧的思路是求最长的公共子数组，当 diff[start] + ... + diff[end] 小于 0 时，起点必然不在其中, 我们将起点置为 end + 1
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let current = 0;
    let startIndex = 0;
    let leftSlide = 0;
    for (let i = 0; i < gas.length; i++) {
        current += gas[i]  - cost[i];
        if (current < 0) {
            leftSlide += current;
            startIndex = i + 1;
            current = 0;
        }
    }
    if (leftSlide + current >= 0) {
        return startIndex;
    } else {
        return -1;
    }
};