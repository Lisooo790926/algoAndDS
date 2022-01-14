class Solution {
    public int characterReplacement(String s, int k) {
        
        // use two pointer 
        // first pointer for recording start 
        // second pointer for recording end
        
        // Map to record frequency
        int[] map = new int[26];
        int start = 0, end = 0;
        int maxCount = 0, maxLen = 0;
        
        
        while(end < s.length()){
            
            // only when next maxCount exist then we will use
            // otherwise always use the same one (even if there is no other max exist, use the same one)
            maxCount = Math.max(++map[s.charAt(end) - 'A'], maxCount);
            
            // record the gap between current length and maxCount
            while(end - start + 1 - maxCount > k) {
                map[s.charAt(start) - 'A']--;
                start++;
            }
            
            maxLen = Math.max(maxLen, end++ - start + 1);
        }
        
        return maxLen;
    }
    
    
}