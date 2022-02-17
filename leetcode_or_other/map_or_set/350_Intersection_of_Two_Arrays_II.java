class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        
        // the answer can be any order
        // just find the overlap
        final List<Integer> result = new ArrayList<>();
        final Map<Integer, Integer> map = new HashMap<>();
        for(int num : nums1) {
            map.put(num, map.containsKey(num) ? map.get(num) + 1 : 1);
        }
        
        for(int num : nums2) {
            if(map.containsKey(num) && map.get(num) > 0){
                result.add(num);
                map.put(num, map.get(num) - 1);
            }
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}