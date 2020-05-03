// Q: https://codeforces.com/contest/1288/problem/A

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
		let inputData = input[t+1].split(' ').map((a) => {return parseInt(a)});
		console.log(solution(inputData[0], inputData[1]));
	}
});

function solution(n, d) {
	for (let j = 0; j < n; j++) {
		if (j + Math.ceil(d/(j+1)) <= n) {
			return 'YES';
		}
	}
	return 'NO';
}