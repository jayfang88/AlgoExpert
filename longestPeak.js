// Medium Q

// Time: 
// Space: 
function longestPeak(array) {
    let longest = 0;
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] > array[i-1] && array[i] > array[i+1]) {
            let lpoint = i-1;
            let rpoint = i+1;
            while (array[lpoint-1] < array[lpoint]) lpoint--;
            while (array[rpoint+1] < array[rpoint]) rpoint++;
    
            let currPeakLength = rpoint - lpoint + 1;
    
            if (currPeakLength > longest) longest = currPeakLength;
        }
    }
    return longest;
}


console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
// => 6