// Q: https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/

let S = [1, 2, 3];
let N = 5;
console.log(coinChangeNum(S, S.length, N))

function coinChangeNum(s, m, n) {
	let coinTable = Array(n+1).fill(0);
	coinTable[0] = 1;

	for  (let i = 0; i < m; i++) {
		for (let j = s[i]; j < n+1; j++) {
			coinTable[j] += coinTable[j-s[i]];
		}
	}
	return coinTable[n];
}