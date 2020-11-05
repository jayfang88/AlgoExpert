// Easy Q

// Time: O(n)   => looks at each element a single time
// Space: O(d)  => d is maximum depth for inner array
function productSum(array, depth=1) {
    let sum = 0;
    for (let el of array) {
        if (Array.isArray(el)) {
            sum += productSum(el, depth+1)
        } else {
            sum += el;
        }
    }

    return sum * depth;
}

// Using reduce
function productSum(array, depth=1) {
    let s = array.reduce((sum, el) => {
        if (Array.isArray(el)) {
            return sum + productSum(el, depth + 1);
        } else {
            return sum + el;
        }
    }, 0)

    return s * depth;
}


console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));      // => 12
