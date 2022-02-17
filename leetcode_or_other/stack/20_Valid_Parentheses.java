class Solution {
    
    private Stack<Character> stack = new Stack<>();
    
    public boolean isValid(String s) {
        
        for (int i=0;i<s.length();i++) {
            
            char cur = s.charAt(i);
            
            if(cur == '(' ||  cur == '[' || cur == '{') {
                char expect = cur == '(' ? ')' : cur == '[' ? ']' : '}';
                stack.push(expect);
            } else {
                if(stack.isEmpty() || stack.pop() != cur) { // don't forget if not symmetry! 
                    return false;
                }
            }
        }
        
        return stack.isEmpty();
    }
}