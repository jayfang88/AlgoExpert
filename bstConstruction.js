// Medium Q

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    insert(value) {
        let curr = this;
        let newNode = new BST(value);
        while (true) {
            if (value < curr.value) {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = newNode;
                    break;
                }
            } else {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = newNode;
                    break;
                }
            }
        }
        return this;
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    contains(value) {
        let curr = this;
        while (curr) {
            if (value === curr.value) {
                return true;
            } else if (value < curr.value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return false;
    }

    remove(value, parentNode = null) {
        let currNode = this;
        while (currNode) {
            if (value < currNode.value) {
                parentNode = currNode;
                currNode = currNode.left;
            } else if (value > currNode.value) {
                parentNode = currNode;
                currNode = currNode.right;
            } else {
                if (currNode.left && currNode.right) {
                    currNode.value = currNode.right.getMinValue();
                    currNode.right.remove(currNode.value, currNode);
                } else if (!parentNode) {
                    if (currNode.left) {
                        currNode.value = currNode.left.value;
                        currNode.right = currNode.left.right;
                        currNode.left = currNode.left.left;
                    } else if (currNode.right) {
                        currNode.value = currNode.right.value;
                        currNode.left = currNode.right.left;
                        currNode.right = currNode.right.right;
                    }
                } else if (parentNode.left === currNode) {
                    parentNode.left = currNode.left ? currNode.left : currNode.right;
                } else if (parentNode.right === currNode) {
                    parentNode.right = currNode.left ? currNode.left : currNode.right;
                }
                break;
            }
        }
        return this;
    }

    getMinValue() {
        let curr = this;
        while (curr.left) {
            curr = curr.left;
        }
        return curr.value;
    }
}