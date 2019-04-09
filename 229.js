/**
 * 229. Majority Element II
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * Note: The algorithm should run in linear time and in O(1) space.
*/

/**
 * 思路：本题依旧使用投票法，只不过使用两个变量和标识
 * 当和两个都不想的时，就集体减 1
 * 因为当一个值超过 1/3 时，剩下的值就算完全不相同需要减一的次数也小于 1/3（2/3 * (1/(1 + 1))）分母中的一个1代表剩下 1 个变量，所以必然能找到一个合法值
 * 但是由于不知道数组中是有一个超过 1/3 的还是两个，因此需要再遍历一次进行检查
 * 注意： 本思路是一个通解，当数量为超过 4/1 的值时就用 3 个变量，依次类推
 * 注意2: 本题我再做的时候在处理几个条件的顺序时出现了一些问题导致错误，应予以注意
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const bounder = Math.floor(nums.length / 3);
    const result = [];
    let val0, val1;
    let count0 = 0, count1 = 0;
    for (let i of nums) {
        if (i === val1) {
            count1++;
        } else if (i === val0) {
            count0++;
        } else if (count0 === 0)  {
            count0++;
            val0 = i;
        } else if (count1 === 0) {
            count1++;
            val1 = i;
        } else {
            count0--;
            count1--;
        }
    }
    count0 = 0;
    count1 = 0;
    for (let i of nums) {
        if (i === val0) {
            count0++;
        } else if (i === val1) {
            count1++;
        }
    }
    if (count0 > bounder) {
        result.push(val0);
    } 
    if (count1 > bounder) {
        result.push(val1);
    }
    return result;
};