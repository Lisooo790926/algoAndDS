class Solution {
    
    private Stack<Integer> stack = new Stack<>();
    
    public int calculate(String s) {
        
        final int len = s.length();
        int result = 0;
        int sign = 1;
        
        for(int i=0;i<len;i++) {
            
            Character current = s.charAt(i);

            // concat the all number!!! so smart! 
            if (Character.isDigit(current)) {
                int num = s.charAt(i) - '0';    // Be aware of outer loop boundary and i++
                for (; i < len-1 && Character.isDigit(s.charAt(i + 1)); i++) {
                    num = num * 10 + (s.charAt(i + 1) - '0');
                }
                result += sign * num;
                
            } else if(current.equals('(')) {
                stack.push(result);
                stack.push(sign);
                result = 0;
                sign = 1;
            } else if(current.equals(')')) {
                result = result * stack.pop() + stack.pop();
            } else if(current.equals('+')) {
                sign = 1;
            } else if(current.equals('-')) {
                sign = -1;
            } 
        
        }
               
        return result;
    }
}


// other solution 
class Solution {
    
    private Stack<Integer> stack = new Stack<>();
    
    public int calculate(String s) {
        
        int num = 0, result =0, sign = 1;
        stack.push(sign);
        for(int i = 0; i< s.length(); i++) {
            
            char c = s.charAt(i);
            if( c<='9' && c>= '0') {
                num = num*10 + (c-'0'); // always accumlate the number!
            } else if(c == '+' || c == '-') {
                result += (sign * num);
                sign = stack.peek() * (c == '+'? 1 : -1); // external sign affect inner sign
                num = 0;
            } else if(c == '(') {
                stack.push(sign);
            } else if(c == ')') {
                stack.pop();
            }
        }
        
        result += (sign * num);
        return result;
    }
}