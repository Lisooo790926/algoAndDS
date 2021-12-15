// First solution use double set, time will be O(n)
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        
        Set<Integer> set = new HashSet<>();
        for(int num1 : nums1) {
            set.add(num1);
        }
        
        Set<Integer> result = new HashSet<>();        
        for (int num : nums2) {
            if(set.contains(num)) {
                result.add(num);
            }
        }
        
        // This one is slow, but save much space
        // return result.stream().mapToInt(Integer::intValue).toArray();

        // this one is more efficiency 
        int[] result2 = new int[result.size()];
        int i = 0;
        for (Integer num : result) {
            result2[i++] = num;
        }
        return result2;
    }
}

// second solution by two pointer, time O(n logn) because of sort
public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<>();
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int i = 0;
        int j = 0;

        while(i<nums1.length && j<nums2.length) {
            if(nums1[i] > nums2[j]) {
                j++;
            } else if(nums1[i] < nums2[j]) {
                i++;
            } else {
                set.add(nums1[i]);
                i++;
                j++;
            }
        }    

        return set.stream().mapToInt(Integer::intValue).toArray();
    }
}


// third solution by binary search, also time O(n logn) because of sort
public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<>();
        Arrays.sort(nums2);
        for (Integer num : nums1) {
            if (binarySearch(nums2, num)) {
                set.add(num);
            }
        }
        
        return set.stream().mapToInt(Integer::intValue).toArray();
    }
    
    public boolean binarySearch(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                return true;
            }
            if (nums[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return false;
    }
}
