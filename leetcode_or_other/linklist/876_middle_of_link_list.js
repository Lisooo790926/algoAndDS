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
 var middleNode = function(head) {
    
    let end = head;
    let target = head;
    // the same as cut link list 
    // there is no prev record
    while (end && end.next) {
        target = target.next;
        end = end.next.next;
    }
    
    return target;
};