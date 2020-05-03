// Q: https://codeforces.com/contest/1327/problem/A

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', lineInput => {
	input.push(lineInput);
});

rl.on('close', () => {
    const test = parseInt(input[0]);
    let n, k;
    for (let t = 0; t < test; t++) {
        [n, k] = input[t + 1].split(' ').map((a) => parseInt(a));
        console.log(solution(n, k));
    }
});

function solution(n, k) {
    if (Math.pow(k, 2) > n || n%2 !== k%2) {
        return 'NO';
    }
    return 'YES'
}