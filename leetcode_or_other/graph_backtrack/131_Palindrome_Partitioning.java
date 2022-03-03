// my first solution 
class Solution {
    public List<List<String>> partition(String s) {
     
        List<List<String>> result = new ArrayList<>();
        
        for(int i=1;i<=s.length();i++) {
            dfs(s.substring(i), s.substring(0, i), new ArrayList<>(), result);
        }
        
        return result;
    }
    
    private void dfs(String remind, String cur, List<String> tempSol, List<List<String>> result) {
        
        // end condition check it's (tempSol) invalid, then return; 
        if(!isValid(cur)) {
            return;
        }
        
        tempSol.add(cur);
        
        // edge case if remind is empty, add the tempSol into result, because above is valid
        if(remind.equals("")) {
            result.add(tempSol);
            return;
        }
        
        // use loop to go through all possible substring
        for(int i=1;i<=remind.length();i++) {
            dfs(remind.substring(i), remind.substring(0, i), new ArrayList<>(tempSol), result);
        }
    }
    
    private boolean isValid(String cur) {
        
        int lo = 0;
        int hi = cur.length() - 1;
        
        char[] ca = cur.toCharArray();
        while(lo<hi) {
           if(ca[lo++] != ca[hi--]) return false;
        }
        
        return true;
    }
}

// edge case : s.len = 1, return itself

// condition : 
// 1. verify current substring is palindrome
// 2. we need to know remind string, once you add previous substring into array

// // solution : 
// 1. we can see given string is head of graph

//   "a"     "aa"   "aab"x
// "a" "ab"x  "b"
// "b"   
// 2. this is dfs items, we should go through each path and build the answer


// instead of using substring when check reminding string
class Solution {
    public List<List<String>> partition(String s) {
        
        List<List<String>> result = new ArrayList<>();
        dfs(s, 0, new ArrayList<>(), result);

        return result;
    }

    private void dfs(String s, int index, List<String> tempSol, List<List<String>> result) {

        if(index == s.length()) {
            result.add(new ArrayList<>(tempSol));
            return;
        }

        for(int i=index;i<s.length();i++) {
            if(isValid(s, index, i)) {
                tempSol.add(s.substring(index, i+1));
                dfs(s, i+1, tempSol, result);
                tempSol.remove(tempSol.size()-1);
            } 
        }
    }


    private boolean isValid(String s, int start, int end) {
        
        while(end > start) {
            if(s.charAt(end--) != s.charAt(start++)) return false;
        }
        return true;
    }
}


// third solution 
// improve by using dynamic programming


class Solution {
    
    public List<List<String>> partition(String s) {
        
        List<List<String>> result = new ArrayList<>();

        int len = s.length();
        boolean[][] dp = new boolean[len][len];

        dfs(s, 0, new ArrayList<>(), result, dp);
        return result;
    }

    private void dfs(String s, int index, List<String> tempSol, 
                     List<List<String>> result, boolean[][] dp) {
        
        if(index == s.length()) {
            result.add(new ArrayList<>(tempSol));
            return;
        }
        
        for(int i=index;i<s.length();i++) {
            // use dp to check the result !! 
            if(s.charAt(index) == s.charAt(i) && ((i-index)<=2 || dp[index+1][i-1])) {
                dp[index][i] = true;
                tempSol.add(s.substring(index, i+1));
                dfs(s, i+1, tempSol, result, dp);
                tempSol.remove(tempSol.size()-1);
            }
        }
    }
}

