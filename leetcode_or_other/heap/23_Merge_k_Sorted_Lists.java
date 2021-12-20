
class Solution {
    
    private PriorityQueue<ListNode> heap = new PriorityQueue<>((a, b)-> a.val - b.val);
    
    public ListNode mergeKLists(ListNode[] lists) {
        
        // loop all elements, add into heap
        for(ListNode node : lists) {
            while(node !=null) {
                heap.add(node);
                node = node.next;
            }
        }
        
        // poll the each heap top, and add into new listNode
        ListNode dummy = new ListNode(); // don't forget create dummy node
        ListNode startNode = dummy;
        while (heap.peek() !=null) {
            startNode.next = heap.poll();
            startNode = startNode.next;
            startNode.next = null;
        }
        
        return dummy.next;
    }
    
}