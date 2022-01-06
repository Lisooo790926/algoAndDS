// brutal force method
class Solution {
    public String longestPalindrome(String s) {
        
        // solution 1 : brutal force
        String result = "";
        
        for(int i=0;i<s.length();i++) {
            
            String r1 = getPalindromicString(s, i, i);   // for odd string
            String r2 = getPalindromicString(s, i, i+1); // for even
            
            String r3 = r1.length() > r2.length() ? r1 : r2;
            result = result.length() > r3.length() ? result : r3;
        }
        
        return result;
    }
    
    private String getPalindromicString(String s, int i, int j) {
        
        while(i>=0 && j<s.length() && s.charAt(i) == s.charAt(j)) {
            j++;
            i--;
        }
        
        return s.substring(i+1, j);
    }
}

// solution 2 
class Solution {
    public String longestPalindrome(String s) {
        
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        String result = "";
        
        // remember i>=0, because need to have first element
        // need to start from back to front, because of dp 
        for(int i=n-1;i>=0;i--) {
            for(int j=i;j<n;j++) {

                // the key is here, to identify is Palindromic subString 
                dp[i][j] = s.charAt(i) == s.charAt(j) && (j-i < 2 || dp[i+1][j-1]);
                                                                     // check internal string is available
                if(dp[i][j] && (j-i+1 > result.length())) {
                    result = s.substring(i, j+1);
                }
            }
        }
        
        return result;
    }
}

