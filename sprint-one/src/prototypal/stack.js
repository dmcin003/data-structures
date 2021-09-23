var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.top = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.top++;
    this.storage[this.top] = value;
  },
  pop: function() {
    if (this.top > 0) {
      var temp = this.storage[this.top];
      delete this.storage[this.top];
      this.top--;
      return temp;
    }
  },
  size: function() {
    return this.top;
  }
};


