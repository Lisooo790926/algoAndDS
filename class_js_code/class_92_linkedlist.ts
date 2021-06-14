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

import { Utils } from './utils'

var utils = new Utils();

// my trial and modified by class LinkedList
export class LinkedList {

    head: SingleNode | null;
    tail: SingleNode | null;
    length: number;
    constructor(value: number) {
        // first node - head'
        this.head = new SingleNode(value, null);
        this.tail = this.head;
        this.length = 1;
    }

    // O(1) 
    append(value: number) {
        const newNode = new SingleNode(value, null)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // O(1) 
    prepend(value: number) {
        this.head = new SingleNode(value, this.head);
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
    insert(index: number, value: number) {

        if (utils.isNull(index, value) || this._isNotAvailableIndex(index)) {
            return;
        }

        // avoid unnecessary looping 
        if (index === this.length) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            let preNode = this.traverseToIndex(index - 1)

            if (utils.isNotNull(preNode, preNode.next)) {
                preNode.next = new SingleNode(value, preNode.next);
                this.length++;
            }
        }
    }

    // class advice can be extract the method to travseToIndex
    traverseToIndex(index: number) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index && currentNode) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }

    // O(n)
    delete(index: number) {
        if (utils.isNull(index) || this._isNotAvailableIndex(index)) {
            return;
        } else if (index === 0) {
            this.head = this.head.next;
            this.length--;
        } else {
            const preNode = this.traverseToIndex(index - 1);
            const unwantNode = preNode.next;

            if (utils.isNotNull(preNode, unwantNode)) {
                preNode.next = unwantNode.next;
                this.length--;
            }
        }
    }

    // class 105 pratice - my trial
    // want to reverse the linklist , not only print
    reverse() {
        this.tail = this.head
        let preNode = this.head
        let currentNode = preNode.next;
        preNode.next = null;

        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = preNode;
            preNode = currentNode;
            currentNode = nextNode;
        }
        this.head = preNode;
    }

    _isNotAvailableIndex(index: number) {
        return index < 0 || index > this.length;
    }

    // not really good one 
    _createNewNode(value: number, next: object) {
        return {
            value: value,
            next: next
        }
    }
}

// class advice, create the Node class (better)
class SingleNode {
    value: number;
    next: SingleNode | null;
    constructor(value: number, next: SingleNode | null) {
        this.value = value;
        this.next = next;
    }
}

let linkedList = new LinkedList(5);
linkedList.append(6)
linkedList.append(6)
linkedList.append(6)
linkedList.append(6)
linkedList.append(6)
linkedList.prepend(10)
linkedList.print()

linkedList.insert(2, 3)
linkedList.print()

linkedList.delete(3)
linkedList.print()

linkedList.reverse()
linkedList.print()