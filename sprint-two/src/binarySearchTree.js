var BinarySearchTree = function(value) {
  // A binary search tree can only have at most two children
  var newBinarySearchTree = {};
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  newBinarySearchTree.value = value;

  _.extend(newBinarySearchTree, binarySearchTreeMethods);

  return newBinarySearchTree;
};

// Methods
var binarySearchTreeMethods = {

  insert: function(value) {
    var newTree = BinarySearchTree(value);
    if (newTree.value > this.value) {

      if (this.right === null) {
        this.right = newTree;
      } else {
        //recurse
        this.right.insert(value);
      }
    } else {
      if (this.left === null) {
        this.left = newTree;
      } else {
        // recurse
        this.left.insert(value);
      }
    }
  },


  contains: function(target) {
    // Check this trees value is the target
    // if it is then return true
    // is our target value greater then or less then this trees value
    // Check if this trees left and right properties has children
    // if they do we recurse through them
    // return false
    if (target === this.value) {
      return true;
    }

    if (target > this.value) {
      if (this.right === null) {
        return false;
      } else {
        //recurse
        if (this.right.contains(target)) {
          return true;
        }
      }
    } else {
      if (this.left === null) {
        return false;
      } else {
        if (this.left.contains(target)) {
          return true;
        }
      }
    }
    return false;
  },

  depthFirstLog: function(callback) {
    // run the callback on the root tree value
    callback(this.value);
    // check if left is null
    // if not, run recursion
    if (this.left !== null) {
      this.left.depthFirstLog(callback);
    }
    // check if right is null
    // if not, run recursion
    if (this.right !== null) {
      this.right.depthFirstLog(callback);
    }
  }
};






/*
* Complexity: What is the time complexity of the above functions?
// Insert = O(log(n))
// Contains = O(log(n))
// DepthFirstLog = O(n)
 */
