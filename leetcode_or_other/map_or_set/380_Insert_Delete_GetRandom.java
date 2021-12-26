// solution 1 
class RandomizedSet {

    List<Integer> list = new ArrayList<>();
    Set<Integer> set = new HashSet<>();
    
    public RandomizedSet() {
        
    }
    
    public boolean insert(int val) {
        if(set.add(val)) {
            return list.add(val);
        }
        return false;
    }
    
    public boolean remove(int val) {
        if(set.remove(val)) {
            return list.remove((Integer)val); 
            // remove the value instead of index, not quite good
        }
        return false;
    }
    
    public int getRandom() {
        int index = (int) (Math.random() * list.size());
        return list.get(index);
    }
}


// solution 2 for good performance 
class RandomizedSet {

    List<Integer> list = new ArrayList<>();
    Map<Integer, Integer> map = new HashMap<>();
    Random rand = new Random();
    
    public RandomizedSet() {}
    
    public boolean insert(int val) {
        if(!map.containsKey(val)) {
            map.put(val, list.size());
            return list.add(val);
        }
        return false;
    }
    
    public boolean remove(int val) {
        if(map.containsKey(val)) {
            int index = map.get(val);
            
            // swap the final index to here (this is so smart)
            // we could always remove end index
            if(index < list.size() - 1) {
                int endVal = map.get(list.size()-1);
                list.set(index, endVal);
                map.put(endVal, index);
            }

            map.remove(val);
            list.remove(list.size()-1);
        }
        return false;
    }
    
    public int getRandom() {
        return list.get(rand.nextInt(list.size()));
    }
}

