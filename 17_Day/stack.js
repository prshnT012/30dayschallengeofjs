// Task-3 : stack implementation..

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Task-4 : reverse the string by stack data structure..

let myStack = new Stack();
let myString = "prashant";

console.log(`Current string value is '${myString}'.`);

for (let i = 0; i < myString.length; i++) {
  myStack.push(myString.charAt(i));
}

let reverseString = "";

while (!myStack.isEmpty()) {
  reverseString += myStack.pop();
}

console.log(`After reverse operation '${reverseString}'.`);
