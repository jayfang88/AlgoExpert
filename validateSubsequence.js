// Easy Q

// Time: O(n)   => n being length of array
// Space: O(1)
function isValidSubsequence(array, sequence) {
    let top = sequence[0];

    for (num of array) {
        if (num === top) {
            sequence.shift();
            top = sequence[0];
        }
    }

    return (sequence.length === 0);
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// => true
