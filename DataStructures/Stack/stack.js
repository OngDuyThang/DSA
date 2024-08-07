class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.bottom = newNode
            this.top = this.bottom
        } else {
            newNode.next = this.top
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
        }
        this.top = this.top.next
        this.length -= 1
    }
}

const stack = new Stack()
stack.push(1)
// stack.push(2)
// stack.push(3)
stack.pop()
// stack.push(3)
// stack.push(4)
console.log(stack)
