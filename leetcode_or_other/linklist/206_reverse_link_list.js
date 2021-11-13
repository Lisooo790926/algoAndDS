/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    // never forget boundary 
    if (!head) {
        return head
    }

    let nextNode = head.next;
    head.next = null;

    while (nextNode) {
        let next2Node = nextNode.next;
        nextNode.next = head;
        head = nextNode;
        nextNode = next2Node ? next2Node : null;
    }
    return head;
};

// recursive solution 
var reverseList2 = function (head) {

    if(head == null || head.next == null) {
        return head;
    }

    let nextNode = head.next;
    let newHead = reverseList2(nextNode);
    nextNode.next = head;
    head.next = null;
    return newHead;
}


let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
printLinkList(head)
head = reverseList2(head)
printLinkList(head)



function printLinkList(head) {

    let result = "["
    while (head) {
        result = result + "," + head.val;
        head = head.next;
    }

    console.log(result + "]")
}