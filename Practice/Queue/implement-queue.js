var MyNode = function (data) {
    this.data = data
    this.next = null
}

var MyQueue = function () {
    this.length = 0
    this.head = null
    this.tail = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    const newNode = new MyNode(x)
    if (this.length === 0) {
        this.head = newNode
        this.tail = this.head
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length += 1
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.length === 0) { return }

    if (this.length === 1) {
        this.tail = null
    }
    const peek = this.peek()
    this.head = this.head.next
    this.length -= 1
    return peek
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.length === 0) { return }

    return this.head.data
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const myQueue = new MyQueue()
myQueue.push(1)
myQueue.push(2)

console.log(JSON.stringify(myQueue))
console.log(myQueue.peek())

console.log(JSON.stringify(myQueue.pop()))

console.log(myQueue.peek())

console.log(JSON.stringify(myQueue.pop()))

console.log(myQueue.empty())