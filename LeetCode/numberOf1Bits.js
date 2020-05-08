// Q: https://leetcode.com/problems/number-of-1-bits/


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if (n === 0) {
        return 0;
    }
    let count = 0;
    while (n !== 0) {
        n &= (n-1);
        count += 1;
    }
    return count;
};