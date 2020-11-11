// Medium Q

// Time: O(n)
// Space: O(1)
function moveElementToEnd(array, toMove) {
    let pointer = array.length-1;
    for (let i = array.length-1; i >= 0; i--) {
        if (array[i] === toMove) {
            let match = array[i];
            array[i] = array[pointer];
            array[pointer] = match;
            pointer--;
        }
    }

    return array;
}


console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
// => [1, 3, 4, 2, 2, 2, 2, 2,]