// Q: https://codeforces.com/contest/1333/problem/A

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
        let n, m;
        [n, m] = input[t+1].split(' ').map((a) => parseInt(a));
        let output = Array(n).fill(null).map(() => Array(m).fill('B'));
        output[0][0] = 'W';
        for (let i = 0; i < n; i++) {
            console.log(output[i].join(''));
        }
	}
});