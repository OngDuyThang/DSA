class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length += 1
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length += 1
    }

    print() {
        const arr = []
        let currentNode = this.tail
        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.prev
        }
        console.log(arr)
    }

    insert(index, value) {
        if (index > this.length - 1) {
            this.append(value)
            return
        }
        if (index <= 0) {
            this.prepend(value)
            return
        }
        const newNode = new Node(value)
        let currentNode = this.head.next
        let count = 1
        while (currentNode !== null) {
            if (count === index) {
                newNode.prev = currentNode.prev
                newNode.next = currentNode
                currentNode.prev.next = newNode
                currentNode.prev = newNode
                this.length += 1
                return
            }
            currentNode = currentNode.next
            count += 1
        }
    }

    delete(index) {
        if (index >= this.length - 1) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
            this.length -= 1
            return
        }
        if (index <= 0) {
            this.head.next.prev = null
            this.head = this.head.next
            this.length -= 1
            return
        }
        let currentNode = this.head.next
        let count = 1
        while (currentNode !== null) {
            if (count === index) {
                currentNode.prev.next = currentNode.next
                currentNode.next.prev = currentNode.prev
                this.length -= 1
                return
            }
            currentNode = currentNode.next
            count += 1
        }
    }
}

const linkedList = new LinkedList(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
// linkedList.prepend(9)
// linkedList.insert(1, 10)
// linkedList.delete(1)
linkedList.print()
console.log(linkedList)

// 9 1 2 3