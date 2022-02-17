class Solution {
    
    Map<Integer, Integer> map = new HashMap<>();
    
    public int[] topKFrequent(int[] nums, int k) {
        
        // build the map, key = number, value = count
        for(int num : nums){
            if(map.containsKey(num)) {
                map.put(num, map.get(num) + 1);
            } else {
                map.put(num, 1);
            }
        }
        
        // min heap, with comparator in using map.get(number)
        // keep size as k
        // the time complexity is O(n log k)
        PriorityQueue<Integer> heap = new PriorityQueue<>(new MapComparator());
        map.keySet().forEach(key -> {
            
            heap.add(key);
            if(heap.size() > k) {
                heap.poll();
            }
        });
        
        // collect to int[]
        return heap.stream().mapToInt(Integer::intValue).toArray();
    }
    
    
    class MapComparator implements Comparator<Integer> {
        public int compare(Integer a, Integer b){
            return map.get(a) - map.get(b);
        }
    }
}


// solution 2, change to use list instead of heap
// bucket sort
// this use O(n^2) because addAll in the end 
class Solution {
    
    Map<Integer, Integer> map = new HashMap<>();
    
    public int[] topKFrequent(int[] nums, int k) {
        
        // build the map, key = number, value = count
        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0)+1);
        }
        
        List[] list = new List[nums.length+1]; // all elements are the same
        map.keySet().forEach(key->{
           
            if(list[map.get(key)] == null){
                list[map.get(key)] = new ArrayList<>();
            }
            list[map.get(key)].add(key);
        });
        
        
        // collect to int[]
        List<Integer> result = new ArrayList<>();
        for(int i = list.length-1; i>0 && k>0 ;i--) {
            if(list[i] != null) {
                k = k - list[i].size();
                result.addAll(list[i]); // O(n^2)
            }
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }

}


// use quick select to achieve the result!!! 
class Solution {
    int[] unique;
    Map<Integer, Integer> count;

    public int[] topKFrequent(int[] nums, int k) {
        
        // add into map 
        count = new HashMap();
        for (int num: nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }
        
        // gather key set
        int n = count.size();
        unique = new int[n]; 
        int i = 0;
        for (int num: count.keySet()) {
            unique[i] = num;
            i++;
        }
        
        // quick sort all
        quickselect(0, n - 1, k);
        return Arrays.copyOfRange(unique, 0, k);
    }

    public void quickselect(int left, int right, int k_smallest) {
        if (left == right) return;
        
        // select a random pivot_index !!!!!!!!!!!! so smart!!! 
        Random random_num = new Random();
        int pivot_index = left + random_num.nextInt(right - left); 

        // find the pivot position in a sorted list
        pivot_index = partition(left, right, pivot_index);

        // if the pivot is in its final sorted position
        if (k_smallest == pivot_index) {
            return;    
        } else if (k_smallest < pivot_index) {
            // go left
            quickselect(left, pivot_index - 1, k_smallest);     
        } else {
            // go right 
            quickselect(pivot_index + 1, right, k_smallest);  
        }
    }

    public int partition(int left, int right, int pivot_index) {
        int pivot_frequency = count.get(unique[pivot_index]);
        // 1. move pivot to end
        swap(pivot_index, right);
        int store_index = left;

        // 2. move all less frequent elements to the left
        for (int i = left; i <= right; i++) {
            if (count.get(unique[i]) > pivot_frequency) {
                swap(store_index, i);
                store_index++;
            }
        }

        // 3. move pivot to its final place
        swap(store_index, right);

        return store_index;
    }
    
    
    public void swap(int a, int b) {
        int tmp = unique[a];
        unique[a] = unique[b];
        unique[b] = tmp;
    }
    
}

