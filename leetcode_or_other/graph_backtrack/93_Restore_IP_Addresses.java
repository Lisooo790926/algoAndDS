class Solution {

    public List<String> restoreIpAddresses(String nums) {
    
        List<String> result = new ArrayList<>();
        if(nums == null || nums.length() == 0 || nums.length() > 12) return result;

        helper(0, 0, nums, "", result);
        return result;
    }

    private void helper(int level, int index, String nums, String tempSol, List<String> result) {

        // end condition : index == nums.length => valid IP generated, add into result
        if(level == 4 && index == nums.length()) {
            result.add(tempSol.substring(0, tempSol.length()-1));
            return;
        }

        // invalid condtion : level >= 4 => return, we only have 4 digitals
        if(level >= 4) {
            return;
        }

        // recursive, checking current substring (1~3), is any available, if available then get deeper
        for(int i=1;i<4;i++) {
            if(index+i > nums.length()) break;           
            String sub = nums.substring(index, index+i);
            if((sub.length() > 1 && sub.startsWith("0")) || (Integer.parseInt(sub) >= 256)) continue;
            helper(level+1, index+i, nums, tempSol+sub+".", result);
        }
    }
}

/*
edge case : null, empty, length > 12 (3, 3, 3, 3)

condition : 
separate the nums to each num
1. num <= 255 && num >= 0
2. !num.startWith("0") && num.len > 1

25525511135 => try to get all possiblity
|
2 5525511135 

  2

5 55 552

DFS issue, to consider all possiblity 

record the current index

*/