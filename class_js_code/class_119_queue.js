
// linkedList based - Queue
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() { // see the top element
      if(!this.isEmpty()) {
          console.log('peek', this.first.value);
      }  
    }

    enqueue(value) { // add the top of stack
        
        let newNode = new Node(value);
        if(this.isEmpty()) {
            this.last = this.first = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        this.print();
    }

    dequeue() {  // get the top // class version more clean
        if(this.isEmpty()) {
            return null;
        }
        let dequeueElm = this.first;
        if(this.last === dequeueElm) {
            this.last = null
        }
        this.first = dequeueElm.next;
        // dequeueElm.next = null; not neccessary
        this.length--

        console.log('dequeue', dequeueElm.value)
        this.print();
    }

    isEmpty() {
        return this.length === 0
    }

    print() {
        let currentNode = this.first;
        const result = [];
        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(result);
    }
}

const myQueue = new Queue();

myQueue.dequeue()

myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samr')

myQueue.peek();

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

 