class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add at beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Add at end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) return this.prepend(value);
    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
    this.length++;
  }

  // Add at index
  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.prepend(value);
    const newNode = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
  }
}
