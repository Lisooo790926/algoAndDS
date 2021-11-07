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
var sortList = function (head, startIndex, endIndex) {
    // quick sort

    if (startIndex == undefined && endIndex == undefined) {
        startIndex = 0;
        endIndex = getEndIndex(head)
    }

    if (endIndex > startIndex) {

        let partitionIndex = getPartitionIndex(head, startIndex, endIndex)

        sortList(head, startIndex, partitionIndex - 1);
        sortList(head, partitionIndex + 1, endIndex);
    }

    return head;
};

function getPartitionIndex(head, startIndex, endIndex) {

    const pivotNode = getNodeByIndex(head, endIndex);
    const pivotValue = pivotNode.val;

    let currentNode = getNodeByIndex(head, startIndex)
    let partition = currentNode;
    let partitionIndex = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
        if (currentNode.val < pivotValue) {
            swapValue(currentNode, partition);
            partition = partition.next;
            partitionIndex++;
        }
        currentNode = currentNode.next
    }

    swapValue(partition, pivotNode);
    return partitionIndex;
}


// no need swap the node 
// swap the value
function swapValue(node1, node2) {

    if (node1 == node2) {
        return node1;
    }

    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
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

    let index = -1;
    while (head) {
        index++;
        head = head.next
    }
    return index;
}

