// Easy Q

// Time: O(n)   => n being length of main array
// Space: O(1)
function isValidSubsequence(array, sequence) {
    let sIdx = 0;

    for (num of array) {
        if (sIdx === sequence.length) return true;
        if (num === sequence[sIdx]) sIdx++;
    }

    return sIdx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// => true
