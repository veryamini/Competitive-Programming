var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a-b);
    nums2.sort((a, b) => a-b);
    let l = Math.min(nums1.length, nums2.length);
    let output = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            output.push(nums1[i]);
            i += 1;
            j += 1;
        }
        if (nums1[i] > nums2[j]) {
            j += 1;
        }
        if (nums1[i] < nums2[j]) {
            i += 1;
        }
    }
    return output;
};

let nums1 = [1,2,2,1];
let nums2 = [2,2,3];

console.log(intersect(nums1, nums2));