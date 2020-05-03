// Q: https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

let S = new Set([3, 34, 4, 12, 5, 2]);
let arr = [...S];
let sum = 9;

console.log(isModularSum(arr, sum, arr.length))

function isModularSum(arr, m, n) {

	if (n > m) {
		return true;
	}
	let DP = Array(m).fill(false);

	for (let i=0; i <n; i++) {
		if (DP[0]) {
			return true;
		}
		let tempArr = Array(m).fill(false);

		for (let j=0; j < m; j++) {
			if (DP[j] === true) {
				if (!DP[(j + arr[i])%m]) {
					tempArr[(j+arr[i])%m] = true;
				}
			}
		}
		for (let j=0; j<sum+1; j++) {
			if (tempArr[j]) {
				DP[j] = true;
			}
		}
		DP[arr[i] % m] = true;

	}
	return DP[0];
}