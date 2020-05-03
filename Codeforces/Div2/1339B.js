// Q: https://codeforces.com/contest/1339/problem/B

const readline = require('readline');

let input = [];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', lineInput => {
	input.push(lineInput);
});

rl.on('close', () => {
	const test = parseInt(input[0]);
	for (let t=0; t < test; t++) {
		let n = parseInt(input[2*t+1]);
		let arr = input[2*t+2].split(' ').map((a) => parseInt(a));
		console.log(solution(n, arr));
	}
});

function solution(n, arr) {
	arr = arr.sort((a, b) => a-b);
	let ans = [], i = 0, j=n-1;
	while (i <= j) {
		ans.push(arr[i]);
		if (i < j) {
			ans.push(arr[j]);
		}
		i++;
		j--;
	}
	ans = ans.reverse();
	return ans.join(' ');
}