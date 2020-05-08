// Q: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length === 0) {
        return [];
    }
    const mapIndex = {};
    for (let i = 0; i < nums.length; i++) {
        if (mapIndex[target-nums[i]] !== undefined && i !== mapIndex[target-nums[i]]) {
            return [i, mapIndex[target-nums[i]]];
        }
        mapIndex[nums[i]] = i;
    }
};