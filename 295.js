/**
 * 295. Find Median from Data Stream
 * Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.
 * For example,
 * [2,3,4], the median is 3
 * [2,3], the median is (2 + 3) / 2 = 2.5
 * Design a data structure that supports the following two operations:
 * void addNum(int num) - Add a integer number from the data stream to the data structure.
 * double findMedian() - Return the median of all elements so far.
 */


 /**
  * 向那些手撸堆的勇士致敬
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
 
    const arr = this.arr;
    let index = 0;
    if (!arr.length) {
        index = 0;
    } else if (num < arr[0]) {
        index = 0;
    } else if (num > arr[arr.length - 1]) {
        index = arr.length;
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < num && arr[i + 1] >= num) {
                index = i + 1;
                break;
            }
        } 
    };
    this.arr = [...arr.slice(0, index), num, ...arr.slice(index)];
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const arr = this.arr;
    const n = arr.length;
    if (n === 0) {
        return null;
    }
    const mid = Math.floor(n / 2);
    return n % 2 === 1 ? arr[mid] : (arr[mid] + arr[mid - 1]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */