/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

    if (!head) {
        return head;
    }

    // setup the dummy 
    let dummy = new ListNode();
    dummy.next = head;

    // setup previous node
    let prev = dummy;
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let start = prev.next;
    let then = start.next;

    // swap the start and then each loop
    for (let j = left; j < right - left; j++) {
        start.next = then.next;
        then.next = start;
        then = start.next;
    }

    // use dummy next to get head, instead of using head
    return dummy.next;
}