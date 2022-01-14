class Solution {
    public int longestSubstring(String s, int k) {

        int result = 0;
        
        for(int uniqueNumTarget=1;uniqueNumTarget<=26;uniqueNumTarget++) {
            result = Math.max(findLongestStrWithNUniqueChar(s, k, uniqueNumTarget), result);
        }
        
        return result;
    }
    
    private int findLongestStrWithNUniqueChar(String s, int k, int uniqueNumTarget) {
        
        int result = 0;
        char[] map = new char[128]; // record frequency
        int uniqueNum = 0;          // record how many unique character does exist in current subString
        int equalsKNum = 0;         // record how many count of character are larger or equals to k times
        int begin = 0, end = 0;
        
        while(end < s.length()) {
            
            if(map[s.charAt(end)]++ == 0) uniqueNum++;
            if(map[s.charAt(end++)] == k) equalsKNum++;
            
            // if unique char number > target, then loop to move the begin
            //    once move begin, need to adjust the count of character
            while(uniqueNum > uniqueNumTarget) {
                if(map[s.charAt(begin)]-- == k) equalsKNum--;
                if(map[s.charAt(begin++)] == 0) uniqueNum--;
            }
            
            // only when uniqueNum is equals to target 
            //      and uniqueNum is equals to equalsKNum (represent current all counts of characters are larger or equals to k times!)
            if(uniqueNum == uniqueNumTarget && uniqueNum == equalsKNum){
                result = Math.max(result, end-begin);
            }
            
        }
        return result;        
    }
}


class Solution {
    public int longestSubstring(String s, int k) {

        // recursive version 
        // give the boundary condition 
        if(s == null || s.length() == 0) return 0;    
        
        // check if whole elements are larger than k
        int[] map = new int[26];
        for(char c : s.toCharArray()) map[c-'a']++;
        
        boolean isAllFine = true;
        for(int count : map) {
            if(count > 0 && count < k) {
                isAllFine = false;
                break;
            }
        }
        
        if(isAllFine) return s.length();
        
        // if no, use two pointer to get the longestString
        int cur = 0, start = 0, result = 0;
        while(cur < s.length()) {
            
            // if current count of char is smaller than k, then get the length for subString
            if(map[s.charAt(cur)-'a'] < k) {
                result = Math.max(result, longestSubstring(s.substring(start, cur), k));
                start = cur+1;
            }
            cur++;
        }
        
        result = Math.max(result, longestSubstring(s.substring(start), k));
        return result;
    }
}