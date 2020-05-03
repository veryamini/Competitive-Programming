let arr = [1, 2, 3, 1, 4, 2, 5, 6, 5, 7, 9, 4];

function useFilter(arr) {
	return arr.filter((value, index) => arr.indexOf(value) === index);
}