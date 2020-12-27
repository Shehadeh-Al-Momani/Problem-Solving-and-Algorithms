class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(value) {
    this.data[this.top++] = value;
  }

  pop() {
    if (!this.isEmpty()) {
      return this.data[--this.top];
    }
  }

  peek() {
    return this.data[this.top - 1];
  }

  size() {
    return this.top;
  }

  clear() {
    return this.top = 0;
  }

  isEmpty() {
    return this.top === 0;
  }

}
