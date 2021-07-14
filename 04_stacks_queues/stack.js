/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  //need to add to and remove from the front of the linked list

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let currFirst = this.first
      this.first = newNode;
      this.first.next = currFirst;
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.first === null) {
      throw new Error("List is empty");
    }

    if (this.size === 1) {
      let value = this.first.val;
      this.first = null;
      this.last = null;
      this.size -= 1;
      return value;
    }

    let value = this.first.val;
    this.first = this.first.next;
    this.size -= 1;
    return value;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.first;
  }
}

module.exports = Stack;