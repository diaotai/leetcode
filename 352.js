/**
 * 352. Data Stream as Disjoint Intervals
 * Given a data stream input of non-negative integers a1, a2, ..., an, ..., summarize the numbers seen so far as a list of disjoint intervals.
 * For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ..., then the summary will be:
 * [1, 1]
 * [1, 1], [3, 3]
 * [1, 1], [3, 3], [7, 7]
 * [1, 3], [7, 7]
 * [1, 3], [6, 7]
 * Follow up:
 * What if there are lots of merges and the number of disjoint intervals are small compared to the data stream's size?
 * NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/


/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
    this.intervals = [];
};

/** 
 * 其实还是之前那道题的思路，处理的时候分开有冲突和无冲突的部分，把所有有冲突的合为一个即可
 * 只不过这道题是要插入值在已知范围的正负一范围内即为冲突
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    const current = [val, val];
    const intervals = this.intervals;
    const less = [];
    const more = [];
    for (let vals of intervals) {
        if (vals[0] > current[1] + 1) {
            more.push(vals);
        } else if (vals[1] + 1 < current[0]) {
            less.push(vals);
        } else {
            current[0] = Math.min(current[0], vals[0]);
            current[1] = Math.max(current[1], vals[1]);
        }
    }
    this.intervals = [...less, current, ...more];
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    return this.intervals;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */