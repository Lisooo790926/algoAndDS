class Solution {
    
    private Map<Integer, Integer> countMap = new HashMap<>();
    
    public int longestConsecutive(int[] nums) {
        
        int max = 0;
        
        for(int i=0;i<nums.length;i++) {
            
            int cur = nums[i];
            if(countMap.containsKey(cur)) continue;
            
            int prev = countMap.get(cur-1) != null ?  countMap.get(cur-1) : 0;
            int next = countMap.get(cur+1) != null ?  countMap.get(cur+1) : 0;
            int count = 1+ prev + next;
            
            countMap.put(cur, count);
            
            if(count > max) {
                max = count;
            }
            
            // so clever !!! update the boundary 
            // ex : cur = 3, if there is 2 in both next and prev, we should update 1 and 5 to current count 5 
            // so next time some number call 1 or 5, it will have 5 (because 2,3,4,5,6) 
            // also this mean nearby number already been used, only boundary still not used yet! 
            countMap.put(cur-prev, count);
            countMap.put(cur+next, count);
            
        }
        
        return max;
    }
}


// good understand solution
class Solution {
    
    private Set<Integer> set = new HashSet<>();
    
    public int longestConsecutive(int[] nums) {
        // use set to remove and count one by one

        for (int num : nums) set.add(num);
        int max = 0;
        
        for(int num : nums) {
            if(set.remove(num)) { //represent number is exist
                int value = num;
                int sum = 1;
                while(set.remove(value-1)) value--;
                sum += num - value;
                
                value = num;
                while(set.remove(value+1)) value++;
                sum += value - num;

                max = Math.max(sum, max);
            }
        }

        return max;
    }
    
}