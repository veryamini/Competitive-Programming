// Q: https://www.geeksforgeeks.org/friends-pairing-problem/

let n = 5;
console.log(countWaysPairing(n))

function countWaysPairing(n) {
	pairing = Array(n+1).fill(0);

	for (let i = 0; i <n+1; i++) {

		if (i <= 2) {
			pairing[i] = i;
		} else {
			pairing[i] = pairing[i-1] + (i-1)*pairing[i-2];
		}
	}
	return pairing[n];
}