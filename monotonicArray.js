// Medium Q

// Time: 
// Space: 
function isMonotonic(array) {
    let trend;
    let start;
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] < array[i+1]) {
            trend = 'i';
            start = i+1;
            break;
        } else if (array[i] > array[i+1]) {
            trend = 'd';
            start = i+1;
            break;
        }
    }

    for (let j = start; j < array.length-1; j++) {
        if (trend === 'i' && array[j] > array[j+1]) {
            return false;
        } else if (trend === 'd' && array[j] < array[j+1]) {
            return false;
        }
    }

    return true;
}


function isMonotonic(array) {
    let growing = array[0] < array[array.length - 1]
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i] < array[i + 1] !== growing) && array[i] !== array[i + 1]) return false;
    }
    return true;
}


console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
// => true