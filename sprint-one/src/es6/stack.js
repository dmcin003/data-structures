class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = 0;
    this.storage = {};
  }

  //functions

  // push
  push(value) {
    this.top++;
    this.storage[this.top] = value;
  }

  // pop
  pop() {
    if (this.top > 0) {
      var temp = this.storage[this.top];
      delete this.storage[this.top];
      this.top--;
      return temp;
    }
  }
  // size
  size() {
    return this.top;
  }
}

