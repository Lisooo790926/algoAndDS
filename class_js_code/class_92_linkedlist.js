// 10 --> 5 --> 16 

// class linkedlist example 
// let myLinkedList = {
//     head : {
//         value: 10,
//         next: {
//             head: {
//                 value: 5,
//                 next: {
//                     head:{
//                         value:16,
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
// }

// my trial and modified by class LinkedList
class LinkedList {
    constructor(value) {
        // first node - head
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    // O(1) 
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // O(1) 
    prepend(value) {
        this.head = new Node(value, this.head);
        this.length++;
    }

    // O(n) 
    print() {
        let currentNode = this.head;
        let result = [];
        while (currentNode) {
            result.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(result);
    }

    // O(n)
    insert(index, value) {

        if (this._isNull(index, value) || this._isNotAvailableIndex(index)) {
            return;
        }

        // avoid unnecessary looping 
        if (index === (this.length - 1)) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            let currentNode = this.traverseToIndex(index)

            if (currentNode) {
                currentNode.next = new Node(value, currentNode.next);
            }
        }
    }

    // class advice can be extract the method to travseToIndex
    traverseToIndex(index) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index - 1 && currentNode) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        
        return currentNode;
    }

    // O(n)
    delete(index) {
        if(this._isNull(index) || this._isNotAvailableIndex(index)) {
            return;
        } else if(index === 0) {
            this.head = this.head.next;
            this.length --;
        } else {
            const lastNode = this.traverseToIndex(index-1);
            const unwantNode = lastNode.next();

            if(!this._isNull(lastNode, unwantNode)) {
                lastNode.next = unwantNode.next;
                this.length --;
            }
        }
    }

    // validate the null and undefined
    _isNull(...args) {
        return args.find(arg => arg === undefined || arg === null);
    }

    _isNotAvailableIndex(index) {
        return index < 0 || index >= this.length;
    }

    // not really good one 
    _createNewNode(value, next) {
        return {
            value: value,
            next: next
        }
    }
}

// class advice, create the Node class (better)
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

let linkedList = new LinkedList(5);
linkedList.append(6)
linkedList.prepend(10)
linkedList.print()

linkedList.insert(2, 3)
linkedList.print()

linkedList.delete(-1)
linkedList.print()
