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

    let dummy = new ListNode()
    let root = dummy;

    while (leftNode || rightNode) {

        if (!rightNode || (leftNode && leftNode.val <= rightNode.val)) {
            root.next = leftNode;
            leftNode = leftNode.next;
        } else {
            root.next = rightNode;
            rightNode = rightNode.next;
        }
        root = root.next
    }

    return dummy.next;
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