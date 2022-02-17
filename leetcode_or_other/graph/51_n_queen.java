
// first solution 
class Solution {

    public List<List<String>> nqueen(int n) {

        // create dummy board 
        char[][] board = new char[n][n];
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                board[i][j] = '.';
            }
        }

        // result 
        List<List<String>> result = new ArrayList<>();
        dfs(board, 0, result);

        return result;
    }

    private void dfs(char[][] board, int row, List<List<String>> result) {
        
        // boundary condition 
        if(row == board.length) {
            // save result
            result.add(construct(board));
            return;
        }

        for(int col=0;col<board.length;col++) {
            if(validate(board, row, col)) {
                board[row][col] = 'Q';
                dfs(board, row + 1, result);
                // we need to change back from 'Q' to '.'
                board[row][col] = '.';
            }
        }
    }

    // validate current position is available
    private boolean validate(char[][] board, int row, int col) {
        for(int i=0;i<row;i++) {
            for(int j=0;j<board.length;j++){
                // if find out Q, then check current position is available based on this Q
                                     // same col   positive diagonal negative diagonal checking
                if(board[i][j]=='Q' && (col == j || col+row == i+j || col-row == i-j)) return false;
            }
        }
        return true;
    }

    // construct the available result
    private List<String> construct(char[][] board){
        List<String> result = new ArrayList<>();
        for(int i=0;i<board.length;i++){
            result.add(new String(board[i]));
        }
        return result;
    }
}



// second solution
// Use Set
class Solution {

    Set<Integer> colSet = new HashSet<>();
    Set<Integer> pdSet = new HashSet<>();
    Set<Integer> ndSet = new HashSet<>();

    public List<List<String>> nqueen(int n) {

        // create dummy board 
        char[][] board = new char[n][n];
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                board[i][j] = '.';
            }
        }

        // result 
        List<List<String>> result = new ArrayList<>();
        dfs(board, 0, result);

        return result;
    }

    private void dfs(char[][] board, int row, List<List<String>> result) {
        
        // boundary condition 
        if(row == board.length) {
            // save result
            result.add(construct(board));
            return;
        }

        for(int col=0;col<board.length;col++) {
            if(validate(row, col)) {
                board[row][col] = 'Q';
                colSet.add(col);
                pdSet.add(row+col);
                ndSet.add(row-col);
                dfs(board, row + 1, result);
                // we need to change back from 'Q' to '.'
                board[row][col] = '.';
                colSet.remove(col);
                pdSet.remove(row+col);
                ndSet.remove(row-col);
            }
        }
    }

    // validate current position is available by sets
    private boolean validate(int row, int col) {
        return !(colSet.contains(col) || pdSet.contains(row+col) || ndSet.contains(row-col));
    }

    // construct the available result
    private List<String> construct(char[][] board){
        List<String> result = new ArrayList<>();
        for(int i=0;i<board.length;i++){
            result.add(new String(board[i]));
        }
        return result;
    }
}