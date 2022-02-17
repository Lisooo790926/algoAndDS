// create customize node as solution 
class FreqStack {

    private Map<Integer, Integer> map;
    private PriorityQueue<Node> heap;
    private int length;
    
    public FreqStack() {

        // create the count map to record count of value
        map = new HashMap<>();
        
        // create maxHeap, compare the size, then compare max index
        heap = new PriorityQueue<>((a, b) -> {
            if(a.freq != b.freq) return b.freq - a.freq;
            return b.index - a.index;
        });
        
        length = 0;
    }
    
    public void push(int val) {
        
        length++;
        map.put(val, map.getOrDefault(val, 0) + 1);
        Node node = new Node(map.get(val), length - 1, val);
        heap.offer(node);
    }
    
    public int pop() {
        Node node = heap.poll();
        map.put(node.value, map.get(node.value) - 1);
        return node.value;
    }
    
    private class Node {
        public int freq;
        public int index;
        public int value;
        public Node(int freq, int index, int value) {
            this.freq = freq;
            this.index = index;
            this.value = value;
        }
        
    }
}


// second solution , use two map to achieve
// one is recording count
// the other is for frequency record and use Stack to record the value!!
class FreqStack {

    // use normal count map
    private Map<Integer, Integer> valMap;
    // use frequency as key and stack as value!! so smart
    private Map<Integer, Stack<Integer>> freqMap;
    private int maxFreq;
    
    public FreqStack() {

        valMap = new HashMap<>();
        freqMap = new HashMap<>();
        
        maxFreq = 0;
    }
    
    public void push(int val) {
        
        // record count map
        int freq = valMap.getOrDefault(val, 0);
        valMap.put(val, freq+1);
        int curFreq = freq + 1;
        
        // if current count is larger than max, create new stack and put into freqMap
        if(freqMap.size() < curFreq) {
           maxFreq = curFreq; 
           freqMap.put(maxFreq, new Stack<>()); 
        }
        
        freqMap.get(curFreq).push(val);
    }
    
    public int pop() {
        
        Stack<Integer> stack = freqMap.get(maxFreq);
        
        int result = stack.pop();
        if(stack.size() == 0) {
            freqMap.remove(maxFreq);
            maxFreq--;
        }
        
        valMap.put(result, valMap.get(result) - 1);
        if(valMap.get(result) == 0) {
            valMap.remove(result);
        }
        
        return result;
    }
}
