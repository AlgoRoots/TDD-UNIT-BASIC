class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    const newNode = { item, next: this.head };
    this.head = newNode;
    this._size++;
  }

  pop() {
    if (this._size === 0) throw new Error("There is no item.");
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) throw new Error("There is no item.");
    const node = this.head;
  }
}

module.exports = Stack;
