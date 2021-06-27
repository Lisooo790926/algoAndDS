class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


// my trial for building the binary tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        // create one const instead of too much memory (like newNode)
        const newNode = value !== null ? new Node(value) : null;
        if (!newNode) {
            return;
        } else if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (currentNode !== null) {
                if (value === currentNode.value) {
                    return "already exist";
                } else if (value > currentNode.value) {
                    currentNode.right === null ?
                        currentNode.right = newNode :
                        currentNode = currentNode.right;
                } else if (value < currentNode.value) {
                    currentNode.left === null ?
                        currentNode.left = newNode :
                        currentNode = currentNode.left;
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;
        let currentValue;

        while (currentNode !== null && currentNode !== undefined) {

            currentValue = currentNode.value;

            if (value === currentValue) {
                return currentNode;
            }

            if (value > currentValue) {
                currentNode = currentNode.right;
            } else if (value < currentValue) {
                currentNode = currentNode.left;
            }
        }
        return "not found"
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170);
tree.insert(null)
tree.insert(15);
tree.insert(1);

console.log(JSON.stringify(traverse(tree.root)))

console.log(tree.lookup(170))
console.log(tree.lookup(20))

//     9
//  4     20
// 1 6  15 170 

// recursive method to get whole tree for checking
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree;
}
