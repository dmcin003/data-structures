var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;
  this.storage = {};
};



Queue.prototype.enqueue = function(value) {
  if (this.first === 0) {
    this.first++;
  }
  this.last++;
  this.storage[this.last] = value;
};


Queue.prototype.dequeue = function() {
  if (this.first !== 0 && this.first <= this.last) {
    var temp = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return temp;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


