// use two map to achieve it
class Solution {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for(int i=0;i<nums1.length;i++){
            for(int j=0;j<nums2.length;j++) {
                map.put(nums1[i]+nums2[j], map.getOrDefault(nums1[i]+nums2[j], 0) + 1);
            }
        }
        
        int result = 0;
        for(int i=0;i<nums3.length;i++){
            for(int j=0;j<nums4.length;j++) {
                result += map.getOrDefault(-1 * (nums3[i] + nums4[j]), 0);
            }
        }
        
        return result;
    }
}

// use two pointer, need to prepare two sorted array, and compare one by one
class Solution {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        
        // create the nums1 and nums2, sum array
        int len12 = nums1.length * nums2.length;
        int[] sum12 = new int[len12];
        
        int w = 0;
        for(int i=0;i<nums1.length;i++){
            for(int j=0;j<nums2.length;j++){
                sum12[w++] = nums1[i]+nums2[j];
            }
        }
        
        Arrays.sort(sum12);
        
        // create nums3 and nums4, sum array
        int len34 = nums3.length * nums4.length;
        int[] sum34 = new int[len34];
        
        int k = 0;
        for(int i=0;i<nums3.length;i++){
            for(int j=0;j<nums4.length;j++){
                // we need to check with sum12 is equals
                sum34[k++] = - (nums3[i]+nums4[j]);
            }
        }
        
        Arrays.sort(sum34);
        
        
        int result = 0;
        w = 0; 
        k = 0;
        while(w < len12 && k < len34) {
            
            if(sum12[w] == sum34[k]) {
                int count12 = 1, count34 = 1;
                
                // include the duplicate, move ahead first and check if the same, then add one
                while(++w < len12 && sum12[w-1] == sum12[w]) count12++;
                while(++k < len34 && sum34[k-1] == sum34[k]) count34++;
                
                // because when exist 3 and 3, increase result will be 9 
                result += count12 * count34;
            }else if(sum12[w] > sum34[k]) {
                k++;
            } else {
                w++;
            }
        }
        
        return result;
        
    }
}