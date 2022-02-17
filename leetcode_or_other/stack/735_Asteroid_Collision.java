class Solution {
    
    // available result will add into this stack! 
    private Stack<Integer> stack = new Stack<>();
    
    public int[] asteroidCollision(int[] asteroids) {
        
        for(int i=0;i<asteroids.length;i++) {
            
            int cur = asteroids[i];
            
            // cur > 0 || stack is empty || cur * stack peek > 0
            if(stack.isEmpty() || cur * stack.peek() > 0 || cur > 0) {
                stack.push(cur);
                continue;
            } 
            
            // only leave cur < 0 && peek > 0
            
            // loop to get the correct position
            while (!stack.isEmpty() && stack.peek() > 0 && stack.peek() < -cur) {
                stack.pop();
            }
            
            if(stack.isEmpty() || stack.peek() * cur > 0) {
                stack.push(cur);
            } else if(stack.peek() == -cur) {
                stack.pop();
            } 
        }
        
        return stack.stream().mapToInt(a->a).toArray();
    }
}