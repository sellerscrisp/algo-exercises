/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 0;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  getNodeAt(idx) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === idx) {
        return currentNode
      }
      currentNode = currentNode.next
      count++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) {
      throw "List is empty";
    }

    if (this.length === 1) {
      let value = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return value;
    }


    let prev = this.getNodeAt(this.length - 2);

    let val = prev.next.val
    prev.next = null;
    this.tail = prev;
    this.length -= 1;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head.val;
    this.head = this.head.next
    this.length -= 1;
    if (this.length < 2) this.tail = this.head;
    return firstNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //traverse
    let currentNode = this.head;
    let count = 0;
    while (count != idx) {
      currentNode = currentNode.next
      count++;
    } return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //traverse
    let currentNode = this.head;
    let count = 0;
    while (count != idx) {
      currentNode = currentNode.next
      count++;
    } currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw "Index is not valid";
    }

    if (idx === 0) {
      return this.unshift(val)
    }
    if (idx === this.length) {
      return this.push(val);
    }

    const newNode = new Node(val);
    //traverse
    let currentNode = this.head;
    let count = 0;
    let precedingNode;
    while (count != idx) {
      currentNode = currentNode.next
      count++;
      if (count === idx - 1) {
        precedingNode = currentNode;
      }
    }
    newNode.next = currentNode;
    precedingNode.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length) {
      throw "Index is not valid";
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    let currentNode = this.head;
    let count = 0;
    let nodePrecedingIdx;
    let idxNode;

    while (count != idx + 1) {
      if (count === idx - 1) {
        nodePrecedingIdx = currentNode;
      }
      if (count === idx) {
        idxNode = currentNode;
      }
      currentNode = currentNode.next;
      count += 1;
    }
    idxNode.val = null;
    nodePrecedingIdx.next = currentNode;
    this.length -= 1;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }

    let currentNode = this.head;
    let total = 0;
    let count = 0;
    while (currentNode) {
      count++;
      total += currentNode.val
      currentNode = currentNode.next
    }
    return total / count;
  }
}

module.exports = LinkedList;
