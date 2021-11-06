class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


// my trial for building the binary tree
class BinarySearchTree {

    constructor(root) {
        this.root = root;
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
     * search for the most left side for given right node
     * 
     * @param {*} rightNode for given node
     * @returns the most left side node in right node
     */
    lookupMostLeft(rightNode) {
        if (!rightNode) {
            return null;
        }

        while (rightNode.left) {
            rightNode = rightNode.left;
        }
        return rightNode;
    }

    // my trial, search for the closest one and replace it
    remove(value) {
        // initial condition
        let replacedNode = null;
        const searchNodes = this.lookup(value, true);

        if (searchNodes.current) {
            const deletedNode = searchNodes.current;

            // get the replacedNode
            if (deletedNode.right !== null && deletedNode.left !== null) {
                // if two children, keep searching rightChild's left
                // we only need to search the nearest element, no matter left side or right side
                replacedNode = this.lookupMostLeft(deletedNode.right);
                console.log(replacedNode)
                if (replacedNode && replacedNode !== deletedNode.right) {
                    replacedNode.right = deletedNode.right;
                }

                // if the replacedNode is not the same left, point to the left
                if (replacedNode) {
                    replacedNode.left = deletedNode.left;
                }
            } else if (deletedNode.right !== null || deletedNode.left !== null) {
                // if leaf child, then replace it
                let isRight = deletedNode.right !== null;
                replacedNode = isRight ? deletedNode.right : deletedNode.left;
            }

            // replace the replacedNode 
            if (replacedNode && searchNodes.last) {
                // change last node pointer
                value > searchNodes.last.value ? searchNodes.last.right = replacedNode : searchNodes.last.left = replacedNode;
            } else if (replacedNode && searchNodes.last === undefined && deletedNode === this.root) {
                // it's root node
                this.root = replacedNode;
            }
        }
        return replacedNode !== null;
    }

    // not quite good solution
    // class solution didn't reuse the lookup method 
    remove_class(value) {
        if(!this.root){
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                // Option 1 : no right node
                if (currentNode.right === null) {
                    // identify is root node
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left === null) {
                    // .....
                } else {
                    // .....
                }
            }
        }
    }

    // my trial
    // space use O(n)/ preOrder 
    depthFirstSearch(){
        let currentNode = this.root;
        let result = []; // record result list
        let stack = []; // record parent node

        while(currentNode) {
            result.push(currentNode.value);

            if(currentNode.right){
                stack.push(currentNode.right);
            }
            if(currentNode.left) {
                stack.push(currentNode.left);
            }

            // get the final one, stack popup
            currentNode = stack.pop();
        }
        return result;
    }

    depthFirstSearch_inOrder_class(){
        return traverseInOrder(this.root, []);
    }

    depthFirstSearch_preOrder_class(){
        return traversePreOrder(this.root, []);
    }

    depthFirstSearch_postOrder_class(){
        return traversePostOrder(this.root, []);
    }

    // my trial
    // space use O(n)
    breadthFirstSearch(){
        let currentNode = this.root;
        let result = []; // record result list
        let queue = []; // record parent node

        while(currentNode) {
            result.push(currentNode.value);

            if(currentNode.left) {
                queue.push(currentNode.left);
            }

            if(currentNode.right){
                queue.push(currentNode.right);
            }

            // get the first one (queue popup)
            currentNode = queue.shift()
            
        }
        return result;
    }

    breadthFirstSearch_recursive(queue, list){
        if(!queue.length){
            return list;
        }
        let currentNode = queue.shift();
        
        if(currentNode) {
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
    
            list.push(currentNode.value);
        }

        return this.breadthFirstSearch_recursive(queue, list);
    }

    validateBST(){
        // rule is parent < right && parent > left
        let currentNode = this.root;
        let queue = [];
        let result = true;

        while(currentNode) {

            if(currentNode.left) {
                result = result && currentNode.left.value < currentNode.value;
                queue.push(currentNode.left);
            }

            if(currentNode.right){
                result = result && currentNode.right.value > currentNode.value;
                queue.push(currentNode.right);
            }

            // get the first one (queue popup)
            currentNode = queue.shift()
            
        }
        return result;
    }

}

// this method is awesome!!!!!!
function traverseInOrder(node, list) {
    
    // find the left first
    if(node.left) {
        traverseInOrder(node.left, list)
    }

    // push the value into list
    list.push(node.value);

    // check right  
    if(node.right) {
        traverseInOrder(node.right, list)
    }

    return list;
}

function traversePreOrder(node, list){
    
    // push the value into list first
    list.push(node.value);
    
    // find the left first
    if(node.left) {
        traversePreOrder(node.left, list)
    }

    // check right  
    if(node.right) {
        traversePreOrder(node.right, list)
    }

    return list;
}

function traversePostOrder(node, list){
    
    console.log(node.value)
    // find the left first
    if(node.left) {
        traversePostOrder(node.left, list)
    }

    // check right  
    if(node.right) {
        traversePostOrder(node.right, list)
    }

    // push the value into list
    list.push(node.value);

    return list;
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

console.log("BFS", tree.breadthFirstSearch())
console.log("BFS_recursive", tree.breadthFirstSearch_recursive([tree.root], []))
console.log("DFS", tree.depthFirstSearch())
console.log("DFS_class_inOrder", tree.depthFirstSearch_inOrder_class())
console.log("DFS_class_preOrder", tree.depthFirstSearch_preOrder_class())
console.log("DFS_class_postOrder", tree.depthFirstSearch_postOrder_class())

// create invalid BST 
let inValidNode = new Node(15)
inValidNode.left = new Node(20)
let inValidBST = new BinarySearchTree(inValidNode)

console.log("validateBST result ", tree.validateBST())

console.log(tree.remove(20));
console.log(JSON.stringify(traverse(tree.root)))

// recursive method to get whole tree for checking
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree;
}
