class Node {
    constructor(value) {
        this.value = value
        this.next = null,
            this.prev = null
    }
}

class StackWithQueue {
    constructor() {
        this.bottom = null
        this.top = null
        this.length = 0
    }

    peek() {
        return this.bottom
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.bottom = newNode
            this.top = this.bottom
        } else {
            newNode.next = this.top
            this.top.prev = newNode
            this.top = newNode
        }
        this.length += 1
    }

    pop() {
        if (this.length === 0) {
            return
        }
        if (this.length === 1) {
            this.bottom = null
            this.top = null
        } else {
            this.bottom.prev.next = null
            this.bottom = this.bottom.prev
        }
        this.length -= 1
    }
}

const queueUsingStack = new StackWithQueue()
queueUsingStack.push(1)
queueUsingStack.push(2)
queueUsingStack.push(3)
queueUsingStack.push(4)
queueUsingStack.pop()
console.log(queueUsingStack)