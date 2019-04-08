/**
 * 118. Pascal's Triangle
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * Example:
 * Input: 5
 * Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * 核心思路就是基于上一层进行生成，此外注意越界问题即可
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	if (numRows <= 0) {
		return [];
	}
	const result = [[1]];
	for (let i = 2; i <= numRows; i++) {
		const arr = [];
		for (let j = 0; j < i; j++) {
			const first = result[i - 2][j - 1] || 0;
			const second = result[i - 2][j] || 0;
			arr[j] = first + second;
		}
		result.push(arr);
	}
	return result;
};
