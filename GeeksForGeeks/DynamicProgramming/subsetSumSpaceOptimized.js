// Q: https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

let S = new Set([3, 34, 4, 12, 5, 2]);
let arr = [...S];
let sum = 9;

console.log(isSubsetSum(arr, sum, arr.length))

function isSubsetSum(arr, sum, n) {
	let ans = Array(2).fill(null).map(() => Array(sum+1).fill(false));
	
	for (let i=0; i < n+1; i++) {
		for (let j=0; j<sum+1; j++) {
			if (j===0) {
				ans[i%2][j] = true;
			} else if (i === 0){
				ans[i%2][j]= false;
			}
			else if (arr[i-1] <= j) {
				ans[i%2][j] = ans[(i+1)%2][j] || ans[(i+1)%2][j-arr[i-1]];
			}
			else {
				ans[i%2][j] = ans[(i+1)%2][j];
			}
		}
	}
	return ans[n%2][sum];
}