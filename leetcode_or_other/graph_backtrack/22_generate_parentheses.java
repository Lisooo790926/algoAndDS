class Solution {
    public List<String> generateParenthesis(int n) {
		
        List<String> result = new ArrayList<>();
        if(n <= 0) return result;

        generate(result, 0, 0, "", 2*n);
        return result;

    }

    private void generate(List<String> result, int left, int right, String cur, int len) {

        // ending condition : left and right are equals && cur == len, then add  into result
        if(left == right && cur.length() == len) {
            result.add(cur);
            return;
        }

        // ending condition 2 : right > left, cur length > len
        if(left > len/2 || right > left || cur.length() > len) return;

        // recursive : add first "(" and second ")"
        generate(result, left+1, right, cur+"(", len);
        generate(result, left, right+1, cur+")", len);
    }
}


/**
edge case : n <= 0, 

condition : 
1. n, total length will be 2n for new parenthese
2. we should always make sure valid parethese (left == right)
    during generating process : left > right
    in the end : left == right
    here we will create two flag, one is for left bracket, the other is for right

3. when adding "(" , we will go deeper to check when you adding another "(" or ")"
         (
    ((       ()      
 (((  (() ()(  ())
 */