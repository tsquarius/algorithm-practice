class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      let temp = this.top;
      this.top = node;
      this.top.next = temp;
    }

    this.length++;
    return this.length;
  }

  pop() {
    if (!this.top) return null;
    let temp = this.top;

    if (this.top === this.bottom) {
      this.bottom = null;
      this.top = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;
    return temp.value;
  }
}

exports.Node = Node;
exports.Stack = Stack;
