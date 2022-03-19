// first solution this one is coming from dp 
class Solution {
    public int maxSubArray(int[] nums) {
        
        int max=nums[0], sum=nums[0];
        
        for(int hi=1;hi<nums.length;hi++){
                   
            int single = nums[hi];
            sum = Math.max(single, sum + single);
            max = Math.max(max, sum);
        } 
        
        return max;
    }
}

// edge case : 


// condition : 
1. find max contigous nums, 
2. if we meet the negative number
   - we should calculate the sum 
   - move to next value, should compare to single value
   - if(sum < single value) move front flag to current 
   - Math.max(single value, current sum + single value, max);

// solution two pointer in the same direction 
[-2]   sum=-2,max =-2, front=0, end=0
[-2, 1]  sum=1,max=1, front=1, end=1
[-2, 1, -3]  sum=-2,max=1, front=1, end=2
[-2, 1, -3, 4]  sum=4,max=4, front=3, end=3    


// dp solution 
class Solution {
    public int maxSubArray(int[] nums) {
        
        int max = nums[0];
        int len = nums.length;
        int[] dp = new int[len];
        dp[0] = nums[0];
        
        for(int i=1;i<len;i++) {
            // use the dp to represent current sum! 
            dp[i] = nums[i] + (dp[i-1]>0 ? dp[i-1] : 0);
            max =Math.max(dp[i], max);
        }
        
        return max;
    }
}


// smaller O(n) divide and conquer
class Solution {
    public int maxSubArray(int[] nums) {

        int[] result = helper(nums, 0, nums.length - 1);
        return result[2];
    }

    private int[] helper(int[] nums, int left, int right) {
        // return leftMax, rightMax, max, sum

        if(left == right) {
            return new int[]{nums[left], nums[left], nums[left], nums[left]};
        }

        int mid = (left+right)/2;
        int[] leftMax = helper(nums, left, mid);
        int[] rightMax = helper(nums, mid+1, right);

        return new int[]{
            Math.max(leftMax[0], leftMax[3] + rightMax[0]),  // compare leftMax  with `single left`  and `whole left  + rightMax's left  side`
            Math.max(rightMax[1], rightMax[3] + leftMax[1]), // compare rightMax with `single right` and `whole right + leftMax's  right side`
            Math.max(Math.max(leftMax[2], rightMax[2]), leftMax[1] + rightMax[0]),  // compare leftMax rightMax and crossMax
            leftMax[3] + rightMax[3]  // record the sum of current nums
        };
    }

}