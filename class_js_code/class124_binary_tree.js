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
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value > currentNode.value) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = new Node(value);
                        break;
                    }
                } else if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = new Node(value);
                        break;
                    }
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;
        let currentValue = this.root.value;
        
        while (currentNode && currentValue) {
            if (value === currentValue) {
                return currentNode;
            }

            if (value > currentValue) {
                currentNode = currentNode.right;
            } else if (value < currentValue) {
                currentNode = currentNode.left;
            }

            currentValue = currentNode === null ? null :
                currentNode.value;
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
tree.insert(15);
tree.insert(1);

console.log(JSON.stringify(traverse(tree.root)))

console.log(tree.lookup(170))
console.log(tree.lookup(150))

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
