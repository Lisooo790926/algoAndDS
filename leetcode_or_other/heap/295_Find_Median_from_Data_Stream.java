
// use two heap to get median
class MedianFinder {

    PriorityQueue<Integer> maxHeap; // for record small part of numbers
    PriorityQueue<Integer> minHeap; // for record large part of numbers
    boolean even;
    
    public MedianFinder() {
        minHeap = new PriorityQueue<>();
        maxHeap = new PriorityQueue<>((a, b)->b-a);
        even = true;
    }
    
    public void addNum(int num) {
        
        // we need to make sure, new num goes through all values (two heaps)
        // that's why need to choose where should we add  
        if(even) { 
            maxHeap.add(num);
            minHeap.add(maxHeap.poll());
        } else {
            minHeap.add(num);
            maxHeap.add(minHeap.poll());
        }
        even = !even;
    }
    
    public double findMedian() {
       
        return even ? (minHeap.peek() + maxHeap.peek())/2d : minHeap.peek();
    }
}
