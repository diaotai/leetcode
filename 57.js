/**
 * 57. Insert Interval
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
*/


/**
 * 本题的思路很精彩
 * 首先，我们处理那些 x.end < new.start 的间隔，将它们直接放入结果中（因为不会和它们有关）
 * 然后，我们处理 new.end >= x.start 的间隔，这部分会存在一个合并
 * 最后，将剩下的放入结果中
 * 感觉思考的时候应该考虑哪些是不需要处理的，哪些是我们要解决的，如何区分它们
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let current = 0;
    const n = intervals.length;
    const result = [];
    while (current < n && newInterval[0] > intervals[current][1]) {
        result.push(intervals[current++]);
    }
    while (current < n && newInterval[1] >= intervals[current][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[current][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[current][1]);
        current++;
    }
    result.push(newInterval);
    while (current < n) {
        result.push(intervals[current++]);
    }
    return result;
};