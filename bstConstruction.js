// Medium Q

// Time: 
// Space: 
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        let newNode = 
        return this;
    }

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