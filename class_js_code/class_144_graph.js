// How to describe the Graph
// Edge List - show the connection 
// const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

// Adjacent List - describe near node 
// const graph = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjacent Matrix - describe near node by matrix
/*
const graph = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]
*/

// building adjacent list (by hash table)
// my trial
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        if (!this.adjacentList[node]) {
            this.adjacentList[node] = [];
            this.numberOfNodes++;
        }
        return this.adjacentList;
    }

    addEdge(node1, node2) {
        // undirected Graph
        if (this.adjacentList[node1] && this.adjacentList[node2]) {
            this.adjacentList[node1].push(node2);
            this.adjacentList[node2].push(node1);
        }
        return this.adjacentList;
    }

    showConnections() {
        if (this.numberOfNodes <= 0) {
            console.log('empty')
        } else {
            Object.keys(this.adjacentList).forEach(key => {
                let listString = '----> ';
                this.adjacentList[key].forEach(element=> {
                    listString += (' ' + element);
                })
                console.log(key, listString);
            });
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('5')
// order doesn't matter
myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')
myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')

myGraph.showConnections();
// Answer
// 0--> 1 2 
// 1--> 3 2 0 
// 2--> 4 1 0 
// 3--> 1 4 
// 4--> 3 2 4
// 5--> 4 6
// 6--> 5 
