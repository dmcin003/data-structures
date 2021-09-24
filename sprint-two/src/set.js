var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //O(1)
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }
};
// O(n)
setPrototype.contains = function(item) {
  var isTrue = false;
  _.each(this._storage, function(value) {
    if (value === item) {
      isTrue = true;
    }
  });
  return isTrue;
};

setPrototype.remove = function(item) {
  //O(1)
  if (this._storage[item] === item) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
