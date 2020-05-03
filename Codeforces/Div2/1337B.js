// Q: https://codeforces.com/contest/1337/problem/B

const readline = require('readline');

let input = [];
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', lineInput => {
	input.push(lineInput);
});

rl.on('close', () => {
	const test = parseInt(input[0]);
	for (let t = 0; t < test; t++) {
		let vals = input[t+1].split(' ').map((a) => {return parseInt(a)});
		console.log(solution(vals[0], vals[1], vals[2]));
	}
});

function solution(x, n, m) {
	if (x <= m*10) {
		return 'YES';
	}
	for (let i = 0; i < n; i++) {
		x = Math.floor((x/2 + 10));
		if ( x <= m*10) {
			return 'YES';
		}
	}
	return 'NO';
}
