class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        
        while (m > 0 || n > 0) {
            
            int value1 = m > 0 ? nums1[m-1] : Integer.MIN_VALUE;
            int value2 = n > 0 ? nums2[n-1] : Integer.MIN_VALUE;
            
            if(value2 >= value1) {
                nums1[n+m-1] = value2;
                n--;
            } else{
                nums1[n+m-1] = value1;
                m--;
            }
        }
    }
}