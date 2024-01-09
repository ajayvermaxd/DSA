class Node {
  constructor(value) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class treestructure {
  constructor(rootvalue) {
    this.root = new Node(rootvalue);
  }
  insert(currentNode, newValue) {
    if (currentNode === null) {
      currentNode = new Node(newValue);
    } else if (newValue < currentNode.val) {
      currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
    } else {
      currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
    }
    return currentNode;
  }
  insertBST(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
      return;
    }
    this.insert(this.root, newValue);
  }
  preOrderTraversal(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.leftChild);
      this.preOrderTraversal(currentNode.rightChild);
    }
  }
  inOrdertraversal(currentNode) {
    if (currentNode !== null) {
      this.preOrderTraversal(currentNode.leftChild);
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.rightChild);
    }
  }
}
var bst = new treestructure(50);
bst.insertBST(30);
bst.insertBST(35);
bst.insertBST(60);
bst.insertBST(70);
bst.insertBST(65);
bst.preOrderTraversal(bst.root);
console.log("###################################");
bst.inOrdertraversal(bst.root);
