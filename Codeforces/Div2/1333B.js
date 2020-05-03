// Q: https://codeforces.com/contest/1333/problem/B

const readline =  require('readline');

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
    let n, a, b;
	for (let t=0; t < test; t++) {
        n = parseInt(input[3*t+1]);
        a = input[3*t+2].split(' ').map((a) => parseInt(a));
        b = input[3*t+3].split(' ').map((b) => parseInt(b));
        console.log(solution (a, b, n));
	}
});

function solution(a, b, n) {
    if (b[0] !== a[0]) {
        return 'NO';
    } else {
        let posIdx = a[0] === 1 ? true : false;
        let negIdx = a[0] === -1 ? true : false;
        for (let i = 1; i < n; i++) {
            if (b[i] > a[i] && !posIdx) {
                return 'NO';
            } else if (b[i] < a[i] && !negIdx) {
                return 'NO';
            }
            if (!posIdx) {
                posIdx = a[i] === 1 ? true : false;
            }
            if (!negIdx) {
                negIdx = a[i] === -1 ? true : false;
            }
        }
        return 'YES';
    }
}