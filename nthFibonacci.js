// Easy Q


// Time: O(n)
// Space: O(n)
function getNthFib(n, memo = {}) {
    if (memo[n]) return memo[n];

    if (n === 1) return 0;
    if (n === 2) return 1;

    memo[n] = getNthFib(n-1, memo) + getNthFib(n-2, memo);

    return memo[n];
}

// Time: O(n)
// Space: O(n)
function getNthFib(n) {
    let dp = new Array(n+1);
    dp[1] = 0;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

console.log(getNthFib(2));      // => 1
console.log(getNthFib(4));      // => 2
console.log(getNthFib(12));     // => 89
console.log(getNthFib(50));     // => 7778742049