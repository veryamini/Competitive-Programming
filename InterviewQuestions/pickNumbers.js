// Q: https://www.geeksforgeeks.org/find-maximum-number-of-elements-such-that-their-absolute-difference-is-less-than-or-equal-to-1/

function pickNumbers(arr) {
	let map = {};
	let output = 0;

	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]]) {
			map[arr[i]] += 1;
		}
		else {
			map[arr[i]] = 1;
		}
	}
	Object.keys(map).map((key) => {
		let newKey = (parseInt(key) + 1).toString();
		output = Math.max(output, map[key] + map[newKey]);
	});
	return output;
}

let arr = [2,2,1,1,3,2,1];
console.log(pickNumbers(arr));