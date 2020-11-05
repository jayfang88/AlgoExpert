// Easy Q

// Time: O(n^2)
// Space: O(1)
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let curr = i;
        while (curr > 0 && array[curr] < array[curr-1]) {
            let temp = array[curr];
            array[curr] = array[curr-1];
            array[curr-1] = temp;
            curr--;
        }
    }
    return array;
}


console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));      // => [2, 3, 5, 5, 6, 8, 9]