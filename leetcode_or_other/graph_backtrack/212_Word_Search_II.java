class Solution {

    public List<String> wordSearch(char[][] board, String[] words){

        if(words.length == 0) return new ArrayList<>();

        // building tire
        TireNode root = buildTire(words);

        List<String> result = new ArrayList<>();
        // dfs to find the answer
        for(int i=0;i<board.length;i++) {
            for(int j=0;j<board[0].length;j++) {
                dfs(root, i, j, board, result);
            }
        }

        return result;
    }

    private void dfs(TireNode cur, int i, int j, char[][] board, List<String> result){

        // there is word in current TireNode
        // we should put it first, because answer will always be next level
        if(cur != null && cur.word != null) {
            result.add(cur.word);
            cur.word = null;
        }

        // end conditions :if i or j is not available 
        //                 to avoid repeatly traverse, show mark as visted (change i, j point to #)
        //                 if is # , then we don't need to go deeper, then return
        //                 if cur.next[i, j point] is null, this mean this path is wrong in tire, so 
        if(i<0 || i>=board.length || j<0 || j>=board[0].length || cur == null || board[i][j] == '#') return; 

        // dfs : go through 4 directions, 
        char c = board[i][j];
        board[i][j] = '#';  // avoid repeat! 
        TireNode next = cur.next[c - 'a'];
        dfs(next, i+1, j, board, result);
        dfs(next, i, j+1, board, result);
        dfs(next, i-1, j, board, result);
        dfs(next, i, j-1, board, result);
        board[i][j] = c;
    }

    private TireNode buildTire(String[] words) {
        
        TireNode root = new TireNode();
        for(String word : words) {
            TireNode cur = root;
            for(char c : word.toCharArray()) {
                if(cur.next[c-'a'] == null){
                    cur.next[c-'a'] = new TireNode();
                }
                cur = cur.next[c-'a'];
            }
            cur.word = word;
        }
        return root;
    }

    private class TireNode {
        TireNode[] next = new TireNode[26];
        String word; // for end of character
    }
}

/*
edge case : words.len == 0

solution : 
 1. find one by one to check if there is any word in the words (dfs)
 2. use tire to check current character is existing
 3. use two layer loop to scan each word and dfs to check the answer
 4. in the end of character, we could check if there is word, if so then we add into our result

[["o","a","a","n"]
,["e","t","a","e"]
,["i","h","k","r"]
,["i","f","l","v"]]

words:["oath","pea","eat","rain"]
Tire: 
      -----root -----
     /    /     \    \
    o     p     e    r
    |     |     |    |
    a     e     a    a
    |     |     |    |
    t     a     t    i
    |    pea   eat   |
    h                n
  oath              rain

ex : 
show how is working in here

*/