/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let countZero = 0;
    let i = 0;
    while (i < nums.length-countZero-1) {
        if (nums[i] === 0) {
            while (nums[i+countZero + 1] === 0 && (i < nums.length-countZero-1)) {
                countZero += 1;
            }
            if (i+countZero+1 < nums.length) {
                let swap = nums[i+countZero + 1];
                nums[i] = swap;
                nums[i+countZero + 1] = 0;
            }
        }
        i += 1;
    }
};

console.log(moveZeroes([0,1,0,3,12]))