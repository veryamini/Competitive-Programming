// Q: https://www.geeksforgeeks.org/largest-divisible-pairs-subset/

a = [1, 3, 6, 18, 17, 13];
console.log(largestDivisiblePairs(a));

function largestDivisiblePairs(a) {
	a = a.sort((a, b) => a - b);
	let n = a.length;
	let maxVal = 0;

	let dp = Array(n).fill(0);
	dp[n-1] = 1;

	for (let i = n-2; i >=0; i--) {

		maxVal = 0;
		for (let j = i+1; j < n; j++) {

			if (a[j] % a[i] === 0) {
				maxVal = Math.max(maxVal, dp[j]);
			}
		}
		dp[i] = 1 + maxVal;
	}

	return dp.reduce(function(a, b) {
		return Math.max(a, b);
	});
}