var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  // extend
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // {value: input, children: []}
  var target = Tree(value);
  this.children.push(target);
};

// tree.contains(value);
treeMethods.contains = function(target) {
  // var isTrue = false;

  if (this.value === target) {
    return true;
  }

  if (this.children.length !== 0) {
    // recursive
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?

addChild O(1)


contains O(n)
 */
