

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (Object.keys(this.edges).length > 0) {
    for (var i = 0; i < this.edges[node].length; i++) { // {1: [3], 3: [1, 4, 5], 4: []}
      var cValue = this.edges[node][i];
      var index = this.edges[cValue].indexOf(node);
      this.edges[cValue].splice(index, 1);
    }
    delete this.nodes[node];
  } else {
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges[fromNode].length; i++) {
    if (this.edges[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges[fromNode]) {
    this.edges[fromNode].push(toNode);
  } else {
    var edges = [];
    edges.push(toNode);
    this.edges[fromNode] = edges;
  }
  if (this.edges[toNode]) {
    this.edges[toNode].push(fromNode);
  } else {
    var edges = [];
    edges.push(fromNode);
    this.edges[toNode] = edges;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // {5: [4], 4: [5]} // remove 3, 1
  if (this.hasEdge(fromNode, toNode)) { // 5, 4
    for (var i = 0; i < this.edges[fromNode].length; i++) {
      if (this.edges[fromNode][i] === toNode) {
        delete this.edges[fromNode][i];
      }
    }
    for (var i = 0; i < this.edges[toNode].length; i++) {
      if (this.edges[toNode][i] === fromNode) {
        delete this.edges[toNode][i];
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode O(1)
Contains O(1)
removeNode O(n^2)
hasEdge O(n)
removeEdge O(n)
addEdge O(1)
forEachNode O(n)
 */


