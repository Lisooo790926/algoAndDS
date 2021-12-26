// solution 1
// use tree map to get max and min
// O(n log n) : key has been sorted
class Solution {
    public int longestSubarray(int[] nums, int limit) {
        
        // use TreeMap to get max and min 
        TreeMap<Integer, Integer> map = new TreeMap<>();
        int curIdx = 0, j;
        
        for(j=0;j<nums.length;j++) {
            // put the count into map
            map.put(nums[j], map.getOrDefault(nums[j], 0) + 1);
            
            // tree map can directly get max and min to check limit
            if(map.lastEntry().getKey() - map.firstEntry().getKey() > limit) {
                map.put(nums[curIdx], map.get(nums[curIdx]) - 1);
                // To make sure this key leaves only one
                if(map.get(nums[curIdx]) == 0) {
                    map.remove(nums[curIdx]);
                }
                curIdx++;
            }
        }        
        
        return j-curIdx;
    }
}

// solution 2, silding window and two monotonic queue to achieve
class Solution {
  public int longestSubarray(int[] nums, int limit) {
		
		Deque<Integer> maxQueue = new ArrayDeque<>();
		Deque<Integer> minQueue = new ArrayDeque<>();

		int l=0, res=1;
		for(int r=0;r<nums.length;r++) {

			// new one is always potential 
			int potential = nums[r];

			// maintain max queue to keep potential max
			// so if potential is larger, then remove smaller one
			while(!maxQueue.isEmpty() && potential > maxQueue.peekLast()) {
				maxQueue.removeLast();
			}
			// if potential is smaller, then remove larger one
			while(!minQueue.isEmpty() && potential < minQueue.peekLast()) {
				minQueue.removeLast();
			}
			
			// add into queue
			maxQueue.offer(potential);
			minQueue.offer(potential);

			while(maxQueue.peekFirst() - minQueue.peekFirst() > limit) {
				if(maxQueue.peekFirst() == nums[l]) maxQueue.pollFirst();
				if(minQueue.peekFirst() == nums[l]) minQueue.pollFirst();
				l++;
			}

			res = Math.max(res, r - l + 1);
		}

		return res;
	}
}


