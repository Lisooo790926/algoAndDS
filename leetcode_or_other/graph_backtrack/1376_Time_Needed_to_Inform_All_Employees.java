class Solution {
    public int numOfMinutes(int n, int headID, int[] manager, int[] informTime) {
        
        // build graph
        final Map<Integer, List<Integer>> graph = build(manager)

        // dfs to find the max 
        int result = 0;
        dfs()
    
        return result;
    }

    // use return int as result of dfs !!!
    // dfs only find the one answer instead of collection, so it might be use for this!!
    private int dfs(int e, Map<Integer, List<Integer>> graph, int[] informTime) {

        // edge case, if there is no next level(graph.get(e) == null)
        List<Integer> list = graph.get(e);
        if(list == null || list.isEmpty()) {
            return 0;
        }

        // loop to get next level and go deeper
        int curTime = 0

        for(int next : list) {
            // compare which is your max path in next level
            curTime = Math.max(curTime, dfs(next, graph, informTime));
        }
        // return next level + your current level = max total time!
        return curTime + informTime[e];

    }

    private Map<Integer, List<Integer>> buildGraph(int[] manager) {
        
        final Map<Integer, List<Integer>> graph = new HashMap<>();
        // key is manager, value is list of subs
        
        for(int i=0;i<manager;i++) {
            int boss = manager[i];
            if(boss == -1) continue;
            graph.putIfAbsent(boss, new HashMap<>());
            graph.get(boss).add(i);
        }
        return graph;
    }
}

// edge case : 

/* conditions : 
1. 0~n-1 employees
2. headID is root
3. manager[] stands for subs
4. informTime[] stands for how much time for manager to inform team 
5. Time is parallel, so managers can inform subs in the same time!!!
*/

/** solution : 
1. we can understand like weighted directed graph (manager --informTime--> employee)
2. We should find the how much total time, so it means find the longest time 
3. build graph
4. dfs to find max total time
 */
