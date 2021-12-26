class LRUCache {

    private int capacity = 0;
    private LinkedList<Integer> queue = new LinkedList<>();
    private Map<Integer, Integer> map = new HashMap<>();
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {
        shiftKey(key);
        return map.getOrDefault(key, -1);  
    }
    
    public void put(int key, int value) {
        if(map.get(key) != null) {
            shiftKey(key);
            map.put(key, value);
            return;
        }
        
        if(queue.size() >= capacity) {
            Integer oldKey = queue.remove(0);
            map.remove(oldKey);
        }
        queue.addLast(key);
        map.put(key, value);
        
    }
    
    // O(n) -> time limit!! 
    private void shiftKey(int key) {
        if(map.get(key) != null) {
            final int len = queue.size();
            for(int i=0;i<len;i++) {
                if(queue.get(i) == key) {
                    queue.remove(i);
                    queue.addLast(key);
                    break;
                }
            }
        }
    }
}


/// second solution, super smart way with dummy node!!!
class LRUCache {

    private Map<Integer, DLinkNode> cache = new HashMap<>();
    private int capacity;
    private DLinkNode head;
    private DLinkNode tail;

    private class DLinkNode {
        public DLinkNode prev;
        public DLinkNode next;
        public Integer value, key;
    }

    private void addToTail(DLinkNode node){
        node.prev = tail.prev;
        tail.prev.next = node;
        tail.prev = node;
        node.next = tail;
    }

    private void removeNode(DLinkNode node){
        DLinkNode prev = node.prev;
        DLinkNode next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    private void popHead() {
        cache.remove(head.next.key);
        removeNode(head.next);
    }

    public LRUCache(int capacity) {
        this.capacity = capacity;

        // dummy node!!!! 
        head = new DLinkNode();
        tail = new DLinkNode();
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        DLinkNode node = cache.get(key);
        if(node != null) {
            removeNode(node);
            addToTail(node);
            return node.value;
        }
        return -1;
    }

     public void put(int key, int value) {
        if(cache.get(key) != null) {
            DLinkNode node = cache.get(key);
            node.value = value;
            removeNode(node);
            addToTail(node);
        } else {
            DLinkNode node = new DLinkNode();
            node.value = value;
            node.key = key;
            addToTail(node);

            cache.put(key, node);
            if(cache.size() > capacity) {
                popHead();
            }
        }
     }

}