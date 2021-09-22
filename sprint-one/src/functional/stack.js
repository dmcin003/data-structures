var Stack = function() {
  var someInstance = {'top': 0}; // {top: 1, top: 2, top: 3 }

  // Use an object with numeric keys to store values
  var storage = {}; // {1:string1,2:string2,3:string3}

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance['top']++;
    storage[someInstance['top']] = value;
  };

  someInstance.pop = function() {
    if (someInstance['top'] > 0) {
      var temp = storage[someInstance['top']];
      delete storage[someInstance['top']];
      someInstance['top']--;
      return temp;
    }
  };

  someInstance.size = function() {
    return someInstance['top'];
  };

  return someInstance;
};
