class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        
        // prepare the queue 
        Deque<Integer> queue = new ArrayDeque<>();
        
        int len = nums.length - (k-1);
        if(nums.length < k) {
            len = 1;
        }
        
        int[] result = new int[len];
        
        // loop the value 
        int j = 0; // top element
        for(int i=0;i<nums.length;i++) {
            
            // add each potential element to queue, remove elements which are smaller
            int cur = nums[i];
            while(!queue.isEmpty() && queue.peekLast() < cur) {
                queue.removeLast();
            }
            queue.offer(cur);
            
            // maintain result 
            if(i - j >= k) {
                if(queue.peekFirst() == nums[j]) queue.pollFirst();
                j++;
            }
            
            // add into result
            result[j] = queue.peekFirst();
        }
        
        return result;
    }
}


// treeMap solution
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        
        // create the treeMap to record window elements
        TreeMap<Integer, Integer> map = new TreeMap<>();
        
        // loop each element, add into treeMap
        int[] result = new int[nums.length < k ? 1 : nums.length - (k-1)];
        int curIdx = 0;
        for(int i=0;i<nums.length;i++) {
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
            
            // maintain the treeMap size
            if(i-curIdx >= k) {
               map.put(nums[curIdx], map.get(nums[curIdx])-1);
               if(map.get(nums[curIdx]) == 0) map.remove(nums[curIdx]);
               curIdx++;
            }
            
            result[curIdx] = map.lastEntry().getKey();
        }
        
        return result;
    }
}