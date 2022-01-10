class Solution {
    public int maxArea(int[] height) {
     
        // use two pointer to achieve it
        // always think way to compare
        int lo = 0, hi = height.length -1;
        int max = 0;
        
        while(hi > lo) {
            
            // the height will pick smaller one (H) *
            int h = height[hi] > height[lo] ? height[lo] : height[hi];
            
            // calculate the area and compare maxArea
            int area = (hi-lo) * h;
            max = Math.max(area, max);

            // move to next height, which height should be larger than H
            // go back to * and find it again 
            if(h == height[lo]) {
                while(hi > lo && height[lo] <= h) lo++;
            } else {
                while(hi > lo && height[hi] <= h) hi--;
            }
            
        }
        
        return max;
    }
}