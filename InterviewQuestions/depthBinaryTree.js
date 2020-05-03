var maxDepth = function(arr) {
    let count = 0;
    let nodes = 1;
    for (let i = 0; i < (arr.length-1)/2; i++) {
        if (i < nodes) {
           continue;
        }
        else {
            nodes *= 2;
            count += 1;
        }
    }
    return count;
};

let arr = [5,4,7,3,null,2,null,-1,null,9];
console.log(maxDepth(arr)+1);