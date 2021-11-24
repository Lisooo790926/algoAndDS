class Solution {
    
    private Stack<Integer> stack = new Stack<>();
    
    public int evalRPN(String[] tokens) {
        
        for (String token : tokens) {
           
            if(token.equals("*")) {
                
                stack.push(stack.pop() * stack.pop());
                
            } else if(token.equals("/")) {
                
                int last1 = stack.pop();
                int last2 = stack.pop();
                stack.push(last2 / last1);
                
            } else if(token.equals("+")) {
                
                stack.push(stack.pop() + stack.pop());
                
            } else if(token.equals("-")) {
                
                int last1 = stack.pop();
                int last2 = stack.pop();
                stack.push(last2 - last1);
                
            } else {
                stack.push(Integer.parseInt(token));
            }
        }
        
        return stack.pop();
    }
    
}