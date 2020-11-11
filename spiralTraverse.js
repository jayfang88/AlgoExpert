// Medium Q

// Time: 
// Space: 
function spiralTraverse(array) {
    let ans = [];
    let top = 0;
    let right = array[0].length;
    let bottom = array.length;
    let left = 0;
    let direction = 'R';
    let i = 0;
    let j = 0;
    
    while (i >= top && i < bottom && j >= left && j < right) {
        ans.push(array[i][j])
        if (direction === 'R') {
            if (j+1 === right) {
                direction = 'D';
                i++;
                top++;
            } else {
                j++;
            }
        } else if (direction === 'D') {
            if (i+1 === bottom) {
                direction = 'L';
                j--;
                right--;
            } else {
                i++;
            }
        } else if (direction === 'L') {
            if (j === left) {
                direction = 'U';
                i--;
                bottom--;
            } else {
                j--;
            }
        } else if (direction === 'U') {
            if (i === top) {
                direction = 'R';
                j++;
                left++;
            } else {
                i--;
            }
        }
    }
    
    return ans;
}


let arr1= [
    [ 1,  2,  3, 4], 
    [12, 13, 14, 5], 
    [11, 16, 15, 6], 
    [10,  9,  8, 7]
];

console.log(spiralTraverse(arr1));
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

let arr2 = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]
console.log(spiralTraverse(arr2));
// => [1, 2, 3, 4, 5, 6, 7, 8 9]