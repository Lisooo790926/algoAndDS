class Solution {
    
    private Map<String, Integer> map = new HashMap<>();
    
    public List<String> topKFrequent(String[] words, int k) {
        
        for(String word:words) {
            map.put(word , map.getOrDefault(word, 0) + 1);
        }
        
        List<String> list = new ArrayList<>(map.keySet());
        // use the original sorting method with customize comparator
        Collections.sort(list, (str1, str2) -> {
            int diff = map.get(str2) - map.get(str1);
            if(diff == 0) {
                diff = str1.compareTo(str2);
            }
            return diff;
        });
        
        return list.subList(0, k);                
    }
}


// solution 2 
// try to use max heap 
class Solution {
    
    private Map<String, Integer> map = new HashMap<>();
    
    public List<String> topKFrequent(String[] words, int k) {
        
        for(String word:words) {
            map.put(word , map.getOrDefault(word, 0) + 1);
        }
        
        // max heap (but they want the order when equals)
        PriorityQueue<String> heap = new PriorityQueue<>((str1, str2) -> {
            int diff = map.get(str2) - map.get(str1);
            return diff == 0 ? str1.compareTo(str2) : diff;
        });

        // we don't control size, because even control size, the order will be wrong
        map.keySet().stream().forEach(key-> {
            heap.add(key);
        });

        List<String> list = new ArrayList<>();
        while(k>0) {
            list.add(heap.poll()); // poll the large one
            k--;
        }
        
        return list;                        
    }
}