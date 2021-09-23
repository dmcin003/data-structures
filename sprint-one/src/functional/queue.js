var Queue = function() {
  var someInstance = {'first': 0, 'last': 0};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //input : value = String
    //output: returns nothing
    // check if first is 0
    // increment by 1
    if (someInstance['first'] === 0) {
      someInstance['first']++;
    }
    someInstance['last']++;
    storage[someInstance['last']] = value;
  };

  someInstance.dequeue = function() {
    // Input: Nothing
    // Output: Value at first index position = String
    // If first > last then skip


    if (someInstance['first'] !== 0 && someInstance['first'] <= someInstance['last']) {
      var temp = storage[someInstance['first']];
      delete storage[someInstance['first']];
      someInstance['first']++;
      return temp;
    }
  };

  someInstance.size = function() {
    //Input: nothing
    //Output: size
    // last - first
    return Object.keys(storage).length;
  };

  return someInstance;
};


/*
Queue instance
IOCE
Input: A string
Output: A string
Conditons: We can't use, new, this o
 prototype chainsdge Cases:

Strategy

Pseudocode

*/