// use hashset to count even
class Solution {
    
    Map<Character, Integer> map = new HashMap<>();
    
    public int longestPalindrome(String s) {
        
        if(s == null || s.length() == 0) return 0;
        
        int max = 0;
        HashSet<Character> set = new HashSet<>();
        
        for(char c : s.toCharArray()) {
            if(set.contains(c)) {
                max+=1;
                set.remove(c);
            } else {
                set.add(c);
            }
        }
        
        // if set is not empty, then there is odd number!
        if(!set.isEmpty()) max = 2*max + 1;
        else max = 2*max;
        
        return max;
    }
}


// solution 2, use boolean array to check even number!! 
class Solution {
    
    public int longestPalindrome(String s) {
        
        if(s == null || s.length() == 0) return 0;
        
        int count = 0;
        boolean[] map = new boolean[128];
        for(char c : s.toCharArray()) {
            map[c] = !map[c];
            if(!map[c]) count+=2; // if change back to false, then add two
        }
        
        // if count smaller then length, which means there is odd number exist, so add one!
        return count < s.length() ? count +1 : count; . 
    }
}
