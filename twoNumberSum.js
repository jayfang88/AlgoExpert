// Easy


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