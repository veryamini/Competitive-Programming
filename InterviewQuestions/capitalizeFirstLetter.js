var capitalizeFirst = function (line) {
	let arr = line.split(' ');
	for (let i = 0; i <arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
	}
	return arr.join(' ');
}

let text = 'My name is yamini verma.';
console.log(capitalizeFirst(text))