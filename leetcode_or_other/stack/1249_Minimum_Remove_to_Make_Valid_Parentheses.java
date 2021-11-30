class Solution {
    
    private Deque<Integer> indexStack = new ArrayDeque<>();
    
    public String minRemoveToMakeValid(String s) {
        
        int len = s.length();
        char[] chars = s.toCharArray();
        int j=0; // for available char
        
        for(int i=0; i<len; i++, j++) {
            
            chars[j] = chars[i]; // shift back one to current j
            char c = chars[i];
            
            if(c == '(') {
                indexStack.push(j);
            } else if(c == ')') {
                if(!indexStack.isEmpty()) {
                    indexStack.pop();
                } else {
                    j--;
                }
            }   
        }
        
        if(indexStack.isEmpty()){
            return new String(chars, 0, j);
        }
        
        int w = j-1; // second loop available string
        
        for(int i=j-1;i>=0; i--, w--) {
            
            chars[w] = chars[i]; // shift back one to current j
            char c = chars[i];
        
            if(!indexStack.isEmpty() && i == indexStack.peek()) {
                w++;
                indexStack.pop();
            } 
        }
        System.out.println(w +"" + j);
        
        return new String(chars, w+1, j-w-1);
    }
}