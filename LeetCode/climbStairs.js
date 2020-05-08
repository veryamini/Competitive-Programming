// Q: https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cs = Array(n+1).fill(0);
    cs[1] = 1;
    cs[2] = 2;
    
    for (let i = 3; i < n+1; i++) {
        cs[i] = cs[i-1] + cs[i-2];
    }
    return cs[n];
};