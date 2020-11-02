// Easy Q

// Time: O(Log(n))
// Space: O(1)
function binarySearch(array, target) {
    if (!array.length) return -1;
    let pivot = Math.floor(array.length / 2);

    if (array[pivot] === target) {
        return pivot;
    } else if (array[pivot] > target) {
        return binarySearch(array.slice(0, pivot), target);
    } else {
        let temp = binarySearch(array.slice(pivot+1), target);
        return temp === -1 ? -1 : temp + pivot + 1;
    }
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));  // => 3