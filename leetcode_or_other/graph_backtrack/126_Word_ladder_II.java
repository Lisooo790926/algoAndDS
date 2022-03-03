class Solution {
    
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        
        Set<String> wordSet = new HashSet<>(wordList);
        Map<String, Set<String>> graph = new HashMap<>();

        // use bfs to build available graph and find the shortest path
        bfs(beginWord, endWord, wordSet, graph);
        
        // use dfs to find specific pathes
        List<List<String>> result = new ArrayList<>();
        List<String> tempPath = new ArrayList<>();
        dfs(beginWord, endWord, graph, result, tempPath);

        return result;
    }

    private void bfs(String beginWord, String endWord, Set<String> wordSet, Map<String, Set<String>> graph) {

        Queue<String> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        Set<String> toVisited = new HashSet<>();
        boolean isFound = false;
        queue.offer(beginWord);
        visited.add(beginWord); // first one need to add as visited

        while(!queue.isEmpty()) {
            int size = queue.size();
            for(int i=0;i<size;i++) {
                String cur = queue.poll();
                Set<String> neighbors = getNeighbors(cur, wordSet);
                for(String next : neighbors) {
                    if(!visited.contains(next)) {
                        queue.offer(next);
                        // we could not add into visited directly because current loop we don't meet this next string 
                        toVisited.add(next);

                        // add into graph
                        graph.putIfAbsent(cur, new HashSet<>());
                        graph.get(cur).add(next);
                        if(next.equals(endWord)) isFound = true;
                    }
                }
            }

            if(isFound) break;
            // handle visited elements
            visited.addAll(toVisited);
            toVisited = new HashSet<>();
        }
    }

    private Set<String> getNeighbors(String cur, Set<String> wordSet) {

        Set<String> result = new HashSet<>();
        char[] ca = cur.toCharArray();
        for(int i=0;i<ca.length;i++){
            char temp = ca[i];
            for(char j='a';j<='z';j++){
                ca[i] = j;
                String newStr = new String(ca);
                if(!cur.equals(newStr) && wordSet.contains(newStr)) {
                    result.add(newStr);
                }
            }
            ca[i] = temp;
        }

        return result;
    }

    private void dfs(String curWord, String endWord, Map<String, Set<String>> graph, List<List<String>> result, List<String> tempPath) {

        tempPath.add(curWord);
        if(curWord.equals(endWord)) {
            result.add(new ArrayList<>(tempPath));
        } else {
            // get next available pathes
            Set<String> nexts = graph.get(curWord);
            if(nexts != null){
                for(String next : nexts) {
                    dfs(next, endWord, graph, result, tempPath);
                }
            }
        }
        tempPath.remove(curWord);
    }

}