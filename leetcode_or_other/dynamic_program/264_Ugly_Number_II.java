class Solution {
    public int nthUglyNumber(int n) {
        
        int[] result = new int[n];
        result[0] = 1;
        
        int index2 = 0, index3 = 0, index5 = 0;
        int factor2 = 2, factor3 = 3, factor5 = 5;
                
        for(int i=1;i<n;i++) {
            
            int min = Math.min(Math.min(factor2, factor3), factor5);
            result[i] = min;
            if(min == factor2) {
                factor2 = result[++index2] * 2;
            }
            
            if(min == factor3) {
                factor3 = result[++index3] * 3;
            }
            
            if(min == factor5) {
                factor5 = result[++index5] * 5;
            }
        }
        return result[n-1];
    }
}