// Q: https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/

let S = [1, 2, 3];
let N = 5;
console.log(coinChangeNum(S, S.length, N))

function coinChangeNum(s, m, n) {
	let coinTable = Array(n+1).fill(null).map(() => Array(m).fill(0));
	let x=0, y=0;
	
	for (let i = 0; i < m; i++) {
		coinTable[0][i] = 1;
	}
	for (let i = 1; i < n+1; i++) {
		for (let j = 1; j < m; j++) {
			x = (i-s[j]) >= 0 ? coinTable[i-s[j]][j] : 0;
			y = j >= 1 ? coinTable[i][j-1] : 0;
			coinTable[i][j] = x + y;
		}
	}
	return coinTable[n][m-1];
}