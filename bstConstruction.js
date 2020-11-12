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

    remove(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        return this;
    }
}