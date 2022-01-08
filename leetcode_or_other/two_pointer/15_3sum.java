class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
        // because we don't need to return index, we could sort the array first
        Arrays.sort(nums);
        
        // create result list 
        List<List<Integer>> list = new ArrayList<>();
        
        // use loop and two pointer to find other two value sum is zero with current nums[i]\
        // key one element fix and find other two elements
        for(int i=0;i<nums.length;i++) {
            
            // avoid finding duplicate element
            if(i==0 || nums[i] != nums[i-1]) {
                
                // give the two pointer, the target is difference between 0
                int lo = i+1, hi = nums.length - 1, target = 0-nums[i];
                
                while(hi>lo){
                    if(target == nums[lo] + nums[hi]) {
                        list.add(List.of(nums[lo], nums[hi], nums[i]));
                        
                        // avoid having duplicate element (because of sorted)
                        while(hi>lo && nums[lo] == nums[lo+1]) lo++;
                        while(hi>lo && nums[hi] == nums[hi-1]) hi--;
                        lo++;
                        hi--;
                    } else if(target > nums[lo] + nums[hi]) {
                        lo++;
                    } else {
                        hi--;
                    }
                }
            }
        }
        return list;
    }
}

// solution 2 use set as result, no need to like above to skip some element
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
        Arrays.sort(nums);
        Set<List<Integer>> result = new HashSet<>();
        
        for(int i=0;i<nums.length;i++) {

            if(i>0 && nums[i] == nums[i-1]) continue;
            int lo = i+1, hi = nums.length-1, target = 0-nums[i];
            
            while(hi>lo) {
                int sum = nums[i] + nums[lo] + nums[hi];
                if(sum == 0) {
                    result.add(List.of(nums[i],nums[lo],nums[hi]));
                    lo++;hi--;    
                } else if(sum > 0){
                    hi--;
                } else lo++;
            }
        }
        
        return new ArrayList(result);
    }
}

