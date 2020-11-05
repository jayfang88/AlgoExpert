// Easy Q

// Time: O(n^2)
// Space: O(1)
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallestIdx = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[smallestIdx]) smallestIdx = j;
        }
        let curr = array[i];
        array[i] = array[smallestIdx];
        array[smallestIdx] = curr;
    }
    return array;
}


console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));      // => [2, 3, 5, 5, 6, 8, 9]