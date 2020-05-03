var generate = function(numRows) {
	if (numRows === 0) {
        return [];
    }
    let output = [[1]];
    for (let i = 1; i < numRows; i++) {
        output.push([1]);
        for (j = 1; j < i; j++) {
            output[i].push(output[i-1][j-1] + output[i-1][j]);
        }
        output[i].push(1);
    }
    return output;
};

console.log(generate(5));