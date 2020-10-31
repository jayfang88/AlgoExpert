// Easy Q

// Time: O(n)
// Average Space: O(h)  => h being height of the tree
// Worst Space: O(n)
function nodeDepths(root) {
    let sum = 0;
    let stack = [[root, 0]];

    while (stack.length) {
        let temp = stack.pop();
        let node = temp[0];
        let depth = temp[1];
        sum += depth;
        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);
    }

    return sum;
}