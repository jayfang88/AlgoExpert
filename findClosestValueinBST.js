// Easy Q

// Time: 
// Space: 
function findClosestValueInBst(tree, target) {
    let curr = tree;
    let minDiff = Math.abs(curr.value - target);
    let closest = curr.value;

    while (curr) {
        if (Math.abs(curr.value - target) < minDiff) {
            closest = curr.value;
            minDiff = Math.abs(curr.value - target);
        }

        if (target === curr.value) {
            return target;
        } else if (target < curr.value) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }

    return closest;
}