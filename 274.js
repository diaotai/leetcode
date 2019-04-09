/**
 * 274. H-Index
 * Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.
 * According to the definition of h-index on Wikipedia: 
 * "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."
 * Note: If there are several possible values for h, the maximum one is taken as the h-index.
*/

/**
 * 本题的思路很简单，就是找到某个值 n，大于等于 n 的值至少有 n 个
 * 所以我们可以从大向小排序，然后处理 index 和 val 的关系，当 val <= index 的时候，即为该值
 * 但是，要注意边界值和极端值的处理，本次提交在上边摔了几跤
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort((a, b) => {
        return Number(b) - Number(a);
    })
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] <= i) {
            return i;
        }
    }
    return citations.length;
};