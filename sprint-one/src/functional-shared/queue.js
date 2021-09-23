var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create someInstance - first last storage
  var someInstance = {};
  someInstance.first = 0;
  someInstance.last = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);


  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    // enqueue
    if (this.first === 0) {
      this.first++;
    }
    this.last++;
    this.storage[this.last] = value;
    //input : value
    // check if first is 0: if true, increment by 1
    // increments last
    // places value into storage with last as its key
  },
  dequeue: function() {
    // dequeue
    if (this.first !== 0 && this.first <= this.last) {
      var temp = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return temp;
    }
    // if first !== 0 and first <= last then
    //store value at first in temp
    //delete storage[first]
    //increment first
    //return temp
  },
  size: function() {
    // size
    // storage size === Object.keys(obj).length
    return Object.keys(this.storage).length;
  }
};


