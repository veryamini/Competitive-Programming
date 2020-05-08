// Q: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1;
    let n = nums.length;
    if (n < 2) {
        return n;
    }
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[j] = nums[i];
            j += 1;
        }
    }
    return j;
};