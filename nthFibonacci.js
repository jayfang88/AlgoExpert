// Easy Q


// Time: 
// Space: 
function getNthFib(n, memo = {}) {
    if (memo[n]) return memo[n];

    if (n === 1) return 0;
    if (n === 2) return 1;

    memo[n] = getNthFib(n-1, memo) + getNthFib(n-2, memo);

    return memo[n];
}

console.log(getNthFib(2));      // => 1
console.log(getNthFib(4));      // => 2
console.log(getNthFib(12));     // => 89
console.log(getNthFib(50));     // => 7778742049