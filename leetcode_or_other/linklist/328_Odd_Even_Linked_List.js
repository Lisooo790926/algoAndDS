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
var oddEvenList = function(head) {
    
    if(!head) {
        return head;
    }
    
    let odd = head;
    let even = odd.next;
    let evenHead = even;
    
    // use even to check remember!
    while (even && even.next) {
           
        // move odd first then even
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
        
    }
    
    // why odd will not be null, because odd is always behind even
    odd.next = evenHead;
    
    return head;
};
