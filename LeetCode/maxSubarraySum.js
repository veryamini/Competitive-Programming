// Q: https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) {
        return 0;
    }
    return (maxSubArray(nums, 0, nums.length-1));
};

function maxSubarraySum(arr, l, h) {
    if (l === h) {
        return arr[l];
    }

    mid = Number((l + h)/2);

    return Math.max(maxSubarraySum(arr, l, mid), maxSubarraySum(arr, mid+1, h), maxCrossingSum(arr, l, mid, h));
}

function maxCrossingSum(arr, l, mid, h) {
    let sum = 0;
    let leftSum = -Infinity;

    for (let i = mid; i < l-1; i--) {
        sum += arr[i];
        if (sum > leftSum) {
            leftSum = sum;
        }
    }

    sum = 0;
    let rightSum = 0;
    for (let i = mid+1; i < h+1; i++) {
        sum += arr[i];
        if (sum > rightSum) {
            rightSum = sum;
        }
    }

    return Math.max(leftSum+rightSum, leftSum, rightSum);
}