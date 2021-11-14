import java.util.LinkedList;
import java.util.Queue;

public class MyStack {

    private Queue<Integer> queue;

    public MyStack() {
        queue = new LinkedList<>();
    }

    public void push(int x) {
        queue.add(x);
        for(int i=0;i<queue.size();i++) {
            queue.add(queue.remove());
        }
    }

    public int pop() {
        return queue.poll();
    }

    public int top() {
        return queue.peek();
    }

    public boolean empty() {
        return queue.isEmpty();
    }
}

class MyStack2 {

    private Queue<Integer> queue1;
    private Queue<Integer> queue2;

    public MyStack2() {
        queue1 = new LinkedList<>();
        queue2 = new LinkedList<>();
    }

    public void push(int x) {
        if(empty()) {
            queue1.add(x);
        }

        Queue<Integer> queue = queue1.isEmpty() ? queue1 : queue2;
        Queue<Integer> otherQueue = queue1.equals(queue) ? queue2 : queue1;
        queue.add(x);

        while(otherQueue.isEmpty()) {
            queue.add(otherQueue.remove());
        }
    }

    public int pop() {
        Queue<Integer> queue = queue1.isEmpty() ? queue1 : queue2;
        return queue.remove();
    }

    public int top() {
        Queue<Integer> queue = queue1.isEmpty() ? queue1 : queue2;
        return queue.peek();
    }

    public boolean empty() {
        return queue1.isEmpty() && queue2.isEmpty();
    }
}