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
        let newNode = new BST(value);

        if (value < this.value) {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = newNode;
            }
        } else {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = newNode;
            }
        }

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