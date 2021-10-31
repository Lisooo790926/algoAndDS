/**
 * Definition for a binary tree node.
 **/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // find deep left leave node
  // back to parent and keep finding in right node

  let result = 0;
  let stack = [root];
  let currentNode;
  while (stack.length > 0) {
    currentNode = stack.pop();
    if (currentNode.right) {
      stack.push(currentNode.right);
    }

    if (currentNode.left) {
      let leftNode = currentNode.left;
      if (!leftNode.right && !leftNode.left) {
        result += leftNode.val;
      } else {
        stack.push(leftNode);
      }
    }
  }
  return result;
};

// great recursive solution
var sumOfLeftLeaves2 = function (root) {
    
    if(root == null){
        return 0;
    } 
    let result = 0;
    if(root.left != null) {
        if(root.left.left == null && root.left.right == null) {
            result += root.left.val
        }else {
            result += sumOfLeftLeaves2(root.left)
        }
    }
    result += sumOfLeftLeaves2(root.right)

    return result;
};
