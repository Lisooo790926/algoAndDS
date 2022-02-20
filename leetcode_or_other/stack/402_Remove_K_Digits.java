class Solution {

    public String removeKDigital(String num, int k) {
        
        if(num.length() == k) return "0";

        // remove the first peak of num string
        Stack<Character> stack = new Stack<>();

        int i = 0;
        while(i < num.length) {

            char c = num.charAt(i);
            // find the peak 
            while(k>0 && !stack.isEmpty() && stack.peek() > c) {
                stack.pop();
                k--;
            }
            stack.push(c); // record last value
            i++;
        }

        while(k-->0) stack.pop();

        // construct the result
        StringBuilder result = new StringBuilder();
        while(!stack.isEmpty()) result.insert(0, stack.pop());

        // remove first zero when length > 1
        while(result.length() > 1 && result.charAt(0) == '0') result.deleteCharAt(0);

        return result.toString();
    }

}