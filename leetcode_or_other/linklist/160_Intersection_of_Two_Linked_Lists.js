/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    
    let set = new Set();
    
    let root = headA
    while (root) {
        set.add(root)
        root = root.next 
    }
    
    while(headB) {
        if(set.has(headB)){
            return headB
        }
        
        headB = headB.next
    }
    
    return null
};


// there is other solution, so smart
// headerA length = lenA
// headerB length = lenB

// if want to make it become same position 
// make two iteration
// lenA + lenB = const 

var getIntersectionNode2 = function(headerA, headerB) {
    if(headerA == null || headerB == null) {
        return null;
    }

    let nodeA = headerA;
    let nodeB = headerB;

    while(nodeA != nodeB) {

        nodeA = nodeA == null? headerB : nodeA.next;
        nodeB = nodeB == null? headerA : nodeB.next;
    }

    return nodeA;
}