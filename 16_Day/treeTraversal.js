//  Task-9 : inOrder traversal of binary tree..

class Node{
    constructor (data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(20);
root.left = new Node(10);
root.left.left = new Node(5);
root.left.right = new Node(15);
root.right = new Node(30);
root.right.left = new Node(25); 
root.right.right = new Node(40);

function inOrder(root){
    if(root == null){
        return;
    }
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right)
}

inOrder(root)


// Task-10 : find the depth of the tree...

function findDepth(node){
    if(node == null){
        return 0;
    }

    let left = findDepth(node.left);
    let right = findDepth(node.right);
    return Math.max(left,right) + 1;
}

console.log(`Depth of the tree is ${findDepth(root)}`);