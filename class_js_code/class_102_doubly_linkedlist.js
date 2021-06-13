// my trial
// utils class
const Utils = {
    isNull: (...args) => {
        return !Utils.isNotNull(args);
    },
    isNotNull: (...args) => {
        return args.find(arg => arg !== undefined || arg !== null);
    }
}

class DoublyNode {
    constructor(value, next, past) {
        this.value = value;
        this.next = next;
        this.past = past;
    }
}

class DoublyLinkedList {

    constructor(value) {
        this.head = new DoublyNode(value)
        this.tail = this.head;
        this.length = 1;
    }

    // O(1) but space O(2) 
    append(value) {
        const newNode = new DoublyNode(value, null, this.tail)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // O(1) but space O(2) 
    prepend(value) {
        const newNode = new DoublyNode(value, this.head);
        this.head.past = newNode;
        this.head = newNode;
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

    traverseToIndex(index) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index && currentNode) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }

    // O(n)
    insert(index, value) {

        if (Utils.isNull(index, value) || this._isNotAvailableIndex(index)) {
            return;
        }

        if (index === this.length) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            const currentNode = this.traverseToIndex(index)
            if (Utils.isNotNull(currentNode, currentNode.past)) {
                const insertedNode = new DoublyNode(value, currentNode, currentNode.past);
                currentNode.past.next = insertedNode;
                currentNode.past = insertedNode;
                this.length++;
            }
        }
    }

    // O(n)
    delete(index) {
        if (Utils.isNull(index) || this._isNotAvailableIndex(index)) {
            return;
        } else if (index === 0) {
            this.head = this.head.next;
            this.head.past = null;
            this.length--;
        } else if (index === this.length - 1) {
            // remove the final one, no need loop
            const unwantNode = this.traverseToIndex(index);
            this.tail = unwantNode.past;
            this.tail.next = null
            this.length--;
        } else {
            const unwantNode = this.traverseToIndex(index);

            if (Utils.isNotNull(unwantNode, unwantNode.past)) {
                const pastNode = unwantNode.past;
                const nextNode = unwantNode.next;
                pastNode.next = nextNode;
                if (Utils.isNotNull(pastNode)) {
                    nextNode.past = pastNode;
                }
                this.length--;

            }
        }
    }

    _isNotAvailableIndex(index) {
        return index < 0 || index > this.length;
    }
}


let doublyLinkedList = new DoublyLinkedList(5);
doublyLinkedList.print()

doublyLinkedList.append(6)
doublyLinkedList.prepend(10)
doublyLinkedList.print()

doublyLinkedList.insert(2, 3)
doublyLinkedList.print()

doublyLinkedList.delete(3)
doublyLinkedList.print()
