console.log('linked list data structure ');

/* linked list */

/*  
implement the linked list data structure:
 
*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  createNode(value) {
    const node = {};
    node.value = value;
    node.next = null;
    return node;
  }

  addToTail(value) {
    const newNode = this.createNode(value);
    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }

  removeHead() {
    this.head = this.head.next;
  }

  contains(value) {
    var node = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }
}
