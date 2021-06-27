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

    lookup(value, showLastNode) {
        let currentNode = this.root;
        let currentValue;
        let lastNode;

        while (currentNode !== null && currentNode !== undefined) {

            currentValue = currentNode.value;

            if (value === currentValue) {
                return showLastNode ? { "last": lastNode, "current": currentNode } : currentNode;
            }

            lastNode = currentNode;

            if (value > currentValue) {
                currentNode = currentNode.right;
            } else if (value < currentValue) {
                currentNode = currentNode.left;
            }
        }
        return false;
    }

    /**
     * search for the most left side one
     * 
     * @param {*} node for given node
     * @param {*} isRemoveLastPointer for is cleaning lastNode pointer
     * @returns the most left side node otherwise return null 
     */
    lookupMostLeft(node, isRemoveLastPointer) {
        if (!node) {
            return null;
        }

        let lastNode;
        while (node) {
            if (node.left === null) {
                isRemoveLastPointer ? lastNode.left = null : null;
                return node
            }
            lastNode = node;
            node = node.left;
        }
    }

    // my trial, search for the closest one and replace it
    remove(value) {
        // initial condition
        let replacedNode = null;
        const searchNodes = this.lookup(value, true);

        if (searchNodes.current) {
            const deletedNode = searchNodes.current;

            if (deletedNode.right !== null && deletedNode.left !== null) {
                // if two children, keep searching rightChild's left
                replacedNode = this.lookupMostLeft(deletedNode.right, true);
                replacedNode.right = deletedNode.right;

                // if the replacedNode is not the same left, point to the left
                if (replacedNode !== deletedNode.left) {
                    replacedNode.left = deletedNode.left;
                }

            } else if (deletedNode.right !== null || deletedNode.left !== null) {
                // if leaf child, then replace it
                let isRight = deletedNode.right !== null;
                replacedNode = isRight ? deletedNode.right : deletedNode.left;
            }

            if (replacedNode && searchNodes.last) {
                // change last node pointer
                value > searchNodes.last.value ? searchNodes.last.right = replacedNode : searchNodes.last.left = replacedNode;
            } else if(replacedNode && searchNodes.last === undefined && deletedNode === this.root) {
                // it's root node
                this.root = replacedNode;
            }
        }
        return replacedNode !== null;
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
//       18 
//      1619
tree.insert(18);
tree.insert(16);
tree.insert(19);
tree.insert(14);

console.log(tree.remove(15));
console.log(JSON.stringify(traverse(tree.root)))

// recursive method to get whole tree for checking
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree;
}
