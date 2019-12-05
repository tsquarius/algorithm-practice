
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const node = new Node(val);
    if (!this.tail) {
      this.tail = node;
      this.head = node;
    } else {
      let temp = this.tail;
      temp.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  removeTail() {
    if (!this.tail) return undefined;
    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let queue = [this.head];
      let newTail = null;
      while (queue.length > 0) {
        let node = queue.shift();
        if (node.next === temp) {
          newTail = node;
        } else {
          queue.push(node.next);
        }
      }

      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;
    return temp;
  }

  addToHead(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      node.next = temp;
      this.head = node;
    }

    this.length++;
    return this;
  }

  removeHead() {
    if (!this.head) return undefined;
    let temp = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return temp;
  }

  contains(target) {
    if (!this.head) return false;
    if (this.tail.value === target) return true;

    let queue = [this.head];
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.value === target) return true;
      if (node.next) queue.push(node.next);
    }
    return false;
  }

  get(index) {
    if (index >= this.length) return null;

    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.value = val;

    return true;
  }

  insert(index, val) {
    let node = this.get(index - 1);
    if (!node.next) return false;

    const newNode = new Node(val);
    let currentNode = node.next;

    node.next = newNode;
    newNode.next = currentNode;

    this.length++;
    return true;
  }

  remove(index) {
    let node = this.get(index - 1);
    if (!node || !node.next) return undefined;

    let currentNode = node.next;

    node.next = currentNode.next;

    this.length--;
    return currentNode;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
