// Task-1 : Node class

class Node {
  constructor(data) {
    if (data === undefined) {
      console.error("Data value should not be empty.");
      return;
    }
    this.data = data;
    this.next = null;
  }
}

// Task-2 : LinkedList

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // check ll is empty or not?
  isEmpty() {
    return this.head === null;
  }

  // add in the end of linkedlist.
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // add in the start.
  addFirst(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // remove from the last..
  remove() {
    if (this.head === null && this.tail === null) {
      console.log("LinkedList is already empty.");
      return NaN;
    } else {
      let temp = this.head;
      while (temp.next.next !== null) {
        temp = temp.next;
      }
      temp.next = null;
      this.tail = temp;
    }
  }

  // remove elem from start.
  removeFirst() {
    if (this.head === null && this.tail === null) {
      console.log("LinkedList is already empty.");
      return NaN;
    } else {
      this.head = this.head.next;
    }
  }

  // remove elem in linkedlist by data..

  remove(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        if (!current.next) this.tail = current;
        return;
      }
      current = current.next;
    }
  }

  // print the linkedlist.
  print() {
    if (!this.head) {
      console.log("Linkedlist is empty.");
      return;
    }
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);

ll.print();

console.log("after removal");

ll.removeFirst();
ll.print();
