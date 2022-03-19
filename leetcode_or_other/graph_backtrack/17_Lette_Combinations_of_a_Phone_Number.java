// my dfs solution 
class Solution {
    public List<String> letterCombinations(String digits) {
        
        List<String> result = new ArrayList<>();
        if(digits.length() == 0) return result;
        
        Map<Integer, List<Character>> graph = buildGraph();
        dfs(digits, 0, new StringBuilder(), graph, result);
        
        return result;
    }
    
    private void dfs(String digits, int index, StringBuilder tempSol, Map<Integer, List<Character>> graph, List<String> result){
        
        // ending condition , add the tempSol into your result
        if(index >= digits.length()){
            result.add(tempSol.toString());
            return;
        }
        
        // loop the graph.get(cur), combine tempSol.append(curLevel)
        int cur = digits.charAt(index) - '0';
        for(char next : graph.get(cur)) {
            tempSol.append(next);
            dfs(digits, index+1, tempSol, graph, result);
            tempSol.setLength(tempSol.length()-1);
        }
        
    }
    
    private Map<Integer, List<Character>> buildGraph(){
        
        // use the loop from 2~9, each one we add three char (number 0~2 + 'a' ~ 22~24 + 'a')
        Map<Integer, List<Character>> graph = new HashMap<>();
        char c = 'a';
        for(int i=2;i<=9;i++) {
            graph.put(i, new ArrayList<>());
            int len = (i==7 || i==9) ? 4 : 3;
            for(int j=0;j<len;j++) 
                graph.get(i).add(c++);
        }
        
        return graph;
    }
}

// edge case : empty, then return empty

// condition : 
// 1. 2~9 will have string, 1 doesn't have any string
// 2. 0~4 digits O(3^4)
    
// // solution : buildGraph (Map<Integer, List<String>>) + dfs
    
// // example 
// graph
// 1:[] 
// 2:[a, b, c]
// 3:[d, e, f]

    
//        23
    
//    a,   b,   c

//   def, def, def

// loop solution 

class Solution {
    public List<String> letterCombinations(String digits) {
    
        List<String> result = new ArrayList<>();
        if(digits.length() == 0) return result;

        List<String> list = List.of("0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz");
        result.add("");

        for(char num : digits.toCharArray()) {
            String cur = list.get(num - '0');
            List<String> temp = new ArrayList<>();
            for(int i=0;i<cur.length();i++) {
                for(String each : result) {
                    temp.add(each + cur.charAt(i));
                }
            }
            result = temp;
        }

        return result;
    }
    
}

