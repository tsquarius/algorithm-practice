// Create a stack such that the smallest items are on the top. You can use
// an additional temporary stack, but you may not copy the elements into any other data structure
// (such as an array). Should have push(),pop(),peek(), isEmpty()

const { Node, Stack } = require("./stack_class");

class SortStack {
  constructor() {
    this.sorted = new Stack();
    this.inStack = new Stack();
    this.min = null;
  }

  push(val) {
    if (!this.min) {
      this.min = val;
      return this.sorted.push(val);
    }

    if (this.min < val) {
      while (this.sorted.top.value < val) {
        this.inStack.push(this.sorted.pop());
        if (!this.sorted.top) break;
      }
      this.sorted.push(val);
      this.addBackToStack();
    } else {
      this.sorted.push(val);
      this.min = val;
    }
    return this.min;
  }

  addBackToStack() {
    while (this.inStack.length) {
      this.sorted.push(this.inStack.pop());
    }
  }

  isEmpty() {
    return this.sorted.length === 0;
  }

  peek() {
    return this.sorted.top.value;
  }
}
