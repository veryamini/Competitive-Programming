// Q: https://codeforces.com/contest/1330/problem/A

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
    let n, x, a;
    for (let t = 0; t < test; t++) {
        [n, x] = input[2*t + 1].split(' ').map((a) => parseInt(a));
        a = input[2*t + 2].split(' ').map((a) => parseInt(a));
        console.log(solution(a, n, x));
    }
})

function solution(a, n, x) {
    let rankAchieved = Array(n+x).fill(false);
    for (let i = 0; i < n; i++) {
        rankAchieved[a[i]] = true;
    }
    for (let k = n+x; k > 0; k--) {
        let v = 0;
        for (let i = 1; i <= k; i++) {
            if (!rankAchieved[i]) {
                v += 1;
            }
        }
        if (v <= x) {
            return k;
        }
    }
}