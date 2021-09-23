var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.first = 0;
  someInstance.last = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  // enqueue
  enqueue: function(value) {
    // if first is 0 increment it
    if (this.first === 0) {
      this.first++;
    }
    // increment last
    this.last++;
    // add key: last & value: value to storage
    this.storage[this.last] = value;
  },
  // dequeue
  dequeue: function() {
  // if first != 0 && first <= last
  // var temp to store first pair
  // delete first stored pair
  // increment first
  // return temp
    if (this.first !== 0 && this.first <= this.last) {
      var temp = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return temp;
    }
  },
  // size
  size: function() {
    return Object.keys(this.storage).length;
  }
};


