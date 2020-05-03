// Q: https://codeforces.com/contest/1334/problem/B

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
		let inputNum = input[t+1].split(' ').map((a) => a);
		console.log(solution(inputNum, arr));
	}
});

function solution(nums, arr) {
	let n = nums[0];
	let bul = nums[1];
	arr = arr.sort((a, b) => a-b);
	let sum = 0;
	let count = 0;
	for (let j=n-1; j>=0; j--) {
		sum += arr[j];
		if (sum/(n-j) < bul) {
			break;
		}
		count += 1;
	}
	return count;
}