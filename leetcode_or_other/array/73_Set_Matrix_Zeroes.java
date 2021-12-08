class Solution {
    public void setZeroes(int[][] matrix) {
        
        
        // use the loop to make first row or column to 0 if matrix[i][j] == 0(as a flag)
        // need to separate the first row or column are 0 (use two flag)
        
        int rowlen = matrix.length;
        int collen = matrix[0].length;
        boolean firstrow = false, firstcol = false;
        
        for(int i=0;i<rowlen;i++) {
            for(int j=0;j<collen;j++) {
                if(matrix[i][j] == 0) {
                    if(i==0) firstrow = true;
                    if(j==0) firstcol = true;
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }            
            }
        }
        
        // second loop to setup all zero
        for(int i=1;i<rowlen;i++) {
            for(int j=1;j<collen;j++){
                if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        // third and fourth loop make first row and column to zero if necessary
        if(firstrow) {
            for(int i=0;i<collen;i++) {
                matrix[0][i] = 0;
            }
        }
        
        if(firstcol) {
            for(int i=0;i<rowlen;i++) {
                matrix[i][0] = 0;
            }
        }
    }
}


// second solution 
class Solution {
    public void setZeroes(int[][] matrix) {
        
        // use the loop to make first row or column to 0 if matrix[i][j] == 0(as a flag)
        // use one flag only, because first row will check also first col 
        
        int rowlen = matrix.length;
        int collen = matrix[0].length;
        boolean firstcol = false;
        
        for(int i=0;i<rowlen;i++) {
            if(matrix[i][0] == 0) firstcol = true;
            for(int j=1;j<collen;j++) {
                if(matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }            
            }
        }
        
        // second loop to setup all zero !!!! reverse!!!!!
        // need to reverse the order, because you make first col as zero, it will break the behavior
        for(int i=rowlen-1;i>=0;i--) {
            for(int j=collen-1;j>=1;j--){
                if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
            if(firstcol) matrix[i][0] = 0;
        }
    
    }
}