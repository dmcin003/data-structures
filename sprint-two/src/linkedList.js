var LinkedList = function() {
  var list = {}; // {head: null, tail: null,}
  list.head = null;
  list.tail = null;


  // node1: {value: 4, next: null}, node2: {value: 5, next: null}}

  list.addToTail = function(value) {

    /*


    {
      head: null,
      tail: null
    }


    1. let newNode = node(2);
    newNode.value = 2
    newNode.next = newNode -> node(3)

    head -> newNode
    tail -> newNode

    2. node(3) = NEW TAIL

    newNode.value = 3
    newNode.next = null -> node(4)

    ..current tail? node(2) - > newNode -> ref1
    current.tail.next -> newNode -> ref2


    */
    var newNode = Node(value);

    // {head: newNode[0], tail: newNode[1]}   newNode[0] = {value: 4, next: newNode[1]};  newNode[1] = {value: 5, next: newNode[2]}
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var temp = list.head.next;
    list.head.next = null;
    var lastHeadValue = list.head.value;
    list.head = temp;
    return lastHeadValue;
  };

  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
      return true;
    }

    while (list.tail.next !== null) {
      if (list.tail.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  //{value:value,next:null}
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addtoTail O(1)

removehead O(1)

contains O(n)
 */
