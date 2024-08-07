class Queue {
    constructor() {
        this.root
    }

    isEmpty() {
        return this.root == null
    }

    enqueue(data) {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            if (this.root.next == null) {
                this.root.next = newNode
            } else {
                this.browse(this.root.next, newNode)
            }
        }
    }

    browse(node, newNode) {
        if (node.next == null) {
            node.next = newNode
        } else {
            this.browse(node.next, newNode)
        }
    }

    dequeue() {
        if (this.root == null) {
            return
        } else {
            this.root = this.root.next
        }
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}