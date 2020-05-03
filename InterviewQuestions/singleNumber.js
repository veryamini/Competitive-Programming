var singleNumber = function(nums) {
	let xor = 0;
    for (let i = 0; i < nums.length; i++) {
    	xor ^= a[i];
    }
    console.log(xor)
};

let a = [2,2,1];
singleNumber(a)