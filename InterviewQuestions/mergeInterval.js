function mergeIntervals(arr) {
	arr.sort((a, b) => a[0]-b[0]);
	let sortedIntervals = [];
	sortedIntervals.push(arr[0]);
	let l = sortedIntervals.length;
	for (let i = 1; i < arr.length; i++) {
		let top = sortedIntervals[l-1];
		if (top[1] < arr[i][0]) {
			sortedIntervals.push(arr[i]);
		} else if (top[1] < arr[i][1]) {
			top[1] = arr[i][1];
			sortedIntervals.pop();
			sortedIntervals.push(top);
		}
	}
	console.log(sortedIntervals);
}

function inPlaceMerge(arr) {
	arr.sort((a,b) => b[0]-a[0]);
	console.log(arr)
	let index = 0;
	for (let i = 1; i <arr.length; i++) {
		if (arr[index][1] > arr[i][0]) {
			arr[index][0] = Math.min(arr[index][0], arr[i][0]);
			arr[index][1] = Math.max(arr[index][1], arr[i][1]);
		}
		else {
			arr[index] = arr[i];
			index += 1;
		}
	}
	console.log(arr.splice(0, index+1))
}

mergeIntervals([[1,2], [2, 4], [9,10], [3, 7], [4, 20]]);
inPlaceMerge([[1,3],[2,6],[8,10],[15,18]])