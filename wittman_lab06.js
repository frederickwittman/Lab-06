// Frederick Wittman
// Lars Kotthoff
// Rajiv Khadka
// COSC 3020
// Lab 06
// 10/25/19

// This was helpful to me: https://www.geeksforgeeks.org/implementation-graph-javascript/
// This implementation will not catch errors.  Input must be properly formatted.

class Graph {
 constructor (numberOfVertices) {
   this.numberOfVertices = numberOfVertices;
   this.AdjList = new Map();
   this.processedList = [];
 }
  addVertex(v) {
   this.AdjList.set(v, []);
 }
 addEdge(v, w) {
   this.AdjList.get(v).push(w);
   this.AdjList.get(w).push(v);
 }
}
 
function depthFirstSearch(graph, first) {
  graph.processedList.push(first);
  adjNodes = graph.AdjList.get(first);
  while (graph.processedList.length < graph.numberOfVertices) {
    for (var i = 0; i < adjNodes.length; i++) {
      if (!graph.processedList.includes(adjNodes[i])) {
        console.log(first + adjNodes[i]);
        depthFirstSearch(graph, adjNodes[i]);
        if (graph.processedList.length ==  graph.numberOfVertices){
          return;
        }
        adjNodes = graph.AdjList.get(first);
      }
      if (i == adjNodes.length - 1) {
        return;
      }
    }
  }
}
 
// Test 1
 
console.log('Test 1');
console.log('Adjacency List.  Proceeds alphabetically');
g1 = new Graph (6);
vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < vertices.length; i++) {
 g1.addVertex(vertices[i]);
}
 
g1.addEdge('A', 'B');
g1.addEdge('A', 'D');
g1.addEdge('A', 'E');
g1.addEdge('B', 'C');
g1.addEdge('D', 'E');
g1.addEdge('E', 'F');
g1.addEdge('E', 'C');
g1.addEdge('C', 'F');

console.log('A: ' + g1.AdjList.get('A'))
console.log('B: ' + g1.AdjList.get('B'))
console.log('C: ' + g1.AdjList.get('C'))
console.log('D: ' + g1.AdjList.get('D'))
console.log('E: ' + g1.AdjList.get('E'))
console.log('F: ' + g1.AdjList.get('F'))

console.log('Depth-first search. First node = F');
depthFirstSearch(g1, 'F');

// Test 2

console.log('Test 2');
console.log('Adjacency List.  Proceeds alphabetically');

g2 = new Graph (6);
vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < vertices.length; i++) {
 g2.addVertex(vertices[i]);
}

g2.addEdge('A', 'B');
g2.addEdge('B', 'C');
g2.addEdge('A', 'D');
g2.addEdge('D', 'E');
g2.addEdge('A', 'F');

console.log('A: ' + g2.AdjList.get('A'))
console.log('B: ' + g2.AdjList.get('B'))
console.log('C: ' + g2.AdjList.get('C'))
console.log('D: ' + g2.AdjList.get('D'))
console.log('E: ' + g2.AdjList.get('E'))
console.log('F: ' + g2.AdjList.get('F'))

console.log('Depth-first search. First node = A');
depthFirstSearch(g2, 'A');
