class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(rootData) {
        this.root = new Node(rootData)
    }
    insertNode(data) {
        if (data < this.root.data) {
            if (this.root.left === null) {
                this.root.left = new Node(data)
            } else {
                this.browseTree(this.root.left, data)
            }
        } else {
            if (this.root.right === null) {
                this.root.right = new Node(data)
            } else {
                this.browseTree(this.root.right, data)
            }
        }
    }
    browseTree(node, data) {
        if (data < node.data) {
            if (node.left === null) {
                node.left = new Node(data)
            } else {
                this.browseTree(node.left, data)
            }
        } else {
            if (node.right === null) {
                node.right = new Node(data)
            } else {
                this.browseTree(node.right, data)
            }
        }
    }
}

const myTree = new Tree(5)
myTree.insertNode(2)
myTree.insertNode(7)
myTree.insertNode(4)
myTree.insertNode(10)
myTree.insertNode(9)
myTree.insertNode(8)

function BFS() {
    let queue = []
    queue.push(myTree.root)
    while (queue.length !== 0) {
        const dequeueNode = queue.shift()
        console.log(`${dequeueNode.data}\n`)
        if (dequeueNode.left !== null) {
            queue.push(dequeueNode.left)
        }
        if (dequeueNode.right !== null) {
            queue.push(dequeueNode.right)
        }
    }
}

BFS()