class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.size = 10;
  }

  enqueue(element) {
    this.data[this.rear] = element;
    this.rear = this.rear + 1;
  }

  enqueue(element) {
    if (this.rear < this.size) {
      this.data[this.rear] = element;
      this.rear = this.rear + 1;
    }
  }

  length() {
    return this.rear;
  }
}
