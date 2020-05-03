// Q: https://codeforces.com/contest/1334/problem/A

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
	let sum = 0;
	for (let t=0; t < test; t++) {
		let ans = true;
		let n = parseInt(input[sum+t+1]);
		let arr1 = input[t+sum+2].split(' ').map((a) => parseInt(a));
		let arr2 = [];
		if (n == 1) {
			if ((arr1[0] < arr1[1])) {
				ans = false;
			}
		} else {
			for (let i = 1; i < n; i++) {
				arr2 = input[t+sum+2+i].split(' ').map((a) => parseInt(a));
				if ((arr2[0] < arr1[0]) || (arr2[1] < arr1[1]) || (arr2[0] < arr2[1]) || (arr1[0] < arr1[1]) || (arr2[0] - arr1[0] < arr2[1] - arr1[1])) {
					ans = false;
					break;
				}
				if (arr1[0] === arr2[0] && arr2[1] > arr1[1]) {
					ans = false;
					break;
				}
				arr1 = [...arr2];
			}
		}
		console.log(ans ? 'YES' : 'NO');
		sum += n;
	}
});