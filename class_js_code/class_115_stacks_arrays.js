// Arrays based - Stack

class Stack {
    constructor() {
        this.arrays = [];
    }

    peek() { // see the top element
        if (!this.isEmpty()) {
            console.log('peek', this.arrays[this.arrays.length - 1])
        }
    }

    push(value) { // add the top of stack
        this.arrays.push(value);
    }

    pop() {  // get the top // class version more clean
        let value = this.arrays.pop();
        console.log('pop', value);
    }

    isEmpty() {
        return this.arrays.length === 0
    }

    print() {
        console.log(this.arrays);
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

