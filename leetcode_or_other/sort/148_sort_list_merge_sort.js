/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {

    if (!head || !head.next) {
        return head
    }

    // cut off the list (refer to god solution!!!!)
    let prev = null;
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    // merge (left, right)
    return merge(sortList(head), sortList(slow));
}

function merge(leftNode, rightNode) {

    if (leftNode == rightNode) {
        return leftNode;
    }

    let currentVal;
    let currentNode;
    let head;


    // take each node element one by one, and compare 
    while (leftNode || rightNode) {

        if (!rightNode || (rightNode && leftNode && leftNode.val <= rightNode.val)) {
            currentVal = leftNode.val;
            leftNode = leftNode.next;
        } else if (!leftNode || rightNode.val < leftNode.val) {
            currentVal = rightNode.val;
            rightNode = rightNode.next;
        }

        let tempNode = new ListNode(currentVal, null);
        if (currentNode) {
            currentNode.next = tempNode;
            currentNode = currentNode.next;
        } else {
            currentNode = tempNode;
            head = tempNode;
        }
    }

    return head;
}

function getNodeByIndex(head, index) {

    let node = head;
    while (index > 0) {
        node = node.next;
        index--
    }
    return node;
}

function getEndIndex(head) {

    let endIndex = -1;
    while (head) {
        endIndex++
        head = head.next
    }

    return endIndex;
}

// ====================== GOD solution in merge ===============================

function merge(leftNode, rightNode) {

    let head = new ListNode(0, null);
    let currentNode = head;

    while (leftNode && rightNode) {
        if (leftNode.val < rightNode.val) {
            currentNode.next = leftNode;
            leftNode = leftNode.next;
        } else {
            currentNode.next = rightNode;
            rightNode = rightNode.next;
        }
        currentNode = currentNode.next;
    }

    if (rightNode != null) {
        currentNode.next = rightNode;
    }

    if (leftNode != null) {
        currentNode.next = leftNode;
    }

    return head.next;
}