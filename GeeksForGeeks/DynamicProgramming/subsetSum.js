// Q: https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

let S = new Set([3, 34, 4, 12, 5, 2]);
let arr = [...S];
let sum = 9;

console.log(isSubsetSum(arr, sum, arr.length-1));

function isSubsetSum(arr, sum, n) {
	let ans = Array(n+1).fill(null).map(() => Array(sum+1).fill(false));
	for (let i=0; i <n+1; i++) {
		ans[i][0] = true;
	}
	for (let j=1; j < sum+1; j++) {
		ans[0][j] = false;
	}
	for (let i=1; i < n+1; i++) {
		for (let j=1; j<sum+1; j++) {
			if (j < arr[i-1]) {
				ans[i][j] = ans[i-1][j];
			}
			if (j >= arr[i-1]) {
				ans[i][j] = ans[i-1][j] || ans[i-1][j-arr[i-1]];
			}
		}
	}
	return ans[n][sum];
}