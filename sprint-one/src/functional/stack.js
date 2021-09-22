var Stack = function() {
  var someInstance = {'top': 0}; // {top: 1, top: 2, top: 3 }

  // Use an object with numeric keys to store values
  var storage5 = {}; // {1:string1,2:string2,3:string3}

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.top++;
    storage5[top] = value;
  };

  someInstance.pop = function() {
    if (someInstance.top > 0) {
      var temp = storage5[top];
      delete storage5.top;
      someInstance.top--;
      return temp;
    }
  };

  someInstance.size = function() {
    return someInstance.top;
  };

  return someInstance;
};
