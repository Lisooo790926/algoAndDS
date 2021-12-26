class Solution {
    public String reorganizeString(String s) {
        
        // prepare the map for all character
        Map<Character, Integer> map = new HashMap<>();
        for(char c : s.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        // prepare the queue, use count to order
        PriorityQueue<Character> heap = new PriorityQueue<>((a, b) -> map.get(b) - map.get(a));
        map.keySet().stream().forEach(key->heap.add(key));
        
        // build the final string based on queue
        StringBuilder result = new StringBuilder();
        Character lastChar = null;
        while(!heap.isEmpty()) {
            
            char cur = heap.poll();
            if((result.length() == 0 || cur != lastChar) && map.get(cur) > 0) {
                result.append(cur);
                map.put(cur, map.get(cur)-1);
                lastChar = cur;
            } else if(lastChar == cur && map.get(cur) > 0) {
                Character nextChar = heap.poll();
                if(nextChar!=null) {
                   result.append(nextChar);
                   map.put(nextChar, map.get(nextChar)-1); 
                   lastChar = nextChar;
                   if(map.get(nextChar) > 0) heap.add(nextChar);
                } else {
                    // because cannot have the answer
                    return "";
                }
            }
            
            if(map.get(cur) > 0) heap.add(cur);
        }
        return result.toString();
    }
}


// solution 2,
class Solution {
    public String reorganizeString(String s) {
        
        // like bucket sort
        // put all count into array
        int[] count = new int[26];
        for(char c : s.toCharArray()){
            count[c-'a']++;
        }

        // get the max value
        int maxCount = 0, maxIdx = 0;
        for(int i=0;i<count.length;i++) {
            maxCount = Math.max(count[i], maxCount);
            if(maxCount == count[i]) maxIdx = i;
        }

        // if max > half return ""
        if(maxCount > (s.length() + 1) / 2) {
            return "";
        }

        // fill max value into even index
        int cur = 0;
        char[] result = new char[s.length()];
        
        while(count[maxIdx] > 0) {
            result[cur] = (char) ('a' + maxIdx);
            count[maxIdx]--;
            cur+=2;
        }

        // fill other value into char array
        for(int j=0;j<count.length;j++) {
            
            while(count[j] > 0) {
                if(cur >= s.length()) {
                    cur = 1;
                }
                result[cur] = (char)(j + 'a');
                count[j]--;
                cur+=2;
            }
        }

        return String.valueOf(result);
    }
}
