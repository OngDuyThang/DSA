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

function DFSInOrder(node, arr) {
    // TRAI
    if (node.left !== null) {
        DFSInorder(node.left, arr)
    }

    // GOC
    arr.push(node.value)

    // PHAI
    if (node.right !== null) {
        DFSInorder(node.right, arr)
    }

    return arr
}

// DFS Pre order (goc > trai > phai) = binary tree traverse
function traverse(node, arr) {
    // GOC
    arr.push(node.value)

    // TRAI
    if (node.left !== null) {
        traverse(node.left, arr)
    }

    // PHAI
    if (node.right !== null) {
        traverse(node.right, arr)
    }

    return arr
}

function DFSPostOrder(node, arr) {
    // TRAI
    if (node.left !== null) {
        DFSPreorder(node.left, arr)
    }

    // PHAI
    if (node.right !== null) {
        DFSPreorder(node.right, arr)
    }

    // GOC
    arr.push(node.value)

    return arr
}

const tree = new Tree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(DFSInOrder(tree.root, []))
// console.log(traverse(tree.root, []))
// console.log(DFSPostOrder(tree.root, []))