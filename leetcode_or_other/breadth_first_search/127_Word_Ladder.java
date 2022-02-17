class Solution {
    
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        
        // use two end BFS to find the shortest path

        // add boundary, if endword is not in wordList
        if(wordList.size() == 0 || !wordList.contains(endWord)) return 0;

        // create beginSet and endSet to record current possible nodes
        Set<String> beginSet = new HashSet<>();
        Set<String> endSet = new HashSet<>();
        beginSet.add(beginWord);
        endSet.add(endWord);

        // create visitedSet to record path
        Set<String> visitedSet = new HashSet<>();
        int len = 1;

        // use current string to identify next node by char loop
        while(!beginSet.isEmpty() && !endSet.isEmpty()) {

            // use switch to only hanle beginSet (small set one)
            // this is using for two end BFS 
            if(beginSet.size() > endSet.size()) {
                Set<String> set = beginSet;
                beginSet = endSet;
                endSet = set;
            }

            Set<String> nextPossibleString = new HashSet<>();
            for(String word : beginSet) {
                
                char[] chars = word.toCharArray();
                for(int i=0;i<chars.length;i++) {
                    
                    char oldChar = chars[i];
                    // replace one char to check
                    for(char j='a';j<='z';j++) {
                        chars[i] = j;
                        String newStr = String.valueOf(chars);

                        // if met, it means we find the shortest path
                        if(endSet.contains(newStr)) {
                            return len + 1; // if no return from here, then no answer
                        }

                        if(!visitedSet.contains(newStr) && wordList.contains(newStr)) {
                            nextPossibleString.add(newStr);
                            visitedSet.add(newStr);
                        }
                    }
                    chars[i] = oldChar;
                }
            }

            beginSet = nextPossibleString;
            len++; // create one level then len +1
        }

        return 0;
    }
}


// one way BFS, quite similar to two-end, but use one set to record
public class Solution {

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {

        // boundary 
        if(!wordList.contains(endWord)) return 0;

        // create set to record current level nodes
        Set<String> reachedSet = new HashSet<>();
        reachedSet.add(beginWord);
        int len = 1;

        // verify endWord is contained in reachedSet
        while (!reachedSet.contains(endWord)) {

            Set<String> toAdd = new HashSet<String>();
            for (String word : reachedSet) {
                char[] chs = word.toCharArray();

                // the same as two end check all possible string
                for (int i = 0; i < chs.length; i++) {
                    for (char c = 'a'; c <= 'z'; c++) {
                        char old = chs[i];
                        chs[i] = c;
                        String newWord = String.valueOf(chs);

                        // only verify when word is contain
                        if (wordList.contains(newWord)) {
                            toAdd.add(newWord);
                            wordList.remove(newWord);
                        }
                        chs[i] = old;
                    }
                }
            }

            if(toAdd.size() == 0) return 0;
            reachedSet = toAdd;
            len++;
        }

        return len;
    }
}