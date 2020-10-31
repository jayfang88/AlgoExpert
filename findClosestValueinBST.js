// Easy Q

// Time: O(Log(n))  => n being total number of nodes
// WORST Time: O(n) => tree just has one huge branch, answer is at the bottom
// Space: O(1)
function findClosestValueInBst(tree, target) {
    let curr = tree;
    let closest = curr;

    while (curr) {
        if (Math.abs(curr.value - target) < Math.abs(closest.value - target)) closest = curr;

        if (target === curr.value) {
            return target;
        } else if (target < curr.value) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }

    return closest.value;
}

