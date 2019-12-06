// Implement a data structure wthat is composed of several stacks. 
// Should create a new stack once the previous one exceeds capacity
// Should have push(), pop(), and also popAt(index)
// pop should return the same values as it would if there were just a single stack

const { Node, Stack } = require("./stack_class");

class SetOfStacks {
  constructor(max) {
    this.maxSize = max; 
    this.set = [new Stack];
    this.length = 1;
  }

  lastStack() {
    const idx = this.length - 1;
    return this.set[idx];
  }

  push(val) {
    let currentStack = this.lastStack();
    if (currentStack.length >= this.maxSize) {
      currentStack = new Stack;
      this.length++;
      this.set.push(currentStack);
    }

    currentStack.push(val);
    
    return this.length;
  }

  pop() {
    if (this.length > 1 && this.lastStack().length === 0) {
      this.set.pop();
      this.length--;
    }
    return this.lastStack().pop();
  }

  popAt(idx) {
    if (!this.set[idx]) return null;
    this.length--;
    return this.set[idx].pop();
  }


}