// although pass but too much memory 

class Solution {
    
    private Stack<Integer> countStack = new Stack<>();
    private Stack<Character> charStack = new Stack<>();
    
    public String removeDuplicates(String s, int k) {
        
        final int len = s.length();
        charStack.push(s.charAt(0));
        int count = 1;
 
        for(int i=1;i<len;i++) {
            
            // count
            Character prevCur = charStack.isEmpty() ? ' ' : charStack.peek();
            Character cur = s.charAt(i);
            if(prevCur == cur) {
                count++;
            } else {
                countStack.push(count);
                count = 1;
            }
            
            // if count == k 
            if(count == k) {
                for(int j=0;j<k-1;j++) {
                    charStack.pop();
                }
                count = countStack.isEmpty() ? 1 : countStack.pop();
            } else {
                charStack.push(cur);
            }
        }
        
        // change to use string builder to save the capacity
        StringBuilder result = new StringBuilder();
        for(char chr : charStack) {
            result.append(chr);
        }
        
        return result.toString();
        
    }
}

// other solution with two stack
class Solution {
    
    private Dequeue<Integer> countStack = new ArrayDequeue<>();
    private Dequeue<Character> charStack = new ArrayDequeue<>();
    
    public String removeDuplicates(String s, int k) {
    
        // prepare the stack
        for(char c : s.toCharArray()) {

            if(countStack.isEmpty() || c != charStack.peek()) {
                countStack.push(1);
                charStack.push(c);
            } else {
                int curCount = countStack.pop() + 1;
                if(curCount == k) charStack.pop();
                else countStack.push(curCount);
            }
        }

        // prepare the String result
        StringBuilder result = new StringBuilder();       
        while(!charStack.isEmpty()) {
            int count = countStack.pop();
            while (count-- > 0) result.append(charStack.pop());
        }

        return result.reverse().toString();
    }
    
}



// god solution by two pointer (two difficult to explain)
class Solution {

    public String removeDuplicates(String s, int k) {

        // have one array to record the count
        // have two pointer to move index to available char (skip those removed chars)

        int i=0, count[] = new int[], len = s.length();
        char[] stack = s.toCharArray();
        for(int j=0;j<len;j++, i++) {
            stack[i] = stack[j]; // point next char to current i (renew the value of i)
            count[i] = i > 0 && stack[i-1] == stack[j] ? count[i-1] + 1 : 1;
            if(count[i] == k) i -= k; // point i back to available index
        }
        return new String(stack, 0, i);
    }
}

/*
      n n s s s n v , k = 3
      i=0
      j=0
count[1]

      n n s s s n v , k = 3
        i=1
        j=1
count[1,2]
    
      n n s s s n v , k = 3
          i=2
          j=2
count[1,2,1]

      n n s s s n v , k = 3
              i=4
              j=4
count[1,2,1,2,3]
        i=1        //k==3

      n n n s s n v , k = 3  // here will replace the old value (because no need)
          i=2     
                j=5
count[1,2,1,2,3,3]
   i=-1            // k==3
        
      v n s s s n v , k = 3
      i=0         
                  j=6
count[1,2,1,2,3,3,1]

finally, i will become 1, so result = "v"  
*/
