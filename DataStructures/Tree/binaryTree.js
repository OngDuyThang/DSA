class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (currentNode !== null) {
                if (newNode.value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode
                        return
                    } else {
                        currentNode = currentNode.left
                    }
                }
                if (newNode.value > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                        return
                    } else {
                        currentNode = currentNode.right
                    }
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            }
        }
        return null
    }

    delete() {

    }
}

function traverse(node) {
    const tree = new Tree()
    tree.root = node

    if (node.left === null) {
        tree.root.left = null
    } else {
        tree.root.left = traverse(node.left)
    }

    if (node.right === null) {
        tree.root.right = null
    } else {
        tree.root.right = traverse(node.right)
    }

    return tree
}

const tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))