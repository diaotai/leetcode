/**
 * 275. H-Index II
 * Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.
 * According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."
*/

/**
 * 本题和上一题的区别就是排序，做好对应即可
 * 此外，应当注意本题其实更应该用二分法
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const length = citations.length;
    for (let i = length - 1; i >= 0; i--) {
        if (length - i - 1 >= citations[i]) {
            return length - i - 1;
        }
    }
    return citations.length;
};