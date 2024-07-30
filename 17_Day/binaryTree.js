// Task-7 : Node implementation for binary tree..

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Task-8 : Binary tree implementation and inorder traversal of binary tree.

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }

  display() {
    this.inOrderTraversal(this.root);
  }
}


const bst = new BinaryTree();

bst.insert(50);
bst.insert(30);
bst.insert(10);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

bst.display()