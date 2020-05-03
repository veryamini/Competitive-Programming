const readline = require('readline');
let inputs = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', lineInput => {
    inputs.push(lineInput);
});
 
rl.on('close', () => {
	const test = parseInt(inputs[0]);
	let n = [];
	for (let t = 0; t < test; t++) {
		n = inputs[t+1].split(' ').map((a) => {return parseInt(a)});
    	console.log(solution(n));
	}
});

function solution(n) {
	let i = 0, j = 0, k = 0;
	let a = n[0], b = n[1], c = n[2], d = n[3];
	return `${b} ${c} ${c}`
}