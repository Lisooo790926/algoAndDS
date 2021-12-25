// solution 1 basic heap solution
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        
        // max heap 
        PriorityQueue<Integer> heap = new PriorityQueue<>((a,b)->b-a);
        
        for(int i=0;i<matrix.length;i++){
          for(int j=0;j<matrix[i].length;j++){
              heap.add(matrix[i][j]);
              // keep in kth smallest 
              if(heap.size() > k) heap.poll();
          }  
        }
        
        return heap.peek();
    }
}


// solution 2 use binary search with left bound concept
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        
        int row = matrix.length;
        int col = matrix[0].length;

        int lo = matrix[0][0];
        int hi = matrix[row-1][col-1];

        while (hi>lo){
            
            int mid = lo + (hi - lo)/2;
            int count = 0;
            int j = col - 1;
            for(int i=0;i<row;i++){
                while(j>=0 && matrix[i][j] > mid) j--;
                count += (j+1);
            }

            if(count < k) lo = mid + 1;
            else hi = mid; 
        }

        return lo;
    }
}