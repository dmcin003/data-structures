class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
    this.storage = {};
  }

  enqueue(value) {
    if (this.first === 0) {
      this.first++;
    }
    this.last++;
    this.storage[this.last] = value;
  }

  dequeue() {
    if (this.first !== 0 && this.first <= this.last) {
      var temp = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return temp;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
