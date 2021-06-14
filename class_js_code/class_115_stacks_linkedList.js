
// linkedList based - Stack
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() { // see the top element
        if (!this.isEmpty()) {
            console.log('peek', this.top.value)
        }
    }

    push(value) { // add the top of stack
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = this.bottom = newNode;
        } else {

            // wrong, casue this will cause slow!!!
            // when pop will run really slow
            // this.top.next = newNode;
            // this.top = newNode

            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {  // get the top // class version more clean
        
        if (this.isEmpty()) {
            return null;
        }
        let topNode = this.top; 
        if (topNode === this.bottom) {
            this.buttom = null;
        } 
        this.top = topNode.next
        this.length--;

        console.log('pop', topNode === null ? null : topNode.value);
        return topNode;
    }

    isEmpty() {
        return this.length === 0
    }

    print() {
        let currentNode = this.top;
        const result = [];
        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(result);
    }
}

const myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.print();

myStack.peek();

myStack.pop();
myStack.print();

myStack.pop();
myStack.print();

myStack.pop();
myStack.print();

myStack.pop();
myStack.print();

