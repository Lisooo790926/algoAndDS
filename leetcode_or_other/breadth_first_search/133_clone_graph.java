// DFS
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/
class Solution {
    public Node cloneGraph(Node node) {
        
        // create private method to clone node
        Map<Node, Node> map = new HashMap<>();

        return cloneNode(node, map);
    }

    private Node cloneNode(Node node, Map<Node, Node> map){
        
        Node newNode;
        // boundary, if exist, then directly return
        if(map.containsKey(node)) {
            newNode = map.get(node);
        } else {

            // separate val and neighbors to setup
            newNode = new Node(node.val, new ArrayList<>());
            map.put(node, newNode); // proof you already passed this node

            for(Node curNode : node.neighbors) {
                newNode.neighbors.add(cloneNode(curNode, map));
            }
        }
        return newNode;
    }
}


// BFS loop get the solution 
class Solution {
    public Node cloneGraph(Node node) {
        
        if(node == null) return null;
        
        // Queue to record the path
        Deque<Node> queue = new ArrayDeque<>(); 
        queue.offer(node);
        
        // map to record the created node
        Map<Integer, Node> map = new HashMap<>();
        Node firstNode = null;
        boolean isFirstOne = true;
        
        while(!queue.isEmpty()) {
            
            Node cur = queue.pop();
            Node newNode = map.getOrDefault(cur.val, new Node(cur.val));
            map.put(cur.val, newNode);
            
            if(isFirstOne) {
                firstNode = newNode;
                isFirstOne = false;
            }
            
            for(Node each : cur.neighbors) {
                
                // newOne is null, create newNode and add into Map 
                Node newEach = map.getOrDefault(each.val, new Node(each.val));
                map.put(each.val, newEach);
                
                if(newEach.neighbors.contains(newNode)){
                   continue; 
                }
                
                newEach.neighbors.add(newNode);
                newNode.neighbors.add(newEach);
                queue.offer(each);
            }
        }
       
        return firstNode;
    }
}