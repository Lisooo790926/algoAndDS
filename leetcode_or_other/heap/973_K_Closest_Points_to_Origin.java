
// use max heap to get size K
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        
        // create one heap for max to min in k size
        int size = points.length;
        final PriorityQueue<int[]> heap = new PriorityQueue<>(new CompareDistance());
        
        for(int i=0;i<points.length;i++) {
            heap.add(points[i]);
            if(heap.size() > k) {  // 一旦size 大於k就會把最大值踢出去
                heap.poll();
            }
        }
        
        int[][] result = new int[heap.size()][2];
        int index = 0;
        while (heap.peek() != null) {
            result[index] = heap.poll();
            index++;
        }
        
        return result;
        
    }
    
    private int calculateDistance(int[] point) {
        return point[0] * point[0] + point[1] * point[1];
    }
    
    
    class CompareDistance implements Comparator<int[]>{
        public int compare(int[] a, int[] b){
            return calculateDistance(b) - calculateDistance(a); // 大的往前
        }
    }
}

// Solution 2 use quick sort to sort it
public int[][] kClosest(int[][] points, int K) {
    int len =  points.length, l = 0, r = len - 1;
    while (l <= r) {
        int mid = helper(points, l, r);
        if (mid == K) break;
        if (mid < K) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return Arrays.copyOfRange(points, 0, K);
}

// need to check the logic
private int helper(int[][] A, int l, int r) {
    int[] pivot = A[l];
    while (l < r) {
        while (l < r && compare(A[r], pivot) >= 0) r--;
        A[l] = A[r];
        while (l < r && compare(A[l], pivot) <= 0) l++;
        A[r] = A[l];
    }
    A[l] = pivot;
    return l;
}

private int compare(int[] p1, int[] p2) {
    return p1[0] * p1[0] + p1[1] * p1[1] - p2[0] * p2[0] - p2[1] * p2[1];
}