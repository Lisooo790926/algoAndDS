class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        
        Map<String, Map<String, Double>> graph = buildGraph(equations, values);
        double[] result = new double[queries.size()];
        
        // using the loop to find each query 
        for(int i=0;i<queries.size();i++) {

            List<String> query = queries.get(i);
            String start = query.get(0);
            String end = query.get(1);
            
            boolean isUpdated = dfs(start, end, 1, i, graph, result);
            if(!isUpdated) {
                result[i] = -1;
            } 
        }
        
        return result;
    }
    
    private Map<String, Map<String, Double>> buildGraph(List<List<String>> equations, double[] values) {
        
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for(int i=0;i<equations.size();i++) {
            
            List<String> equation = equations.get(i);
            String first = equation.get(0);
            String second = equation.get(1);
            
            // normal direction
            graph.putIfAbsent(first, new HashMap<>());
            graph.get(first).put(second, values[i]);
            
            // opposite direction
            graph.putIfAbsent(second, new HashMap<>());
            graph.get(second).put(first, 1/values[i]);
        }
        
        return graph;
    }
    
    private boolean dfs(String cur, String end, double value, int index, Map<String, Map<String, Double>> graph, double[] result){
        
        // edge case : graph.get(cur) == null, add -1
        if(graph.get(cur) == null) {
            return false;
        }
        
        // saving condition (also edge) :  cur == end
        if(cur.equals(end)) {
            result[index] = value;
            return true;
        }
        
        // loop all next level point and go deeper, if add into result, then stop
        boolean flag = false;
        Map<String, Double> curMap = graph.get(cur);
        graph.remove(cur); // avoid repeat
        
        for(String key : curMap.keySet()) {
            double newVal = value * curMap.get(key);    
            flag = dfs(key, end, newVal, index, graph, result);
            // break the loop earlier
            if(flag) break;
        }
        
        graph.put(cur, curMap); // should add back for next query or level
        return flag;
    }
}

// edge case : there is no specific edge case

solution : 
We can understand like this a, b is the same as edge of a to b, and with 2.0 value
So this is weighted and directed graph!

[a, b] = 2.0     ==> a--2.0-->b
[b, a] = 1 / 2.0 ==> b--0.5-->a
[b, c] = 3.0
[c, b] = 1 / 3.0

[a, c] = [a, b] [b, c] = 2.0 * 3.0

    
build the graph by equations and values

loop the queries and use dfs to find the weighted by the graph
Map<String>
a --> [{b --> 2.0}]
b --> [{a --> 0.5}]
b --> [{c --> 3.0}]   

a -2.0-> b -3.0-> c => a, c = 2*3 = 6
a -2.0-> b -3.0-> a => avoid duplicated issue
b -0.5-> a => b, a = 0.5
x no directly return