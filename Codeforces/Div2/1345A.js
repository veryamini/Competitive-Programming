// Q: https://codeforces.com/contest/1348/problem/A

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
	for (let i=0; i < test; i++) {
        let n, m;
		[n, m] = input[i+1].split(' ').map((a) => parseInt(a));
		console.log(solution(n, m));
	}
});

function solution(n, m) {
	return 2*n*m - n - m <= n*m ? 'YES' : 'NO';
}