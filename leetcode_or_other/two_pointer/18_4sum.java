class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        
        Set<List<Integer>> result = new HashSet<>();
        Arrays.sort(nums);
        
        // first loop -> fixed first value, need to make sure len > 4
        for(int i=0;i<nums.length-3;i++) {
        
            // second loop -> fixed second value, need to make sure len > 3
            for(int j=i+1;j<nums.length-2;j++) {
                
                // two pointer to find specific list, add into set 
                int lo=j+1, hi=nums.length-1;
                while(hi>lo){
                    
                    int sum = nums[i]+nums[j]+nums[lo]+nums[hi];
                    if(sum==target){
                        result.add(List.of(nums[i],nums[j],nums[lo],nums[hi]));
                        lo++;hi--;
                    } else if(sum>target) {
                        hi--;
                    } else {
                        lo++;
                    }
                }
            }
        }
        
        return new ArrayList<>(result);
    }
}

// solution 2 use recursive to reduce from k sum to k-1 sum
// https://leetcode.com/problems/4sum/discuss/8609/My-solution-generalized-for-kSums-in-JAVA
/* 
    All ksum problem can be divided into two problems:
    1. 2sum Problem
    2. Reduce K sum problem to K – 1 sum Problem
    Therefore, the ideas is simple and straightforward. We could use recursive to solve this problem. Time complexity is O(N^(K-1)).
*/
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        return ksum(nums, 0, 4, target);
    }

    private List<List<Integer>> ksum(int[] nums, int start, int k, int target){

        List<List<Integer>> result = new ArrayList<>();
        // verify k == 2, if so use two pointer to find the answer
        
        if(k==2){
            int lo = start, hi = nums.length-1;
            while(hi>lo){
                int sum = nums[lo] + nums[hi];
                if(sum == target) {
                    List<Integer> temp = new ArrayList<>();
                    temp.add(nums[lo]);
                    temp.add(nums[hi]);
                    result.add(temp);
                    while(hi>lo && nums[lo] == nums[lo+1]) lo++;
                    while(hi>lo && nums[hi] == nums[hi-1]) hi--;
                    lo++;hi--;
                }else if(sum > target) {
                    hi--;
                }else{
                    lo++;
                }
            }
        }

        // if k > 2, then use ksum to reduce from k to k-1, once get the result, add current nums[i] into array
        else {
            
            for(int i=start;i<nums.length-k+1;i++){
                // need to have i == start, because we don't need to check nums[start] and nums[start-1]
                if(i==start || nums[i] != nums[i-1]) {
                    // keep start, so start from start + 1
                    List<List<Integer>> temp = ksum(nums, i+1, k-1, target - nums[i]);
                    for(List<Integer> l : temp) {
                        l.add(0, nums[i]);
                    }
                    result.addAll(temp);
                }
            }
           
        }
        return result;
    }
}

