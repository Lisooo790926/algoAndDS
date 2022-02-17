// there is other solution by linklist
// record each min in the node
// once you popup the top, the min value will be dynamic
class MinStack2 {

    private Node head;

    public MinStack() {
        this.head = null;
    }

    public void push(int val) {
        if(head == null) {
            this.head = new Node(null, val, val);
        } else {
            this.head = new Node(this.head, Math.min(val, this.head.min), val)
        }
    }
    
    public void pop() {
        this.head = this.head.next;
    }
    
    public int top() {
        return this.head.val;
    }
    
    public int getMin() {
        return this.head.min;
    }

    class Node {
        private Node next;
        private Integer min;
        private Integer val;

        public Node(Node next, Integer min, Integer val) {
            this.next = next;
            this.min = min;
            this.val = val;
        }
    }
}


// other solution use by stack
class MinStack {
     
    private Stack<Integer> stack = new Stack();
    private int min = Integer.MAX_VALUE;

    public void push(int val) {

        // dynamic record the min, when min is changed
        if(min >= val) {
            stack.push(min);
            min = val;
        }
        stack.push(val);
    }
    
    public void pop() {
        // if the min equals to current pop, we need to take last min as min! 
        // last min is in the next pop
        if(min == stack.pop()) min = stack.pop();
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return min;
    }
}

