class Solution {
    
    // prepare map <set, list>
    private HashMap<Map<Character, Integer>, List<String>> map = new HashMap<>();
    
    
    public List<List<String>> groupAnagrams(String[] strs) {
     
        // loop the strs
        for(String str : strs) {
            
            
            Map<Character, Integer> keyMap = createMapKey(str);
            
            // put one each str to verify if this is the same as keys in map
            
            // if true add into map as value
            if(map.containsKey(keyMap)) {
                map.get(keyMap).add(str);
            } else {
                // if false add as new key
                List<String> innerList = new ArrayList();
                innerList.add(str);
                map.put(keyMap, innerList);
            }
            
        }
        
        return new ArrayList(map.values());
        
    }
    
    private Map<Character, Integer> createMapKey(final String str) {
        // transfer the str to set and search map as key
        // set has equals method to check element inside
        char[] chars = str.toCharArray();
        final Map<Character, Integer> keyMap = new HashMap();
        for (char chr : chars) {
            if(keyMap.containsKey(chr)) {
                keyMap.put(chr, keyMap.get(chr) + 1);
            } else {
                keyMap.put(chr, 1);
            }
        }
        
        return keyMap;
    }
    
}


// better way to create sepecific key
class Solution2 {

    // could sort it
    private Map<String, List<String>> map = new HashMap<>();
    
    public List<List<String>> groupAnagrams(String[] strs) {
        
        for(String str : strs) {
            String key = createKeyForStr(str);

            if(!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }

            map.get(key).add(str);
        }

        return new ArrayList<>(map.values());
    }

    private String createKeyForStr(final String str) {

        // first way 
        char[] chars = str.toCharArray();
        Arrays.sort(chars);

        return String.valueOf(chars);

        // second way 
        char[] chars = str.toCharArray();
        char[] newChar = new char[26];
        for(char chr : chars) newChar[chr - 'a']++;
        return String.valueOf(newChar);
    }

} 