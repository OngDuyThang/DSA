// let staticStack = new Array(100).fill(0)
// let index = -1

// function isEmpty() {
//     return index < 0
// }

// function push(data) {
//     if (index >= staticStack.length - 1) {
//         return
//     }
//     index += 1
//     staticStack[index] = data
// }

// function pop() {
//     if (index < 0) {
//         return
//     }
//     staticStack[index] = 0
//     index -= 1
// }

// function peek() {
//     if (index < 0) {
//         return
//     }
//     return staticStack[index]
// }

// push(1)
// push(2)
// push(3)
// push(4)
// console.log(peek())
// pop()
// console.log(peek())
// console.log(isEmpty())

// let root

// class stackNode {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// function isEmpty() {
//     return root === null
// }

// function push(data) {
//     let newNode = new stackNode(data)
//     if (root === null) {
//         root = newNode
//     } else {
//         const temp = root
//         root = newNode
//         newNode.next = temp
//     }
// }

// function pop() {
//     if (root === null) {
//         return
//     } else {
//         const popped = root
//         root = root.next
//         return popped
//     }
// }

// function peek() {
//     if (root === null) {
//         return
//     } else {
//         return root.data
//     }
// }

// console.log(isEmpty())

class Stack {
    constructor() {
        this.root
    }

    isEmpty() {
        return this.root == null
    }

    push(data) {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            const temp = this.root
            this.root = newNode
            newNode.next = temp
        }
    }

    pop() {
        if (this.isEmpty()) {
            return
        } else {
            const popped = this.root
            this.root = this.root.next
            return popped.data
        }
    }

    peek() {
        if (this.isEmpty()) {
            return
        } else {
            return this.root.data
        }
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log('peek', myStack.peek())
console.log('pop', myStack.pop())
console.log('peek', myStack.peek())