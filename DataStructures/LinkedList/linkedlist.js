class Node {
    constructor(value) {
        this.value = value
        this.next = null
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
        this.tail.next = newNode
        this.tail = newNode
        this.length += 1
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length += 1
    }

    print() {
        const arr = []
        let currentNode = this.head
        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(arr)
    }

    insert(index, value) {
        if (index >= this.length + 1) {
            this.append(value)
            return
        }
        if (index <= 0) {
            this.prepend(value)
            return
        }

        const newNode = new Node(value)
        let currentNode = this.head
        let count = 1
        while (currentNode !== null) {
            if (count === index) {
                newNode.next = currentNode.next
                currentNode.next = newNode
                return
            }
            currentNode = currentNode.next
            count += 1
        }
        this.length += 1
    }

    delete(index) {
        if (index <= 0) {
            this.head = this.head.next
            this.length -= 1
            return
        }

        let currentNode = this.head
        let count = 1
        while (currentNode !== null) {
            if (count === index) {
                if (index >= this.length - 1) {
                    currentNode.next = null
                    this.tail = currentNode
                } else {
                    currentNode.next = currentNode.next.next
                }
                this.length -= 1
            }
            currentNode = currentNode.next
            count += 1
        }
    }

    reverse() {
        this.tail = this.head
        let first = this.head
        let second = this.head.next
        while (second !== null) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first

        return this
    }
}

const linkedList = new LinkedList(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.insert(2, 10)
// linkedList.delete(3)
linkedList.reverse()
linkedList.print()

// 9 1 2 3