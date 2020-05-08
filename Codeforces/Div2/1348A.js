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
		let n = parseInt(input[i+1]);
		console.log(solution(n));
	}
});

function solution(n) {
	return (Math.pow(2, parseInt(n/2)+1) - 2);
}