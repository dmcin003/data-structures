

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var collision = [];
  if (this._storage.get(index) && this._storage.get(index).length !== 0) {
    var eachHasRun = false;
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        eachHasRun = true;
      }
    }
    if (!eachHasRun) {
      this._storage.get(index).push(tuple);
    }
  } else {
    collision.push(tuple);
    this._storage.set(index, collision);
  }
};

HashTable.prototype.retrieve = function(k) {
  // [['val1', 'val1'], ['val2', 'val2']]
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index).length > 1) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  }
  if (this._storage.get(index).length === 1) {
    if (this._storage.get(index)[0] !== undefined) {
      return this._storage.get(index)[0][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // input: key target
  // strategy: find the target key
  // output: nothing
  if (this._storage.get(index).length > 1) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        delete this._storage.get(index)[i];
      }
    }
  }
  if (this._storage.get(index).length === 1) {
    delete this._storage.get(index)[0];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
Worst case scenario

insert O(n)
retrieve O(n)
remove O(n)
 */


