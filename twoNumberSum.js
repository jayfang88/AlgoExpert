// Easy Q

// Time: O(n)   => iterate over the arr once
// Space: O(n)  => at most store all elements of arr into a hash
function twoNumberSum(arr, target) {
    let positions = {};
    for (i in arr) {
        let num = arr[i];
        let diff = target - num;
        if (positions[diff] && positions[diff] !== i) return [num, diff];

        positions[num] = i;
    }

    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));     // => [-1, 11]


// Alternate solution uses 2 pointers and a SORTED array of nums
// Time: O(nLog(n) )
// Space: O(1)
function twoNumberSumm(arr, target) {
    arr = arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(twoNumberSumm([3, 5, -4, 8, 11, 1, -1, 6], 13));    // => [5, 8]