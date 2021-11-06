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
    let newNode = new Node(val);

    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } 
    if (newNode) {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    let tailNode = this.tail;
    
    if (!this.head){
      throw Error("Empty array");
    }
    if (this.tail) {
      let currentNode = this.head;
      let secondToLastNode = this.head;
      while(currentNode.next) {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = secondToLastNode;
      this.length--;
      if (this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return tailNode.val;
    }
    throw Error("pop() didn't work");
  }

  /** shift(): return & remove first item. */

  shift() {
    let headNode = this.head;

    if (!this.head) {
      throw Error("Empty array")
    }
    if (this.head) {
      this.head = this.head.next;
      this.length--;
      if (this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return headNode.val;
    }
    throw Error("shift() didn't work");
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let node = this.head;

    if (!this.head) throw Error("Empty array");
    if (idx > this.length) throw Error("Index out of array");
    for (let i=0; i<idx; i++) {
      node = node.next;
    }
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.head

    if (!this.head) throw Error("Empty array");
    if (idx > this.length) throw Error("Index out of array");
    if (idx === 0) {
      this.head.val = val;
      return
    }
    for (let i=0; i<idx; i++) {
      node = node.next;
    }
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let nodeBefore = this.head;
    let nodeAfter = this.head;

    if (idx > this.length) throw Error("Index out of array");
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode;
      this.length++;
      return
    }
    if (idx === this.length){
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return
    }
    for (let i=0; i<idx; i++) {
      nodeBefore = nodeAfter;
      nodeAfter = nodeAfter.next;
    }
    nodeBefore.next = newNode;
    newNode.next = nodeAfter;
    this.length++;
    return
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let node = this.head;
    let nodeBefore = this.head;

    if (!this.head) throw Error("Empty array");
    if (idx > this.length) throw Error("Index out of array");
    if (idx === 0) {
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
    for (let i=0; i<idx; i++) {
      nodeBefore = node;
      node = node.next;
    }
    nodeBefore.next = node.next;
    this.length--;
    return node;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let node = this.head;

    if (!this.head) return 0;
    for (let i=0;i<this.length; i++){
      sum += node.val;
      node = node.next;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
