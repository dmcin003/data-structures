var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create someInstance with top as a key = 0
  var someInstance = {};
  someInstance.top = 0;
  someInstance.storage = {};
  // var someInstance['top'] = someInstance['top'];
  //create storage
  // var storage = {};

  // Extend stackMethods to someInstance
  _.extend(someInstance, stackMethods);

  //return someInstance
  return someInstance;
};

var stackMethods = {

  // push
  push: function(value) {
    // Inrement top by 1
    this.top++;
    // Add value to storage with the key being tops current value
    this.storage[this.top] = value;
    // returns nothing
  },
  // pop
  pop: function() {
    //store value at top in storage in temp variable
    if (this.top > 0) {

      var temp = this.storage[this.top];
      // delete the storage[top]
      delete this.storage[this.top];
      //decrement top
      this.top--;
      //return a temp
      return temp;
    }
  },
  // size
  size: function() {
    //returns top.
    return this.top;
  }
};


