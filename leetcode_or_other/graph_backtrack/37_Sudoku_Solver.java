// first solution, is based on you don't need to trial and error (always have single answer)
class Solution {
    public void solveSudoku(char[][] board) {

        Queue<Integer> queue = new LinkedList<>();
        Map<Integer, Set<Integer>> map = new HashMap<>();
        boolean[][] visited = new boolean[9][9];
 
        // build graph structure
        for(int i=0;i<9;i++) {
            for(int j=0;j<9;j++) {
                if(board[i][j] != '.') continue;
                checkPoint(board, i, j, queue, map, visited);
            }
        }

        // create queue and use bfs to fill board         
        while(!queue.isEmpty()) {

            int count = queue.size();
            while(count-->0){
                int index = queue.poll();
                int i = index/9;
                int j = index%9;

                Set<Integer> set = map.get(index);
                int k=1;
                for(;k<=9;k++){
                    if(!set.contains(k)) {
                        set.add(k);
                        board[i][j] = (char) (k+'0');
                        break;
                    }
                }

                // add the visted to avoid duplicate
                checkCandidate(i, j, k, queue, map, visited);
            }
        }

    }

    // check each empty point, and get all existed set
    private void checkPoint(char[][] board, int i, int j, Queue<Integer> queue, Map<Integer, Set<Integer>> map, boolean[][] visited) {

        int index = i*9 + j;
        map.putIfAbsent(index, new HashSet<>());
        Set<Integer> set = map.get(index);

        for(int k=0;k<9;k++){
            // check the same row
            if(board[i][k] != '.'){
                set.add(board[i][k] - '0');
            }
            // check the same column
            if(board[k][j] != '.') {
                set.add(board[k][j] - '0');
            }
        }

        int x = i - i%3;
        int y = j - j%3;

        for(int k=x;k<x+3;k++) {
            for(int w=y;w<y+3;w++) {
                if(board[k][w] != '.') {
                    set.add(board[k][w] - '0');
                }
            }
        }

        if(set.size() == 8) {
            queue.offer(index);
            visited[i][j] = true;
        }        
    }

    // update map when you fill into board (same column and row and subBox), 
    // pick the next level candidate 
    private void checkCandidate(int i, int j, int k, Queue<Integer> queue, Map<Integer, Set<Integer>> map, boolean[][] visited) {
        
        for(Integer index : map.keySet()) {

            int ii = index/9;
            int jj = index%9;

            if((ii == i || jj == j || (ii - ii%3 == i - i%3 && jj - jj%3 == j - j%3)) && !visited[ii][jj]) {
                map.get(index).add(k);
                if(map.get(index).size() == 8) {
                    queue.offer(index);
                    visited[ii][jj] = true;
                }
            }
        }
    }
}


// backtrace solution 
class Solution {

    public void solveSudoku(char[][] board){
        solve(0, board);
    }

    public boolean solve(int index, char[][] board) {
        
        int x = index/9;
        int y = index%9;

        for(int i=x;i<9;i++, y = 0) { // we should make sure next j start from 0
            for(int j=y;j<9;j++) {
                if(board[i][j] != '.') continue;

                for(char k='1';k<='9';k++) {
                    // check any 1-9 is available for current i, j 
                    if(isValid(i, j, k, board)) {
                        board[i][j] = k;
                        // if it is available then get deeper (DFS!!)
                        if(solve(index + 1, board)) return true;
                    } 
                }

                board[i][j] = '.';
                return false;
            }
        }

        // all '.' have been filled, normally it will happen in the end of loop
        return true;  
    }

    private boolean isValid(int i, int j, char num, char[][] board) {

        for(int k=0;k<9;k++) {
            if(board[i][k] == num) return false;
            if(board[k][j] == num) return false;
            int x = i/3 * 3 + k/3;
            int y = j/3 * 3 + k%3;
            if(board[x][y] == num) return false;
        }
        return true;
    }
}

// edge case : null, board length != 9 

// condition : 
// board[i][j] == '.', start to check all possiblity (1~9)
//  once you fill the num, we should go deeper to check valid
//  we could use backtrace to achieve

// we should record the current index
