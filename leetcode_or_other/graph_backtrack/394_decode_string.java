class Solution {
    
    public String decodeString(String str) {
        
        StringBuilder result = new StringBuilder();
        StringBuilder temp = new StringBuilder();

        int index = 0;
        for(;index<str.length();) {
            index = buildString(str, index, temp);
            result.append(temp);
            temp = new StringBuilder();
        }

        return result.toString();
    }

    private int buildString(String str, int index, StringBuilder temp) {

        // end condition : we meet "]"
        if(index >= str.length() || str.charAt(index) == ']') return index;
           
        // if == num go deeper to build the string
        char c = str.charAt(index);  
        if(c >= '0' && c <= '9') {
            int count = 1;
            while(index+count < str.length() && str.charAt(index+count) >= '0' && str.charAt(index+count) <= '9') {
                count++;
            }

            int num = Integer.parseInt(str.substring(index, index+count));
            
            StringBuilder sub = new StringBuilder();
            // don't conside "[", so add one
            index = buildString(str, index+count+1, sub);

            while(num-- > 0) temp.append(sub);
            
        } else {
            temp.append(c);
        }
        
        return buildString(str, index+1, temp);
    }
}

/**
edge case : empty, null

condition: 
1. when we meet num -> need to build new string
2. when we meet "]" -> end of recursive, and calculate the string with number 
   (it could be start to pop string from stack when using two stack)

example : 
"3[a]2[bc]"
      
3 [ a ], 2 [ bc ] 
aaa      bcbc

"3[a2[c]]"
             
3 [ a 2 [ c ]], 
acc  acc acc

 */