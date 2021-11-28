// two stack method! 

class BrowserHistory {
    
    private Stack<String> backStack = new Stack<>();
    private Stack<String> forwardStack = new Stack<>();

    public BrowserHistory(String homepage) {
        backStack.push(homepage);
    }
    
    public void visit(String url) {
        backStack.push(url);
        while (!forwardStack.isEmpty()) { // clean the forwardstack
            forwardStack.pop();
        }
    }
    
    public String back(int steps) {
        if(steps >= backStack.size()) steps = backStack.size() - 1; // leave the top one in stack 
        for(int i=0;i<steps;i++) {
            forwardStack.push(backStack.pop());
        }
        return backStack.peek();
    }
    
    public String forward(int steps) {
        if(steps >= forwardStack.size()) steps = forwardStack.size(); // all are push back to backstack
        for(int i=0;i<steps;i++) {
            backStack.push(forwardStack.pop());
        }
        return backStack.peek();
    }
}


// one list method
class BrowserHistory {
    
    private int currentIndex = 0; // record the current index 
    private List<String> list = new ArrayList<>();  // save as list
    
    public BrowserHistory(String homepage) {
        list.add(homepage);
    }
    
    public void visit(String url) {
        list.subList(currentIndex+1, list.size()).clear(); // clear the subList
        list.add(url);
        currentIndex++; 
    }
    
    public String back(int steps) {
        currentIndex = Math.max(currentIndex - steps, 0); // only move the currentIndex ! 
        return list.get(currentIndex);
    }
    
    public String forward(int steps) {
        currentIndex = Math.min(currentIndex + steps, list.size()-1); // only move the currentIndex ! 
        return list.get(currentIndex);
    }
}
