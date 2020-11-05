// Medium Q

// Time: O(n^2)
// Space: O(n)
function threeNumberSum(array, target) {
    array = array.sort((a,b) => a-b);

    let ans = [];
    for (let i = 0; i < array.length-2; i++) {
        let left = i+1;
        let right = array.length-1;
        while (left < right) {
            let currSum = array[i] + array[left] + array[right]
            if (currSum === target) {
                ans.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currSum < target) {
                left++;
            } else if (currSum > target) {
                right--;
            }
        }
    }

    return ans;
}


// function threeNumberSum(array, target) {
//     array = array.sort((a,b) => a-b);
//     let ansHash = {};
//     let ans = [];

//     let nums = array.reduce((hash, el) => {
//         hash[el] = true;
//         return hash;
//     }, {});
    
//     for (let num of array) {
//         let diff = target - num;
//         for (let num2 of array) {
//             let num3 = diff - num2;
//             if (num === num2 || num === num3 || num2 === num3) continue;
//             if (nums[num3]) {
//                 let temp = [num, num2, num3].sort((a, b) => a - b);
//                 if (!ansHash[temp]) {
//                     ansHash[temp] = true;
//                     ans.push(temp);
//                 }
//             }
//         }
//     }

//     return ans;
// }

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
// => [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]