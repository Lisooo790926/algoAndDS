/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    
    // use set to record the step 
    // O(n), but space will take O(n)
    let set = new Set()
    while(head) {
        
        if(set.has(head)) {
            return true
        }
        
        set.add(head)
        head = head.next
    }
    
    return false
};

// use fast and slow pointer 
// becasue similar as run in gym, different velocity, will have intersect

var hasCycle2 = function (head) {

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if(slow == fast) {
            return true;
        }
    }

    return false;
}