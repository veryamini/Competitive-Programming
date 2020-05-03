// Q: https://www.geeksforgeeks.org/gold-mine-problem/

function getMaxGold(goldArr, m, n) {

	let arr = Array(m).fill(null).map(() => Array(n).fill(0));
	
	arr[0][0] = 1;
	
	let right=0, right_up=0, right_down=0;
	for (let col=n-1; col >=0; col--) {
		for (let row=0; row <m; row++) {

			if (col === n-1) {
				right = 0;
			}
			else {
				right = arr[row][col+1];
			}
			if (row == 0 || col === n-1) {
				right_up = 0;
			} else {
				right_up = arr[row-1][col+1];
			}
			if (row === m-1 || col === n-1) {
				right_down= 0;
			} else {
				right_down = arr[row+1][col+1];
			}
			arr[row][col] = goldArr[row][col] + Math.max(right, right_up, right_down);
		}
	}
	
	let maxGold = arr[0][0];
	for (let i= 1; i<m; i++) {
		maxGold = Math.max(maxGold, arr[i][0]);
	}
	return maxGold;
}

let goldArr = [[1, 3, 1, 5], [2, 2, 4, 1], [5, 0, 2, 3], [0, 6, 1, 2]];
let m = goldArr.length;
let n = goldArr[0].length;