// Medium Q

// Time: O(n Log(n))
// Space: O(1)
function smallestDifference(arrOne, arrTwo) {
    arrOne = arrOne.sort((a,b) => a-b);
    arrTwo = arrTwo.sort((a,b) => a-b);

    let i1 = 0;
    let i2 = 0;
    let smallest = Infinity;
    let ans;
    while (i1 < arrOne.length && i2 < arrTwo.length) {
        let p1 = arrOne[i1];
        let p2 = arrTwo[i2];
        let currDiff = Math.abs(p1 - p2);
        if (currDiff === 0) {
            return [p1, p2];
        } else if (currDiff < smallest) {
            smallest = currDiff;
            ans = [p1, p2];
        }

        if (p1 < p2) {
            i1++;
        } else {
            i2++;
        }
    }

    return ans;
}

// Time: O(n^2)
// Space: O(1)
// function smallestDifference(arrayOne, arrayTwo) {
//     let smallest = Infinity;
//     let ans = [null, null];
//     for (one of arrayOne) {
//         for (two of arrayTwo) {
//             let curr = Math.abs(one - two);
//             if (curr < smallest) {
//                 smallest = curr;
//                 ans = [one, two];
//             }
//         }
//     }

//     return ans;
// }

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
// => [28, 26]