// Easy Q

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Time: O(n)   => n is number of nodes
// Space: O)n)  => n number of nodes in stack
function branchSums(root) {
    let ans = [];
    let stack = [[root, 0]];

    while (stack.length) {
        let temp = stack.pop();
        let node = temp[0]
        let prevSum = temp[1];
        if (!node.right && !node.left) ans.push(node.value + prevSum);
        if (node.right) stack.push([node.right, node.value + prevSum]);
        if (node.left) stack.push([node.left, node.value + prevSum]);
    }

    return ans;
}