/**
 * 56. Merge Intervals
 * Given a collection of intervals, merge all overlapping intervals.
 * Example 1:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * Example 2:
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/**
 * 本题没什么难度，就是要注意本题既非有序，也不是无冲突，所以还是要审题，之前被坑了
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const n = intervals.length;
    intervals = intervals.sort((x, y) => {
        return Number(x[0]) - Number(y[0]);
    })
    const result = [];
    let index = 0;
    while (index < n) {
        let min = intervals[index][0], max = intervals[index][1]; 
        while (index < n && max >= intervals[index][0]) {
            max = Math.max(max, intervals[index][1]);
            index++;
        }
        result.push([min, max]);
    }
    return result;
};