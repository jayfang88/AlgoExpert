// Easy Q


// Time: 
// Space: 
function getNthFib(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;

    return getNthFib(n-1) + getNthFib(n-2);
}

console.log(getNthFib(2));      // => 1
console.log(getNthFib(4));      // => 3
console.log(getNthFib(12));     // => 144