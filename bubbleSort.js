// Easy Q

// Time: 
// Space: 
function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                sorted = false;
            }
        }
    }
    return array;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));     // => [2, 3, 5, 5, 6, 8, 9]