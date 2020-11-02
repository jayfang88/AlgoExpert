// Easy Q

// Time: 
// Space: 
function findThreeLargestNumbers(array) {
    let l1 = l2 = l3 = -Infinity;
    for (let num of array) {
        if (num >= l1) {
            l3 = l2;
            l2 = l1;
            l1 = num;
        } else if (num >= l2 && num < l1) {
            l3 = l2;
            l2 = num;
        } else if (num >= l3 && num < l2) {
            l3 = num;
        }
    }

    return [l3, l2, l1];
}


console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));
// => [18, 141, 541]
console.log(findThreeLargestNumbers([7, 7, 7]));
// => [7, 7, 7]