class Solution {
    public int threeSumClosest(int[] nums, int target) {
        
        Arrays.sort(nums);
        
        // give random number for initial value
        int result = nums[0] + nums[1] + nums[2];
        
        // because need to make sure min len is 3
        for(int i=0;i<nums.length-2;i++){
            int lo=i+1, hi=nums.length-1;
            while(hi>lo){
                int sum = nums[i] + nums[lo] + nums[hi];
                if(sum > target) {
                    hi--;
                } else if(sum < target) {
                    lo++;
                } else {
                    return sum;
                }
                
                // need to check the gap is the smallest each time
                if(Math.abs(result-target) > Math.abs(sum-target)) result = sum;
            }
        }
        
        return result;
    }
}