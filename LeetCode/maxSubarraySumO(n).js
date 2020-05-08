// Q: https://leetcode.com/problems/maximum-subarray/

// O(n) algorithm using Kadame's Algorithm

function maxSubarraySum(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    let maxSum = nums[0];
    let currMax = nums[0];

    for (let i = 1; i < n; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        maxSum = Math.max(currMax, maxSum);
    }
    return maxSum;
}