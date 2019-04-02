/**
 * 299. Bulls and Cows
 * You are playing the following Bulls and Cows game with your friend: Y
 * ou write down a number and ask your friend to guess what the number is. 
 * Each time your friend makes a guess, you provide a hint that indicates how many 
 * digits in said guess match your secret number exactly in both digit and position (called "bulls") 
 * and how many digits match the secret number but locate in the wrong position (called "cows"). 
 * Your friend will use successive guesses and hints to eventually derive the secret number.
 * Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 
 * Please note that both secret number and friend's guess may contain duplicate digits.
 * Example 1:
 * Input: secret = "1807", guess = "7810"
 * Output: "1A3B"
 * Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
*/

/**
 * 本题的核心思想是分别统计 bulls 和 cows，也就是说，这两者应该互不干扰
 * 所以我选择用两个 map 来解决，然后 bulls 的情况并不计入 map
 * 此外，在统计 cows 时候应该避免重复统计（本次所犯的错误）
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const secretMap = {};
    const guessMap = {};
    let bulls = 0;
    for (let i = 0; i < secret.length; i++) {
        const secretKey = secret[i];
        const guessKey = guess[i];
        if (guessKey === secretKey) {
            bulls++;
            continue;
        }
        if (!secretMap[secretKey]) {
            secretMap[secretKey] = 1;
        } else {
            secretMap[secretKey] = secretMap[secretKey] + 1;
        }
        if (!guessMap[guessKey]) {
            guessMap[guessKey] = 1;
        } else {
            guessMap[guessKey] = guessMap[guessKey] + 1;
        }
    }
    let cows = 0;
    for (let i of (new Set(secret))) {
        if (!secretMap[i] || !guessMap[i]) {
            continue;
        }
        cows += Math.min(secretMap[i], guessMap[i]);
    }
    
    return bulls + 'A' + cows + 'B';
};