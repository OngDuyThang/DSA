class MyNode {
    public next: MyNode | null
    constructor(
        public value: string | number
    ) {
        this.next = null
    }
}

class MyLinkedList {
    public head: MyNode
    public tail: MyNode
    public length: number
    constructor(
        value: string | number
    ) {
        this.head = new MyNode(value)
        this.tail = this.head
        this.length = 1
    }

    append(value: string | number) {
        const newNode = new MyNode(value)
        this.tail.next = newNode
        this.tail = newNode
    }
}

const list = new MyLinkedList(1)
list.append(2)
// list.append(3)
console.log(list)