class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = this.first
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length += 1
    }

    dequeue() {
        if (this.length === 0) {
            return
        }
        if (this.length === 1) {
            this.last = null
        }
        this.first = this.first.next
        this.length -= 1
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
console.log(queue.peek())